import { pageMainWidthClassName } from "../constants/contentAlign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import techBanner1xAvif from "../images/tech-banner-1x.opt.avif";
import techBanner1xWebp from "../images/tech-banner-1x.opt.webp";
import techBanner1xJpg from "../images/tech-banner-1x.opt.jpg";
import techIconAvif from "../images/tech-icon.opt.avif";
import techIconWebp from "../images/tech-icon.opt.webp";
import techIconJpg from "../images/tech-icon.opt.jpg";
import jishuBAvif from "../images/jishu-b.opt.avif";
import jishuBWebp from "../images/jishu-b.opt.webp";
import jishuBJpg from "../images/jishu-b.opt.jpg";

/** 1920 稿正文 20px */
const techIntroBody =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.7] tracking-[0.03em] text-black";

/** 核心技术页：橘色四药丸与「物理 + 数据」条共用高度、字号断点 */
const techCoreCtaSize =
  "h-[76px] text-[17px] sm:h-[82px] sm:text-[22px] md:h-[86px] md:text-[26px] lg:h-[4.4792vw] lg:text-[1.6667vw]";

const techCoreCtaDefaultShadow = "shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)]";

/** 四枚橘色药丸：悬停略放大、提亮、同色系光晕；减少动效时保持默认投影（「物理+数据」条不用） */
const techCoreCtaHover =
  "origin-center transition-[filter,box-shadow,transform] duration-200 ease-out hover:scale-[1.03] hover:brightness-[1.06] hover:shadow-[0_8px_22px_-3px_rgba(249,109,1,0.4),0_0_18px_rgba(255,184,92,0.35)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:brightness-100 motion-reduce:hover:shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)]";

const pillBase =
  `flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-b from-[#ffb85c] to-[#f96d01] px-4 text-center font-['PingFang_SC'] font-semibold leading-tight tracking-[0.03em] text-white ${techCoreCtaDefaultShadow} ${techCoreCtaHover} ${techCoreCtaSize}`;

export default function TechCorePage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="核心技术" data-node-id="108:28398">
      <Navbar />

      {/* tech-banner：稿 1920×461；仅 1×1920w */}
      <section className="relative aspect-[1920/461] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source srcSet={techBanner1xAvif} type="image/avif" />
          <source srcSet={techBanner1xWebp} type="image/webp" />
          <img
            src={techBanner1xJpg}
            alt=""
            className="h-full w-full object-cover object-center"
            width={1920}
            height={461}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
            data-node-id="297:83"
          />
        </picture>
      </section>

      <section className="relative overflow-hidden">
        <div
          className={`${pageMainWidthClassName} relative pb-12 pt-9 sm:pb-12 md:pb-16 lg:pt-[1.875vw]`}
        >
          <div className="mx-auto w-full">
            <p
              className={`w-full text-pretty indent-[2em] sm:text-justify ${techIntroBody}`}
              data-node-id="280:61"
            >
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

            <p
              className={`mt-10 w-full text-pretty indent-[2em] sm:mt-12 sm:text-justify md:mt-14 lg:mt-[2.9167vw] ${techIntroBody}`}
              data-node-id="297:87"
            >
              基于这一判断，新烛时代于 2025 年 9
              月成立，致力于以人工智能破解核聚变领域最关键的控制与预测难题。公司以强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 +
              数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力。我们的目标，是为未来聚变反应堆打造专属的“智能操作系统”，将分散、模糊、依赖专家经验的知识与流程，沉淀为可复制、可量化、可部署的智能能力，持续提升聚变研发效率，降低研发成本，加速聚变能源走向工程化与商业化。
            </p>

            <div className="mt-10 flex justify-center sm:mt-12 md:mt-14" data-node-id="299:103">
              <div
                className={`flex w-full max-w-[572px] items-center justify-center rounded-full px-4 text-center font-semibold leading-tight text-white lg:max-w-[29.7917vw] ${techCoreCtaDefaultShadow} ${techCoreCtaSize}`}
                style={{
                  background:
                    "linear-gradient(180deg, #fd7e94 0%, #1e4ca9 87.5%, #1e4ca9 99.52%)",
                }}
              >
                “物理 + 数据”双轮驱动的技术体系
              </div>
            </div>

            <div className="mt-10 flex justify-center sm:mt-12 md:mt-14" data-node-id="297:86">
              <picture className="mx-auto block w-full max-w-[min(100%,calc(100vw*1132/1920))]">
                <source srcSet={jishuBAvif} type="image/avif" />
                <source srcSet={jishuBWebp} type="image/webp" />
                <img
                  src={jishuBJpg}
                  alt="核心技术体系示意图"
                  width={1132}
                  height={483}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 1023px) calc(100vw - 2rem), min(1132px, 58.958333vw)"
                  loading="lazy"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
