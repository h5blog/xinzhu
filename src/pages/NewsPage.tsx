import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import newsBgAvif from "../images/news-bg.opt.avif";
import newsBgWebp from "../images/news-bg.opt.webp";
import newsBgJpg from "../images/news-bg.opt.jpg";
import n1Avif from "../images/news-thumb-1.opt.avif";
import n1Webp from "../images/news-thumb-1.opt.webp";
import n1Jpg from "../images/news-thumb-1.opt.jpg";
import n2Avif from "../images/news-thumb-2.opt.avif";
import n2Webp from "../images/news-thumb-2.opt.webp";
import n2Jpg from "../images/news-thumb-2.opt.jpg";
import n3Avif from "../images/news-thumb-3.opt.avif";
import n3Webp from "../images/news-thumb-3.opt.webp";
import n3Jpg from "../images/news-thumb-3.opt.jpg";
import n4Avif from "../images/news-thumb-4.opt.avif";
import n4Webp from "../images/news-thumb-4.opt.webp";
import n4Jpg from "../images/news-thumb-4.opt.jpg";
import n5Avif from "../images/news-thumb-5.opt.avif";
import n5Webp from "../images/news-thumb-5.opt.webp";
import n5Jpg from "../images/news-thumb-5.opt.jpg";

type TabKey = "industry" | "company";

/** 列表卡片左侧图：小屏 max 358；lg 按 1920 稿约 440px（22.9167vw）随屏放大，716 宽 .opt 仍可覆盖 2x */
const NEWS_THUMBS = [
  { avif: n1Avif, webp: n1Webp, jpg: n1Jpg, width: 716, height: 344 },
  { avif: n2Avif, webp: n2Webp, jpg: n2Jpg, width: 361, height: 172 },
  { avif: n3Avif, webp: n3Webp, jpg: n3Jpg, width: 716, height: 344 },
  { avif: n4Avif, webp: n4Webp, jpg: n4Jpg, width: 716, height: 344 },
  { avif: n5Avif, webp: n5Webp, jpg: n5Jpg, width: 716, height: 217 },
] as const;

/** 缩略图对应 Figma 83:245 / 86:287 / 86:289 / 86:291；左侧渐变层 95:9–95:12 */
const industryArticles = [
  {
    id: "1",
    date: "2026-01-01",
    title: "全球各国核聚变战略部署",
    excerpt:
      "2025・美国  美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，用于支持聚变能源科学、技术、工程与商业化协同创新。",
    thumb: NEWS_THUMBS[0],
    overlayNodeId: "95:9" as const,
  },
  {
    id: "2",
    date: "2026-01-01",
    title: "中国核聚变相关政策时间线表格年份",
    excerpt:
      "2022《加快电力装备绿色低碳创新发展行动计划的通知》加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆…",
    thumb: NEWS_THUMBS[1],
    overlayNodeId: "95:10" as const,
  },
  {
    id: "3",
    date: "2026-01-01",
    title: "8月27日：《关于推进 「人工智能 +」 能源高质量发展的实施意见》",
    excerpt: `01 国家战略
国家发展改革委、国家能源局《关于推进 「人工智能 +」 能源高质量发展…`,
    thumb: NEWS_THUMBS[2],
    overlayNodeId: "95:11" as const,
  },
  {
    id: "4",
    date: "2026-01-01",
    title: "AI 赋能聚变已成全球共识",
    excerpt:
      "Microsoft与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用…",
    thumb: NEWS_THUMBS[3],
    overlayNodeId: "95:12" as const,
  },
] as const;

/** 公司新闻：单条列表，进入详情 /news/5（Figma 684:40） */
const companyArticles = [
  {
    id: "c1",
    date: "2026-03-21",
    title: "AI加速可控核聚变商业化，新烛时代完成6000万元天使轮融资",
    excerpt:
      "本轮融资由中科创星、鼎峰科创联合领投，水木清华校友基金跟投，资金将主要用于核心技术研发、联合验证、平台建设及关键人才引进等，全力推动可控核聚变向商用化加速迈进。",
    thumb: NEWS_THUMBS[4],
    overlayNodeId: "95:9" as const,
    to: "/news/5" as const,
  },
] as const;

/** 默认 Figma 108:29336：#D9D9D9 圆 + 白箭头；悬停 108:29331：橙底白箭头 */
function ArrowCircleButton() {
  return (
    <span
      className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border-0 bg-[#d9d9d9] text-white shadow-none transition-[background-color,box-shadow] duration-200 group-hover:bg-[#f96d01] group-hover:shadow-md group-focus-within:bg-[#f96d01] group-focus-within:shadow-md"
      data-node-id="108:29336"
      aria-label="查看详情"
    >
      <svg width="17" height="26" viewBox="0 0 17 26" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path
          d="M2 2L13 13L2 24"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function NewsPage() {
  const [tab, setTab] = useState<TabKey>("industry");
  const list = tab === "industry" ? industryArticles : companyArticles;

  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="新闻中心" data-node-id="83:169">
      <Navbar />

      {/* 83:171 头图：稿 1920×217，大屏用 11.3021vw 随宽加高；左侧渐变 95:14 提升白字对比 */}
      <section className="relative h-[max(217px,11.3021vw)] w-full overflow-hidden" data-node-id="83:171">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={newsBgAvif} type="image/avif" />
            <source srcSet={newsBgWebp} type="image/webp" />
            <img
              src={newsBgJpg}
              alt=""
              width={1920}
              height={217}
              className="absolute inset-0 h-full w-full object-cover object-center"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-black/50 via-black/18 to-transparent sm:from-black/45 sm:via-black/12"
          data-node-id="95:14"
          aria-hidden
        />

        <div className="relative z-10 flex h-full w-full">
          <div className="mx-auto flex h-full w-full max-w-[1052px] items-center px-4 py-8 text-left sm:px-6 sm:py-10 lg:max-w-[54.7917vw] lg:px-0 lg:py-[2.0833vw]">
            <div className="flex min-w-0 flex-col justify-center gap-3 sm:gap-[max(12px,0.625vw)] lg:gap-[0.8333vw]">
              <p
                className="m-0 font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[40px] font-semibold leading-[1.05] tracking-[0.04em] text-white sm:text-[48px] lg:text-[3.3333vw]"
                data-node-id="151:92"
              >
                NEWS
              </p>
              <div
                className="h-px w-[286px] max-w-full shrink-0 bg-white lg:w-[14.8958vw]"
                data-node-id="151:93"
                aria-hidden
              />
              <p
                className="m-0 font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[24px] font-semibold leading-[1.2] tracking-[0.06em] text-white sm:text-[30px] lg:text-[1.875vw]"
                data-node-id="151:91"
              >
                新闻中心
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 83:242 页眉标题 */}
      <div className="mx-auto w-full max-w-[1920px] px-4 pt-9 text-center lg:pt-[1.875vw]">
        <h1 className="text-[30px] font-semibold leading-tight text-[#f96d01] md:text-[36px] lg:text-[2.0833vw]" data-node-id="83:242">
          新闻中心
        </h1>
      </div>

      {/* 83:243–266 Tab：底边统一 4px 避免切换跳动；lg 宽度 368/1920 */}
      <div
        className="mx-auto mt-10 flex w-[min(100%-2rem,1183px)] justify-center overflow-x-auto px-2 lg:mt-[2.0833vw] lg:w-[61.6146vw] lg:px-0"
        role="tablist"
        aria-label="资讯分类"
      >
        <div className="grid w-full max-w-[368px] grid-cols-2 gap-0 sm:max-w-[min(100%,400px)] lg:max-w-none lg:w-[19.1667vw]">
          <button
            id="tab-industry"
            type="button"
            role="tab"
            aria-selected={tab === "industry"}
            aria-controls="news-tab-panel"
            className={`min-h-[48px] whitespace-nowrap border-b-[4px] px-2 pb-3 pt-2 text-center text-[17px] font-semibold outline-none transition-[color,border-color,background-color] duration-200 sm:min-h-[52px] sm:px-4 sm:text-[18px] lg:min-h-0 lg:px-[0.625vw] lg:pb-[0.78125vw] lg:pt-[0.5208vw] lg:text-[1.0417vw] focus-visible:ring-2 focus-visible:ring-[#f96d01] focus-visible:ring-offset-2 ${
              tab === "industry"
                ? "border-[#f96d01] text-[#f96d01]"
                : "border-[#e8e8e8] text-[#363636] hover:border-[#f96d01]/40 hover:bg-black/[0.02] hover:text-[#f96d01]"
            }`}
            onClick={() => setTab("industry")}
            data-node-id="83:243"
          >
            行业资讯
          </button>
          <button
            id="tab-company"
            type="button"
            role="tab"
            aria-selected={tab === "company"}
            aria-controls="news-tab-panel"
            className={`min-h-[48px] whitespace-nowrap border-b-[4px] px-2 pb-3 pt-2 text-center text-[17px] font-semibold outline-none transition-[color,border-color,background-color] duration-200 sm:min-h-[52px] sm:px-4 sm:text-[18px] lg:min-h-0 lg:px-[0.625vw] lg:pb-[0.78125vw] lg:pt-[0.5208vw] lg:text-[1.0417vw] focus-visible:ring-2 focus-visible:ring-[#f96d01] focus-visible:ring-offset-2 ${
              tab === "company"
                ? "border-[#f96d01] text-[#f96d01]"
                : "border-[#e8e8e8] text-[#363636] hover:border-[#f96d01]/40 hover:bg-black/[0.02] hover:text-[#f96d01]"
            }`}
            onClick={() => setTab("company")}
            data-node-id="83:244"
          >
            公司新闻
          </button>
        </div>
      </div>

      {/* 列表：默认白底；hover 时 Figma 108:29331 — bg #f5f5f5 + shadow */}
      <main
        id="news-tab-panel"
        role="tabpanel"
        aria-labelledby={tab === "industry" ? "tab-industry" : "tab-company"}
        className="mx-auto w-[min(100%-2rem,1183px)] px-0 pb-16 pt-10 lg:w-[61.6146vw] lg:max-w-none lg:pt-[2.0833vw]"
        data-node-id={tab === "company" ? "684:40" : undefined}
      >
        <div className="flex flex-col">
          {list.map((item, index) => (
            <div key={item.id}>
              <Link
                to={"to" in item && item.to ? item.to : `/news/${item.id}`}
                className="group block"
              >
                <article className="flex flex-col gap-6 rounded-sm bg-white p-5 shadow-none transition-[background-color,box-shadow] duration-200 sm:p-6 lg:flex-row lg:items-center lg:gap-8 hover:bg-[#f5f5f5] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] focus-within:bg-[#f5f5f5] focus-within:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]">
                  <div className="relative aspect-[358/172] w-full max-w-[358px] shrink-0 overflow-hidden sm:max-w-[min(100%,420px)] lg:max-w-none lg:w-[22.9167vw]">
                    <picture className="absolute inset-0 block h-full w-full">
                      <source srcSet={item.thumb.avif} type="image/avif" />
                      <source srcSet={item.thumb.webp} type="image/webp" />
                      <img
                        src={item.thumb.jpg}
                        alt=""
                        width={item.thumb.width}
                        height={item.thumb.height}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1023px) min(100vw - 2rem, 420px), 22.9167vw"
                        loading={index === 0 ? "eager" : "lazy"}
                        fetchPriority={index === 0 ? "high" : "low"}
                        decoding="async"
                      />
                    </picture>
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(270deg, rgba(249, 109, 1, 0.66) 0%, rgba(249, 109, 1, 0) 45.192%)",
                      }}
                      data-node-id={item.overlayNodeId}
                      aria-hidden
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
                    <div className="min-w-0 flex-1">
                      <h2 className="text-[18px] font-semibold leading-snug text-[#121212] transition-colors duration-200 group-hover:text-[#f96d01] group-focus-within:text-[#f96d01] sm:text-[19px] lg:text-[1.0417vw]">
                        {item.title}
                      </h2>
                      <p
                        className="mt-5 text-[15px] font-normal leading-normal text-[#888] sm:mt-6 sm:text-[16px] lg:mt-[1.25vw] lg:text-[0.8333vw]"
                        data-date
                      >
                        {item.date}
                      </p>
                      <p className="mt-7 whitespace-pre-wrap text-[15px] font-normal leading-normal text-[#666] sm:mt-8 sm:text-[16px] lg:mt-[1.875vw] lg:text-[0.9375vw]">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowCircleButton />
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
