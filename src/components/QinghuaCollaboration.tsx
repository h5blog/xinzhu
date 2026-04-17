import { assets } from "./assets";

/** Figma `Rectangle 130` — node id 415:44（metadata：523×303） */
const CARD_W = 523;
const CARD_H = 303;

/** Dev Mode 渐变：`linear-gradient(120.652deg, rgb(255,151,71) 0.83%, rgb(255,187,50) 99.17%)` */
const QINGHUA_CARD_SURFACE_BG =
  "linear-gradient(120.652deg, rgb(255, 151, 71) 0.83427%, rgb(255, 187, 50) 99.166%)";

const contentRow =
  "relative z-10 flex h-full min-h-0 flex-col gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 sm:px-6 sm:py-5";

const qinghuaCards = [
  {
    id: "c1",
    title: "技术创新与研发能力",
    body: "获取顶尖的基础科学能力的加持，解决底层硬核问题。",
    image: assets.partnerIcon1,
  },
  {
    id: "c2",
    title: "链接顶尖人才库",
    body:
      "可以接触到更侧重于应用和实践技能的人才，例如高级技工、职业工程师、一线产业专家等，满足产品开发、落地实施环节的需求。",
    image: assets.partnerIcon2,
  },
  {
    id: "c3",
    title: "共享科研设施",
    body: "使用清华大学的实验室、专用设备和软件。",
    image: assets.partnerIcon3,
  },
  {
    id: "c4",
    title: "前沿技术触角",
    body: "中关村学院作为许多 AI 前沿技术的发源地，团队能更早、更深入地了解这些技术和产业化机会。",
    image: assets.partnerIcon4,
  },
  {
    id: "c5",
    title: "校友网络",
    body: "接入庞大的清华校友网络，校友遍布各行各业，提供难以估量的帮助。",
    image: assets.partnerIcon5,
  },
  {
    id: "c6",
    title: "中和创业风险",
    body: "共享高性能计算资源、实验室及联合研究中心等设施。",
    image: assets.partnerIcon6,
  },
] as const;

export default function QinghuaCollaboration() {
  return (
    <div className="mx-auto w-full max-w-[1068px]">
      <div className="grid grid-cols-1 gap-x-9 gap-y-7 justify-items-center md:grid-cols-2">
        {qinghuaCards.map((card) => (
          <article
            key={card.id}
            className="relative box-border overflow-hidden rounded-none border border-white/20 shadow-none"
            style={{
              width: CARD_W,
              maxWidth: "100%",
              height: CARD_H,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: QINGHUA_CARD_SURFACE_BG,
              }}
              aria-hidden
              className="absolute inset-0 rounded-[inherit]"
            />
            <div
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${card.image})`,
                backgroundSize: `${CARD_W}px ${CARD_H}px`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              aria-hidden
              className="absolute inset-0 rounded-[inherit]"
            />
            <div className="relative z-10 flex h-full min-h-0 flex-col justify-between p-7 text-left sm:flex-row sm:items-stretch sm:gap-3 sm:px-10 sm:py-9">
              <div className="min-h-0 min-w-0 flex-1 pr-1 sm:max-w-[52%]">
                <h3 className="font-['PingFang_SC',sans-serif] text-[20px] font-semibold leading-[1.15] text-[#7a3f0d] sm:text-[22px] md:text-[26px]">
                  {card.title}
                </h3>
                <p className="mt-8 max-w-[230px] font-['PingFang_SC',sans-serif] text-[14px] leading-[1.6] text-[#7e4d16] sm:text-[15px] md:text-[17px]">
                  {card.body}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
