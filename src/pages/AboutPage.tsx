import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutIntroIllustration from "../components/AboutIntroIllustration";
import { assets } from "../components/assets";
import aboutHeroAvif from "../images/about-hero-bg.opt.avif";
import aboutHeroWebp from "../images/about-hero-bg.opt.webp";
import aboutHeroJpg from "../images/about-hero-bg.opt.jpg";
import gjAvif from "../images/gj.opt.avif";
import gjWebp from "../images/gj.opt.webp";
import gjJpg from "../images/gj.opt.jpg";

const heroGradient =
  "linear-gradient(90deg, rgba(255, 111, 0, 0.68) 0%, rgba(0, 0, 0, 0.5) 28.846%, rgba(0, 0, 0, 0.5) 73.077%, rgba(255, 111, 0, 0.68) 100%)";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="关于我们" data-node-id="34:90">
      <Navbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <picture className="block w-full">
            <source srcSet={aboutHeroAvif} type="image/avif" />
            <source srcSet={aboutHeroWebp} type="image/webp" />
            <img
              src={aboutHeroJpg}
              alt=""
              width={1920}
              height={698}
              className="block h-auto w-full max-w-none"
              data-node-id="97:55"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
          <div
            className="pointer-events-none absolute inset-0"
            data-node-id="97:56"
            style={{ backgroundImage: heroGradient }}
            aria-hidden
          />
          <div className="absolute inset-0 z-10 mx-auto flex max-w-[750px] flex-col items-start px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:max-w-[39.0625vw] lg:pb-[8.3333vw] lg:pt-[6.875vw]">
            <h1
              className="text-left text-[36px] font-semibold leading-tight tracking-[0.08em] text-white sm:text-[48px] lg:text-[3.3333vw]"
              data-node-id="98:260"
            >
              关 于 我 们....
            </h1>
            <div
              className="mt-10 inline-flex w-auto max-w-full items-center justify-center bg-[#f96d01] px-4 py-3 sm:mt-12 sm:px-5 sm:py-3 lg:min-w-[24.0104vw] lg:px-[1.0417vw] lg:py-[0.625vw]"
              data-node-id="98:261"
            >
              <div
                className="flex items-center justify-center gap-2 whitespace-nowrap sm:gap-[11px]"
                data-node-id="98:213"
              >
                <span
                  className="whitespace-nowrap text-[22px] font-medium tracking-[0.08em] text-white sm:text-[28px] lg:text-[1.6667vw]"
                  data-node-id="98:143"
                >
                  AI赋能聚变
                </span>
                <span className="inline-block size-[5px] shrink-0 rounded-full bg-white" data-node-id="98:145" />
                <span
                  className="whitespace-nowrap text-[22px] font-medium tracking-[0.08em] text-white sm:text-[28px] lg:text-[1.6667vw]"
                  data-node-id="98:144"
                >
                  聚变驱动AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto w-[min(100%-24px,915px)] overflow-visible pb-16 lg:w-[47.6563vw] lg:max-w-none lg:pb-24">
        <section className="relative -mt-[4.2vw] overflow-visible lg:-mt-[5.6vw]">
          <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-stretch lg:gap-9">
            <div className="relative z-20 w-[min(100%,662px)] shrink-0 lg:w-[34.4792vw] lg:max-w-none" data-name="Rectangle 140" data-node-id="218:53">
              {/* about-a.png：完整展示，不裁切、不缩放超出容器 */}
              <div className="relative w-full overflow-visible rounded-[27px]">
                <img
                  src={assets.aboutA}
                  alt=""
                  className="pointer-events-none relative z-0 block h-auto w-full max-w-full rounded-[27px]"
                  decoding="async"
                  loading="eager"
                  aria-hidden
                />
                <p
                  className="absolute inset-0 z-10 m-0 box-border overflow-visible px-5 pb-[22px] pt-[58px] font-['PingFang_SC','Microsoft_YaHei',sans-serif] tracking-[0.06em] text-black sm:px-8 sm:pb-[26px] sm:pt-[72px] lg:pl-[3.75vw] lg:pr-[4.5833vw] lg:pb-[1.7708vw] lg:pt-[4.8958vw]"
                  data-node-id="34:92"
                >
                  <span className="mb-2 text-[17px] font-semibold text-[#f96d01] sm:text-[18px] lg:text-[1.0417vw]">
                    新烛时代 (XinZhuAI)
                  </span>
                  <span className="w-full text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:w-[25.3125vw] lg:text-[1.0417vw]">
                    作为国内AI赋能可控核聚变的引领者，通过深度融合物理机理与人工智能技术，致力于打造服务全球聚变能源产业的通用“聚变智能体”。我们为全球聚变研究机构及商业公司提供涵盖设计、模拟到运维控制的全栈式AI解决方案，推动聚变研发从传统的“经验试错”向“智能预测与主动控制”变革，加速全人类迈向聚变能源新时代。
                  </span>
                </p>
              </div>
            </div>
            <div className="relative z-20 hidden shrink-0 lg:mr-5 lg:flex lg:min-h-0 lg:flex-col lg:justify-end lg:self-stretch">
              <div className="lg:-translate-x-[10px] lg:translate-y-[30px]">
                <AboutIntroIllustration />
              </div>
            </div>
          </div>

          <div
            className="relative z-10 -mt-8 w-full min-h-[235px] overflow-visible rounded-[27px] bg-[#f96d01] lg:-mt-[8.3333vw] lg:h-[12.2396vw] lg:min-h-0"
            data-node-id="218:54"
          />
        </section>
        <div className="mx-auto mt-16 w-[min(100%-24px,787px)] grid gap-12 sm:mt-20 lg:mt-24 lg:w-[40.9896vw] lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center text-center lg:items-center" data-node-id="234:40">
            <img
              src={assets.aboutRouteIcon}
              alt=""
              className="mb-4 h-[72px] w-auto shrink-0 object-contain sm:h-[80px] lg:h-[4.21875vw] lg:w-auto"
              data-node-id="245:99"
              loading="lazy"
              decoding="async"
            />
            <p className="m-0 text-[20px] font-semibold leading-normal text-[#f96d01] sm:text-[22px] lg:text-[1.25vw]" data-node-id="234:40">
              我们的路线
            </p>
            <p className="mt-2 text-[16px] leading-normal text-[#f96d01] sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]">
              打造聚变的 “智能操作系统”
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-center" data-node-id="234:41">
            <img
              src={assets.aboutPositionIcon}
              alt=""
              className="mb-4 h-[72px] w-auto shrink-0 object-contain sm:h-[80px] lg:h-[4.21875vw] lg:w-auto"
              data-node-id="245:124"
              loading="lazy"
              decoding="async"
            />
            <p className="m-0 text-[20px] font-semibold leading-normal text-[#f96d01] sm:text-[22px] lg:text-[1.25vw]">新烛时代的定位</p>
            <p className="mx-auto mt-2 w-full max-w-[min(100%,288px)] text-[16px] leading-normal text-[#f96d01] sm:text-[18px] md:text-[19px] lg:max-w-none lg:text-[1.0417vw]">
              我们不造硬件，我们打造驱动硬件的“智慧大脑”。
            </p>
          </div>
        </div>

        <div className="mx-auto mt-10 w-[min(100%-24px,842px)] space-y-4 text-[16px] leading-[1.7] tracking-[0.04em] text-black sm:mt-12 sm:text-[18px] md:text-[19px] lg:w-[43.8542vw] lg:max-w-none lg:text-[1.0417vw]" data-node-id="234:43">
          <p>
            如果说全球聚变公司正在建造性能强大的“CPU”裸机，新烛时代要做的，就是为所有聚变装置打造一个可移植、可扩展、可进化的“智能操作系统”。
          </p>
          <p>但这不仅仅是算法的堆砌，而是对物理世界的深度重构。</p>
          <p>
            在底层架构上，我们集结了强化学习、生成式模型、智能体技术与算子学习等前沿AI战力，并引入不确定性估计来构筑安全边界。我们以
            <span className="font-semibold text-[#f96d01]">“工程痛点”为导向</span>
            ，以
            <span className="font-semibold text-[#f96d01]">“物理先验”为基石</span>
            ，构建起一个
            <span className="font-semibold text-[#f96d01]">“物理+数据”双轮驱动的强大内核</span>。
          </p>
          <p>我们将以标准化的智能服务赋能全行业，让每一台昂贵的聚变装置都能在我们的系统支持下高效运转。</p>
          <p>
            而放眼终局，这套系统将成为未来聚变电厂真正的“灵魂”。
            <br />
            <br />
          </p>
          <p>
            当万亿级的聚变能源市场开启，那些由钢筋混凝土与超导磁体构成的庞大躯壳，都需要一颗智慧的心脏来驾驭。
          </p>
        </div>

        <section className="mx-auto mt-16 w-[min(100%-24px,842px)] sm:mt-20 lg:w-[43.8542vw] lg:max-w-none" data-node-id="245:67">
          <h2 className="text-[30px] font-semibold leading-tight tracking-[0.08em] text-[#f96d01] md:text-[36px] lg:text-[2.0833vw]">我们的目标</h2>
          <div className="mt-3 h-0.5 w-[231px] max-w-full bg-[#f96d01] lg:w-[12.0313vw]" data-node-id="297:80" aria-hidden />
          <p className="mt-6 text-[16px] leading-[1.7] tracking-[0.04em] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]" data-node-id="245:66">
            是让这套智能系统从实验室的辅助工具，进化为驱动聚变电厂硬件运行的神经中枢，在每一次能量的脉动中，贡献源自“新烛”的驱动力！
          </p>

          <div className="mt-8 w-full sm:mt-10">
            <picture className="mx-auto block w-full max-w-[800px] lg:max-w-[41.6667vw]">
              <source srcSet={gjAvif} type="image/avif" />
              <source srcSet={gjWebp} type="image/webp" />
              <img
                src={gjJpg}
                alt="从实验室辅助工具到驱动聚变电厂硬件运行的神经中枢"
                width={1600}
                height={200}
                className="h-auto w-full object-contain"
                data-node-id="245:70"
                sizes="(max-width: 1023px) min(100vw - 24px, 800px), min(41.6667vw, 800px)"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </section>

        <div className="mx-auto mt-16 w-[min(100%-24px,851px)] grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-4 lg:w-[44.3229vw] lg:max-w-none lg:gap-5">
          <div className="aspect-[406/305] w-full overflow-hidden">
            <img
              src={assets.aboutGrid1}
              alt=""
              className="h-full w-full object-cover"
              data-node-id="262:40"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div
            className="aspect-[406/305] w-full bg-[#393939]"
            data-node-id="218:56"
            aria-hidden
          />
          <div
            className="aspect-[406/305] w-full bg-[#f96d01]"
            data-node-id="295:74"
            aria-hidden
          />
          <div className="aspect-[406/305] w-full overflow-hidden">
            <img
              src={assets.aboutGrid2}
              alt=""
              className="h-full w-full object-cover"
              data-node-id="262:41"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
