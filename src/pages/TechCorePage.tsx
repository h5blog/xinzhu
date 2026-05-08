import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";
import techBannerAvif from "../images/tech-banner.opt.avif";
import techBannerWebp from "../images/tech-banner.opt.webp";
import techBannerJpg from "../images/tech-banner.opt.jpg";
import techIconAvif from "../images/tech-icon.opt.avif";
import techIconWebp from "../images/tech-icon.opt.webp";
import techIconJpg from "../images/tech-icon.opt.jpg";

/** 1920 稿正文 20px */
const techIntroBody =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.7] tracking-[0.03em] text-black";

const pillBase =
  "flex h-[max(76px,calc(100vw*115/1920))] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-b from-[#ffb85c] to-[#f96d01] px-3 text-center font-['PingFang_SC'] text-[max(16px,calc(100vw*32/1920))] font-semibold leading-tight tracking-[0.03em] text-white shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)]";

export default function TechCorePage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="核心技术" data-node-id="108:28398">
      <Navbar />

      {/* tech-banner：1920×461（源图 3840×922 等比缩放）；固定比例 + object-cover */}
      <section className="relative aspect-[1920/461] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={techBannerAvif} type="image/avif" />
          <source srcSet={techBannerWebp} type="image/webp" />
          <img
            src={techBannerJpg}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={461}
            sizes="100vw"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative mx-auto w-[min(100%-2rem,1145px)] px-0 pb-12 pt-[77px] sm:w-[min(100%-3rem,1145px)] sm:pb-12 md:pb-16 lg:w-[59.6354vw] lg:max-w-none lg:pt-[4.0104vw]">
          <div className="mx-auto w-full">
            <p className={`indent-[2em] ${techIntroBody}`} data-node-id="280:61">
              当前，核聚变正成为全球科技竞争与能源变革的关键战略方向，而人工智能的快速发展，正在显著改写其研发范式。长期以来，聚变研发面临参数空间庞大、等离子体行为高度复杂、控制精度要求极高、实验与试错成本高昂等核心挑战，导致整体推进周期长、研发效率低。我们判断，AI
              不只是聚变研究的辅助工具，而将成为重塑诊断、预测、控制与设计全流程的关键基础设施，推动可控核聚变从依赖经验的探索式研发，加速迈向以智能预测与主动控制为核心的新阶段。
            </p>
            <div
              className="relative z-0 mx-auto mt-8 box-border flex min-h-[24.7396vw] w-full max-w-full flex-col justify-end px-2 pb-6 sm:mt-10 sm:pb-7 md:mt-12 md:pb-8 lg:mt-[2.3958vw] lg:pb-[1.6667vw]"
              data-node-id="297:88"
            >
              <picture className="pointer-events-none absolute left-1/2 top-0 z-0 w-full max-w-[min(100%,49.5833vw)] -translate-x-1/2">
                <source srcSet={techIconAvif} type="image/avif" />
                <source srcSet={techIconWebp} type="image/webp" />
                <img
                  src={techIconJpg}
                  alt=""
                  width={952}
                  height={475}
                  className="h-auto w-full object-contain object-top"
                  sizes="(max-width: 1023px) calc(100vw - 2rem), 49.58vw"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </picture>
              <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-[1.25vw]">
                <div className={`${pillBase} w-full max-w-[176px] lg:w-[9.1667vw] lg:max-w-none`} data-node-id="297:96">
                  强化学习
                </div>
                <div className={`${pillBase} w-full max-w-[217px] lg:w-[11.3021vw] lg:max-w-none`} data-node-id="310:43">
                  生成式模型
                </div>
                <div className={`${pillBase} w-full max-w-[256px] lg:w-[13.3333vw] lg:max-w-none`} data-node-id="310:44">
                  自进化智能体
                </div>
                <div className={`${pillBase} w-full max-w-[176px] lg:w-[9.1667vw] lg:max-w-none`} data-node-id="310:42">
                  算子学习
                </div>
              </div>
            </div>

            <p className={`mt-10 indent-[2em] sm:mt-12 md:mt-14 lg:mt-[2.9167vw] ${techIntroBody}`} data-node-id="297:87">
              基于这一判断，新烛时代于 2025 年 9
              月成立，致力于以人工智能破解核聚变领域最关键的控制与预测难题。公司以强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 +
              数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力。我们的目标，是为未来聚变反应堆打造专属的“智能操作系统”，将分散、模糊、依赖专家经验的知识与流程，沉淀为可复制、可量化、可部署的智能能力，持续提升聚变研发效率，降低研发成本，加速聚变能源走向工程化与商业化。
            </p>

            <div className="mt-10 flex justify-center sm:mt-12 md:mt-14" data-node-id="299:103">
              <div
                className="flex h-[76px] w-full max-w-[572px] items-center justify-center rounded-full px-4 text-center text-[17px] font-semibold leading-tight text-white shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)] sm:h-[82px] sm:text-[22px] md:h-[86px] md:text-[26px] lg:h-[4.4792vw] lg:max-w-[29.7917vw] lg:text-[1.6667vw]"
                style={{
                  background:
                    "linear-gradient(180deg, #fd7e94 0%, #1e4ca9 87.5%, #1e4ca9 99.52%)",
                }}
              >
                “物理 + 数据”双轮驱动的技术体系
              </div>
            </div>

            <div className="mt-10 flex justify-center sm:mt-12 md:mt-14" data-node-id="297:86">
              <img
                src={assets.jishuB}
                alt="核心技术体系示意图"
                width={1132}
                height={483}
                className="mx-auto h-auto w-full max-w-[1132px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
