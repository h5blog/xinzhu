/**
 * 新闻详情时间轴节点：Figma w-5 h-5（20×20@1920）四层圆，
 * 比例与代码一致 — outer orange-200 → orange-300 / orange-400（16×16@20）→ core orange-500（12×12@20）。
 * 全站随视口缩放：基准边长 max(20px, calc(100vw*20/1920))。
 */
export default function NewsTimelineDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block shrink-0 size-[max(20px,calc(100vw*20/1920))] ${className}`}
      aria-hidden
    >
      {/* 自下而上叠放；坐标与尺寸相对容器为 20px 稿的比例 */}
      <span className="absolute inset-0 z-[1] rounded-full bg-orange-200" />
      <span className="absolute left-[11.11%] top-[11.11%] z-[2] size-[80%] rounded-full bg-orange-400" />
      <span className="absolute left-[11.11%] top-[11.11%] z-[3] size-[80%] rounded-full bg-orange-300" />
      <span className="absolute left-[22.22%] top-[22.22%] z-[4] size-[60%] rounded-full bg-orange-500" />
    </span>
  );
}
