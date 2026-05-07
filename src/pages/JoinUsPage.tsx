import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { JOB_APPLY_FORM_URL, JOBS } from "../data/jobs";
import joinBannerAvif from "../images/join-bg.opt.avif";
import joinBannerWebp from "../images/join-bg.opt.webp";
import joinBannerJpg from "../images/join-bg.opt.jpg";
import joinFooter1Avif from "../images/join-footer-1.opt.avif";
import joinFooter1Webp from "../images/join-footer-1.opt.webp";
import joinFooter1Jpg from "../images/join-footer-1.opt.jpg";
import joinFooter2Avif from "../images/join-footer-2.opt.avif";
import joinFooter2Webp from "../images/join-footer-2.opt.webp";
import joinFooter2Jpg from "../images/join-footer-2.opt.jpg";
import fuliAvif from "../images/fuli.opt.avif";
import fuliWebp from "../images/fuli.opt.webp";
import fuliJpg from "../images/fuli.opt.jpg";

/** Figma 924:282 / 924:280 / 924:281：横向渐变；小屏 max 1025px，lg 与主栏同宽；高度 3px@1920 用 vw 略放大大屏 */
function JoinSectionRuleBar({
  className = "",
  "data-node-id": nodeId,
}: {
  className?: string;
  "data-node-id": string;
}) {
  return (
    <div
      className={`mx-auto h-[3px] w-full max-w-[min(1025px,100%)] bg-[linear-gradient(90deg,#f0f0f0_0%,#f96d01_49.519%,#f0f0f0_100%)] lg:h-[0.15625vw] lg:max-h-[5px] lg:max-w-none lg:min-h-[3px] ${className}`}
      data-node-id={nodeId}
      aria-hidden
    />
  );
}

const PROCESS_STEPS: { id: string; lines: string[] }[] = [
  { id: "01", lines: ["简历投递"] },
  { id: "02", lines: ["初筛"] },
  { id: "03", lines: ["技术面试", "（1-2 轮）"] },
  { id: "04", lines: ["终面/交流"] },
  { id: "05", lines: ["发放offer"] },
];

function JobLabeledBlock({
  label,
  text,
  className = "",
}: {
  label: string;
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-w-0 items-start gap-1 text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw] ${className}`}
    >
      <span className="shrink-0 font-semibold">{label}</span>
      <span className="min-w-0 flex-1 text-left hyphens-none [overflow-wrap:anywhere]">{text}</span>
    </div>
  );
}

/** Figma 729:29226 — 仅按钮跳转详情页 */
function JobApplyButton({ to }: { to: string }) {
  return (
    <Link
      to={to}
      data-node-id="729:29226"
      className="group box-border inline-flex h-10 w-[152px] shrink-0 cursor-pointer items-center justify-center gap-1 whitespace-nowrap rounded-[25px] bg-[#f96d01] font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[16px] font-normal leading-none text-white no-underline transition-opacity hover:opacity-95 lg:h-[2.0833vw] lg:w-[7.9167vw] lg:gap-[0.2083vw] lg:rounded-[1.3021vw] lg:text-[0.8333vw]"
    >
      查看招聘详情
      <img
        src={assets.joinArrow}
        alt=""
        width={16}
        height={15}
        className="h-[14px] w-[15.5px] shrink-0 object-contain transition-transform duration-200 group-hover:translate-x-0.5 lg:h-[0.7292vw] lg:w-[0.8073vw]"
        aria-hidden
        decoding="async"
      />
    </Link>
  );
}

/** Figma 729:29156：1920 下 1117×283（宽与 mainCol 一致）；小屏按内容增高，lg 起 min-h 与边距按 vw */
function JobCard({ job, isLast }: { job: (typeof JOBS)[number]; isLast: boolean }) {
  return (
    <article
      className="relative mx-auto box-border flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-none bg-white pt-6 shadow-[0px_7px_8px_0px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.16)] sm:pt-7 lg:min-h-[14.739583333333334vw] lg:pt-[1.4583333333333333vw] lg:shadow-[0px_0.36458333333333335vw_0.4166666666666667vw_0px_rgba(0,0,0,0.12)] lg:hover:shadow-[0px_0.5208333333333334vw_0.7291666666666666vw_0px_rgba(0,0,0,0.16)]"
      data-node-id="729:29156"
    >
      <div className="min-w-0 flex-1 font-normal text-black">
        <div className="px-4 sm:px-6 lg:pl-[3.3333333333333335vw] lg:pr-[1.9270833333333333vw]">
          <p className="m-0 text-[22px] font-semibold leading-[1.35] text-[#f96d01] sm:text-[24px] lg:text-[1.25vw]">
            {job.title}
          </p>
        </div>
        <div
          className="mx-4 mt-2.5 h-px bg-[#f96d01] sm:mx-6 sm:mt-3 lg:mx-[1.3541666666666667vw] lg:mt-[0.5208333333333333vw]"
          aria-hidden
        />
        <div className="mt-4 px-4 pb-4 sm:mt-5 sm:px-6 sm:pb-5 lg:mt-[0.8333333333333334vw] lg:pb-[0.8333333333333334vw] lg:pl-[3.3333333333333335vw] lg:pr-[1.9270833333333333vw]">
          <JobLabeledBlock label="岗位职责：" text={job.duty} />
          <JobLabeledBlock
            label="岗位要求："
            text={job.requirement}
            className={
              isLast ? "mt-1.5 sm:mt-2" : "mt-6 sm:mt-7 lg:mt-[1.5625vw]"
            }
          />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:mt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end sm:gap-x-6 lg:mt-[1.5625vw] lg:gap-x-[1.5625vw]">
            <div className="min-w-0 sm:col-start-1">
              <JobLabeledBlock label="岗位地点：" text={job.listLocation} />
            </div>
            <div className="flex justify-end sm:col-start-2 sm:justify-self-end">
              <JobApplyButton to={`/join/${job.id}`} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function JoinBenefitsSection() {
  return (
    <section className="mt-10 min-w-0 sm:mt-12 lg:mt-14">
      {/* Figma 729:29274：40px@1920 → 2.0833vw，与首页「AI解决方案…」标题一致 */}
      <h2
        className="text-center font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[32px] font-semibold leading-[30px] text-[#f96d01] sm:text-[36px] lg:text-[2.0833vw] lg:leading-tight"
        data-node-id="729:29274"
      >
        薪酬福利
      </h2>
      <JoinSectionRuleBar className="mt-6 lg:mt-8" data-node-id="924:280" />

      <div className="relative mx-auto mt-10 aspect-[1200/749] w-full min-w-0 max-w-[min(100%,1200px)] overflow-hidden rounded-2xl bg-[#f0f0f0] sm:rounded-[24px] lg:mt-[2.6042vw] lg:w-[57.0833vw] lg:max-w-none">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={fuliAvif} type="image/avif" />
          <source srcSet={fuliWebp} type="image/webp" />
          <img
            src={fuliJpg}
            alt="薪酬福利"
            width={1200}
            height={749}
            className="h-full w-full object-contain object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 1023px) min(calc(100vw - 48px), 1096px), 57vw"
          />
        </picture>
      </div>
    </section>
  );
}

function JoinProcessSection() {
  return (
    <section className="mt-12 sm:mt-14 lg:mt-[max(3rem,5vw)]" data-node-id="729:29243">
      <h2 className="text-center font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[32px] font-semibold leading-[30px] text-[#f96d01] sm:text-[36px] lg:text-[2.0833vw] lg:leading-tight">
        招聘流程
      </h2>
      <JoinSectionRuleBar className="mt-6 lg:mt-8" data-node-id="924:281" />

      <ol className="mt-10 flex flex-col gap-6 px-2 lg:mt-[2.6042vw] lg:hidden">
        {PROCESS_STEPS.map((step) => (
          <li key={step.id} className="flex gap-4">
            <div className="flex size-[56px] shrink-0 items-center justify-center rounded-full border-2 border-[#f96d01] bg-white font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[18px] font-medium text-[#f96d01] sm:size-[68px] sm:text-[20px]">
              {step.id}
            </div>
            <div className="min-w-0 pt-1">
              {step.lines.map((line) => (
                <p
                  key={line}
                  className="font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[18px] font-semibold leading-[1.4] text-[#f96d01] sm:text-[20px]"
                >
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      {/* lg+：单行；圆/线/字按 1920 稿用 vw 缩放（68px 圆、20px 字 ≈ 3.54vw / 1.04vw） */}
      <div
        className="mx-auto mt-10 hidden min-w-0 w-full max-w-[1040px] flex-nowrap items-start justify-center gap-0 overflow-x-auto pb-1 lg:mt-[2.6042vw] lg:flex lg:max-w-none"
        role="presentation"
      >
        {PROCESS_STEPS.map((step, i) => (
          <Fragment key={step.id}>
            <div className="flex w-[min(104px,11vw)] shrink-0 flex-col items-center lg:w-[5.4167vw]">
              <div className="flex h-[68px] w-full shrink-0 items-center justify-center lg:h-[3.5417vw]">
                <div className="flex size-[68px] items-center justify-center rounded-full border-2 border-[#f96d01] bg-white font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[20px] font-medium text-[#f96d01] lg:size-[3.5417vw] lg:text-[1.0417vw]">
                  {step.id}
                </div>
              </div>
              <div className="mt-3 w-full text-center lg:mt-[0.7813vw]">
                {step.lines.map((line) => (
                  <p
                    key={line}
                    className="font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[16px] font-semibold leading-snug text-[#f96d01] sm:text-[18px] lg:text-[1.0417vw]"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {i < PROCESS_STEPS.length - 1 && (
              <div
                className="flex h-[68px] min-w-[16px] flex-1 items-center px-1 lg:h-[3.5417vw] lg:min-w-[0.8333vw] lg:px-[0.2604vw]"
                aria-hidden
              >
                <div className="h-0.5 w-full bg-[#f96d01] lg:h-[0.1042vw]" />
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function JoinApplySection() {
  /** 729:29244 / 729:29245 / 729:29246：Figma 32px / 行高 30px；大屏 32/1920vw、30/1920vw */
  const applyLine =
    "m-0 text-center font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[32px] font-semibold leading-[30px] text-white lg:text-[1.6666666666666667vw] lg:leading-[1.5625vw]";
  return (
    <section
      className="relative mx-auto mt-12 box-border h-auto w-full max-w-[699px] overflow-clip rounded-[24px] bg-[#f96d01] px-6 py-8 shadow-[0px_4px_11px_0px_#f96d01] sm:px-10 sm:py-10 lg:mt-[3.3333vw] lg:h-[8.90625vw] lg:max-w-none lg:w-[36.40625vw] lg:rounded-[1.25vw] lg:px-[3.125vw] lg:py-[0.7291666666666667vw] lg:shadow-[0px_0.2083vw_0.5729vw_0px_#f96d01]"
      data-node-id="729:29242"
    >
      <div className="flex h-full min-h-0 w-full min-w-0 flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:gap-[1.5625vw]">
        <div className="flex w-full min-w-0 flex-col items-center gap-[0.65em] text-white md:flex-1 lg:min-w-0 lg:flex-1 lg:items-center lg:gap-[0.8333vw]">
          <a
            href={JOB_APPLY_FORM_URL}
            className={`${applyLine} underline decoration-solid underline-offset-[0.2em]`}
            data-node-id="729:29246"
          >
            网申链接
          </a>
          <p className={applyLine} data-node-id="729:29245">
            或
          </p>
          <p className={applyLine} data-node-id="729:29244">
            简历投递二维码
          </p>
        </div>
        {/** 729:29272：Figma 白底 rounded-17；729:29273：1920 稿 109×111 → vw；图 absolute + object-cover */}
        <div
          className="relative shrink-0 overflow-clip rounded-[17px] bg-white p-2 sm:p-2.5 lg:box-border lg:rounded-[0.8854166666666667vw] lg:p-[0.15625vw]"
          data-node-id="729:29272"
        >
          <div
            className="relative size-[clamp(104px,28vw,127px)] min-h-0 min-w-0 overflow-clip rounded-[14px] sm:size-[118px] lg:h-[5.78125vw] lg:w-[5.677083333333333vw] lg:rounded-[0.7291666666666667vw]"
            data-node-id="729:29273"
          >
            <img
              src={assets.joinQr}
              alt="简历投递二维码"
              className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[14px] object-cover lg:rounded-[0.7291666666666667vw]"
              width={109}
              height={111}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 28vw, (max-width: 1023px) 118px, 111px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/** 两列 flex-1 + 固定 gap：左右贴齐 mainCol，中间仅小间隙（避免 1fr 撑满） */
function JoinFooterGallery() {
  const tileClass =
    "relative aspect-[406/305] w-full min-w-0 overflow-hidden sm:w-0 sm:flex-1 sm:basis-0";
  return (
    <div className="mt-12 w-full min-w-0 lg:mt-[3.3333vw]">
      <div className="flex w-full min-w-0 flex-col gap-[10px] sm:flex-row sm:items-stretch sm:gap-[10px] lg:gap-[0.5208vw]">
        <div className={tileClass}>
          <picture>
            <source srcSet={joinFooter1Avif} type="image/avif" />
            <source srcSet={joinFooter1Webp} type="image/webp" />
            <img
              src={joinFooter1Jpg}
              alt=""
              width={406}
              height={305}
              className="h-full w-full object-cover"
              data-node-id="729:29270"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc((100vw - 48px - 10px) / 2), calc((58.1771vw - 0.5208vw) / 2)"
            />
          </picture>
        </div>
        <div className={tileClass}>
          <picture>
            <source srcSet={joinFooter2Avif} type="image/avif" />
            <source srcSet={joinFooter2Webp} type="image/webp" />
            <img
              src={joinFooter2Jpg}
              alt=""
              width={406}
              height={305}
              className="h-full w-full object-cover"
              data-node-id="729:29271"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc((100vw - 48px - 10px) / 2), calc((58.1771vw - 0.5208vw) / 2)"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

const mainCol = "mx-auto w-[min(100%-24px,1117px)] px-0 lg:w-[58.1771vw] lg:max-w-none";

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#363636]" data-name="加入我们" data-node-id="729:29148">
      <Navbar />
      <section className="relative aspect-[1920/217] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={joinBannerAvif} type="image/avif" />
          <source srcSet={joinBannerWebp} type="image/webp" />
          <img
            src={joinBannerJpg}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={217}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>
      <main className={`${mainCol} pb-16 pt-10 lg:pb-24 lg:pt-12`}>
        <JoinBenefitsSection />
        <JoinProcessSection />
        <JoinApplySection />
        <JoinFooterGallery />
        <h2
          className="mt-8 text-center font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[32px] font-semibold leading-[30px] text-[#f96d01] sm:mt-10 sm:text-[36px] lg:mt-[max(3rem,5vw)] lg:text-[2.0833vw] lg:leading-tight"
          data-node-id="924:279"
        >
          岗位需求
        </h2>
        <JoinSectionRuleBar className="mt-6 lg:mt-8" data-node-id="924:282" />
        <div className="mt-8 flex flex-col gap-5 lg:mt-10 lg:gap-[1.0416666666666667vw]">
          {JOBS.map((job, index) => (
            <JobCard key={job.title} job={job} isLast={index === JOBS.length - 1} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
