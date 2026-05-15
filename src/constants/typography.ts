/**
 * 同一套排版基调：PingFang_SC、leading-[1.7]、tracking-[0.03em]；字号固定为稿面 1920 下的 px。
 */
const introLikeTone =
  "font-['PingFang_SC'] leading-[1.7] tracking-[0.03em]";

/** 首页「AI 技术驱动」正文、新闻中心摘要等：1920 稿 16px；字色、字重由页面叠加 */
export const introBody16ClassName =
  `${introLikeTone} text-[16px]`;

/** 首页技术区长段等：1920 稿 18px；字色、字重由页面叠加 */
export const introBody18ClassName =
  `${introLikeTone} text-[18px]`;

/** 新闻详情正文：1920 稿 16px */
export const newsDetailBodyClassName =
  `${introLikeTone} text-[16px] text-black`;

/** 新闻列表卡片标题：1920 稿 18px；字重与 hover 由页面叠加（色值沿用列表卡片稿 #121212）；超长标题单行省略 */
export const newsListTitleClassName =
  `leading-[1] text-[18px] text-[#121212] line-clamp-1 break-words`;

/** 新闻详情页主标题 h1：1920 稿 18px；字重由各页叠加 font-medium / font-semibold */
export const newsDetailTitleClassName =
  `${introLikeTone} text-[18px] text-black [overflow-wrap:anywhere]`;

/** 新闻详情页 1 时间轴「年份・国家」：1920 稿 18px */
export const newsDetailTimelineLabelClassName =
  `${introLikeTone} text-[18px] font-semibold text-[#f96d01]`;

/** 新闻详情页橘色小节标题（如详情 5 的 h2）：1920 稿 18px */
export const newsDetailSectionHeadingClassName =
  `${introLikeTone} text-[18px] font-semibold text-[#f96d01] [overflow-wrap:anywhere]`;

/** 新闻详情表格表头：1920 稿 18px 白字 */
export const newsDetailTableHeadClassName =
  `${introLikeTone} text-[18px] font-semibold text-white`;

/** 新闻详情页 3 步骤序号（01–05）：1920 稿 28px，白字加粗 */
export const newsDetailStepBadgeClassName =
  `${introLikeTone} text-[28px] font-semibold text-white tabular-nums`;

/** 岗位详情橙色小节标签：1920 稿 16px，白字加粗 */
export const jobDetailSectionLabelClassName =
  `${introLikeTone} text-[16px] font-semibold text-white`;
