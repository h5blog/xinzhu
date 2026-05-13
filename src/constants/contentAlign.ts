/** 设计画布宽度（px），与稿面比例换算用 */
export const ARTBOARD_W = 1920;

/**
 * 1920 稿面主内容宽 1200px → 占画布 **1200/1920**；
 * 任意视口下主列最大宽度 = `calc(100vw * 1200 / 1920)`（与稿同比例），大屏会随屏变宽，非固定 1200px。
 */
export const PAGE_MAIN_MAX_PX = 1200;

/** 主列相对视口的宽度（与稿比例一致） */
export const pageMainFluidMaxCss = `min(100%, calc(100vw * ${PAGE_MAIN_MAX_PX} / ${ARTBOARD_W}))`;

/** 用于 Footer 等 `style={{ maxWidth }}` */
export const contentMaxWidthCss = pageMainFluidMaxCss;

export const CONTENT_MAX_WIDTH = contentMaxWidthCss;

/** 首页创始团队 / 伙伴矩阵（与 juzhen 稿宽一致）：1200@1920 */
export const HOME_SECTION_MAX_PX = 1200;
export const homeSectionMaxWidthCss = `min(100%, calc(100vw * ${HOME_SECTION_MAX_PX} / ${ARTBOARD_W}))`;

/**
 * 主列最大宽度：与稿同比；`w-full` 在窄于该值时吃满父级。
 * `min(100%, …)` 避免在极窄父级里超出。
 */
export const pageMainMaxWidthClassName =
  "mx-auto box-border w-full min-w-0 max-w-[min(100%,calc(100vw*1200/1920))]";

/**
 * 全站主列（含各页 `<main>`）：与 1920 稿同比 `1200/1920`，**不设左右 padding**，
 * 两侧留白仅来自 `mx-auto` + `max-w-[62.5vw]` 在视口中的居中空隙。
 */
export const pageMainWidthClassName = pageMainMaxWidthClassName;
