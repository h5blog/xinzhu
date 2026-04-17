/** 核心战略协作方 · 清华合作优势（原整页位图拆成 6 张卡片，与 Figma 2×3 一致） */

export type QinghuaCardIcon =
  | "innovation"
  | "talent"
  | "facility"
  | "frontier"
  | "alumni"
  | "risk";

export type QinghuaCard = {
  id: string;
  title: string;
  body: string;
  icon: QinghuaCardIcon;
};

export const qinghuaCards: QinghuaCard[] = [
  {
    id: "c1",
    title: "技术创新与研发能力",
    body: "获取顶尖的基础科学能力的加持，解决底层硬核问题。",
    icon: "innovation",
  },
  {
    id: "c2",
    title: "链接顶尖人才库",
    body:
      "可以接触到更侧重于应用和实践技能的人才，例如高级技工、职业工程师、一线产业专家等，满足产品开发、落地实施环节的需求。",
    icon: "talent",
  },
  {
    id: "c3",
    title: "共享科研设施",
    body: "使用清华大学的实验室、专用设备和软件。",
    icon: "facility",
  },
  {
    id: "c4",
    title: "前沿技术触角",
    body:
      "中关村学院作为许多 AI 前沿技术的发源地，团队能更早、更深入地了解这些技术和产业化机会。",
    icon: "frontier",
  },
  {
    id: "c5",
    title: "校友网络",
    body: "接入庞大的清华校友网络，校友遍布各行业，提供难以估量的帮助。",
    icon: "alumni",
  },
  {
    id: "c6",
    title: "中和创业风险",
    body: "共享高性能计算资源、实验室及联合研究中心等设施。",
    icon: "risk",
  },
];
