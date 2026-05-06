import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsDetailContentImage from "../components/NewsDetailContentImage";
import NewsDetailHero from "../components/NewsDetailHero";
import mainAvif from "../images/news-detail-3-main.opt.avif";
import mainWebp from "../images/news-detail-3-main.opt.webp";
import mainJpg from "../images/news-detail-3-main.opt.jpg";

export default function NewsDetailPage3() {
  const items = [
    ["01", "国家战略", "国家发展改革委、国家能源局《关于推进“人工智能 +”能源高质量发展的实施意见》"],
    ["02", "目标导向明确", "《实施意见》指出，要加快“人工智能 + 核电”应用场景赋能。"],
    ["03", "典型应用", "明确提到，可控核聚变智能控制成为“人工智能 + 核电”典型应用场景之一。"],
    ["04", "明确场景 1", "开展核工业特种运维机器人技术攻关，持续推动核电系统的自动启停等技术升级演进。"],
    ["05", "明确场景 2", "探索人工智能技术助力离子体预测控制、可控核聚变等技术路径，推动核电行业向数据驱动、模型牵引、智能管控的新模式稳步转型。"],
  ];

  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <NewsDetailHero />
      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-8 lg:w-[58.6979vw] lg:max-w-none lg:pb-24 lg:pt-[2.9167vw]">
        <h1 className="m-0 text-[32px] font-semibold leading-[50px] text-black lg:text-[1.6667vw] lg:leading-[1.35]">
          8月27日：《关于推进“人工智能 +”能源高质量发展的实施意见》
        </h1>
        <div className="mt-6 h-[2px] w-full bg-[#f96d01] lg:mt-[1.25vw] lg:h-[max(3px,0.2083vw)]" />
        <div className="mt-8 h-[259px] w-full overflow-hidden lg:mt-[1.875vw] lg:h-[13.4896vw]">
          <NewsDetailContentImage
            avif={mainAvif}
            webp={mainWebp}
            jpg={mainJpg}
            width={1103}
            height={259}
            imgClassName="h-full w-full object-cover"
          />
        </div>
        <section className="mt-8 space-y-4 lg:mt-[2.0833vw] lg:space-y-[0.8333vw]">
          {items.map((item) => (
            <div key={item[0]} className="grid grid-cols-[57px_1fr] items-start gap-3 lg:grid-cols-[2.9688vw_1fr] lg:gap-[0.625vw]">
              <div className="flex h-[57px] w-[57px] items-center justify-center bg-[#f96d01] text-[28px] font-semibold leading-[30px] text-white lg:h-[2.9688vw] lg:w-[2.9688vw] lg:text-[1.4583vw] lg:leading-[1.5625vw]">{item[0]}</div>
              <div className="pt-1 lg:pt-[0.2083vw]">
                <p className="m-0 text-[20px] font-semibold leading-[30px] text-black lg:text-[1.0417vw] lg:leading-[1.5625vw]">{item[1]}</p>
                <p className="m-0 text-[20px] leading-[30px] text-black lg:text-[1.0417vw] lg:leading-[1.5625vw]">{item[2]}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="mt-12 flex justify-end lg:mt-[2.5vw]">
          <Link to="/news" className="text-[20px] text-black hover:text-[#f96d01] lg:text-[1.0417vw]">返回全部新闻</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
