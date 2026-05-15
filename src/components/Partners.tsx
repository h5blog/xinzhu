import { homeSectionMaxWidthCss } from "../constants/contentAlign";
import { assets } from "./assets";

/** Figma 838:1311 起：2×3 矩阵卡片；文案与稿一致 */
const JUZHEN_MATRIX_CARDS: readonly {
  title: string;
  body: string;
  "data-node-id": string;
}[] = [
  {
    title: "技术创新与研发能力",
    body: "获取顶尖的基础科学能力的加持，解决底层硬核问题。",
    "data-node-id": "838:1345",
  },
  {
    title: "链接顶尖人才库",
    body: "可以接触到更侧重于应用和实践技能的人才，例如高级技工、职业工程师、一线产业专家等，满足产品开发、落地实施环节的需求。",
    "data-node-id": "838:1346",
  },
  {
    title: "共享科研设施",
    body: "使用中关村学院的实验室、专用设备和软件。",
    "data-node-id": "838:1347",
  },
  {
    title: "前沿技术触角",
    body: "中关村学院作为许多 AI 前沿技术的发源地，团队能更早、更深入地了解这些技术和产业化机会。",
    "data-node-id": "838:1348",
  },
  {
    title: "校友网络",
    body: "接入庞大的中关村学院校友网络，校友遍布各行各业，提供难以估量的帮助。",
    "data-node-id": "838:1349",
  },
  {
    title: "中和创业风险",
    body: "共享高性能计算资源、实验室及联合研究中心等设施。",
    "data-node-id": "838:1350",
  },
];

const juzhenCardGradient = "linear-gradient(136deg, #FF9747 0%, #FFBB32 100%)";

/** 线段粗细 */
const jxLine = "max(2px, calc(100vw * 8 / 1920))";

const jxBottomBarBottom = 0;
const jxBar = "absolute bg-[#f96d01]";

function JuzhenMatrixFrameOrnaments() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]" aria-hidden>
      <div data-node-id="878:400" className={jxBar} style={{ left: "35%", top: 0, width: "30%", height: jxLine }} />
      <div data-node-id="838:1336" className={jxBar} style={{ left: "35%", bottom: jxBottomBarBottom, width: "30%", height: jxLine }} />
      {/* 中段竖线：高度为线框的 70%，与角部 15% 竖臂衔接；随卡片区变高而变长 */}
      <div
        data-node-id="838:1337"
        className={jxBar}
        style={{ left: 0, top: "35%", width: jxLine, height: "30%" }}
      />
      <div
        data-node-id="838:1339"
        className={jxBar}
        style={{ right: 0, top: "35%", width: jxLine, height: "30%" }}
      />
      <div data-node-id="838:1331" className={`${jxBar} z-[1]`} style={{ left: 0, top: 0, width: "15%", height: jxLine }} />
      <div className={`${jxBar} z-[1]`} style={{ left: 0, top: 0, width: jxLine, height: "15%",  }} />
      <div data-node-id="838:1334" className={`${jxBar} z-[1]`} style={{ right: 0, top: 0, width: "15%", height: jxLine }} />
      <div className={`${jxBar} z-[1]`} style={{ right: 0, top: 0, width: jxLine, height: "15%",  }} />
      <div data-node-id="838:1332" className={`${jxBar} z-[1]`} style={{ left: 0, bottom: jxBottomBarBottom, width: "15%", height: jxLine }} />
      <div className={`${jxBar} z-[1]`} style={{ left: 0, bottom: jxBottomBarBottom, width: jxLine, height: "15%",  }} />
      <div data-node-id="838:1333" className={`${jxBar} z-[1]`} style={{ right: 0, bottom: jxBottomBarBottom, width: "15%", height: jxLine }} />
      <div className={`${jxBar} z-[1]`} style={{ right: 0, bottom: jxBottomBarBottom, width: jxLine, height: "15%", }} />
    </div>
  );
}

/** 稿面 partner-bg 1920×1460@1×，区块最小高度随视口等比，避免窄屏/内容短时背景被压扁 */
const PARTNER_BG_MIN_H = "min-h-[calc(100vw*1460/1920)]";

export default function Partners() {
  return (
    <div
      className="text-center"
      style={{ background: "linear-gradient(310deg, #F96D01 33%, #FFB941 100%)" }}
    >
      <div className="break-words px-4 py-[clamp(40px,3.23vw,62px)] text-center font-['PingFang_SC',sans-serif] text-[30px] font-semibold text-white md:text-[36px] lg:text-[28px]">
        核心战略协作方
      </div>
      <div
        style={{ opacity: 0 }}
        className="flex w-full flex-wrap items-center justify-center gap-x-[clamp(12px,2.08vw,40px)] gap-y-4 px-2 py-[18px] pb-[clamp(48px,4.17vw,80px)] sm:px-4"
      >
        <div
          className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(200px,18.02vw,346px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:18.02vw_auto]"
          // style={{ backgroundImage: `url(${assets.partnerA})` }}
        />
        <div
          className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(220px,22.29vw,428px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:22.29vw_auto]"
          // style={{ backgroundImage: `url(${assets.partnerB})` }}
        />
      </div>
      <div
        className={`relative w-full overflow-x-clip bg-white ${PARTNER_BG_MIN_H}`}
        style={{
          paddingTop: "clamp(40px,3.23vw,62px)",
          paddingBottom: "clamp(48px,4.17vw,80px)",
        }}
      >
        <picture className="pointer-events-none absolute inset-0 z-0 block h-full min-h-full w-full">
          <source srcSet={assets.partnerBgAvif} type="image/avif" />
          <source srcSet={assets.partnerBgWebp} type="image/webp" />
          <img
            src={assets.partnerBgJpg}
            alt=""
            width={1920}
            height={1460}
            className="h-full min-h-full w-full object-cover object-top"
            sizes="100vw"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </picture>
        <div className="relative z-10 mx-auto w-full px-4">
          <div className="mx-auto w-full min-w-0" style={{ maxWidth: homeSectionMaxWidthCss }}>
            {/* 标题在线框外；线框仅包围卡片网格 */}
            <h2
              className="type-title-xl m-0 mb-[clamp(28px,calc(100vw*40/1920),48px)] px-[clamp(16px,calc(100vw*28/1920),36px)] text-center font-['PingFang_SC',sans-serif] !font-medium !leading-normal text-[#f96d01]"
              data-node-id="838:1310"
            >
              数字化资源支撑矩阵
            </h2>
            <div className="relative box-border w-full px-[clamp(20px,calc(100vw*30/1920),50px)] py-[clamp(20px,calc(100vw*30/1920),50px)]">
              <JuzhenMatrixFrameOrnaments />
              <div className="relative z-[1] w-full min-w-0">
                {/* Figma 838:1311：大屏 2×3；窄于 lg 单列，一排放一张卡 */}
                <div
                  className="grid w-full grid-cols-1 justify-items-stretch gap-4 sm:gap-5 lg:grid-cols-2 lg:[grid-auto-rows:minmax(0,1fr)] lg:justify-items-center lg:gap-[clamp(14px,calc(100vw*20/1920),24px)] xl:gap-[calc(100vw*20/1920)]"
                  data-node-id="838:1311"
                >
                  {JUZHEN_MATRIX_CARDS.map((card, index) => {
                    const icon = assets.juzhenMatrixIconPack[index];
                    if (!icon) return null;
                    return (
                      <article
                        key={card.title}
                        data-node-id={card["data-node-id"]}
                        className="box-border flex h-full min-h-0 w-full max-w-full flex-col justify-self-center overflow-hidden rounded-[14px] p-4 shadow-[0_2px_10px_rgba(233,90,0,0.12)] sm:p-6 lg:max-w-[min(100%,calc(100vw*656/1920))] lg:rounded-[0.73vw] lg:p-[calc(100vw*24/1920)]"
                        style={{ background: juzhenCardGradient }}
                      >
                        <h3
                          data-node-id="838:1324"
                          className="m-0 w-full min-w-0 max-w-full break-words text-left font-['PingFang_SC',sans-serif] text-[max(16px,calc(100vw*20/1920))] font-semibold leading-snug tracking-[0.03em] text-[#8d3e00] sm:text-[22px] md:text-[max(16px,calc(100vw*28/1920))] lg:text-[max(22px,calc(100vw*30/1920))] xl:text-[18px] xl:leading-normal"
                        >
                          {card.title}
                        </h3>
                        <div className="mt-2.5 flex min-h-0 w-full min-w-0 flex-1 flex-col gap-5 sm:mt-3 sm:gap-6 md:flex-row md:items-center lg:gap-[calc(100vw*28/1920)]">
                          <div className="min-w-0 flex-1 self-start text-left">
                            <p
                              style={{ textAlign: "justify" }}
                              className="m-0 font-['PingFang_SC',sans-serif] text-[16px] font-normal leading-relaxed text-[#8d3e00] sm:text-[17px] lg:text-[16px] lg:leading-normal"
                            >
                              {card.body}
                            </p>
                          </div>
                          <div className="flex w-full min-h-0 flex-1 shrink-0 flex-col items-center justify-center max-md:min-h-0 md:ml-auto md:w-auto md:flex-none md:self-center">
                            <picture>
                              <source srcSet={icon.avif} type="image/avif" />
                              <source srcSet={icon.webp} type="image/webp" />
                              <img
                                src={icon.png}
                                alt=""
                                width={icon.width}
                                height={icon.height}
                                sizes="(max-width: 639px) 120px, (max-width: 1023px) 160px, min(400px, max(100px, calc(100vw * 170 / 1920)))"
                                decoding="async"
                                loading="lazy"
                                fetchPriority="low"
                                className="mx-auto block h-auto w-[min(280px,max(112px,calc(100vw*0.55)))] max-w-full object-contain sm:w-[min(320px,max(120px,calc(100vw*0.5)))] md:mx-0 md:w-[min(400px,max(100px,calc(100vw*170/1920)))]"
                              />
                            </picture>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
