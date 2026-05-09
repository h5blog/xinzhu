import { Link } from "react-router-dom";
import { homeDetailCtaInteractionClasses } from "../constants/homeDetailCta";
import { assets } from "./assets";
import team1Avif from "../images/team-1.opt.avif";
import team1Webp from "../images/team-1.opt.webp";
import team1Jpg from "../images/team-1.opt.jpg";
import team2Avif from "../images/team-2.opt.avif";
import team2Webp from "../images/team-2.opt.webp";
import team2Jpg from "../images/team-2.opt.jpg";
import team3Avif from "../images/team-3.opt.avif";
import team3Webp from "../images/team-3.opt.webp";
import team3Jpg from "../images/team-3.opt.jpg";
import team4Avif from "../images/team-4.opt.avif";
import team4Webp from "../images/team-4.opt.webp";
import team4Jpg from "../images/team-4.opt.jpg";

const teamMembers = [
  { name: "张 伟", title: "首席执行官", avif: team1Avif, webp: team1Webp, jpg: team1Jpg },
  { name: "汪 跃", title: "首席技术官", avif: team2Avif, webp: team2Webp, jpg: team2Jpg },
  { name: "吴 果", title: "首席运营官", avif: team3Avif, webp: team3Webp, jpg: team3Jpg },
  { name: "刘铁岩", title: "首席科学顾问", avif: team4Avif, webp: team4Webp, jpg: team4Jpg },
] as const;

export default function Team() {
  return (
    <section
      className="relative py-20 text-white lg:py-[4.17vw]"
      style={{
        backgroundImage: `linear-gradient(rgba(20,20,20,0.45), rgba(20,20,20,0.45)), url(${assets.teamBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto w-[min(100%-24px,1213px)] px-6 lg:w-[63.18vw] lg:max-w-none">
        <h2 className="type-title-xl text-center text-[#f96d01]">创始团队</h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:mt-[3.65vw] lg:grid-cols-4 lg:gap-[1.67vw]">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="group/avatar mx-auto w-fit">
                <picture className="block">
                  <source srcSet={member.avif} type="image/avif" />
                  <source srcSet={member.webp} type="image/webp" />
                  <img
                    src={member.jpg}
                    alt={member.name}
                    width={187}
                    height={187}
                    style={{ borderRadius: "100%" }}
                    className="mx-auto h-44 w-44 origin-center object-cover object-center transition-transform duration-200 ease-out group-hover/avatar:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover/avatar:scale-100 lg:h-[9.17vw] lg:w-[9.17vw]"
                    loading="eager"
                    fetchPriority="low"
                    decoding="async"
                  />
                </picture>
              </div>
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
            className={`inline-flex min-w-[6.78em] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[1.0833em] bg-[#F96D01] px-[1.1111em] py-[0.6111em] text-center font-['PingFang_SC'] text-[17px] font-medium leading-none text-white tracking-[0.16em] sm:text-[18px] lg:text-[1.0417vw] ${homeDetailCtaInteractionClasses} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70`}
          >
            查看详情
          </Link>
        </div>
      </div>
    </section>
  );
}
