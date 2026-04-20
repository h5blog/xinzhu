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
        style={{
          width: "100%",
          height: "461px",
          background: "linear-gradient(333deg, #F15A24 0%, #F7931E 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <picture>
          <source srcSet={bannerAvif} type="image/avif" />
          <source srcSet={bannerWebp} type="image/webp" />
          <img
            src={bannerJpg}
            alt=""
            style={{ height: "461px", display: "block", margin: "0 auto" }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <span
          style={{
            position: "absolute",
            left: "23%",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
            fontSize: "180px",
            lineHeight: 1,
            fontWeight: 700,
            letterSpacing: "6px",
            userSelect: "none",
          }}
        >
          AI
        </span>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#ffffff",
            textAlign: "left",
            userSelect: "none",
          }}
        >
          <div
            style={{
              fontSize: "50px",
              lineHeight: 1.1,
              fontWeight: 450,
              marginTop: "10px",
              marginLeft: "50px",
              whiteSpace: "nowrap",
            }}
          >
            <img src={homeBannerLogo} alt="" width={220} height={53} className="block" decoding="async" />

          </div>
          <div
            style={{
              marginTop: "10px",
              whiteSpace: "nowrap"
            }}
          >
            <span
            style={{
              fontSize: "30px",
              marginBottom: "10px",
              marginLeft: "50px",
            }}
          >
            —
          </span> <span style={{fontSize: "30px",}}>用AI打造终极能源的智慧大脑</span>
          </div>
        </div>
      </div>
        <div className="relative overflow-hidden" style={{ paddingTop: 37, backgroundColor: "#F6F6F6" }}>
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
            <div className="relative z-10 text-center justify-start text-orange-500 text-4xl font-medium font-['PingFang_SC']">AI解决方案核心技术驱动力</div>
            <div
              className="relative mx-auto box-border h-[303px] w-full max-w-[1135px] overflow-hidden"
            >
              <picture className="pointer-events-none absolute left-0 top-1/2 z-0 block -translate-y-1/2">
                <source srcSet={assets.heroIconAvif} type="image/avif" />
                <source srcSet={assets.heroIconWebp} type="image/webp" />
                <img
                  src={assets.heroIcon}
                  alt=""
                  width={488}
                  height={303}
                  className="block h-auto w-[488px] max-w-[min(488px,50vw)] object-contain object-left"
                  loading="eager"
                  fetchPriority="auto"
                  decoding="async"
                />
              </picture>
              <div className="relative z-10 box-border min-h-0 pl-[546px] pt-[67px] pr-0">
                <div className="h-64 w-[589px] max-w-full justify-start text-left text-2xl font-normal font-['PingFang_SC'] leading-10 text-black">
                  强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统——终极能源的智慧大脑。
                </div>
              </div>
            </div>
              <div style={{width: 1135,margin:"0 auto 110px"}} className="relative z-10 text-center">
                <Link
                  to="/tech"
                  style={{ width: 122, lineHeight: "40px", marginLeft: 545, background: "#F96D01", borderRadius: 19.5 }}
                  className="inline-block w-24 cursor-pointer justify-start text-center text-white text-xl font-normal font-['PingFang_SC'] leading-7 tracking-[4.60px]"
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
        <div id="allmap" ref={mapRef} className="h-[371px] w-full" />
      </main>
      <Footer />
    </div>
  );
}

