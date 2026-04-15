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
      className="relative py-20 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,20,0.45), rgba(20,20,20,0.45)), url(${assets.teamBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold text-[#f96d01] md:text-4xl">公司团队</h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="mx-auto h-44 w-44"
              />
              <div className="mt-6 text-2xl font-medium">{member.name}</div>
              <div className="mt-2 text-lg text-white/85">{member.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

