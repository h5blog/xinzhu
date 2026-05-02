import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";
import { Link } from "react-router-dom";
import { JOBS } from "../data/jobs";
import joinHeroBgAvif from "../images/join-hero-bg.opt.avif";
import joinHeroBgWebp from "../images/join-hero-bg.opt.webp";
import joinHeroBgJpg from "../images/join-hero-bg.opt.jpg";
import joinFooter1Avif from "../images/join-footer-1.opt.avif";
import joinFooter1Webp from "../images/join-footer-1.opt.webp";
import joinFooter1Jpg from "../images/join-footer-1.opt.jpg";
import joinFooter2Avif from "../images/join-footer-2.opt.avif";
import joinFooter2Webp from "../images/join-footer-2.opt.webp";
import joinFooter2Jpg from "../images/join-footer-2.opt.jpg";

const APPLY_URL =
  "https://ecn5wfrohzj8.feishu.cn/share/base/form/shrcnBNsL5EtkP8DOQBKp6T3qac";


/** Figma 270:28：正文区；标签 272:64（141×44）竞争力薪酬；其余 272:66（118×44）；圆角 10px、1px 橘色描边 */
const BENEFIT_ROWS: { label: string; text: string }[] = [
  { label: "竞争力薪酬", text: "提供富有竞争力的薪酬，包含基础工资、年终奖；" },
  { label: "全面保障", text: "六险一金、年度体检、带薪年假、北京户口；" },
  { label: "福利体系", text: "包含餐费补贴、交通补贴、节日福利、探亲补贴；" },
  { label: "成长支持", text: "顶级导师指导、参与前沿项目、鼓励发表论文与专利申请；" },
  { label: "文化氛围", text: "扁平管理、丰富的团建活动与节日福利；" },
  { label: "实习待遇", text: "提供有竞争力的实习津贴及转正优先权；" },
];

/** 标 + 长文：换后与首「文左缘齐，而非顶到「标签下?*/
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
    <div className={`flex min-w-0 items-start gap-1 text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw] ${className}`}>
      <span className="shrink-0 font-semibold">{label}</span>
      <span className="min-w-0 flex-1 text-left hyphens-none [overflow-wrap:anywhere]">
        {text}
      </span>
    </div>
  );
}

function JobApplyButton() {
  return (
    <span
      data-node-id="429:81"
      className="box-border inline-flex min-w-[max(152px,7.92vw)] shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-[25px] bg-[#f96d01] px-5 py-3 text-[17px] font-medium leading-none text-white transition hover:opacity-95 sm:text-[18px] lg:text-[1.0417vw]"
    >
      查看招聘详情
      <span
        className="inline-flex size-[clamp(22px,1.15vw,28px)] shrink-0 items-center justify-center rounded-full border border-white/90 transition-colors duration-200 group-hover:border-white"
        aria-hidden
      >
        <img
          src={assets.joinArrow}
          alt=""
          className="size-[clamp(10px,0.52vw,14px)] object-contain transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </span>
    </span>
  );
}

function JobCard({ job, isLast }: { job: (typeof JOBS)[number]; isLast: boolean }) {
  return (
    <Link to={`/join/${job.id}`} className="group block">
      <article
        className="relative mx-auto box-border min-h-[283px] w-full max-w-full overflow-y-auto rounded-lg bg-white pt-[max(28px,1.46vw)] shadow-none transition-shadow group-hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.16)]"
        data-node-id="108:28073"
      >
        <div className="min-w-0 font-normal text-black" data-node-id="108:146">
        <div className="pl-[64px] pr-[37px]">
          <p className="m-0 text-[22px] font-semibold leading-[1.35] text-[#f96d01] sm:text-[24px] lg:text-[1.25vw]">{job.title}</p>
        </div>
        <div className="mx-[26px] mt-[max(10px,0.73vw)] h-px bg-[#f96d01]" aria-hidden />
        <div className="mt-[max(16px,0.83vw)] pb-[max(16px,0.83vw)] pl-[64px] pr-[37px]">
          <JobLabeledBlock label="岗位职责：" text={job.duty} />
          <JobLabeledBlock label="岗位要求：" text={job.requirement} className={isLast ? "mt-[6px]" : "mt-[30px]"} />
          <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-x-6">
            <div className="min-w-0 sm:col-start-1">
              <JobLabeledBlock label="岗位地点：" text={job.listLocation} />
            </div>
            <div className="-mt-[20px] flex justify-end sm:col-start-2 sm:justify-self-end">
              <JobApplyButton />
            </div>
          </div>
        </div>
        </div>
      </article>
    </Link>
  );
}

export default function JoinUsPage() {
  return (
    <div className="min-h-screen bg-[#f1f1f1] text-[#363636]" data-name="加入我们" data-node-id="108:81">
      <Navbar />

      <section className="relative h-[max(160px,11.3021vw)] w-full overflow-hidden" data-node-id="108:82">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={joinHeroBgAvif} type="image/avif" />
            <source srcSet={joinHeroBgWebp} type="image/webp" />
            <img
              alt=""
              src={joinHeroBgJpg}
              className="absolute max-w-none"
              style={{
                height: "589.93%",
                width: "100%",
                left: "0.01%",
                top: "-283.86%",
              }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          data-node-id="108:28071"
          aria-hidden
        />
        <div className="relative mx-auto flex h-full w-[min(100%-24px,1200px)] flex-col justify-end px-4 pb-7 text-left sm:px-6 sm:pb-8 lg:w-[62.5vw] lg:max-w-none lg:pb-[2.0833vw]">
          <h1
            className="m-0 font-['PingFang_SC'] text-[40px] leading-[1.05] tracking-tight text-white sm:text-[48px] lg:text-[3.3333vw]"
            data-node-id="218:51"
          >
            Join us
          </h1>
          <div className="relative mt-[max(10px,0.5208vw)] w-[min(100%,286px)] max-w-full lg:w-[14.8958vw]" data-node-id="218:52">
            <img src={assets.joinLine35} alt="" className="h-1 w-full object-cover" />
          </div>
          <p
            className="mt-[max(10px,0.5208vw)] font-['PingFang_SC'] text-[24px] leading-[1.2] tracking-[0.06em] text-white sm:text-[28px] lg:text-[1.875vw]"
            data-node-id="218:50"
          >
            岗位需求
          </p>
        </div>
      </section>

      <main className="mx-auto w-[min(100%-24px,1117px)] px-0 pb-16 pt-10 lg:w-[58.1771vw] lg:max-w-none lg:pb-24">
        <h2 className="mb-6 px-4 text-[28px] font-semibold leading-[1.2] text-black sm:px-6 sm:text-[32px] lg:text-[1.6667vw]" data-node-id="108:145">
          岗位需求
        </h2>

        <div className="flex flex-col gap-5">
          {JOBS.map((job, index) => (
            <JobCard key={job.title} job={job} isLast={index === JOBS.length - 1} />
          ))}
        </div>

        <section
          className="relative mt-12 box-border flex w-full max-w-full flex-col gap-8 overflow-hidden rounded-[24px] border-[3px] border-[#f96d01] bg-[#f96d01] px-4 pb-8 pt-[max(28px,1.46vw)] md:min-h-[286px] md:flex-row md:items-center md:justify-between md:gap-0 md:pb-[max(28px,1.46vw)] md:pl-[clamp(24px,14.74vw,283px)] md:pr-[clamp(24px,17.4vw,334px)] md:pt-[max(28px,1.46vw)]"
          data-node-id="439:663"
        >
          <div className="flex min-w-0 flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="font-['PingFang_SC'] text-[28px] font-semibold leading-[1.2] text-white underline decoration-solid underline-offset-4 sm:text-[32px] lg:text-[1.6667vw]"
              data-node-id="418:49"
            >
              网申链接
            </a>
            <p className="m-0 font-['PingFang_SC'] text-[28px] font-semibold leading-[1.2] text-white sm:text-[32px] lg:text-[1.6667vw]" data-node-id="418:55">
              或
            </p>
            <p className="m-0 font-['PingFang_SC'] text-[28px] font-semibold leading-[1.2] text-white sm:text-[32px] lg:text-[1.6667vw]" data-node-id="270:30">
              简历投递二维码
            </p>
          </div>
          <div className="flex shrink-0 justify-center md:justify-end">
            <div className="rounded-[17px] bg-white p-3 shadow-sm lg:p-[0.8333vw]" data-node-id="418:50">
              <div className="h-[156px] w-[152px] overflow-hidden rounded-[14px] lg:h-[10.8333vw] lg:w-[10.5625vw]" data-node-id="418:47">
                <img src={assets.joinQr} alt="简历投递二维码" className="h-full w-full object-cover" loading="lazy" decoding="async" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative mt-12 box-border w-full max-w-full overflow-hidden rounded-[24px] bg-white px-4 pb-12 pt-[max(28px,1.46vw)] shadow-[0px_0px_18px_0px_rgba(0,0,0,0.05)] md:pb-16"
          data-node-id="272:65"
        >
          <h2 className="text-center text-[28px] font-semibold leading-[1.2] text-[#f96d01] sm:text-[32px] lg:text-[1.6667vw]" data-node-id="270:27">
            薪酬福利
          </h2>
          <div
            className="mt-8 flex flex-col gap-[clamp(14px,1.56vw,30px)] text-black md:pl-[clamp(24px,10.42vw,200px)] lg:pl-[10.42vw]"
            data-node-id="270:28"
          >
            {BENEFIT_ROWS.map(({ label, text }) => (
              <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-[44px]">
                <div className="flex shrink-0 justify-start">
                  <span
                    className="box-border inline-flex min-h-[44px] items-center justify-center whitespace-nowrap rounded-[10px] border border-solid border-[#f96d01] px-4 py-1 text-center text-[16px] font-semibold leading-none text-[#f96d01] sm:text-[18px] md:text-[19px] lg:px-[0.8333vw] lg:py-[0.3125vw] lg:text-[1.0417vw]"
                    {...(label === "竞争力薪酬"
                      ? { "data-node-id": "272:64" as const }
                      : label === "全面保障"
                        ? { "data-node-id": "272:66" as const }
                        : {})}
                  >
                    {label}
                  </span>
                </div>
                <span className="min-w-0 flex-1 text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-[max(56px,2.9167vw)]" data-node-id="270:29">
            <h2 className="text-center text-[28px] font-semibold leading-[1.2] text-[#f96d01] sm:text-[32px] lg:text-[1.6667vw]">招聘流程</h2>
            <div className="mt-[max(32px,1.6667vw)] flex justify-center">
              <img
                src={assets.job}
                alt="招聘流程：简历投递、初筛、技术面试（1-2 轮）、终面/交流、发放 offer"
                className="mx-auto h-auto w-[min(100%,700px)] object-contain lg:w-[62.7%] lg:max-w-none"
                data-node-id="270:37"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex max-w-full flex-col items-center gap-[10px] sm:flex-row sm:items-start lg:gap-[0.5208vw]">
              <div className="aspect-[406/305] w-[min(100%,406px)] shrink-0 overflow-hidden lg:w-[21.1458vw]">
                <picture>
                  <source srcSet={joinFooter1Avif} type="image/avif" />
                  <source srcSet={joinFooter1Webp} type="image/webp" />
                  <img src={joinFooter1Jpg} alt="" className="h-full w-full object-cover" data-node-id="268:14" loading="lazy" decoding="async" />
                </picture>
              </div>
              <div className="aspect-[406/305] w-[min(100%,406px)] shrink-0 overflow-hidden lg:w-[21.1458vw]">
                <picture>
                  <source srcSet={joinFooter2Avif} type="image/avif" />
                  <source srcSet={joinFooter2Webp} type="image/webp" />
                  <img src={joinFooter2Jpg} alt="" className="h-full w-full object-cover" data-node-id="268:15" loading="lazy" decoding="async" />
                </picture>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


