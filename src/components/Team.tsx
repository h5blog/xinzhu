import { Link } from "react-router-dom";
import { pageMainMaxWidthClassName } from "../constants/contentAlign";
import { homeDetailCtaInteractionClasses } from "../constants/homeDetailCta";
import teamBgAvif from "../images/team-bg.opt.avif";
import teamBgWebp from "../images/team-bg.opt.webp";
import teamBgJpg from "../images/team-bg.opt.jpg";
import homeZwAvif from "../images/home-zw.opt.avif";
import homeZwWebp from "../images/home-zw.opt.webp";
import homeZwJpg from "../images/home-zw.opt.jpg";
import homeWyAvif from "../images/home-wy.opt.avif";
import homeWyWebp from "../images/home-wy.opt.webp";
import homeWyJpg from "../images/home-wy.opt.jpg";
import homeWgAvif from "../images/home-wg.opt.avif";
import homeWgWebp from "../images/home-wg.opt.webp";
import homeWgJpg from "../images/home-wg.opt.jpg";
import homeLtyAvif from "../images/home-lty.opt.avif";
import homeLtyWebp from "../images/home-lty.opt.webp";
import homeLtyJpg from "../images/home-lty.opt.jpg";

/** 稿 187px 圆头像 @1920；图源 374×375。大屏与首页引言同类：随 vw 同比放大，上限 374 不超图源 */
const TEAM_AVATAR_W = 374;
const TEAM_AVATAR_H = 375;

const teamMembers = [
  { name: "张 伟", title: "首席执行官", avif: homeZwAvif, webp: homeZwWebp, jpg: homeZwJpg },
  { name: "汪 跃", title: "首席技术官", avif: homeWyAvif, webp: homeWyWebp, jpg: homeWyJpg },
  { name: "吴 果", title: "首席运营官", avif: homeWgAvif, webp: homeWgWebp, jpg: homeWgJpg },
  { name: "刘铁岩", title: "首席科学顾问", avif: homeLtyAvif, webp: homeLtyWebp, jpg: homeLtyJpg },
] as const;

export default function Team() {
  return (
    <section className="relative py-20 text-white lg:py-[4.17vw]" data-name="创始团队">
      <picture className="pointer-events-none absolute inset-0 z-0 block h-full w-full">
        <source srcSet={teamBgAvif} type="image/avif" />
        <source srcSet={teamBgWebp} type="image/webp" />
        <img
          src={teamBgJpg}
          alt=""
          width={1920}
          height={587}
          className="block h-full w-full object-cover object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="low"
          decoding="async"
          aria-hidden
        />
      </picture>
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-[rgba(20,20,20,0.45)]"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full min-w-0 px-4 sm:px-5 lg:px-0">
        <div className={pageMainMaxWidthClassName}>
          <h2 className="type-title-xl text-center text-[#f96d01]">创始团队</h2>

          <div className="mt-14 grid min-w-0 gap-8 sm:grid-cols-2 lg:mt-[3.65vw] lg:grid-cols-4 lg:gap-[1.67vw]">
            {teamMembers.map((member) => (
              <div key={member.name} className="min-w-0 text-center">
                <div className="group/avatar mx-auto flex w-full min-w-0 justify-center px-1 sm:px-0">
                  <picture className="block w-full max-w-[clamp(10rem,44vw,11.5rem)] lg:max-w-[min(374px,max(10rem,calc(100vw*187/1920)))]">
                    <source srcSet={member.avif} type="image/avif" />
                    <source srcSet={member.webp} type="image/webp" />
                    <img
                      src={member.jpg}
                      alt={member.name}
                      width={TEAM_AVATAR_W}
                      height={TEAM_AVATAR_H}
                      sizes="(max-width: 1023px) min(90vw, 11.5rem), min(374px, calc(100vw * 187 / 1920))"
                      style={{ borderRadius: "100%" }}
                      className="mx-auto block aspect-square h-auto w-full max-w-full origin-center object-contain object-center transition-transform duration-200 ease-out group-hover/avatar:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover/avatar:scale-100"
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
      </div>
    </section>
  );
}
