import type { ReactNode } from "react";
import { assets } from "./assets";

type EdgeMode = "none" | "top-bottom-right" | "top-bottom-left";

/** 成员文案区：宽 926、最小高 223@1920；高度随内容增高，小屏由页面滚动，不在卡片内滚动 */
export default function TeamMemberTextPanel({
  children,
  edges = "none",
  className = "",
}: {
  children: ReactNode;
  edges?: EdgeMode;
  className?: string;
}) {
  /** 悬停灰色光晕；减少动效时不加阴影 */
  const borderClass =
    edges === "top-bottom-right" || edges === "top-bottom-left"
      ? "border-0 shadow-none transition-[box-shadow] duration-200 ease-out group-hover:shadow-[0_0_22px_rgba(15,23,42,0.08),0_8px_24px_rgba(15,23,42,0.12)] motion-reduce:transition-none motion-reduce:group-hover:shadow-none"
      : "border-0";

  /** 图在右侧时（top-bottom-left）：左内边距更小、卡片 max-w 略增，给介绍区更多宽度 */
  const horizontalPadClass =
    edges === "top-bottom-left"
      ? "pl-5 pr-2 py-4 sm:pl-6 sm:pr-3 sm:py-4 lg:pl-[1.0417vw] lg:pr-0 lg:py-[0.8333vw]"
      : "px-8 py-4 sm:px-10 lg:px-[2.0833vw] lg:py-[0.8333vw]";

  const panelMaxWClass =
    edges === "top-bottom-left" ? "lg:max-w-[50.7292vw]" : "lg:max-w-[48.2292vw]";

  return (
    <div
      className={`relative box-border flex min-h-[223px] w-full min-w-0 max-w-[926px] flex-1 flex-col justify-center overflow-hidden lg:min-h-[11.6146vw] ${panelMaxWClass} ${horizontalPadClass} ${borderClass} ${className}`.trim()}
      data-node-id="106:20"
    >
      <div className="absolute inset-0 bg-[#f2f2f2]" aria-hidden />
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <picture className="contents">
          <source srcSet={assets.teamListAvif} type="image/avif" />
          <source srcSet={assets.teamListWebp} type="image/webp" />
          <img
            src={assets.teamListJpg}
            alt=""
            className="h-full min-h-full w-full object-cover object-center"
            sizes="(max-width: 1024px) 100vw, min(926px, 50vw)"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
      <div className="relative z-10 w-full overflow-x-hidden">
        <div className="flex w-full flex-col justify-center">{children}</div>
      </div>
    </div>
  );
}
