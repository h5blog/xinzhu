/**
 * 同一套排版基调：PingFang_SC、leading-[1.7]、tracking-[0.03em]；字号用 max(16px,calc(100vw*n/1920))。
 */
const introLikeTone =
  "font-['PingFang_SC'] leading-[1.7] tracking-[0.03em]";

/** 首页「AI 技术驱动」正文、新闻中心 Tab 等：1920 稿 20px；字色、字重由页面叠加 */
export const introBody20ClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*20/1920))]`;

/** 新闻详情正文：1920 稿 20px */
export const newsDetailBodyClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*20/1920))] text-black`;

/** 新闻列表卡片标题：1920 稿 20px；字重与 hover 由页面叠加（色值沿用列表卡片稿 #121212）；超长标题单行省略 */
export const newsListTitleClassName =
  `${introLikeTone} text-[max(18px,calc(100vw*24/1920))] text-[#121212] line-clamp-1 break-words`;

/** 新闻详情页主标题 h1：1920 稿 32px；字重由各页叠加 font-medium / font-semibold */
export const newsDetailTitleClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*32/1920))] text-black [overflow-wrap:anywhere]`;

/** 新闻详情页 1 时间轴「年份・国家」：1920 稿 24px（与首页引言同档 max(16px,calc(100vw*24/1920))） */
export const newsDetailTimelineLabelClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*24/1920))] font-semibold text-[#f96d01]`;

/** 新闻详情页橘色小节标题（如详情 5 的 h2）：1920 稿 24px，与同档引言规则一致 */
export const newsDetailSectionHeadingClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*24/1920))] font-semibold text-[#f96d01] [overflow-wrap:anywhere]`;

/** 新闻详情表格表头：1920 稿 24px 白字，同一套排版规则 */
export const newsDetailTableHeadClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*24/1920))] font-semibold text-white`;

/** 新闻详情页 3 步骤序号（01–05）：1920 稿 28px，同一套规则，白字加粗 */
export const newsDetailStepBadgeClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*28/1920))] font-semibold text-white tabular-nums`;

/** 岗位详情橙色小节标签：1920 稿 20px，同一套规则，白字加粗 */
export const jobDetailSectionLabelClassName =
  `${introLikeTone} text-[max(16px,calc(100vw*20/1920))] font-semibold text-white`;
