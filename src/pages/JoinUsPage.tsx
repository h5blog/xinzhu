import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";
import { Link } from "react-router-dom";
import { JOBS } from "../data/jobs";

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

/** 标签 + 长正文：换行后与首行「正文」左缘对齐，而非顶到「标签」下方 */
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
    <div className={`flex min-w-0 items-start gap-1 text-[20px] leading-[30px] text-black ${className}`}>
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
      className="inline-flex h-10 w-[152px] shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-[25px] bg-[#f96d01] px-3 text-[16px] font-normal leading-[30px] text-white transition hover:opacity-95"
    >
      查看招聘详情
      <span className="inline-flex size-[22px] shrink-0 items-center justify-center rounded-full border border-white/90">
        <img src={assets.joinArrow} alt="" className="h-2.5 w-2.5 object-contain" />
      </span>
    </span>
  );
}

function JobCard({ job }: { job: (typeof JOBS)[number] }) {
  return (
    <Link to={`/join/${job.id}`} className="group block">
      <article
        className="relative mx-auto box-border h-[283px] w-[1117px] max-w-full overflow-y-auto rounded-lg bg-white pt-[28px] shadow-[0px_7px_8px_0px_rgba(0,0,0,0.12)] transition-shadow group-hover:shadow-[0px_10px_14px_0px_rgba(0,0,0,0.16)]"
        data-node-id="108:28073"
      >
        <div className="min-w-0 font-normal text-black" data-node-id="108:146">
        <div className="pl-[64px] pr-[37px]">
          <p className="m-0 text-[24px] font-semibold leading-[30px] text-[#f96d01]">{job.title}</p>
        </div>
        <div className="mx-[26px] mt-3 h-px bg-[#f96d01]" aria-hidden />
        <div className="mt-4 pl-[64px] pr-[37px]">
          <JobLabeledBlock label="岗位职责：" text={job.duty} />
          <JobLabeledBlock label="岗位要求：" text={job.requirement} className="mt-[30px]" />
          <div className="mt-[30px] grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_152px] sm:items-center sm:gap-x-6">
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

      <section className="relative h-[217px] w-full overflow-hidden" data-node-id="108:82">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            alt=""
            src={assets.joinHeroBg}
            className="absolute max-w-none"
            style={{
              height: "589.93%",
              width: "100%",
              left: "0.01%",
              top: "-283.86%",
            }}
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          data-node-id="108:28071"
          aria-hidden
        />
        <div className="relative mx-auto flex h-full max-w-[1200px] flex-col justify-end px-4 pb-8 sm:px-6">
          <h1
            className="m-0 font-semibold leading-none text-white"
            style={{ fontSize: "clamp(40px, 8vw, 64px)" }}
            data-node-id="218:51"
          >
            Join us
          </h1>
          <div className="relative mt-4 w-[286px] max-w-full">
            <img src={assets.joinLine35} alt="" className="h-1 w-full object-cover" data-node-id="218:52" />
          </div>
          <p className="mt-2 font-semibold leading-tight text-white" style={{ fontSize: "clamp(24px, 4vw, 36px)" }} data-node-id="218:50">
            岗位需求
          </p>
        </div>
      </section>

      <main className="mx-auto w-full max-w-[1117px] px-0 pb-16 pt-10 lg:pb-24">
        <h2
          className="mb-6 px-4 font-semibold leading-[30px] text-black sm:px-6"
          style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
          data-node-id="108:145"
        >
          岗位需求
        </h2>

        <div className="flex flex-col gap-5">
          {JOBS.map((job) => (
            <JobCard key={job.title} job={job} />
          ))}
        </div>

        <section
          className="relative mt-12 box-border flex w-full flex-col gap-8 overflow-hidden rounded-[24px] border-[3px] border-[#f96d01] bg-[#f96d01] px-4 pb-8 pt-[28px] md:h-[286px] md:max-w-[1117px] md:flex-row md:items-center md:justify-between md:gap-0 md:pb-[28px] md:pl-[283px] md:pr-[334px] md:pt-[28px]"
          data-node-id="439:663"
        >
          <div className="flex min-w-0 flex-1 flex-col items-center gap-4 text-center md:items-start md:text-left">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold leading-[30px] text-white underline decoration-solid underline-offset-4 text-[32px] md:text-[40px]"
              data-node-id="418:49"
            >
              网申链接
            </a>
            <p className="m-0 font-semibold leading-[30px] text-white text-[32px] md:text-[40px]" data-node-id="418:55">
              或
            </p>
            <p className="m-0 font-semibold leading-[30px] text-white text-[32px] md:text-[40px]" data-node-id="270:30">
              简历投递二维码
            </p>
          </div>
          <div className="flex shrink-0 justify-center md:justify-end">
            <div className="rounded-[17px] bg-white p-3 shadow-sm" data-node-id="418:50">
              <div className="h-[156px] w-[152px] overflow-hidden rounded-[14px]" data-node-id="418:47">
                <img src={assets.joinQr} alt="简历投递二维码" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative mt-12 box-border w-full max-w-[1117px] overflow-hidden rounded-[24px] bg-white px-4 pb-12 pt-[28px] shadow-[0px_0px_18px_0px_rgba(0,0,0,0.05)] md:pb-16"
          data-node-id="272:65"
        >
          <h2
            className="text-center font-semibold leading-[30px] text-[#f96d01] sm:text-[36px] md:text-[40px]"
            data-node-id="270:27"
          >
            薪酬福利
          </h2>
          <div
            className="mt-8 flex flex-col gap-[30px] font-normal text-[18px] leading-[30px] text-black sm:text-[20px] md:pl-[200px] md:text-[24px]"
            data-node-id="270:28"
          >
            {BENEFIT_ROWS.map(({ label, text }) => (
              <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-[44px]">
                <div className="flex w-[141px] shrink-0 justify-start">
                  <span
                    className={`box-border inline-flex h-[44px] items-center justify-center rounded-[10px] border border-solid border-[#f96d01] px-1 text-center text-[18px] font-semibold leading-none text-[#f96d01] sm:text-[20px] md:text-[22px] ${label === "竞争力薪酬" ? "w-[141px] md:text-[24px]" : "w-[118px]"}`}
                    {...(label === "竞争力薪酬"
                      ? { "data-node-id": "272:64" as const }
                      : label === "全面保障"
                        ? { "data-node-id": "272:66" as const }
                        : {})}
                  >
                    {label}
                  </span>
                </div>
                <span className="min-w-0 flex-1 leading-[30px] text-black">{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-14" data-node-id="270:29">
            <h2 className="text-center font-semibold leading-[30px] text-[#f96d01] sm:text-[36px] md:text-[40px]">招聘流程</h2>
            <div className="mt-8 flex justify-center">
              <img
                src={assets.job}
                alt="招聘流程：简历投递、初筛、技术面试（1-2 轮）、终面/交流、发放 offer"
                className="mx-auto h-auto w-full max-w-[700px] object-contain"
                data-node-id="270:37"
              />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex max-w-full flex-col items-center gap-[10px] sm:flex-row sm:items-start">
              <div className="h-[305px] w-[406px] max-w-full shrink-0 overflow-hidden">
                <img src={assets.joinFooter1} alt="" className="h-full w-full object-cover" data-node-id="268:14" />
              </div>
              <div className="h-[305px] w-[406px] max-w-full shrink-0 overflow-hidden">
                <img src={assets.joinFooter2} alt="" className="h-full w-full object-cover" data-node-id="268:15" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
