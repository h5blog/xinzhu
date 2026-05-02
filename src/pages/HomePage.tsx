import Footer from "../components/Footer";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import { lazy, Suspense, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import bannerAvif from "../images/banner.opt.avif";
import bannerWebp from "../images/banner.opt.webp";
import bannerJpg from "../images/banner.opt.jpg";
import homeBannerLogo from "../images/home-banner-logo.svg";
import techBgPng from "../images/tech-bg.png";
import techBgWebp from "../images/tech-bg.lossless.webp";

const Team = lazy(() => import("../components/Team"));
const Partners = lazy(() => import("../components/Partners"));

const BAIDU_MAP_READY_MAX_MS = 15_000;
/** 与 v2.0 区分，避免缓存里仍是旧脚本 */
const BAIDU_MAP_SCRIPT_ID = "baidu-map-gl-script";
const BAIDU_MAP_AK = "u6QE6iILhnYxm0t5AMwfcJeaGQFyOeFw";
/** 全局回调名（百度用 callback= 调用；GL 版支持异步加载，无 document.write 问题） */
const BAIDU_MAP_CALLBACK = "__onBaiduMapGLReady";
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

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Baidu map script timeout")), BAIDU_MAP_READY_MAX_MS);
    });

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
      const fallbackPoint = new window.BMapGL.Point(116.23, 40.09);
      map.centerAndZoom(fallbackPoint, 17);
      map.enableScrollWheelZoom(true);
      // 在地图上标出公司位置，避免仅看底图无法判断具体建筑
      const BMapGLAny = window.BMapGL as unknown as {
        Marker: new (point: unknown) => unknown;
        Label: new (content: string, opts: { position: unknown; offset: unknown }) => unknown;
        Size: new (width: number, height: number) => unknown;
        InfoWindow: new (content: string, opts?: { width?: number; title?: string }) => unknown;
        Geocoder: new () => {
          getPoint: (address: string, callback: (point: unknown) => void, city?: string) => void;
        };
      };
      const mapAny = map as unknown as {
        addOverlay: (overlay: unknown) => void;
        openInfoWindow: (infoWindow: unknown, point: unknown) => void;
        centerAndZoom: (point: unknown, zoom: number) => void;
      };

      const renderCompanyMarker = (point: unknown) => {
        const marker = new BMapGLAny.Marker(point);
        mapAny.addOverlay(marker);
        const markerAny = marker as {
          setLabel: (label: unknown) => void;
          addEventListener: (eventName: string, handler: () => void) => void;
        };
        // const label = new BMapGLAny.Label("新烛时代（公司位置）", {
        //   position: point,
        //   offset: new BMapGLAny.Size(20, -10),
        // });
        // markerAny.setLabel(label);
        const infoWindow = new BMapGLAny.InfoWindow(COMPANY_ADDRESS, { title: "公司地址", width: 320 });
        markerAny.addEventListener("click", () => mapAny.openInfoWindow(infoWindow, point));
        mapAny.openInfoWindow(infoWindow, point);
      };

      const geocoder = new BMapGLAny.Geocoder();
      geocoder.getPoint(
        COMPANY_ADDRESS,
        (geocodedPoint) => {
          if (!geocodedPoint) {
            renderCompanyMarker(fallbackPoint);
            return;
          }
          mapAny.centerAndZoom(geocodedPoint, 18);
          renderCompanyMarker(geocodedPoint);
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
    };
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <main>
      <section>
      <div
        className="relative h-[max(296px,24.01vw)] w-full overflow-hidden"
        style={{ background: "linear-gradient(333deg, #F15A24 0%, #F7931E 100%)" }}
      >
        <picture className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <source srcSet={bannerAvif} type="image/avif" />
          <source srcSet={bannerWebp} type="image/webp" />
          <img
            src={bannerJpg}
            alt=""
            width={1213}
            height={461}
            className="block h-full w-auto max-w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
        <div className="relative overflow-hidden bg-[#F6F6F6] pt-[37px] lg:pt-[1.9271vw]">
            <picture className="pointer-events-none absolute inset-0 z-0 block h-full w-full">
              <source srcSet={techBgWebp} type="image/webp" />
              <img
                src={techBgPng}
                alt=""
                width={1920}
                height={630}
                className="h-full w-full object-cover"
                loading="eager"
                fetchPriority="high"
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
                  loading="eager"
                  fetchPriority="auto"
                  decoding="async"
                />
              </picture>
              <div className="relative z-10 box-border min-h-0 pl-[clamp(300px,48vw,546px)] pt-[67px] pr-0 lg:pl-[28.4375vw] lg:pt-[3.4896vw]">
                <div className="h-64 w-[589px] max-w-full justify-start text-left text-[16px] leading-[1.7] tracking-[0.03em] font-['PingFang_SC'] text-black sm:text-[18px] md:text-[19px] lg:h-[13.3333vw] lg:w-[30.6771vw] lg:max-w-none lg:text-[1.0417vw]">
                  强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统——终极能源的智慧大脑。
                </div>
              </div>
            </div>
              <div className="relative z-10 mx-auto mb-[110px] w-[min(100%-24px,1135px)] text-center lg:mb-[5.7292vw] lg:w-[59.1146vw] lg:max-w-none">
                <Link
                  to="/tech"
                  className="inline-flex min-w-[max(122px,6.35vw)] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[19.5px] bg-[#F96D01] px-5 py-2.5 text-center text-[17px] font-medium font-['PingFang_SC'] text-white tracking-[0.16em] sm:text-[18px] lg:text-[1.0417vw]"
                >
                  查看详情
                </Link>
              </div>
        </div>
      </section>
        <Suspense fallback={<div className="h-[600px] w-full bg-white" />}>
          <Team />
        </Suspense>
        <Suspense fallback={<div className="h-[900px] w-full bg-white" />}>
          <Partners />
        </Suspense>
        {/* 百度地图容器需明确高度，否则地图无法渲染 */}
        <div id="allmap" ref={mapRef} className="h-[clamp(240px,19.32vw,420px)] w-full" />
      </main>
      <Footer />
    </div>
  );
}

