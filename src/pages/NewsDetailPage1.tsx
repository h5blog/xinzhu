import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import heroBg from "../images/news-detail-hero-bg.png";
import mainImg from "../images/news-detail-1-main.png";

export default function NewsDetailPage1() {
  const rows = [
    {
      year: "2025・美国",
      text: "美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，并与“里程碑计划”8 家企业达成协议撬动了超过 3.5 亿美元的私营投资，支持进一步创建聚变创新生态系统。",
    },
    {
      year: "2025・英国",
      text: "英国政府宣布为 2025—2026 年“聚变未来计划”投资 4.1 亿英镑，计划 2027 年前向聚变能源领域投资总额达 6.5 亿英镑。",
    },
    {
      year: "2025・欧盟",
      text: "欧盟宣布启动两项新的欧洲原子能共同体（Euratom）项目——Go4Fusion 与 kills4Nuclear，旨在加速聚变能源商业化进程并解决技术领域的人才短缺问题，两项计划为期三年。",
    },
    { year: "2025・日本", text: "日本政府启动了聚变能源创新战略。" },
    { year: "2024・韩国", text: "韩国成立了核聚变创新联盟，旨在加速聚变产业的发展，推动聚变战略目标的实现。" },
    {
      year: "2023・德国",
      text: "德国计划未来五年通过“聚变 2040 计划”增加投入 3.7 亿欧元（到 2028 年投入总额达 10 亿欧元），同步推进磁约束和激光约束聚变技术路线开发。",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <section className="relative h-[217px] w-full overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]" />
      </section>
      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-8 lg:pb-24">
        <h1 className="text-[32px] font-medium leading-[30px] text-black">全球各国核聚变战略部署</h1>
        <div className="mt-5 h-[2px] w-full bg-[#f96d01]" />
        <div className="mx-auto mt-[46px] h-[259px] w-full max-w-[1103px] overflow-hidden">
          <img src={mainImg} alt="" className="h-full w-full object-cover" />
        </div>

        <section className="mx-auto mt-[56px] w-full max-w-[1103px]">
          <div className="relative">
            <div className="absolute left-[170px] -top-[12px] h-[calc(100%-36px)] w-px border-l border-dashed border-[#f09652]" aria-hidden />
            <div className="space-y-0">
              {rows.map((row) => (
                <div key={row.year} className="grid min-h-[101px] grid-cols-[130px_40px_1fr] items-start gap-x-5">
                  <p className="m-0 h-[30px] whitespace-nowrap text-[24px] font-semibold leading-[30px] text-[#f96d01]">{row.year}</p>
                  <span className="relative mt-[4px] flex h-[20px] w-[40px] items-center justify-center">
                    <span className="absolute left-1/2 top-1/2 h-[20px] w-[20px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f96d01]/25" />
                    <span className="absolute left-1/2 top-1/2 block h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f96d01]" />
                  </span>
                  <p className="m-0 text-[20px] leading-[30px] text-black">{row.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <p className="mt-[102px] text-center text-[20px] text-black">数据来源：各国能源部门网站、机构研报</p>
        <div className="mt-[38px] flex justify-end">
          <Link to="/news" className="text-[20px] text-black hover:text-[#f96d01]">返回全部新闻</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
