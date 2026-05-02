import { Link } from "react-router-dom";
import { assets } from "./assets";

const teamMembers = [
  { name: "张 伟", title: "首席执行官", avatar: assets.team1 },
  { name: "汪 跃", title: "首席技术官", avatar: assets.team2 },
  { name: "吴 果", title: "首席运营官", avatar: assets.team3 },
  { name: "刘铁岩", title: "首席科学顾问", avatar: assets.team4 }
] as const;

export default function Team() {
  return (
    <section
      className="relative py-20 text-white lg:py-[4.17vw]"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,20,0.45), rgba(20,20,20,0.45)), url(${assets.teamBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="mx-auto w-[min(100%-24px,1213px)] px-6 lg:w-[63.18vw] lg:max-w-none">
        <h2 className="type-title-xl text-center text-[#f96d01]">创始团队</h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-[3.65vw] lg:grid-cols-4 lg:gap-[1.67vw]">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.avatar}
                alt={member.name}
                style={{
                  borderRadius: "100%"
                }}
                className="mx-auto h-44 w-44 lg:h-[9.17vw] lg:w-[9.17vw]"
                loading="lazy"
                decoding="async"
              />
              <div className="type-label-md mt-6 font-semibold text-white lg:mt-[1.25vw]">
                {member.name}
              </div>
              <div className="type-body-md mt-2 text-white/85 lg:mt-[0.42vw]">{member.title}</div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center lg:mt-[2.5vw]">
          <Link
            to="/team"
            className="type-label-md inline-flex min-w-[max(122px,6.35vw)] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[19.5px] bg-[#F96D01] px-5 py-2.5 text-center font-['PingFang_SC'] text-white tracking-[4.60px]"
          >
            查看详情
          </Link>
        </div>
      </div>
    </section>
  );
}

