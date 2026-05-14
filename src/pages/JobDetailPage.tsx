import { pageMainWidthClassName } from "../constants/contentAlign";
import { Link, Navigate, useParams } from "react-router-dom";
import { jobDetailSectionLabelClassName, newsDetailBodyClassName } from "../constants/typography";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { JOB_APPLY_FORM_URL, JOBS } from "../data/jobs";
import jobDetailBannerAvif from "../images/job-detail-banner.opt.avif";
import jobDetailBannerWebp from "../images/job-detail-banner.opt.webp";
import jobDetailBannerJpg from "../images/job-detail-banner.opt.jpg";
import jobDetailBanner1xAvif from "../images/job-detail-banner-1x.opt.avif";
import jobDetailBanner1xWebp from "../images/job-detail-banner-1x.opt.webp";
import jobDetailBanner1xJpg from "../images/job-detail-banner-1x.opt.jpg";

function DetailBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-6 sm:mt-8 lg:mt-[2.0833vw]">
      <div
        className={`box-border inline-flex w-fit max-w-full shrink-0 items-center justify-center whitespace-nowrap bg-[#f96d01] px-2 text-center sm:px-3 ${jobDetailSectionLabelClassName} min-h-[max(44px,calc(100vw*44/1920))]`}
      >
        {label}
      </div>
      <div className={`mt-2 space-y-0 sm:mt-3 lg:mt-[0.78125vw] ${newsDetailBodyClassName}`}>
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

      {/** job-detail-banner：稿 1920×217；1×1920w + 2×3840w；小屏高度不低于 180px */}
      <section className="relative h-[max(180px,11.3021vw)] w-full overflow-hidden" data-name="banner-wrap">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source
              type="image/avif"
              srcSet={`${jobDetailBanner1xAvif} 1920w, ${jobDetailBannerAvif} 3840w`}
              sizes="100vw"
            />
            <source
              type="image/webp"
              srcSet={`${jobDetailBanner1xWebp} 1920w, ${jobDetailBannerWebp} 3840w`}
              sizes="100vw"
            />
            <img
              alt=""
              src={jobDetailBanner1xJpg}
              srcSet={`${jobDetailBanner1xJpg} 1920w, ${jobDetailBannerJpg} 3840w`}
              sizes="100vw"
              width={1920}
              height={217}
              className="h-full w-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              data-name="banner"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          aria-hidden
        />
      </section>

      {/** 主列与全站一致：最大 1200@1920，小屏带安全边距 */}
      <main className={`${pageMainWidthClassName} pb-12 pt-5 sm:pb-16 sm:pt-6 lg:pb-[6.25vw] lg:pt-[1.875vw]`}>
        <h1 className={`font-semibold [overflow-wrap:anywhere] ${newsDetailBodyClassName}`}>
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
              className={`text-right [overflow-wrap:anywhere] transition-colors hover:text-[#f96d01] ${newsDetailBodyClassName}`}
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
