import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsDetailHero from "../components/NewsDetailHero";

const rows = [
  ["2022", "《加快电力装备绿色低碳创新发展行动计划的通知》", "加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆、铅铋快堆等四代核电堆型的研发和应用。加快可控核聚变等前沿颠覆性技术研究。", "工业和信息化部、财政部、商务部、国务院国有资产监督管理委员会、国家市场监督管理总局五部门"],
  ["2022", "《“十四五”现代能源体系规划》", "支持受控核聚变的前期研发，积极开展国际合作。", "国家发改委与国家能源局"],
  ["2022", "《科技支撑碳达峰碳中和实施方案（2022-2030年）》", "新型核能发电技术。研究四代堆、核聚变反应堆等新型核能发电技术。", "科技部等九个部门"],
  ["2023", "国资委实施未来产业启航行动", "明确可控核聚变领域为未来能源的唯一方向。", "国资委"],
  ["2024", "《关于推动未来产业创新发展的实施意见》", "聚焦核能、核聚变等重点领域，打造“采集-存储-运输-应用”全链条的未来能源装备体系。", "工业和信息化部等七部门"],
  ["2025", "《关于聚变装置辐射安全管理有关事项的通知》", "当前，我国聚变研究进入快速发展期，已建成若干聚变装置，聚变能应用的工程化设计研究稳步推进。", "生态环境部"],
  ["2025", "《中华人民共和国原子能法》", "原子能领域的综合性、基础性法律。", "十四届全国人大常委会"],
];

export default function NewsDetailPage2() {
  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <NewsDetailHero />
      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-8 lg:w-[58.6979vw] lg:max-w-none lg:pb-24 lg:pt-[2.9167vw]">
        <h1 className="m-0 text-[32px] font-semibold leading-[30px] text-black lg:text-[1.6667vw] lg:leading-[1.35]">
          中国核聚变相关政策时间线表格
        </h1>
        <div className="mt-6 h-[2px] w-full bg-[#f96d01] lg:mt-[1.25vw] lg:h-[max(3px,0.2083vw)]" />
        <section className="mt-8 overflow-hidden bg-white shadow-[0px_4px_10px_0px_rgba(0,0,0,0.12)] lg:mt-[1.875vw]">
          <div className="grid grid-cols-[1fr_2.6fr_2.7fr_2.1fr] bg-[#f96d01] text-white">
            {["年份", "政策名字", "相关内容", "发布部门"].map((head) => (
              <p key={head} className="m-0 px-4 py-3 text-center text-[24px] font-semibold leading-[30px] lg:px-[0.8333vw] lg:py-[0.625vw] lg:text-[1.25vw] lg:leading-[1.5625vw]">
                {head}
              </p>
            ))}
          </div>
          <div className="mx-[20px] h-px bg-[#0000001a]" aria-hidden />
          {rows.map((row, idx) => (
            <div key={`${row[0]}-${idx}`}>
              <div className="grid grid-cols-[1fr_2.6fr_2.7fr_2.1fr]">
                <p className="m-0 border-r border-[#0000001a] px-4 py-6 text-center text-[24px] font-semibold leading-[30px] text-[#f96d01] lg:px-[0.8333vw] lg:py-[1.25vw] lg:text-[1.25vw] lg:leading-[1.5625vw]">
                  {row[0]}
                </p>
                <p className="m-0 border-r border-[#0000001a] px-4 py-4 text-[20px] leading-[30px] text-black lg:px-[0.8333vw] lg:py-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.5625vw]">{row[1]}</p>
                <p className="m-0 border-r border-[#0000001a] px-4 py-4 text-[20px] leading-[30px] text-black lg:px-[0.8333vw] lg:py-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.5625vw]">{row[2]}</p>
                <p className="m-0 px-4 py-4 text-[20px] leading-[30px] text-black lg:px-[0.8333vw] lg:py-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.5625vw]">{row[3]}</p>
              </div>
              {idx < rows.length - 1 ? <div className="mx-[20px] h-px bg-[#0000001a]" aria-hidden /> : null}
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
