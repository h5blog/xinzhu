import { pageMainWidthClassName } from "../constants/contentAlign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";
import { homeDetailCtaInteractionClasses } from "../constants/homeDetailCta";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { JOB_APPLY_FORM_URL, JOBS } from "../data/jobs";
import jobBannerAvif from "../images/job-banner.opt.avif";
import jobBannerWebp from "../images/job-banner.opt.webp";
import jobBannerJpg from "../images/job-banner.opt.jpg";
import joinFooter1Avif from "../images/join-footer-1.opt.avif";
import joinFooter1Webp from "../images/join-footer-1.opt.webp";
import joinFooter1Jpg from "../images/join-footer-1.opt.jpg";
import joinFooter2Avif from "../images/join-footer-2.opt.avif";
import joinFooter2Webp from "../images/join-footer-2.opt.webp";
import joinFooter2Jpg from "../images/join-footer-2.opt.jpg";
import fuliAvif from "../images/fuli.opt.avif";
import fuliWebp from "../images/fuli.opt.webp";
import fuliJpg from "../images/fuli.opt.jpg";

/** 1920 稿 20px；字族/行高/字距同首页 AI 段 */
const joinBodyText =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.7] tracking-[0.03em] text-black";

const joinProcessText =
  "break-keep font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.7] tracking-[0.03em] font-semibold text-[#f96d01]";

const joinProcessStepId =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] font-medium text-[#f96d01]";

const joinProcessCircleSize = "size-[max(56px,calc(100vw*68/1920))]";
const joinProcessCircleRowH = "h-[max(56px,calc(100vw*68/1920))]";
const joinProcessConnectorW = "w-[max(12px,calc(100vw*74/1920))]";

const joinSectionHeading =
  "text-center font-['PingFang_SC'] text-[max(22px,calc(100vw*40/1920))] font-semibold leading-tight text-[#f96d01]";

const joinJobCardTitle =
  "m-0 font-['PingFang_SC'] text-[max(18px,calc(100vw*24/1920))] font-semibold leading-tight text-[#f96d01]";

/** 1920 稿 16px；与首页流体字号规则一致 */
const joinJobDetailButtonText =
  "font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[max(16px,calc(100vw*16/1920))] font-normal leading-none text-white";

/** 1920 稿背景 152×40、圆角 25、图文间距 4px；箭头约 15.5×14 */
const joinJobDetailButtonBox =
  "h-[max(40px,calc(100vw*40/1920))] w-[max(152px,calc(100vw*152/1920))]";
const joinJobDetailButtonRadius = "rounded-[max(25px,calc(100vw*25/1920))]";
const joinJobDetailButtonGap = "gap-[max(4px,calc(100vw*4/1920))]";
const joinJobDetailButtonArrow =
  "h-[max(14px,calc(100vw*14/1920))] w-[max(14px,calc(100vw*15.5/1920))]";

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
      className={`mx-auto h-[3px] w-full bg-[linear-gradient(90deg,#f0f0f0_0%,#f96d01_49.519%,#f0f0f0_100%)] lg:h-[0.15625vw] lg:max-h-[5px] lg:min-h-[3px] ${className}`}
      data-node-id={nodeId}
      aria-hidden
    />
  );
}

const PROCESS_STEPS: { id: string; lines: string[] }[] = [
  { id: "01", lines: ["简历投递"] },
  { id: "02", lines: ["初筛"] },
  { id: "03", lines: ["技术面试", "（1-2轮）"] },
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
    <div className={`flex min-w-0 items-start gap-1 ${joinBodyText} ${className}`}>
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
      className={`group box-border inline-flex ${joinJobDetailButtonBox} ${joinJobDetailButtonRadius} ${joinJobDetailButtonGap} shrink-0 cursor-pointer items-center justify-center whitespace-nowrap bg-[#f96d01] no-underline ${homeDetailCtaInteractionClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f96d01]/55 ${joinJobDetailButtonText}`}
    >
      查看招聘详情
      <img
        src={assets.joinArrow}
        alt=""
        width={16}
        height={15}
        className={`${joinJobDetailButtonArrow} shrink-0 object-contain transition-transform duration-200 ease-out group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0`}
        aria-hidden
        decoding="async"
      />
    </Link>
  );
}

/** Figma 729:29156：1920 下与主列同宽（1200）；小屏按内容增高，lg 起 min-h 与边距按 vw */
function JobCard({ job, isLast }: { job: (typeof JOBS)[number]; isLast: boolean }) {
  return (
    <article
      className="relative mx-auto box-border flex w-full min-w-0 max-w-full flex-col overflow-hidden rounded-none bg-white pt-6 shadow-[0px_7px_8px_0px_rgba(0,0,0,0.12)] transition-shadow hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.16)] sm:pt-7 lg:min-h-[14.739583333333334vw] lg:pt-[1.4583333333333333vw] lg:shadow-[0px_0.36458333333333335vw_0.4166666666666667vw_0px_rgba(0,0,0,0.12)] lg:hover:shadow-[0px_0.5208333333333334vw_0.7291666666666666vw_0px_rgba(0,0,0,0.16)]"
      data-node-id="729:29156"
    >
      <div className="min-w-0 flex-1 font-normal text-black">
        <div className="px-4 sm:px-6 lg:pl-[3.3333333333333335vw] lg:pr-[1.9270833333333333vw]">
          <p className={joinJobCardTitle}>{job.title}</p>
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
      <h2 className={joinSectionHeading} data-node-id="729:29274">
        薪酬福利
      </h2>
      <JoinSectionRuleBar className="mt-6 lg:mt-8" data-node-id="924:280" />

      <div className="relative mx-auto mt-10 aspect-[1124/687] w-full min-w-0 overflow-hidden rounded-2xl bg-[#f0f0f0] sm:rounded-[24px] lg:mt-[2.6042vw]">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={fuliAvif} type="image/avif" />
          <source srcSet={fuliWebp} type="image/webp" />
          <img
            src={fuliJpg}
            alt="薪酬福利"
            width={1124}
            height={687}
            className="h-full w-full object-contain object-center"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            sizes="(max-width: 1023px) min(100%,calc(100vw - 48px)), min(100%,calc(100vw*1124/1920))"
          />
        </picture>
      </div>
    </section>
  );
}

function JoinProcessSection() {
  return (
    <section className="mt-12 sm:mt-14 lg:mt-[max(3rem,5vw)]" data-node-id="729:29243">
      <h2 className={joinSectionHeading}>招聘流程</h2>
      <JoinSectionRuleBar className="mt-6 lg:mt-8" data-node-id="924:281" />

      <ol className="mt-10 flex flex-col gap-6 px-2 lg:mt-[2.6042vw] lg:hidden">
        {PROCESS_STEPS.map((step) => (
          <li key={step.id} className="flex gap-4">
            <div
              className={`flex ${joinProcessCircleSize} shrink-0 items-center justify-center rounded-full border-2 border-[#f96d01] bg-white ${joinProcessStepId}`}
            >
              {step.id}
            </div>
            <div className="min-w-0 pt-1">
              {step.lines.map((line, lineIndex) => (
                <p
                  key={`${step.id}-${lineIndex}`}
                  className={`${joinProcessText}${
                    step.id === "03" && lineIndex === 1 ? " whitespace-nowrap" : ""
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <div
        className="mx-auto mt-10 hidden min-w-0 w-full flex-nowrap items-start justify-center gap-0 overflow-x-auto pb-1 lg:mt-[2.6042vw] lg:flex"
        role="presentation"
      >
        {PROCESS_STEPS.map((step, i) => (
          <Fragment key={step.id}>
            <div className="flex w-[min(104px,calc(100vw*104/1920))] shrink-0 flex-col items-center lg:w-[calc(100vw*108/1920)]">
              <div className={`flex ${joinProcessCircleRowH} w-full shrink-0 items-center justify-center`}>
                <div
                  className={`flex ${joinProcessCircleSize} items-center justify-center rounded-full border-2 border-[#f96d01] bg-white ${joinProcessStepId}`}
                >
                  {step.id}
                </div>
              </div>
              <div className="mt-3 w-full text-center lg:mt-[0.7813vw]">
                {step.lines.map((line, lineIndex) => (
                  <p
                    key={`${step.id}-${lineIndex}`}
                    className={`${joinProcessText}${
                      step.id === "03" && lineIndex === 1 ? " whitespace-nowrap" : ""
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            {i < PROCESS_STEPS.length - 1 && (
              <div
                className={`flex ${joinProcessCircleRowH} shrink-0 items-center justify-center -mx-3 lg:-mx-[max(10px,calc(100vw*16/1920))]`}
                aria-hidden
              >
                <div className={`h-0.5 bg-[#f96d01] lg:h-[0.1042vw] ${joinProcessConnectorW}`} />
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
          className="relative shrink-0 overflow-clip rounded-[17px] bg-white p-3 sm:p-3.5 lg:box-border lg:rounded-[0.8854166666666667vw] lg:p-[0.3125vw]"
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
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc((100vw - 48px - 10px) / 2), calc((62.5vw - 0.5208vw) / 2)"
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
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) calc((100vw - 48px - 10px) / 2), calc((62.5vw - 0.5208vw) / 2)"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}

const mainCol = pageMainWidthClassName;

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#f0f0f0] text-[#363636]" data-name="加入我们" data-node-id="729:29148">
      <Navbar />
      {/* job-banner：稿 1920×217；资源至多 3840 宽（2×）+ AVIF/WebP/JPEG */}
      <section className="relative aspect-[1920/217] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={jobBannerAvif} type="image/avif" />
          <source srcSet={jobBannerWebp} type="image/webp" />
          <img
            src={jobBannerJpg}
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
          className={`mt-8 sm:mt-10 lg:mt-[max(3rem,5vw)] ${joinSectionHeading}`}
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
