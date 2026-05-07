import Footer from "../components/Footer";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import { lazy, Suspense, useEffect, useRef } from "react";
import Team from "../components/Team";
import { Link } from "react-router-dom";
import bannerAvif from "../images/banner.opt.avif";
import bannerWebp from "../images/banner.opt.webp";
import bannerFallbackPng from "../images/banner.opt.png";
import techBgAvif from "../images/tech-bg.opt.avif";
import techBgWebp from "../images/tech-bg.opt.webp";
import techBgJpg from "../images/tech-bg.opt.jpg";

const Partners = lazy(() => import("../components/Partners"));

const BAIDU_MAP_READY_MAX_MS = 15_000;
/** 与 v2.0 区分，避免缓存里仍是旧脚本 */
const BAIDU_MAP_SCRIPT_ID = "baidu-map-gl-script";
const BAIDU_MAP_AK = "u6QE6iILhnYxm0t5AMwfcJeaGQFyOeFw";
/** 全局回调名（百度用 callback= 调用；GL 版支持异步加载，无 document.write 问题） */
const BAIDU_MAP_CALLBACK = "__onBaiduMapGLReady";
/** 仅用于地理编码定位中心与图钉，不在地图上展示文字 */
const COMPANY_ADDRESS = "北京市海淀区海淀大悦信息科技园D2号楼4楼C-403室";

let baiduMapApiPromise: Promise<void> | null = null;

function waitForBMapGL(): Promise<void> {
  if (window.BMapGL) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const t0 = performance.now();
    const id = window.setInterval(() => {
      if (window.BMapGL) {
        window.clearInterval(id);
        resolve();
      } else if (performance.now() - t0 > BAIDU_MAP_READY_MAX_MS) {
        window.clearInterval(id);
        reject(new Error("Baidu map GL timeout"));
      }
    }, 50);
  });
}

function ensureBaiduMapApi(): Promise<void> {
  if (window.BMapGL) return Promise.resolve();
  if (baiduMapApiPromise) return baiduMapApiPromise;

  const existing = document.getElementById(BAIDU_MAP_SCRIPT_ID);
  if (existing) {
    baiduMapApiPromise = waitForBMapGL().finally(() => {
      baiduMapApiPromise = null;
    });
    return baiduMapApiPromise;
  }

  baiduMapApiPromise = new Promise((resolve, reject) => {
    const win = window as unknown as Record<string, (() => void) | undefined>;
    win[BAIDU_MAP_CALLBACK] = () => {
      baiduMapApiPromise = null;
      try {
        delete win[BAIDU_MAP_CALLBACK];
      } catch {
        win[BAIDU_MAP_CALLBACK] = undefined;
      }
      resolve();
    };

    const script = document.createElement("script");
    script.id = BAIDU_MAP_SCRIPT_ID;
    script.type = "text/javascript";
    script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${BAIDU_MAP_AK}&callback=${BAIDU_MAP_CALLBACK}`;
    script.onerror = () => {
      baiduMapApiPromise = null;
      try {
        delete win[BAIDU_MAP_CALLBACK];
      } catch {
        win[BAIDU_MAP_CALLBACK] = undefined;
      }
      reject(new Error("Baidu map script failed"));
    };
    document.body.appendChild(script);
  });

  return baiduMapApiPromise;
}

export default function HomePage() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapReadyRef = useRef(false);

  useEffect(() => {
    let cancelled = false;
    let observer: IntersectionObserver | null = null;
    let warmupTimer = 0;
    let mapResizeObserver: ResizeObserver | null = null;
    let onWindowResize: (() => void) | null = null;

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Baidu map script timeout")), BAIDU_MAP_READY_MAX_MS);
    });

    /** WebGL 图区在容器尺寸未稳定或信息窗打开后可能未铺满，左侧会露出灰底；强制重算尺寸 */
    const scheduleMapResize = (map: unknown) => {
      if (cancelled) return;
      const api = map as { checkResize?: () => void; resize?: () => void };
      try {
        api.checkResize?.();
        api.resize?.();
      } catch {
        /* ignore */
      }
    };

    const bindMapResize = (map: unknown, el: HTMLElement) => {
      scheduleMapResize(map);
      requestAnimationFrame(() => scheduleMapResize(map));
      window.setTimeout(() => scheduleMapResize(map), 50);
      window.setTimeout(() => scheduleMapResize(map), 250);
      window.setTimeout(() => scheduleMapResize(map), 600);

      mapResizeObserver?.disconnect();
      mapResizeObserver = new ResizeObserver(() => scheduleMapResize(map));
      mapResizeObserver.observe(el);

      if (onWindowResize) window.removeEventListener("resize", onWindowResize);
      onWindowResize = () => scheduleMapResize(map);
      window.addEventListener("resize", onWindowResize, { passive: true });
    };

    const loadAndInit = async () => {
      if (mapReadyRef.current) return;
      try {
        await Promise.race([ensureBaiduMapApi(), timeoutPromise]);
      } catch {
        return;
      }
      if (cancelled || !window.BMapGL) return;

      const el = mapRef.current;
      if (!el) return;

      const map = new window.BMapGL.Map("allmap");
      bindMapResize(map, el);

      const fallbackPoint = new window.BMapGL.Point(116.23, 40.09);
      map.centerAndZoom(fallbackPoint, 17);
      map.enableScrollWheelZoom(true);
      scheduleMapResize(map);
      // 在地图上标出公司位置，避免仅看底图无法判断具体建筑
      const BMapGLAny = window.BMapGL as unknown as {
        Label: new (content: string, opts: { position: unknown; offset: unknown }) => unknown;
        Size: new (width: number, height: number) => unknown;
        Geocoder: new () => {
          getPoint: (address: string, callback: (point: unknown) => void, city?: string) => void;
        };
      };
      const mapAny = map as unknown as {
        addOverlay: (overlay: unknown) => void;
        centerAndZoom: (point: unknown, zoom: number) => void;
      };

      const transparentLabelStyle = {
        border: "none",
        padding: "0",
        margin: "0",
        backgroundColor: "transparent",
        backgroundImage: "none",
        boxShadow: "none",
      } as const;

      const renderLocationPin = (point: unknown) => {
        /** GL 默认 Marker 在画布下层；用 Label + SVG 图钉（DOM）才能盖在底图之上、稳定可见。 */
        const pinHtml =
          '<div class="home-bmap-pin-wrap" aria-hidden="true">' +
          '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="34" viewBox="0 0 26 34" focusable="false" class="home-bmap-pin-svg">' +
          '<path fill="#D8574E" d="M13 34c-.5 0-1-.2-1.3-.6C9.6 29.6 0 15.9 0 12.5 0 5.6 5.8 0 13 0s13 5.6 13 12.5c0 3.4-9.6 17.1-11.7 20.9-.3.4-.8.6-1.3.6z"/>' +
          '<circle cx="13" cy="11.5" r="4.5" fill="#fff"/>' +
          "</svg></div>";
        const pinLabel = new BMapGLAny.Label(pinHtml, {
          position: point,
          /** 26×34 图钉：尖端对准经纬度（左上角相对锚点） */
          offset: new BMapGLAny.Size(-13, -34),
        });
        const pinLabelAny = pinLabel as { setStyle: (style: Record<string, string>) => void };
        mapAny.addOverlay(pinLabel);
        pinLabelAny.setStyle({ ...transparentLabelStyle });
        scheduleMapResize(map);
        window.setTimeout(() => scheduleMapResize(map), 80);
        window.setTimeout(() => scheduleMapResize(map), 300);
      };

      const geocoder = new BMapGLAny.Geocoder();
      geocoder.getPoint(
        COMPANY_ADDRESS,
        (geocodedPoint) => {
          if (!geocodedPoint) {
            renderLocationPin(fallbackPoint);
            return;
          }
          mapAny.centerAndZoom(geocodedPoint, 18);
          renderLocationPin(geocodedPoint);
        },
        "北京市",
      );
      mapReadyRef.current = true;
    };

    const target = mapRef.current;
    if (!target) return;

    // 提前在后台预热地图脚本，滚到地图区域时能更快初始化
    warmupTimer = window.setTimeout(() => {
      void ensureBaiduMapApi().catch(() => {
        // 忽略预热失败，进入视口时会再次尝试加载
      });
    }, 1200);

    observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          void loadAndInit();
          observer?.disconnect();
        }
      },
      { rootMargin: "1000px 0px" },
    );
    observer.observe(target);

    return () => {
      cancelled = true;
      window.clearTimeout(warmupTimer);
      observer?.disconnect();
      mapResizeObserver?.disconnect();
      if (onWindowResize) window.removeEventListener("resize", onWindowResize);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <main>
      <section className="relative aspect-[1920/461] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={bannerAvif} type="image/avif" />
          <source srcSet={bannerWebp} type="image/webp" />
          <img
            src={bannerFallbackPng}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={461}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>
      <section>
        <div className="relative overflow-hidden bg-[#F6F6F6] pt-[37px] lg:pt-[1.9271vw]">
            <picture className="pointer-events-none absolute inset-0 z-0 block h-full w-full">
              <source srcSet={techBgAvif} type="image/avif" />
              <source srcSet={techBgWebp} type="image/webp" />
              <img
                src={techBgJpg}
                alt=""
                width={1920}
                height={630}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="low"
                decoding="async"
              />
            </picture>
            <h2 className="relative z-10 text-center font-['PingFang_SC'] text-[30px] font-semibold leading-tight text-[#f96d01] md:text-[36px] lg:text-[2.0833vw]">
              AI解决方案核心技术驱动力
            </h2>
            <div className="relative mx-auto box-border h-[303px] w-[min(100%-24px,1135px)] overflow-hidden lg:h-[15.7813vw] lg:w-[59.1146vw] lg:max-w-none">
              <picture className="pointer-events-none absolute left-0 top-1/2 z-0 block -translate-y-1/2">
                <source srcSet={assets.heroIconAvif} type="image/avif" />
                <source srcSet={assets.heroIconWebp} type="image/webp" />
                <img
                  src={assets.heroIcon}
                  alt=""
                  width={488}
                  height={303}
                  className="block h-auto w-[488px] max-w-[min(488px,50vw)] object-contain object-left lg:w-[25.4167vw] lg:max-w-none"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </picture>
              <div className="relative z-10 box-border min-h-0 pl-[clamp(300px,48vw,546px)] pt-[67px] pr-0 lg:pl-[28.4375vw] lg:pt-[3.4896vw]">
                <div className="h-64 w-[589px] max-w-full justify-start text-left indent-[2em] text-[16px] leading-[1.7] tracking-[0.03em] font-['PingFang_SC'] text-black sm:text-[18px] md:text-[19px] lg:h-[13.3333vw] lg:w-[30.6771vw] lg:max-w-none lg:text-[1.0417vw]">
                  强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统——终极能源的智慧大脑。
                </div>
              </div>
            </div>
              <div className="relative z-10 mx-auto mb-[110px] w-[min(100%-24px,1135px)] pl-[clamp(300px,48vw,546px)] text-left lg:mb-[5.7292vw] lg:w-[59.1146vw] lg:max-w-none lg:pl-[28.4375vw]">
                <Link
                  to="/tech"
                  data-node-id="838:1351"
                  className="inline-flex min-w-[6.78em] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[1.0833em] bg-[#F96D01] px-[1.1111em] py-[0.6111em] text-center font-['PingFang_SC'] text-[17px] font-medium leading-none text-white tracking-[0.16em] transition-opacity hover:opacity-95 sm:text-[18px] lg:text-[1.0417vw]"
                >
                  查看详情
                </Link>
              </div>
        </div>
      </section>
        <Team />
        <Suspense fallback={<div className="h-[900px] w-full bg-white" />}>
          <Partners />
        </Suspense>
        {/** 百度地图：容器需明确高度；overflow-hidden 避免 WebGL 未铺满时露出侧向灰条 */}
        <div className="relative w-full overflow-hidden">
          <div id="allmap" ref={mapRef} className="h-[clamp(240px,19.32vw,420px)] w-full" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

