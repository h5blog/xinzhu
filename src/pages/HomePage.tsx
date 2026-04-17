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
      const point = new window.BMap.Point(116.31, 39.98);
      map.centerAndZoom(point, 15);
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
            新烛时代
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

