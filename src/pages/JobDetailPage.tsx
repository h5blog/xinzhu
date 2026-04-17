import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { JOBS } from "../data/jobs";
import joinHeroBgAvif from "../images/join-hero-bg.opt.avif";
import joinHeroBgWebp from "../images/join-hero-bg.opt.webp";
import joinHeroBgJpg from "../images/join-hero-bg.opt.jpg";

function DetailBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <section className="mt-8">
      <div className="inline-flex h-[44px] min-w-[103px] items-center justify-center bg-[#f96d01] px-5 text-[20px] font-semibold leading-[41px] text-white">
        {label}
      </div>
      <div className="mt-3 space-y-0 text-[20px] leading-[41px] text-black">
        {items.map((item) => (
          <p key={item} className="m-0">
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

      <section className="relative h-[217px] w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={joinHeroBgAvif} type="image/avif" />
            <source srcSet={joinHeroBgWebp} type="image/webp" />
            <img
              alt=""
              src={joinHeroBgJpg}
              className="absolute max-w-none"
              style={{ height: "589.93%", width: "100%", left: "0.01%", top: "-283.86%" }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          aria-hidden
        />
      </section>

      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-6 lg:pb-24">
        <h1 className="text-[28px] font-semibold leading-[30px] text-black md:text-[32px]">{job.title}</h1>
        <div className="mt-6 h-0.5 w-full bg-[#f96d01]" aria-hidden />

        <DetailBlock label="岗位使命" items={[job.mission]} />
        <DetailBlock label="岗位职责" items={job.duties.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="岗位要求" items={job.requirements.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="优先条件" items={job.preferred.map((d, i) => `${i + 1}、${d}`)} />
        <DetailBlock label="岗位地点" items={[job.location]} />

        <div className="mt-10 flex justify-end">
          <Link to="/join" className="text-[20px] leading-normal text-black hover:text-[#f96d01]">
            返回招聘列表
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
