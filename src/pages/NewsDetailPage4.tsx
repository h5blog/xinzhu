import { Link } from "react-router-dom";
import { newsDetailBodyClassName, newsDetailTitleClassName } from "../constants/typography";
import { pageMainWidthClassName } from "../constants/contentAlign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsTimelineDot from "../components/NewsTimelineDot";
import NewsDetailContentImage from "../components/NewsDetailContentImage";
import NewsDetailHero from "../components/NewsDetailHero";
import globeAvif from "../images/news-detail-4-main.opt.avif";
import globeWebp from "../images/news-detail-4-main.opt.webp";
import globeJpg from "../images/news-detail-4-main.opt.jpg";
import company1 from "../images/news-company-1.png";
import company2 from "../images/news-company-2.png";
import company3 from "../images/news-company-3.png";
import company4 from "../images/news-company-4.png";
import company5 from "../images/news-company-5.png";
import company6 from "../images/news-company-6.png";

/** 稿面条目纵向间距 22@1920，与全站 100vw/1920 规则一致；窄屏不低于 12px */
const detail4StripeGapY = "flex flex-col gap-y-[max(12px,calc(100vw*22/1920))]";

export default function NewsDetailPage4() {
  const companies = [
    [company1, "与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用。"],
    [company2, "旗下 DeepMind 在聚变控制领域取得多项突破，并与 TAE Technologies 深度合作，其“Optometrist AI”算法帮助 TAE 提升等离子体寿命 30%+。"],
    [company3, "与英国 UKAEA 合作，使用 Omniverse 平台为 ITER 和 STEP 装置构建数字孪生，用于协同设计和 AI 仿真。"],
    [company4, "通用原子公司运营的 DIII-D 持续推动聚变研究前沿。2024 年 4 月，其团队成功在平均密度超出格林沃尔德极限 20% 的情况下，实现了 2.2 秒高约束运行。"],
    [company5, "专注于托卡马克开发者软件支持，其产品套件通过集成建模、数字孪生和 AI/ML 控制工具，加速聚变堆设计与运行。"],
    [company6, "作为一家聚变 AI 咨询公司，为行业客户提供定制化的 AI/ML 算法和机器学习运维（MLOps）服务，帮助解决特定的物理预测和工程挑战。"],
  ];

  /** 左侧为「期刊名 + 年份」，中间轴与节点，右侧说明；配色对齐 Figma 节点 113:76 */
  const references = [
    ["《Science》", "2025", "美国劳伦斯利弗莫尔国家实验室利用物理信息 + AI 训练生成模型，成功预测国家点火装置实验。"],
    ["《Nature》", "2023", "通过深度强化学习主动抑制等离子体撕裂模不稳定性，防止潜在灾难性破裂。"],
    ["《Nature Communications》", "2023", "实现了无边缘局域模（ELMs）的高能运行，解决了聚变堆材料面临的一大挑战。"],
    ["《Nature Physics》", "2022", "普林斯顿大学利用 AI 技术，提前 300 毫秒预测破裂，为规避系统提供宝贵反应时间。"],
    ["《Nature》", "2022", "DeepMind 首次使用深度强化学习，在瑞士托卡马克装置上成功实现多种等离子体形状的准确控制。"],
    ["《Nature》", "2019", "DeepMind 与谷歌合作，在 AI 驱动的聚变等离子体控制方面实现突破。"],
  ];

  return (
    <div className="min-h-screen bg-white text-[#363636]">
      <Navbar />
      <NewsDetailHero />
      <main className={`${pageMainWidthClassName} pb-16 pt-8 lg:pb-24 lg:pt-[2.9167vw]`}>
        <h1 className={`m-0 font-semibold ${newsDetailTitleClassName}`}>AI 赋能聚变已成全球共识</h1>
        <div className="mt-6 h-[2px] w-full bg-[#f96d01] lg:mt-[1.25vw] lg:h-[max(3px,0.2083vw)]" />
        <section className={`mt-10 lg:mt-[2.0833vw] ${detail4StripeGapY}`}>
          {companies.map((item, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-[max(201px,calc(100vw*201/1920))_minmax(0,1fr)] items-stretch ${
                idx < 5
                  ? /* 稿面前五条：整行 1097×73@1920；条间距由 section gap 承担 */
                    "lg:mx-auto lg:min-h-0 lg:h-[max(73px,calc(100vw*73/1920))] lg:max-h-[max(73px,calc(100vw*73/1920))] lg:w-full"
                  : ""
              }`}
            >
              <div
                className={`flex h-full min-h-[max(73px,calc(100vw*73/1920))] w-full min-w-0 items-center justify-center overflow-hidden border border-[#f96d01] ${
                  idx < 5 ? "lg:min-h-0" : ""
                } ${idx === 5 ? "bg-black" : "bg-white"}`}
              >
                <img
                  src={item[0]}
                  alt=""
                  className={`h-full w-full ${
                    idx === 0 || idx === 1 || idx === 3 || idx === 4 ? "object-cover" : "object-contain"
                  }`}
                  loading="lazy"
                  decoding="async"
                  data-node-id={
                    idx === 0
                      ? "113:151"
                      : idx === 1
                        ? "113:154"
                        : idx === 2
                          ? "113:152"
                          : idx === 3
                            ? "113:155"
                            : idx === 4
                              ? "113:153"
                              : idx === 5
                                ? "113:156"
                                : undefined
                  }
                />
              </div>
              <div
                className={`flex min-h-0 items-center px-5 py-3 lg:min-h-0 lg:items-center lg:overflow-hidden ${
                  idx < 5 ? "lg:px-[max(12px,calc(100vw*20/1920))] lg:py-0" : "lg:px-[1.0417vw] lg:py-[0.625vw]"
                } ${idx === 5 ? "bg-gradient-to-r from-[#eeeeee] to-[#ffffff]" : "bg-gradient-to-r from-[#eee] to-white"}`}
                data-node-id={idx === 5 ? "113:179" : undefined}
              >
                <p
                  className={`m-0 min-w-0 ${idx < 5 ? "lg:line-clamp-2" : ""} ${newsDetailBodyClassName}`}
                >
                  {item[1]}
                </p>
              </div>
            </div>
          ))}
        </section>
        <div className="mx-auto mt-4 h-px w-full bg-[#dfdfdf]" data-node-id="113:164" aria-hidden />
        <div className="mt-8 h-[259px] w-full overflow-hidden lg:mt-[1.6667vw] lg:h-[13.4896vw]">
          <NewsDetailContentImage
            avif={globeAvif}
            webp={globeWebp}
            jpg={globeJpg}
            width={1064}
            height={709}
            imgClassName="h-full w-full object-cover"
          />
        </div>
        <section className="mt-10 w-full lg:mt-[2.0833vw]" aria-label="文献时间线">
          <div className="relative mx-auto w-full">
            {/* 与 Figma 一致：左列 400px 右对齐、中列 48px 节点；虚线 = 400 + gap + 24（中列半宽），与网格同步 */}
            <div
              className="pointer-events-none absolute left-[calc(400px+1.25vw+24px)] top-0 z-0 hidden h-full -translate-x-1/2 border-l border-dashed border-[#f96d01]/55 lg:block"
              aria-hidden
            />
            <div className={`relative z-[1] ${detail4StripeGapY}`}>
              {references.map(([journal, year, body]) => (
                <div
                  key={`${journal}-${year}`}
                  className="grid grid-cols-1 gap-4 lg:grid-cols-[400px_48px_minmax(0,1fr)] lg:items-start lg:gap-x-[1.25vw] lg:gap-y-0"
                >
                  <p className="m-0 whitespace-nowrap text-left text-[24px] font-semibold leading-[30px] text-[#f96d01] lg:min-w-0 lg:text-right lg:text-[1.25vw] lg:leading-[1.5625vw]">
                    <span>{journal}</span>
                    <span className="ml-2">{year}</span>
                  </p>
                  <div className="relative flex min-h-[30px] items-start justify-start lg:min-h-0 lg:items-start lg:justify-center">
                    {/** 与右侧正文首行对齐：大屏勿垂直居中（多行时圆点会落到段落中部），与左列、正文列同行顶对齐 */}
                    <NewsTimelineDot className="mt-[max(5px,calc(100vw*5/1920))] lg:mt-0" />
                  </div>
                  <p className={`m-0 min-w-0 ${newsDetailBodyClassName}`}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="mt-12 flex justify-end lg:mt-[2.5vw]">
          <Link to="/news" className={`${newsDetailBodyClassName} transition-colors hover:text-[#f96d01]`}>返回全部新闻</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
