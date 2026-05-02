import { assets } from "./assets";

/** 关于我们 intro 区插图（Figma 导出 about-icon.png） */
export default function AboutIntroIllustration() {
  return (
    <div className="shrink-0" data-name="about-intro-illustration" aria-hidden>
      <img
        alt=""
        src={assets.aboutIcon}
        className="block h-[176px] w-[167px] max-w-full object-contain lg:h-[8.9796vw] lg:w-[8.5204vw]"
        decoding="async"
      />
    </div>
  );
}
