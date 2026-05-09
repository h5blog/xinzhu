import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  newsDetailBodyClassName,
  newsDetailTimelineLabelClassName,
  newsDetailTitleClassName,
} from "../constants/typography";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsTimelineDot from "../components/NewsTimelineDot";
import NewsDetailContentImage from "../components/NewsDetailContentImage";
import NewsDetailHero from "../components/NewsDetailHero";
import mainAvif from "../images/news-detail-1-main.opt.avif";
import mainWebp from "../images/news-detail-1-main.opt.webp";
import mainJpg from "../images/news-detail-1-main.opt.jpg";

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
      <NewsDetailHero />
      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-8 lg:w-[58.6979vw] lg:max-w-none lg:pb-24 lg:pt-[2.9167vw]">
        <h1 className={`m-0 font-medium ${newsDetailTitleClassName}`}>
          全球各国核聚变战略部署
        </h1>
        <div className="mt-6 h-[2px] w-full bg-[#f96d01] lg:mt-[1.25vw] lg:h-[max(3px,0.2083vw)]" />
        <div className="mx-auto mt-[46px] h-[259px] w-full max-w-[1103px] overflow-hidden lg:mt-[2.9167vw] lg:h-[13.4896vw] lg:max-w-[57.4479vw]">
          <NewsDetailContentImage
            avif={mainAvif}
            webp={mainWebp}
            jpg={mainJpg}
            width={1103}
            height={259}
            imgClassName="h-full w-full object-cover"
          />
        </div>

        <section className="mx-auto mt-[56px] w-full max-w-[1103px] lg:mt-[2.9167vw] lg:max-w-[57.4479vw]">
          {/*
            单列 auto + 标签右对齐：左缘到圆心的水平距离 = 圆心到正文左缘（同为 gap-x）。
            虚线放在第 2 列 grid 内并跨行，避免 absolute 依赖固定左列宽。
          */}
          <div className="grid grid-cols-[auto_max(40px,calc(100vw*40/1920))_minmax(0,1fr)] items-start gap-x-[max(12px,calc(100vw*20/1920))] gap-y-0">
            <div
              aria-hidden
              className="pointer-events-none col-start-2 row-start-1 z-0 justify-self-center self-stretch border-0 border-l border-dashed border-[#f09652]"
              style={{
                gridRow: `1 / span ${rows.length}`,
                width: "max(1px, calc(100vw / 1920))",
              }}
            />
            {rows.map((row, i) => (
              <Fragment key={row.year}>
                <p
                  className={`m-0 min-h-[max(101px,calc(100vw*101/1920))] whitespace-nowrap text-right ${newsDetailTimelineLabelClassName}`}
                  style={{ gridColumnStart: 1, gridRowStart: i + 1 }}
                >
                  {row.year}
                </p>
                <span
                  className="relative z-10 isolate mt-[max(4px,calc(100vw*4/1920))] flex size-[max(40px,calc(100vw*40/1920))] shrink-0 items-center justify-center"
                  style={{ gridColumnStart: 2, gridRowStart: i + 1 }}
                >
                  <NewsTimelineDot />
                </span>
                <p
                  className={`m-0 min-h-[max(101px,calc(100vw*101/1920))] ${newsDetailBodyClassName}`}
                  style={{ gridColumnStart: 3, gridRowStart: i + 1 }}
                >
                  {row.text}
                </p>
              </Fragment>
            ))}
          </div>
        </section>
        <p className={`mt-[102px] text-center lg:mt-[5.3125vw] ${newsDetailBodyClassName}`}>数据来源：各国能源部门网站、机构研报</p>
        <div className="mt-[38px] flex justify-end lg:mt-[1.9792vw]">
          <Link to="/news" className={`${newsDetailBodyClassName} transition-colors hover:text-[#f96d01]`}>返回全部新闻</Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
