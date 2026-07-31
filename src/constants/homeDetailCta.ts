/**
 * 首页「AI 技术驱动」「创始团队」等处「查看详情」共用样式与交互。
 * 固定 h-[2.5em] + flex 居中，避免 CJK 字体在 Windows 下 py-em 导致字视觉偏上/偏下。
 */
export const homeDetailCtaInteractionClasses =
  "origin-center shadow-none transition-[filter,box-shadow,transform] duration-200 ease-out hover:scale-[1.04] hover:brightness-[1.07] hover:shadow-[0_2px_8px_rgba(212,78,0,0.32),0_0_10px_rgba(249,109,1,0.28)] motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:brightness-100 motion-reduce:hover:shadow-none";

export const homeDetailCtaClassName = [
  "box-border inline-flex h-[2.5em] min-w-[6.78em] shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-[1.0833em] bg-[#F96D01] px-[1.1111em] py-0 text-center font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[17px] font-medium leading-none text-white tracking-[0.16em] sm:text-[16px] lg:text-[16px]",
  homeDetailCtaInteractionClasses,
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f96d01]/55",
].join(" ");
