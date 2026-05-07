import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { JOB_APPLY_FORM_URL, JOBS } from "../data/jobs";
import joinHeroBgAvif from "../images/join-hero-bg.opt.avif";
import joinHeroBgWebp from "../images/join-hero-bg.opt.webp";
import joinHeroBgJpg from "../images/join-hero-bg.opt.jpg";

function DetailBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-6 sm:mt-8 lg:mt-[2.0833vw]">
      <div className="inline-flex min-h-[40px] max-w-full items-center justify-center bg-[#f96d01] px-4 py-2 text-[16px] font-semibold leading-snug text-white sm:min-h-[44px] sm:px-5 sm:text-[18px] sm:leading-normal md:text-[19px] lg:min-h-[2.2917vw] lg:px-[1.0417vw] lg:py-[0.4167vw] lg:text-[1.0417vw]">
        {label}
      </div>
      <div className="mt-2 space-y-0 text-[16px] leading-[1.7] text-black sm:mt-3 sm:text-[18px] sm:leading-[1.75] md:text-[19px] md:leading-[1.75] lg:mt-[0.78125vw] lg:text-[1.0417vw] lg:leading-[2.1354vw]">
        {items.map((item) => (
          <p key={item} className="m-0 hyphens-none [overflow-wrap:anywhere]">
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}

export default function JobDetailPage() {
  const { jobId } = useParams();
  const job = JOBS.find((item) => item.id === jobId);
  if (!job) return <Navigate to="/join" replace />;

  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="职位详情" data-node-id="113:221">
      <Navbar />

      {/** 高度与新闻详情头图一致：小屏不低于 180px，大屏按 217/1920 比例 */}
      <section className="relative h-[max(180px,11.3021vw)] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={joinHeroBgAvif} type="image/avif" />
            <source srcSet={joinHeroBgWebp} type="image/webp" />
            <img
              alt=""
              src={joinHeroBgJpg}
              width={1920}
              height={1080}
              className="h-full w-full object-cover object-center"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          aria-hidden
        />
      </section>

      {/** 大屏按 1127/1920 比例拉宽；去掉 max-w，超宽显示器不再卡在 1127px */}
      <main className="mx-auto box-border w-[min(100%-32px,1127px)] px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-6 md:px-8 lg:w-[58.697916666666664vw] lg:max-w-none lg:px-[2.0833vw] lg:pb-[6.25vw] lg:pt-[1.875vw]">
        <h1 className="text-[20px] font-semibold leading-snug text-black sm:text-[24px] sm:leading-snug md:text-[28px] md:leading-tight lg:text-[1.6667vw] lg:leading-tight [overflow-wrap:anywhere]">
          {job.title}
        </h1>
        <div
          className="mt-4 h-0.5 w-full bg-[#f96d01] sm:mt-5 lg:mt-[1.5625vw] lg:h-[min(0.15625vw,4px)] lg:min-h-[2px]"
          aria-hidden
        />

        <DetailBlock label="岗位使命" items={[job.mission]} />
        <DetailBlock label="岗位职责" items={job.duties.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="岗位要求" items={job.requirements.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="优先条件" items={job.preferred.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="岗位地点" items={[job.location]} />

        {/** 立即投递：1920 稿 235×61；lg 用纯 vw + clamp，避免视口小于 1920 时仍锁 235px 导致相对主栏偏大 */}
        <div className="mt-8 flex w-full min-w-0 flex-col gap-5 sm:mt-10 lg:mt-[3.125vw] lg:gap-6">
          <div className="flex w-full justify-end">
            <Link
              to="/join"
              className="text-right text-[16px] leading-normal text-black [overflow-wrap:anywhere] hover:text-[#f96d01] sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]"
            >
              返回招聘列表
            </Link>
          </div>
          <div className="flex w-full justify-center">
            <a
              href={JOB_APPLY_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="box-border inline-flex h-[52px] w-full max-w-[min(100%,280px)] shrink-0 items-center justify-center whitespace-nowrap rounded-[20px] bg-[#f96d01] px-6 font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[17px] font-semibold leading-none text-white no-underline shadow-[0px_4px_12px_0px_#f96d01] transition-opacity hover:opacity-95 sm:h-[61px] sm:w-[235px] sm:max-w-none sm:rounded-[24px] sm:px-8 sm:text-[20px] sm:shadow-[0px_5px_14px_0px_#f96d01] lg:h-[clamp(48px,3.1770833333333335vw,96px)] lg:w-[clamp(168px,12.239583333333334vw,400px)] lg:max-w-none lg:px-[1.25vw] lg:text-[clamp(16px,1.0417vw,22px)] lg:shadow-[0px_0.26041666666666666vw_0.7291666666666666vw_0px_#f96d01]"
              data-node-id="936:421"
            >
              立 即 投 递
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
