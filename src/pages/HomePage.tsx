import Footer from "../components/Footer";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import Partners from "../components/Partners";
import Team from "../components/Team";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const BAIDU_MAP_READY_MAX_MS = 15_000;

export default function HomePage() {
  useEffect(() => {
    let cancelled = false;
    let pollId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    function tryInit() {
      const BMapApi = window.BMap;
      const el = document.getElementById("allmap");
      if (cancelled || !BMapApi || !el) return false;
      try {
        const map = new BMapApi.Map("allmap");
        const point = new BMapApi.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom();
      } catch {
        return false;
      }
      return true;
    }

    if (tryInit()) return;

    pollId = setInterval(() => {
      if (tryInit() && pollId) {
        clearInterval(pollId);
        pollId = undefined;
        if (timeoutId) {
          clearTimeout(timeoutId);
          timeoutId = undefined;
        }
      }
    }, 100);

    timeoutId = setTimeout(() => {
      if (pollId) clearInterval(pollId);
      pollId = undefined;
    }, BAIDU_MAP_READY_MAX_MS);

    return () => {
      cancelled = true;
      if (pollId) clearInterval(pollId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <main>
      <section>
        <img 
          src={assets.hero}
          style={{
            width: "100%"
          }}
        />
        <div className="overflow-hidden"
        style={{
          paddingTop:37,
          backgroundImage: `url(${assets.techBg})`,
          backgroundSize: "cover",
        }}>
            <div className="text-center justify-start text-orange-500 text-4xl font-medium font-['PingFang_SC']">AI解决方案核心技术驱动力</div>
            <div className="overflow-hidden"
              style={{
                backgroundImage: `url(${assets.heroIcon})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "488px auto",
                backgroundPosition: "left center",
                height:303,
                width:1135,
                padding:"67px 0 0 546px",
                margin:"0 auto"
              }}>
                  <div className="w-[589px] h-64 justify-start text-black text-2xl font-normal font-['PingFang_SC'] leading-10">强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 + 数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力，最终形成聚变电站的智能操作系统——终极能源的智慧大脑。</div>
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

