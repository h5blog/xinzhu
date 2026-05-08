/**
 * 按 1920 稿比例随视口变宽（1153/1920≈60.052vw）。
 * 不设 px 上限，避免大屏仍卡在 1153px；用 min(100%, …) 防止超出带 padding 的父级。
 */
const ARTBOARD_W = 1920;
const CONTENT_W = 1153;
export const CONTENT_MAX_WIDTH = `min(100%, ${(CONTENT_W / ARTBOARD_W) * 100}vw)`;
