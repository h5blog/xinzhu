import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsDetailContentImage from "../components/NewsDetailContentImage";
import NewsDetailHero from "../components/NewsDetailHero";
import mainAvif from "../images/news-detail-5-main.opt.avif";
import mainWebp from "../images/news-detail-5-main.opt.webp";
import mainJpg from "../images/news-detail-5-main.opt.jpg";

export default function NewsDetailPage5() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-node-id="684:40">
      <Navbar />
      <NewsDetailHero />

      <main className="mx-auto w-full max-w-[1127px] px-4 pb-16 pt-8 lg:w-[58.6979vw] lg:max-w-none lg:pb-24 lg:pt-[2.9167vw]">
        <h1 className="m-0 text-[32px] font-semibold leading-[1.2] text-black lg:text-[1.6667vw] lg:leading-[1.35]">
          AI加速可控核聚变商业化，新烛时代完成6000万元天使轮融资
        </h1>
        <div className="mt-6 h-[2px] w-full bg-[#f96d01] lg:mt-[1.25vw] lg:h-[max(3px,0.2083vw)]" />

        <p className="mx-auto mt-10 w-full max-w-[1096px] text-[20px] leading-[31px] text-black lg:mt-[1.875vw] lg:max-w-[57.0833vw] lg:text-[1.0417vw] lg:leading-[1.6146vw]">
          近日，新烛时代宣布完成6000万元天使轮融资。本轮融资由中科创星、鼎峰科创联合领投，水木清华校友基金跟投，
          资金将主要用于核心技术研发、联合验证、平台建设及关键人才引进等，全力推动可控核聚变向商用化加速迈进。
        </p>

        <div className="mx-auto mt-9 w-full max-w-[1064px] overflow-hidden lg:mt-[1.875vw] lg:max-w-[55.4167vw]">
          <NewsDetailContentImage
            avif={mainAvif}
            webp={mainWebp}
            jpg={mainJpg}
            width={1064}
            height={521}
            pictureClassName="block w-full"
            imgClassName="h-auto w-full object-cover"
          />
        </div>

        <section className="mx-auto mt-12 w-full max-w-[1085px] lg:mt-[2.5vw] lg:max-w-[56.5104vw]">
          <h2 className="text-[24px] font-semibold leading-[31px] text-[#f96d01] lg:text-[1.25vw] lg:leading-[1.6146vw]">
            核聚变商业化遭遇多重难关，AI技术成破局关键
          </h2>
          <div className="mt-4 whitespace-pre-wrap text-[20px] leading-[31px] text-black lg:mt-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.6146vw]" data-node-id="684:166">
            <p className="m-0">
              当前，核聚变成为全球科技的战略共识方向，正在AI的驱动下快速发展，成为全球主要国家争抢布局的核心。然而，传统核聚变研发模式存在预测参数繁多、控制难度极高、研究成本高昂、推进进度缓慢等痛点，而AI技术的深度融入，为破解这些痛点提供了破局之道。通过深度赋能诊断、预测、控制及设计等核心环节，AI正有力推动可控核聚变加速迈向商业化。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              具体来看，采用多保真度强化学习技术，实现等离子体微秒级精准控制，可以大幅提升聚变装置运行的稳定性；基于物理-数据混合驱动的AI算法，从海量数据中精准预测微秒级等离子体的动态演化和破裂事件，可以有效规避设备损耗与实验风险；通过自主搭建诊断-预测-控制-设计一体化智能体系统，把那些分散的、模糊的、难以言传的判断，变成可复制、可量化、可部署的流程和模型，可以显著提升研发效率、降低试错成本。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              在这一背景下，新烛时代于2025年9月注册成立，核心使命是以人工智能破解核聚变领域的关键难题。公司依托强化学习、生成式模型、自进化智能体及算子学习等前沿技术，构建“物理+数据”双轮驱动的技术底座，推动聚变研发从传统的“经验试错”加速迈向“智能预测与主动控制”的新阶段。新烛时代致力于为聚变反应堆打造专属“智能操作系统”，精准攻克制约可控核聚变商业化进程中最核心的“控制与预测”瓶颈。
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1085px] lg:mt-[2.5vw] lg:max-w-[56.5104vw]">
          <h2 className="text-[24px] font-semibold leading-[31px] text-[#f96d01] lg:text-[1.25vw] lg:leading-[1.6146vw]">
            “AI+聚变”顶尖跨界团队，加速可控核聚变商业化
          </h2>
          <div className="mt-4 whitespace-pre-wrap text-[20px] leading-[31px] text-black lg:mt-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.6146vw]" data-node-id="684:168">
            <p className="m-0">
              新烛时代是由北京中关村学院与中关村人工智能研究院联合孵化的首批企业，团队配置全面、实力雄厚，精准融合AI4S、核聚变科研与商业运营三大核心能力，形成“技术研发+商业运营”的黄金配置。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              创始人张伟毕业于清华大学工程物理系，具有多年市场营销、公司管理经验，全面统筹商业布局与资源整合。公司联合创始人汪跃担任CTO，曾在微软研究院担任高级研究员，长期聚焦强化学习与AI4S赛道，具备卓越的AI算法研发能力与丰富的产业应用实战经验。联合创始人吴果担任COO，负责公司运营。核心创始团队在AI4S前沿技术与商业运营方面优势互补，具备深厚积累和丰富实战经验，为技术落地与公司规范化运营提供有力支撑。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              研发团队同样实力突出，由来自麻省理工、清华大学、中国科学院自动化所等国内外顶尖高校的博士组成，专业覆盖AI4S、AI for Fusion、高能物理、等离子体物理等核心领域，兼具AI算法研发、聚变科研与工程化落地经验，形成强大的技术研发梯队，为公司核心技术迭代、模型落地提供坚实的人才保障，助力团队持续突破行业核心技术瓶颈。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              公司技术布局具有前瞻性，并引领国际趋势。2025年10月，谷歌DeepMind与CFS宣布联合开发同类产品TORAX。2025年11月24日，美国白宫启动“创世纪使命”（Genesis Mission），将聚变列为国家战略优先领域，并计划构建AI驱动的科学安全平台，整合联邦数据与算力资源，通过构建基础模型、实现实验自动化和优化设计，显著加速聚变技术突破进程。而我国也在同年9月，由国家发展改革委和国家能源局联合发布《关于推进“人工智能+”能源高质量发展的实施意见》将“可控核聚变智能控制”列为“人工智能+核电”典型应用场景之一。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              此外，英国、韩国、日本等国亦将AI赋能聚变写入官方政策，全力推动聚变商业化落地。
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1085px] lg:mt-[2.5vw] lg:max-w-[56.5104vw]">
          <h2 className="text-[24px] font-semibold leading-[31px] text-[#f96d01] lg:text-[1.25vw] lg:leading-[1.6146vw]">
            AI算力暴涨催生终极能源刚需，AI for Fusion蓝海赛道价值凸显
          </h2>
          <div className="mt-4 whitespace-pre-wrap text-[20px] leading-[31px] text-black lg:mt-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.6146vw]" data-node-id="684:170">
            <p className="m-0">
              随着ChatGPT等大模型引爆全球AI竞赛，算力需求指数级增长使全球电力消耗急剧攀升。高盛在近期的报告中预测2030年全球AI用电需求将暴增220%，传统能源难以为继。核聚变作为已知“终极清洁能源”，将成为破解AI能源危机的关键。OpenAI CEO奥特曼曾直言“没有核聚变，AI未来难以为继”。据Allied Market Research等机构预测，聚变能源商业化初期市场规模将达近万亿美元，头部企业预计2030年代实现并网发电。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              当前，全球可控核聚变赛道竞争白热化，欧美设立专项政策推动商业化，CFS、Helion等企业获巨额投资，我国则将其纳入“十五五”规划重大工程，形成“国家队+民营队”双轮驱动格局。然而，全球聚变领域存在显著“投产倒挂”，资本与人才高度集中于硬件制造，而决定商业化成败的“智能大脑”仍是蓝海：未来的国际热核聚变实验堆（ITER）每日产生2PB海量数据却难以转化为解决方案，全球45+家主流聚变公司普遍缺乏一个商业化、标准化的“AI操作系统”来驾驭他们的设备。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              相比传统方案，AI技术在核心任务上具有上万倍加速潜力，新烛时代定位为“万亿赛道的加速器”，致力于提供关键“AI工具”，填补全球聚变产业智能化软件的核心空白，抢占AI for Fusion战略制高点。
            </p>
          </div>
        </section>

        <section className="mx-auto mt-12 w-full max-w-[1085px] lg:mt-[2.5vw] lg:max-w-[56.5104vw]">
          <h2 className="text-[24px] font-semibold leading-[31px] text-[#f96d01] lg:text-[1.25vw] lg:leading-[1.6146vw]">投资人说</h2>
          <div className="mt-4 whitespace-pre-wrap text-[20px] leading-[31px] text-black lg:mt-[0.8333vw] lg:text-[1.0417vw] lg:leading-[1.6146vw]" data-node-id="684:172">
            <p className="m-0">
              中科创星 可控核聚变是解决AI时代能源危机的终极方案。我们看好新烛时代将AI技术与聚变物理深度结合的创新路径，这不仅大幅缩短了技术迭代周期，更为实现商业化聚变发电提供了可落地的工程方案。新烛团队兼具顶尖学术背景与产业落地能力，是当下国内稀缺的复合型创业团队。
            </p>
            <p className="m-0">{"\n"}</p>
            <p className="m-0">
              鼎峰科创 AI for Fusion是推动聚变技术进一步成熟的关键路径之一，新烛时代是中关村学院的第一批产业化项目，其核心团队兼具对聚变和AI应用领域的深刻理解。我们看好并期待公司未来能够为解决核聚变的“可控”难题做出贡献。
            </p>
            <p className="m-0">
              水木清华校友基金 AI是可控核聚变商业化的核心加速器，正在从等离子体控制、模拟设计、材料研发、运维四大方向全面突破瓶颈，把“人造太阳”从实验室推向工程化。新烛时代团队既懂AI、又懂可控核聚变，包含了两个领域的顶级专家，并通过客户初步验证，也是中关村学院重点孵化和支持的技术转化项目，符合水木投资标准，是水木在可控核聚变和AI交叉领域的重要布局。
            </p>
          </div>
        </section>

        <div className="mt-14 flex justify-end lg:mt-[2.9167vw]">
          <Link to="/news" className="text-[20px] text-black hover:text-[#f96d01] lg:text-[1.0417vw]">
            返回全部新闻
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
