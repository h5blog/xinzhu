/**
 * 首页两处「查看详情」共用交互：默认无投影，悬停略放大 + 提亮 + 小号同色系投影；尊重 prefers-reduced-motion。
 * focus-visible 按背景在各自 Link 上单独写。
 */
export const homeDetailCtaInteractionClasses =
  "origin-center shadow-none transition-[filter,box-shadow,transform] duration-200 ease-out hover:scale-[1.04] hover:brightness-[1.07] hover:shadow-[0_2px_8px_rgba(212,78,0,0.32),0_0_10px_rgba(249,109,1,0.28)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:brightness-100 motion-reduce:hover:shadow-none";
