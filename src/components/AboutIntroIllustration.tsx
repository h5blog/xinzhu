import { assets } from "./assets";

/** 关于我们 intro 区插图（Figma 导出 about-icon.png） */
export default function AboutIntroIllustration() {
  return (
    <div className="shrink-0" data-name="about-intro-illustration" aria-hidden>
      <img
        alt=""
        src={assets.aboutIcon}
        className="block h-auto w-[167px] max-w-full"
        decoding="async"
      />
    </div>
  );
}
