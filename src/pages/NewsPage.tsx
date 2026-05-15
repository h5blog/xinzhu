import { useState } from "react";
import { Link } from "react-router-dom";
import { introBody16ClassName, newsListTitleClassName } from "../constants/typography";
import { pageMainWidthClassName } from "../constants/contentAlign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import newsBannerAvif from "../images/news-banner.opt.avif";
import newsBannerWebp from "../images/news-banner.opt.webp";
import newsBannerJpg from "../images/news-banner.opt.jpg";
import newsBanner1xAvif from "../images/news-banner-1x.opt.avif";
import newsBanner1xWebp from "../images/news-banner-1x.opt.webp";
import newsBanner1xJpg from "../images/news-banner-1x.opt.jpg";
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

/** 1920 稿摘要 16px；与首页技术引言、`introBody16ClassName` 同源 */
const newsExcerptBody = `${introBody16ClassName} text-[#666]`;

/** 列表卡片左侧图：稿 312×150@1920；固定比例与最大尺寸，716 宽 .opt 覆盖 2× */
const NEWS_THUMBS = [
  { avif: n1Avif, webp: n1Webp, jpg: n1Jpg, width: 312, height: 150 },
  { avif: n2Avif, webp: n2Webp, jpg: n2Jpg, width: 312, height: 150 },
  { avif: n3Avif, webp: n3Webp, jpg: n3Jpg, width: 312, height: 150 },
  { avif: n4Avif, webp: n4Webp, jpg: n4Jpg, width: 312, height: 150 },
  { avif: n5Avif, webp: n5Webp, jpg: n5Jpg, width: 312, height: 150 },
] as const;

/** 缩略图对应 Figma 83:245 / 86:287 / 86:289 / 86:291；左侧渐变层 95:9–95:12 */
const industryArticles = [
  {
    id: "1",
    date: "2026-01-01",
    title: "全球各国核聚变战略部署",
    excerpt:
      "美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，用于支持聚变能源科学、技术、工程与商业化协同创新。",
    thumb: NEWS_THUMBS[0],
    overlayNodeId: "95:9" as const,
  },
  {
    id: "2",
    date: "2026-01-01",
    title: "中国核聚变相关政策时间线表格年份",
    excerpt:
      "《加快电力装备绿色低碳创新发展行动计划的通知》加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆、铅铋快堆等四代核电堆型的研发和应用。加快可控核聚变等前沿颠覆性技术研究。",
    thumb: NEWS_THUMBS[1],
    overlayNodeId: "95:10" as const,
  },
  {
    id: "3",
    date: "2026-01-01",
    title: "8月27日：《关于推进 「人工智能 +」 能源高质量发展的实施意见》",
    excerpt: `国家发展改革委、国家能源局《关于推进“人工智能 +”能源高质量发展的实施意见》`,
    thumb: NEWS_THUMBS[2],
    overlayNodeId: "95:11" as const,
  },
  {
    id: "4",
    date: "2026-01-01",
    title: "AI 赋能聚变已成全球共识",
    excerpt:
      "Microsoft与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用。",
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

/** 默认 Figma 108:29336：#D9D9D9 圆 + 白箭头；1920 稿圆 52×52 → 52/1920vw；悬停 108:29331：橙底白箭头 */
function ArrowCircleButton() {
  return (
    <span
      className="flex size-[52px] shrink-0 items-center justify-center rounded-full border-0 bg-[#d9d9d9] text-white shadow-none transition-[background-color,box-shadow] duration-200 group-hover:bg-[#f96d01] group-hover:shadow-md group-focus-within:bg-[#f96d01] group-focus-within:shadow-md lg:size-[2.708333333333333vw]"
      data-node-id="108:29336"
      aria-label="查看详情"
    >
      <svg
        viewBox="0 0 17 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[26px] w-[17px] shrink-0 lg:h-[1.3541666666666667vw] lg:w-[0.8854166666666666vw]"
        aria-hidden
      >
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

      {/* news-banner：稿 1920×217；1×1920w + 2×3840w */}
      <section className="relative aspect-[1920/217] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            type="image/avif"
            srcSet={`${newsBanner1xAvif} 1920w, ${newsBannerAvif} 3840w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${newsBanner1xWebp} 1920w, ${newsBannerWebp} 3840w`}
            sizes="100vw"
          />
          <img
            src={newsBanner1xJpg}
            srcSet={`${newsBanner1xJpg} 1920w, ${newsBannerJpg} 3840w`}
            sizes="100vw"
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={217}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>
      <div className={pageMainWidthClassName}>
      {/* 83:242 页眉标题 */}
      <div className="w-full pt-9 text-center lg:pt-[1.875vw]">
        <h1 className="text-[30px] font-semibold leading-tight text-[#f96d01] md:text-[36px] lg:text-[28px]" data-node-id="83:242">
          新闻中心
        </h1>
      </div>

      {/* Tab：文字色 + 底轨灰线；橘色指示条 translate 滑动（约 300ms） */}
      <div
        className="mx-auto mt-10 flex w-full justify-center overflow-x-auto px-2 lg:mt-[2.0833vw] lg:px-0"
        role="tablist"
        aria-label="资讯分类"
      >
        <div className="relative grid w-full max-w-[368px] grid-cols-2 gap-0 sm:max-w-[min(100%,400px)] lg:max-w-none lg:w-[19.1667vw]">
          <button
            id="tab-industry"
            type="button"
            role="tab"
            aria-selected={tab === "industry"}
            aria-controls="news-tab-panel"
            className={`relative z-10 min-h-[48px] whitespace-nowrap border-b-0 px-2 pb-3 pt-2 text-center font-semibold outline-none transition-colors duration-200 sm:min-h-[52px] sm:px-4 lg:min-h-0 lg:px-[0.625vw] lg:pb-[0.78125vw] lg:pt-[0.5208vw] focus-visible:ring-2 focus-visible:ring-[#f96d01] focus-visible:ring-offset-2 text-[20px] ${
              tab === "industry"
                ? "text-[#f96d01]"
                : "text-[#363636] hover:bg-black/[0.02] hover:text-[#f96d01]"
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
            className={`relative z-10 min-h-[48px] whitespace-nowrap border-b-0 px-2 pb-3 pt-2 text-center font-semibold outline-none transition-colors duration-200 sm:min-h-[52px] sm:px-4 lg:min-h-0 lg:px-[0.625vw] lg:pb-[0.78125vw] lg:pt-[0.5208vw] focus-visible:ring-2 focus-visible:ring-[#f96d01] focus-visible:ring-offset-2 text-[20px] ${
              tab === "company"
                ? "text-[#f96d01]"
                : "text-[#363636] hover:bg-black/[0.02] hover:text-[#f96d01]"
            }`}
            onClick={() => setTab("company")}
            data-node-id="83:244"
          >
            公司新闻
          </button>
          {/* 底轨 + 橘色指示条随 Tab 滑动 */}
          <div
            className="pointer-events-none absolute bottom-0 left-0 right-0 z-0 h-1 bg-[#e8e8e8] sm:h-1 lg:h-[min(4px,0.2083vw)]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute bottom-0 left-0 z-[1] h-1 w-1/2 origin-left bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none sm:h-1 lg:h-[min(4px,0.2083vw)]"
            style={{ transform: tab === "industry" ? "translateX(0)" : "translateX(100%)" }}
            aria-hidden
          />
        </div>
      </div>

      {/* 列表：默认白底；hover 时 Figma 108:29331 — bg #f5f5f5 + shadow */}
      <main
        id="news-tab-panel"
        role="tabpanel"
        aria-labelledby={tab === "industry" ? "tab-industry" : "tab-company"}
        className="w-full pb-16 pt-10 lg:pt-[2.0833vw]"
        data-node-id={tab === "company" ? "684:40" : undefined}
      >
        <div className="flex flex-col">
          {list.map((item, index) => (
            <div key={item.id}>
              <Link
                to={"to" in item && item.to ? item.to : `/news/${item.id}`}
                className="group block"
              >
                <article className="flex flex-col gap-4 rounded-sm bg-white py-5 pl-5 pr-2.5 shadow-none transition-[background-color,box-shadow] duration-200 sm:py-6 sm:pl-6 sm:pr-3 lg:flex-row lg:items-center lg:gap-4 hover:bg-[#f5f5f5] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] focus-within:bg-[#f5f5f5] focus-within:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]">
                  <div className="relative aspect-[312/150] w-full max-w-[312px] shrink-0 overflow-hidden">
                    <picture className="absolute inset-0 block h-full w-full">
                      <source srcSet={item.thumb.avif} type="image/avif" />
                      <source srcSet={item.thumb.webp} type="image/webp" />
                      <img
                        src={item.thumb.jpg}
                        alt=""
                        width={item.thumb.width}
                        height={item.thumb.height}
                        className="absolute inset-0 h-full w-full object-cover"
                        sizes="(max-width: 1023px) min(100vw - 2rem, 312px), 312px"
                        loading={index < 2 ? "eager" : "lazy"}
                        fetchPriority={index < 2 ? "high" : "low"}
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

                  <div className="flex min-w-0 flex-1 flex-col gap-[15px] lg:flex-row lg:items-center lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <h2
                        className={`font-semibold transition-colors duration-200 group-hover:text-[#f96d01] group-focus-within:text-[#f96d01] ${newsListTitleClassName}`}
                      >
                        {item.title}
                      </h2>
                      <p
                      style={{lineHeight:"1.7"}}
                        className="mt-3 text-[15px] font-normal leading-normal text-[#888] sm:mt-3.5 sm:text-[16px] lg:mt-[0.625vw] lg:text-[16px]"
                        data-date
                      >
                        {item.date}
                      </p>
                      <p
                      style={{textAlign:"justify",lineHeight:"1.7"}}
                        className={`mt-2.5 line-clamp-3 break-words whitespace-pre-line sm:mt-3 lg:mt-[0.625vw] text-[#666]`}
                      >
                        {item.excerpt}
                      </p>
                    </div>
                    <span className="shrink-0">
                      <ArrowCircleButton />
                    </span>
                  </div>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </main>
      </div>

      <Footer />
    </div>
  );
}
