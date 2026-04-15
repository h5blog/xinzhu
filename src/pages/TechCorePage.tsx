import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { assets } from "../components/assets";

const pillBase =
  "flex h-[86px] shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#ffb85c] to-[#f96d01] px-3 text-center text-[20px] font-semibold leading-tight text-white shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)] sm:text-[28px] md:text-[32px]";

export default function TechCorePage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="核心技术" data-node-id="108:28398">
      <Navbar />

      <section className="relative w-full overflow-hidden">
        <img
          src={assets.jishuA}
          alt=""
          className="block h-auto w-full"
          data-name="banner"
          data-node-id="297:83"
        />
      </section>

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.57]"
          aria-hidden
          data-name="bg 1"
          data-node-id="297:85"
        >
          <img src={assets.techCoreSectionBg} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative mx-auto w-full max-w-[1145px] px-4 pb-12 pt-[77px] sm:px-6 sm:pb-12 md:pb-16 lg:px-0">
          <div className="mx-auto w-full">
            <p
              className="text-[18px] font-normal leading-[1.65] text-black sm:text-[19px] md:text-[20px]"
              data-node-id="280:61"
            >
              当前，核聚变正成为全球科技竞争与能源变革的关键战略方向，而人工智能的快速发展，正在显著改写其研发范式。长期以来，聚变研发面临参数空间庞大、等离子体行为高度复杂、控制精度要求极高、实验与试错成本高昂等核心挑战，导致整体推进周期长、研发效率低。我们判断，AI
              不只是聚变研究的辅助工具，而将成为重塑诊断、预测、控制与设计全流程的关键基础设施，推动可控核聚变从依赖经验的探索式研发，加速迈向以智能预测与主动控制为核心的新阶段。
            </p>

            <div
              className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-5 md:mt-14 md:gap-6"
              data-node-id="297:88"
            >
              <div className={`${pillBase} w-full max-w-[176px]`} data-node-id="297:96">
                强化学习
              </div>
              <div className={`${pillBase} w-full max-w-[217px]`} data-node-id="310:43">
                生成式模型
              </div>
              <div className={`${pillBase} w-full max-w-[256px]`} data-node-id="310:44">
                自进化智能体
              </div>
              <div className={`${pillBase} w-full max-w-[176px]`} data-node-id="310:42">
                算子学习
              </div>
            </div>

            <p
              className="mt-10 text-[18px] font-normal leading-[1.65] text-black sm:mt-12 sm:text-[19px] md:mt-14 md:text-[20px]"
              data-node-id="297:87"
            >
              基于这一判断，新烛时代于 2025 年 9
              月成立，致力于以人工智能破解核聚变领域最关键的控制与预测难题。公司以强化学习、生成式模型、自进化智能体、算子学习等前沿技术为核心，构建“物理 +
              数据”双轮驱动的技术体系，打造面向聚变装置的智能诊断、动态预测、实时控制与辅助设计能力。我们的目标，是为未来聚变反应堆打造专属的“智能操作系统”，将分散、模糊、依赖专家经验的知识与流程，沉淀为可复制、可量化、可部署的智能能力，持续提升聚变研发效率，降低研发成本，加速聚变能源走向工程化与商业化。
            </p>

            <div className="mt-10 flex justify-center sm:mt-12 md:mt-14" data-node-id="299:103">
              <div
                className="flex h-[86px] w-full max-w-[572px] items-center justify-center rounded-full px-4 text-center text-[18px] font-semibold leading-tight text-white shadow-[0px_16px_17px_0px_rgba(251,85,14,0.25)] sm:text-[24px] md:text-[28px] lg:text-[32px]"
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
