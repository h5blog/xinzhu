import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroBgAvif from "../images/news-detail-hero-bg.opt.avif";
import heroBgWebp from "../images/news-detail-hero-bg.opt.webp";
import heroBgJpg from "../images/news-detail-hero-bg.opt.jpg";
import mainImg from "../images/news-detail-3-main.png";

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
      <section className="relative h-[217px] w-full overflow-hidden">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={heroBgAvif} type="image/avif" />
          <source srcSet={heroBgWebp} type="image/webp" />
          <img src={heroBgJpg} alt="" className="h-full w-full object-cover" loading="eager" decoding="async" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]" />
      </section>
      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-6 lg:pb-24">
        <h1 className="text-[32px] font-semibold leading-[50px] text-black">8月27日：《关于推进“人工智能 +”能源高质量发展的实施意见》</h1>
        <div className="mt-4 h-[2px] w-full bg-[#f96d01]" />
        <div className="mt-6 h-[259px] w-full overflow-hidden">
          <img src={mainImg} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
        </div>
        <section className="mt-8 space-y-4">
          {items.map((item) => (
            <div key={item[0]} className="grid grid-cols-[57px_1fr] items-start gap-3">
              <div className="flex h-[57px] w-[57px] items-center justify-center bg-[#f96d01] text-[28px] font-semibold leading-[30px] text-white">{item[0]}</div>
              <div className="pt-1">
                <p className="m-0 text-[20px] font-semibold leading-[30px] text-black">{item[1]}</p>
                <p className="m-0 text-[20px] leading-[30px] text-black">{item[2]}</p>
              </div>
            </div>
          ))}
        </section>
        <div className="mt-12 flex justify-end">
          <Link to="/news" className="text-[20px] text-black hover:text-[#f96d01]">返回全部新闻</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
