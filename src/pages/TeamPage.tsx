import Footer from "../components/Footer";
import TeamMemberTextPanel from "../components/TeamMemberTextPanel";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import teamBannerAvif from "../images/team-banner-bg.opt.avif";
import teamBannerWebp from "../images/team-banner-bg.opt.webp";
import teamBannerJpg from "../images/team-banner-bg.opt.jpg";

/** 1920 稿 20px；简介行高略紧于首页正文 */
const teamBioText =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.55] tracking-[0.03em] text-black";

const teamNameText =
  "whitespace-pre-wrap break-words font-['PingFang_SC'] text-[max(18px,calc(100vw*32/1920))] font-semibold leading-tight tracking-[0.03em] text-[#121212]";

const teamTitleText =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] font-semibold leading-tight tracking-[0.03em] text-[#121212]";

const members = [
  {
    name: "张 伟",
    title: "首席执行官",
    avatar: assets.zw,
    imageLeft: true,
    bio: [
      "清华大学工程物理系，拥有十余年跨国企业市场营销管理经验。",
      "近八年专注于科技成果转化与投融资领域，成功推动多项高新技术项目落地并实现资本对接。",
    ],
  },
  {
    name: "汪 跃",
    title: "首席技术官",
    avatar: assets.wy,
    imageLeft: false,
    bio: [
      "北京交通大学信息与计算科学本科，概率论与数理统计专业博士学位，博士生导师为马志明院士。",
      "主要从事人工智能、强化学习等方面研究工作，研究重点包括强化学习的基础理论，算法创新，以及在大模型和科学智能中的相关应用。",
      "曾任微软亚洲研究院科学智能中心高级研究员，现北京中关村学院研究员。",
    ],
  },
  {
    name: "吴 果",
    title: "首席运营官",
    avatar: assets.wg,
    imageLeft: true,
    bio: [
      "本科毕业于英属哥伦比亚大学，清华大学硕博士经济学背景。",
      "在多年的创业实战历程中，充分将学术知识与实践紧密结合。深入参与公司战略规划，制定可落地的具体战略计划，不仅积累了丰富的商业战略，还有着企业管理经验。",
    ],
  },
  {
    name: "刘铁岩",
    title: "首席科学顾问",
    avatar: assets.lty,
    imageLeft: false,
    bio: [
      "刘铁岩，现任北京中关村学院院长，北京中关村学院党委书记，中关村人工智能研究院理事长。",
      "曾任微软亚洲研究院副院长、微软科学智能研究院首席科学家。国际电气与电子工程师学会会士、国际计算机学会会士、亚太人工智能学会会士。",
    ],
  },
] as const;

function MemberBody({ bio }: { bio: readonly string[] }) {
  return (
    <ul className={`m-0 list-none space-y-2 pl-0 lg:space-y-[min(8px,0.4167vw)] ${teamBioText}`}>
      {bio.map((para, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#f96d01]" aria-hidden />
          <span>{para}</span>
        </li>
      ))}
    </ul>
  );
}

function MemberHeading({ name, title }: { name: string; title: string }) {
  const displayName = name.replace(" ", "  ");

  return (
    <div>
      <p className={teamNameText}>{displayName}</p>
      <p className={`mt-3 sm:mt-[18px] lg:mt-[0.9375vw] ${teamTitleText}`}>{title}</p>
      <div
        className="mt-2 h-1.5 w-[96px] max-w-full bg-gradient-to-r from-[#f96d01] to-transparent sm:h-2 sm:w-[113px] lg:w-[5.8854vw]"
        aria-hidden
      />
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-node-id="103:299">
      <Navbar />
      <section className="relative aspect-[3840/434] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={teamBannerAvif} type="image/avif" />
          <source srcSet={teamBannerWebp} type="image/webp" />
          <img
            src={teamBannerJpg}
            alt=""
            className="h-full w-full object-cover object-center"
            width={3840}
            height={434}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>
      <main className="mx-auto box-border w-[min(100%-32px,1248px)] min-w-0 overflow-x-hidden px-4 pb-16 pt-12 sm:w-[min(100%-48px,1248px)] sm:px-6 sm:pb-20 sm:pt-14 md:px-8 md:pt-[72px] lg:w-[65vw] lg:max-w-none lg:px-[2.0833vw] lg:pb-[5.2083vw] lg:pt-[4.0625vw]">
        <h1 className="text-[26px] font-semibold leading-tight text-[#f96d01] sm:text-[30px] md:text-[34px] lg:text-[2.0833vw]">创始团队</h1>

        <div className="mt-6 flex flex-col gap-0 sm:mt-8 lg:mt-[1.5625vw] lg:gap-y-[min(12px,0.625vw)]">
          {members.map((m, index) => (
            <article
              key={m.name}
              className={`group m-0 grid w-full grid-cols-1 gap-y-5 sm:gap-y-6 lg:gap-y-0 lg:items-center ${
                m.imageLeft
                  ? "lg:grid-cols-[13.489583333333334vw_1fr]"
                  : "lg:grid-cols-[1fr_13.489583333333334vw]"
              }`}
            >
              {/** 大屏两列栅格：左/右交替用 col 定位，保证各行左右外缘对齐（避免 flex+max-w 产生单侧留白） */}
              <div
                className={`relative mx-auto aspect-[259/313] w-[clamp(200px,13.489583333333334vw,259px)] max-w-full shrink-0 shadow-none transition-shadow duration-200 group-hover:shadow-[-6px_10px_22px_rgba(0,0,0,0.18),2px_4px_10px_rgba(0,0,0,0.08)] sm:w-[clamp(220px,13.489583333333334vw,259px)] lg:mx-0 lg:w-full lg:max-w-none lg:self-center ${
                  m.imageLeft ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-2 lg:row-start-1"
                }`}
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="block h-full w-full border-0 object-cover object-top outline-none ring-0"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <TeamMemberTextPanel
                className={
                  m.imageLeft
                    ? "lg:col-start-2 lg:row-start-1 lg:self-center lg:justify-self-start"
                    : "lg:col-start-1 lg:row-start-1 lg:self-center lg:justify-self-end"
                }
                edges={index % 2 === 0 ? "top-bottom-right" : "top-bottom-left"}
              >
                <div
                  className={`flex w-full flex-col sm:flex-row sm:items-start md:items-center ${
                    m.imageLeft
                      ? "gap-5 sm:gap-5 md:gap-6 lg:gap-[1.0417vw]"
                      : "gap-4 sm:gap-3 md:gap-4 lg:gap-[0.5208vw]"
                  }`}
                >
                  <div
                    className={
                      m.imageLeft
                        ? "w-max max-w-[min(100%,200px)] shrink-0 sm:max-w-[220px] lg:max-w-[9.375vw]"
                        : "w-max max-w-[min(100%,180px)] shrink-0 sm:max-w-[200px] lg:max-w-[7.2917vw]"
                    }
                  >
                    <MemberHeading name={m.name} title={m.title} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <MemberBody bio={m.bio} />
                  </div>
                </div>
              </TeamMemberTextPanel>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
