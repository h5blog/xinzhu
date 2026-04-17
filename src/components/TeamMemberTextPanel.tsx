import type { ReactNode } from "react";
import { assets } from "./assets";

type EdgeMode = "none" | "top-bottom-right";

/** 成员文案区：宽 926 × 高 223；底 #f2f2f2 + team-list.png；仅首条可走 top-bottom-right 描边 */
export default function TeamMemberTextPanel({
  children,
  edges = "none",
}: {
  children: ReactNode;
  edges?: EdgeMode;
}) {
  const borderClass =
    edges === "top-bottom-right"
      ? "border-b border-r border-t border-l-0 border-solid border-[#f96d01]"
      : "border-0";

  return (
    <div
      className={`relative box-border flex h-[223px] w-full min-w-0 max-w-[926px] flex-1 flex-col justify-center overflow-hidden px-8 py-4 sm:px-10 ${borderClass}`}
      data-node-id="106:20"
    >
      <div className="absolute inset-0 bg-[#f2f2f2]" aria-hidden />
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <img
          src={assets.teamList}
          alt=""
          className="h-full w-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="relative z-10 h-full min-h-0 w-full overflow-y-auto overflow-x-hidden">
        <div className="flex min-h-full w-full flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
