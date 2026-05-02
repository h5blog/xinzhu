import Footer from "../components/Footer";
import TeamMemberTextPanel from "../components/TeamMemberTextPanel";
import { assets } from "../components/assets";
import Navbar from "../components/Navbar";
import ourTeamAvif from "../images/our-team.opt.avif";
import ourTeamWebp from "../images/our-team.opt.webp";
import ourTeamJpg from "../images/our-team.opt.jpg";

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
    <ul className="m-0 list-none space-y-3 pl-0 text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]">
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
      <p className="whitespace-pre-wrap break-words text-[30px] font-semibold leading-tight font-['PingFang_SC'] text-[#121212] md:text-[36px] lg:text-[2.0833vw]">
        {displayName}
      </p>
      <p className="mt-[22px] text-[17px] font-semibold font-['PingFang_SC'] text-[#121212] sm:text-[18px] lg:mt-[1.1458vw] lg:text-[1.0417vw]">
        {title}
      </p>
      <div
        className="mt-2 h-2 w-[113px] max-w-full bg-gradient-to-r from-[#f96d01] to-transparent lg:w-[5.8854vw]"
        aria-hidden
      />
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-node-id="103:299">
      <Navbar />

      {/* Figma 103:300 Rectangle 13 — 1920×217 头图；文案 151:100 / Line 151:101 / 151:99；侧栏 117:800–805 */}
      <section
        className="relative h-[max(160px,11.3021vw)] w-full overflow-hidden"
        data-name="Rectangle 13"
        data-node-id="103:300"
      >
        <div className="absolute inset-0 block h-full w-full">
          <picture className="absolute inset-0 block h-full w-full">
            <source srcSet={ourTeamAvif} type="image/avif" />
            <source srcSet={ourTeamWebp} type="image/webp" />
            <img
              src={ourTeamJpg}
              alt=""
              width={1920}
              height={217}
              className="h-full w-full object-cover object-center"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
          data-node-id="103:391"
        />

        <div className="absolute inset-0 text-white">
          <div className="mx-auto flex h-full w-[min(100%-24px,1050px)] flex-col justify-center px-4 text-left sm:px-6 lg:w-[54.6875vw] lg:max-w-none lg:px-0">
            <p
              className="m-0 font-['PingFang_SC'] text-[40px] font-semibold leading-none sm:text-[48px] lg:text-[3.3333vw]"
              data-node-id="151:100"
            >
              OUR TEAM
            </p>
            <p
              className="m-0 -mt-1 font-['PingFang_SC'] text-[24px] font-semibold leading-none sm:text-[30px] lg:text-[1.875vw]"
              data-node-id="151:99"
            >
              创始团队
            </p>
          </div>
        </div>

      </section>

      <main className="mx-auto w-[min(100%-24px,1248px)] px-6 pb-20 pt-[78px] sm:px-8 lg:w-[65vw] lg:max-w-none lg:pt-[4.0625vw]">
        <h1 className="text-[30px] font-semibold leading-tight text-[#f96d01] md:text-[36px] lg:text-[2.0833vw]">我们的团队</h1>

        <div className="mt-[37px] flex flex-col gap-0 lg:mt-[1.9271vw]">
          {members.map((m, index) => (
            <article
              key={m.name}
              className={`group flex flex-col items-stretch gap-0 lg:flex-row lg:items-center ${
                m.imageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              <div
                className="relative mx-auto h-[313px] w-full max-w-[259px] shrink-0 shadow-none transition-shadow duration-200 group-hover:shadow-[-6px_10px_22px_rgba(0,0,0,0.18),2px_4px_10px_rgba(0,0,0,0.08)] lg:mx-0 lg:h-[16.3021vw] lg:w-[13.4896vw]"
              >
                <img
                  src={m.avatar}
                  alt={m.name}
                  className="block h-full w-full border-0 object-cover object-top outline-none ring-0"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <TeamMemberTextPanel edges={index % 2 === 0 ? "top-bottom-right" : "top-bottom-left"}>
                <div className="flex w-full flex-col gap-[30px] sm:flex-row sm:items-center sm:gap-[30px] lg:gap-[1.5625vw]">
                  <div className="w-max max-w-[180px] shrink-0 lg:max-w-[9.375vw]">
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
