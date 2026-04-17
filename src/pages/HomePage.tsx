import Footer from "../components/Footer";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Team from "../components/Team";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BAIDU_MAP_READY_MAX_MS = 15_000;
const BAIDU_MAP_SCRIPT_ID = "baidu-map-api-script";
const BAIDU_MAP_API_URL =
  "https://api.map.baidu.com/api?v=2.0&ak=u6QE6iILhnYxm0t5AMwfcJeaGQFyOeFw&autoDecode=true";

function ensureBaiduMapApi(): Promise<void> {
  if (window.BMap) return Promise.resolve();

  const existing = document.getElementById(BAIDU_MAP_SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Baidu map script failed")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.id = BAIDU_MAP_SCRIPT_ID;
    script.src = BAIDU_MAP_API_URL;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Baidu map script failed"));
    document.body.appendChild(script);
  });
}

export default function HomePage() {
  useEffect(() => {
    let cancelled = false;

    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error("Baidu map script timeout")), BAIDU_MAP_READY_MAX_MS);
    });

    const loadAndInit = async () => {
      try {
        await Promise.race([ensureBaiduMapApi(), timeoutPromise]);
      } catch {
        return;
      }
      if (cancelled || !window.BMap) return;

      const el = document.getElementById("allmap");
      if (!el) return;

      const map = new window.BMap.Map("allmap");
      const point = new window.BMap.Point(116.23,40.09);
      map.centerAndZoom(point, 17);
      map.enableScrollWheelZoom();
    };

    void loadAndInit();

    return () => {
      cancelled = true;
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
        <img
          src={assets.Banner}
          alt=""
          style={{ height: "461px", display: "block", margin: "0 auto" }}
          loading="eager"
          decoding="async"
        />
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
            <svg width="220" height="53" viewBox="0 0 158 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.4241 2.34267H13.393L12.894 0.00244141H6.91927L7.42097 2.34267H0.904297V6.83297H19.4241V2.34267Z" fill="white"/>
            <path d="M19.0592 23.5556V19.0627H12.953V16.5666H19.9258V12.0737H16.7064L17.7151 8.15918H12.5533L11.5445 12.0737H8.68192L7.67317 8.15918H2.51403L3.52278 12.0737H0.187988V16.5666H7.22513V19.0627H0.719195V23.5556H7.22513V32.9033H6.60271L4.5369 37.3302H7.22513H8.66851H12.2072C12.615 37.3302 12.9504 36.9631 12.9504 36.5167V23.553H19.0592V23.5556Z" fill="white"/>
            <path d="M26.8743 6.29151L36.5889 5.07121V0.324707L26.8662 1.54765V1.55293L21.0337 2.05214L20.8969 26.2654C20.8942 26.6167 20.8673 26.968 20.8137 27.314L19.5903 35.2882L17.8196 25.2934H13.46L15.236 35.3173H19.5849L19.2764 37.3353H25.0016L26.5791 27.3193C26.6328 26.9759 26.6623 26.6273 26.665 26.2786L26.775 15.8849H28.9347V37.3353H34.4212V15.8849H36.6748V11.392H26.8206L26.8743 6.29151Z" fill="white"/>
            <path d="M1.77605 25.2909L0 35.3148H4.35697L6.13302 25.2909H1.77605Z" fill="white"/>
            <path d="M132.788 0.00244141H126.229L120.506 16.7486H124.544V37.1345H130.527V9.80713H129.438L132.788 0.00244141Z" fill="white"/>
            <path d="M71.1071 27.3089L71.6973 30.6423L68.8079 30.9302V24.7785H76.1723V21.8255V19.892V9.80469V5.10573V4.91819H68.8079V0H63.2302V4.91819H55.8631V5.10573V9.80469V19.892V21.8255V24.7785H63.2302V31.4875L55.6646 32.2456V37.1321L72.5478 35.4416L72.8832 37.3276H77.2401L75.4641 27.3036H71.1071V27.3089ZM71.2439 9.80733V19.8946H68.8079V9.80733H71.2439ZM60.7915 19.8946V9.80733H63.2302V19.8946H60.7915Z" fill="white"/>
            <path d="M103.824 14.0812H98.1016L100.436 27.3091H106.156L103.824 14.0812Z" fill="white"/>
            <path d="M155.12 7.36425L153.39 1.10425H147.667L149.401 7.36425H155.12Z" fill="white"/>
            <path d="M50.0891 20.0503V0.00244141H44.8093V21.334C44.8066 21.6853 39.8862 37.4039 39.8862 37.4039H45.2305C45.2305 37.4039 46.6524 32.7684 47.8758 28.7139L50.3387 37.4039H55.0363L50.0891 20.0503Z" fill="white"/>
            <path d="M44.3772 18.7113L43.7172 4.68835H40.1973L40.8599 18.7113H44.3772Z" fill="white"/>
            <path d="M50.4888 18.7113H54.006L54.8699 4.68835H51.3527L50.4888 18.7113Z" fill="white"/>
            <path d="M80.918 7.16592V16.1756V20.9934V30.4362V35.254H86.5037H90.6111H96.1969V30.4362V20.9934V16.1756V7.16592V5.52565V2.34546H80.9207V7.16592H80.918ZM90.6085 30.4362H86.501V20.9934H90.6085V30.4362ZM90.6085 16.1756H86.501V7.16592H90.6085V16.1756Z" fill="white"/>
            <path d="M114.419 0.00244141H108.296V4.92063H97.2456V10.1611H108.296V30.8745C108.296 31.3922 107.961 31.8096 107.55 31.8096H104.629L102.563 37.1345H108.296H109.109H113.673C114.086 37.1345 114.419 36.7146 114.419 36.1995V10.1637H117.257V4.92328H114.419V0.00244141Z" fill="white"/>
            <path d="M149.827 30.8537C148.116 27.7132 146.919 20.9857 146.122 14.6121L156.272 14.1921V8.80111L145.529 9.2475C145.02 4.02819 144.802 0.00805664 144.802 0.00805664H138.299C138.49 3.46823 138.736 6.62992 139.018 9.51956L131.927 9.81275V15.2037L139.624 14.8841C141.323 28.083 143.769 34.2347 144.759 36.3002C145.006 36.8179 145.497 37.1375 146.028 37.1375H155.555L157.347 31.6277H151.064C150.557 31.6224 150.088 31.3292 149.827 30.8537Z" fill="white"/>
            </svg>

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
        <div className="overflow-hidden"
        style={{
          paddingTop:37,
          backgroundImage: `url(${assets.techBg})`,
          backgroundSize: "cover",
        }}>
            <div className="text-center justify-start text-orange-500 text-4xl font-medium font-['PingFang_SC']">AI解决方案核心技术驱动力</div>
            <div
              className="relative mx-auto box-border h-[303px] w-full max-w-[1135px] overflow-hidden"
            >
              <picture className="pointer-events-none absolute left-0 top-1/2 z-0 block -translate-y-1/2">
                <source srcSet={assets.heroIconWebp} type="image/webp" />
                <img
                  src={assets.heroIcon}
                  alt=""
                  width={488}
                  height={303}
                  className="block h-auto w-[488px] max-w-[min(488px,50vw)] object-contain object-left"
                  loading="eager"
                  decoding="async"
                />
              </picture>
              <div className="relative z-10 box-border min-h-0 pl-[546px] pt-[67px] pr-0">
                <div className="h-64 w-[589px] max-w-full justify-start text-left text-2xl font-normal font-['PingFang_SC'] leading-10 text-black">
                  强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统——终极能源的智慧大脑。
                </div>
              </div>
            </div>
              <div style={{width: 1135,margin:"0 auto 110px"}} className="text-center">
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
        <Team />
        <Partners />
        {/* 百度地图容器需明确高度，否则地图无法渲染 */}
        <div id="allmap" className="h-[371px] w-full" />
      </main>
      <Footer />
    </div>
  );
}

