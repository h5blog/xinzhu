import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";

type TabKey = "industry" | "company";

/** 缩略图对应 Figma 83:245 / 86:287 / 86:289 / 86:291；左侧渐变层 95:9–95:12 */
const industryArticles = [
  {
    id: "1",
    date: "2026-01-01",
    title: "全球各国核聚变战略部署",
    excerpt:
      "2025・美国  美国能源部（DOE）为核聚变创新研究引擎（FIRE）合作组织提供 1.07 亿美元，用于支持聚变能源科学、技术、工程与商业化协同创新。",
    thumb: assets.newsThumb1,
    overlayNodeId: "95:9" as const,
  },
  {
    id: "2",
    date: "2026-01-01",
    title: "中国核聚变相关政策时间线表格年份",
    excerpt:
      "2022《加快电力装备绿色低碳创新发展行动计划的通知》加快三代核电标准化、谱系化发展，持续推进钠冷快堆、高温气冷堆…",
    thumb: assets.newsThumb2,
    overlayNodeId: "95:10" as const,
  },
  {
    id: "3",
    date: "2026-01-01",
    title: "8月27日：《关于推进 「人工智能 +」 能源高质量发展的实施意见》",
    excerpt: `01 国家战略
国家发展改革委、国家能源局《关于推进 「人工智能 +」 能源高质量发展…`,
    thumb: assets.newsThumb3,
    overlayNodeId: "95:11" as const,
  },
  {
    id: "4",
    date: "2026-01-01",
    title: "AI 赋能聚变已成全球共识",
    excerpt:
      "Microsoft与 Helion 达成全球首个聚变电力采购协议（2028 年起购买 50 MW 电力），并利用 Azure 平台加速 AI 在聚变领域的应用…",
    thumb: assets.newsThumb4,
    overlayNodeId: "95:12" as const,
  },
] as const;

const companyArticles = [
  {
    id: "c1",
    date: "2026-01-01",
    title: "公司新闻示例标题",
    excerpt: "此处可接入公司动态与公告，当前为占位文案，便于与「行业资讯」切换对照。",
    thumb: assets.newsThumb1,
    overlayNodeId: "95:9" as const,
  },
];

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

      {/* 83:171 头图 + 151:92 / 151:93 / 151:91 + 渐变 95:14 */}
      <section className="relative h-[217px] w-full overflow-hidden" data-node-id="83:171">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={assets.newsBg}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto flex h-[217px] max-w-[1920px] items-center px-6 sm:px-10 lg:pl-[431px]">
          <div className="flex min-w-0 flex-col justify-center">
            <p
              className="font-semibold leading-[1.05] tracking-tight text-white text-[clamp(40px,7vw,64px)]"
              data-node-id="151:92"
            >
              NEWS
            </p>
            <div
              className="mt-3 h-px w-[286px] max-w-full shrink-0 bg-white"
              data-node-id="151:93"
              aria-hidden
            />
            <p
              className="mt-3 font-semibold leading-normal text-white text-[clamp(24px,3vw,36px)]"
              data-node-id="151:91"
            >
              新闻中心
            </p>
          </div>
        </div>
      </section>

      {/* 83:242 页眉标题 */}
      <div className="mx-auto w-full max-w-[1920px] px-4 pt-9 text-center">
        <h1 className="text-[32px] font-semibold leading-tight text-[#f96d01]" data-node-id="83:242">
          新闻中心
        </h1>
      </div>

      {/* 83:243–266 Tab */}
      <div className="mx-auto mt-10 flex max-w-[1183px] justify-center px-4" role="tablist" aria-label="资讯分类">
        <div className="flex w-full max-w-[368px]">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "industry"}
            className={`min-w-0 flex-1 sm:w-[184px] sm:flex-none pb-3 text-center text-[18px] font-medium transition-colors sm:text-[20px] ${
              tab === "industry"
                ? "border-b-[4px] border-[#f96d01] text-[#f96d01]"
                : "border-b border-[#d9d9d9] text-black"
            }`}
            onClick={() => setTab("industry")}
            data-node-id="83:243"
          >
            行业资讯
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "company"}
            className={`min-w-0 flex-1 sm:w-[184px] sm:flex-none pb-3 text-center text-[18px] font-medium transition-colors sm:text-[20px] ${
              tab === "company"
                ? "border-b-[4px] border-[#f96d01] text-[#f96d01]"
                : "border-b border-[#d9d9d9] text-black"
            }`}
            // onClick={() => setTab("company")}
            data-node-id="83:244"
          >
            公司新闻
          </button>
        </div>
      </div>

      {/* 列表：默认白底；hover 时 Figma 108:29331 — bg #f5f5f5 + shadow */}
      <main className="mx-auto w-full max-w-[1183px] px-4 pb-16 pt-10">
        <ul className="flex flex-col gap-10 sm:gap-12">
          {list.map((item) => (
            <li key={item.id}>
              <Link to={`/news/${item.id}`} className="group block">
                <article className="flex flex-col gap-6 rounded-sm bg-white p-5 shadow-none transition-[background-color,box-shadow] duration-200 sm:p-6 lg:flex-row lg:items-center lg:gap-8 hover:bg-[#f5f5f5] hover:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)] focus-within:bg-[#f5f5f5] focus-within:shadow-[0px_0px_15px_0px_rgba(0,0,0,0.15)]">
                  <div className="relative h-[172px] w-full max-w-[358px] shrink-0 overflow-hidden lg:w-[358px]">
                    <img
                      src={item.thumb}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
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
                      <h2 className="text-[20px] font-semibold leading-snug text-[#121212] transition-colors duration-200 group-hover:text-[#f96d01] group-focus-within:text-[#f96d01]">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-[20px] font-normal text-[#888]" data-date>
                        {item.date}
                      </p>
                      <p className="mt-2 whitespace-pre-wrap text-[20px] font-normal leading-normal text-[#666]">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowCircleButton />
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer />
    </div>
  );
}
