import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutIntroIllustration from "../components/AboutIntroIllustration";
import { assets } from "../components/assets";

const heroGradient =
  "linear-gradient(90deg, rgba(255, 111, 0, 0.68) 0%, rgba(0, 0, 0, 0.5) 28.846%, rgba(0, 0, 0, 0.5) 73.077%, rgba(255, 111, 0, 0.68) 100%)";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="关于我们" data-node-id="34:90">
      <Navbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <img
            src={assets.aboutHeroBg}
            alt=""
            className="block h-auto w-full max-w-none"
            data-node-id="97:55"
            loading="eager"
            decoding="async"
          />
          <div
            className="pointer-events-none absolute inset-0"
            data-node-id="97:56"
            style={{ backgroundImage: heroGradient }}
            aria-hidden
          />
          <div className="absolute inset-0 z-10 mx-auto flex max-w-[750px] flex-col items-start px-4 pb-24 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
            <h1
              className="text-left font-semibold leading-tight tracking-[0.08em] text-white"
              style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
              data-node-id="98:260"
            >
              关 于 我 们....
            </h1>
            <div
              className="mt-10 flex w-full max-w-[461px] items-center justify-center bg-[#f96d01] px-4 py-3 sm:mt-12 sm:h-[69px] sm:py-0"
              data-node-id="98:261"
            >
              <div
                className="flex flex-wrap items-center justify-center gap-2 sm:gap-[11px]"
                data-node-id="98:213"
              >
                <span
                  className="whitespace-nowrap font-medium tracking-[0.08em] text-white"
                  style={{ fontSize: "clamp(22px, 4vw, 32px)" }}
                  data-node-id="98:143"
                >
                  AI赋能聚变
                </span>
                <span className="inline-block size-[5px] shrink-0 rounded-full bg-white" data-node-id="98:145" />
                <span
                  className="whitespace-nowrap font-medium tracking-[0.08em] text-white"
                  style={{ fontSize: "clamp(22px, 4vw, 32px)" }}
                  data-node-id="98:144"
                >
                  聚变驱动AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="relative z-10 mx-auto -mt-[200px] w-full max-w-[915px] overflow-visible px-4 pb-16 sm:px-6 lg:pb-24">
        <section className="relative -mt-16 overflow-visible lg:-mt-24">
          <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-stretch lg:gap-9">
            <div
              className="relative z-20 w-[min(100%,662px)] shrink-0"
              data-name="Rectangle 140"
              data-node-id="218:53"
            >
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
                  className="absolute inset-0 z-10 m-0 box-border overflow-y-auto pb-8 pt-[62px] pl-6 pr-[74px] font-['PingFang_SC','Microsoft_YaHei',sans-serif] font-normal not-italic leading-[0] tracking-[4.2px] text-black sm:pb-10 sm:pt-[70px] sm:pl-8 sm:pr-[82px] lg:pb-[30px] lg:pl-[51px] lg:pr-[101px] lg:pt-[94px]"
                  data-node-id="34:92"
                >
                  <span className="font-semibold leading-normal text-[#f96d01] text-[20px]">新烛时代 (XinZhuAI)</span>
                  <span className="text-[20px] leading-[30px]">
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
            className="relative z-10 -mt-8 w-full max-w-[915px] min-h-[235px] overflow-visible rounded-[27px] bg-[#f96d01] lg:-mt-[160px] lg:h-[235px] lg:min-h-0"
            data-node-id="218:54"
          />
        </section>
        <div className="mx-[64px] mt-16 grid gap-12 sm:mt-20 lg:mt-24 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col items-center text-center lg:items-center" data-node-id="234:40">
            <img
              src={assets.aboutRouteIcon}
              alt=""
              className="mb-4 h-[64px] w-auto object-contain sm:h-[81px] sm:w-[88px]"
              data-node-id="245:99"
              loading="lazy"
              decoding="async"
            />
            <p className="m-0 font-semibold leading-normal text-[#f96d01] sm:text-[24px]" data-node-id="234:40">
              我们的路线
            </p>
            <p className="mt-2 font-normal leading-normal text-[#f96d01] sm:text-[20px]">
              打造聚变的 “智能操作系统”
            </p>
          </div>
          <div className="flex flex-col items-center text-center lg:items-center" data-node-id="234:41">
            <img
              src={assets.aboutPositionIcon}
              alt=""
              className="mb-4 h-[60px] w-auto object-contain sm:h-[76px] sm:w-[78px]"
              data-node-id="245:124"
              loading="lazy"
              decoding="async"
            />
            <p className="m-0 font-semibold leading-normal text-[#f96d01] sm:text-[24px]">新烛时代的定位</p>
            <p className="mt-2 max-w-[256px] font-normal leading-normal text-[#f96d01] sm:text-[20px]">
              我们不造硬件，我们打造驱动硬件的“智慧大脑”。
            </p>
          </div>
        </div>

        <div
          className="mx-[32px]  mt-10 max-w-[842px] space-y-4 text-[18px] leading-normal tracking-[0.1em] text-black sm:mt-12 sm:text-[20px]"
          data-node-id="234:43"
        >
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

        <section className="mx-[32px]  mt-16 sm:mt-20" data-node-id="245:67">
          <h2 className="font-semibold tracking-[0.12em] text-[#f96d01] sm:text-[24px]">我们的目标</h2>
          <div className="mt-3 h-0.5 w-[231px] max-w-full bg-[#f96d01]" data-node-id="297:80" aria-hidden />
          <p
            className="mt-6 max-w-[842px] text-[18px] leading-normal tracking-[0.1em] text-black sm:text-[20px]"
            data-node-id="245:66"
          >
            是让这套智能系统从实验室的辅助工具，进化为驱动聚变电厂硬件运行的神经中枢，在每一次能量的脉动中，贡献源自“新烛”的驱动力！
          </p>

          <div className="mt-8 w-full sm:mt-10">
            <img
              src={assets.gj}
              alt="从实验室辅助工具到驱动聚变电厂硬件运行的神经中枢"
              className="mx-auto h-auto w-full max-w-[800px] object-contain"
              data-node-id="245:70"
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <div className="mx-[32px]  mt-16 grid grid-cols-1 gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-4 lg:gap-5">
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
