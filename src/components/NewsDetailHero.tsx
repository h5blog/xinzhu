import heroBgAvif from "../images/news-detail-hero-bg.opt.avif";
import heroBgWebp from "../images/news-detail-hero-bg.opt.webp";
import heroBgJpg from "../images/news-detail-hero-bg.opt.jpg";

/** 新闻详情页顶部横幅（与 Figma 头图 + 103:391 渐变一致） */
export default function NewsDetailHero() {
  return (
    <section className="relative h-[217px] w-full overflow-hidden">
      <picture className="absolute inset-0 block h-full w-full">
        <source srcSet={heroBgAvif} type="image/avif" />
        <source srcSet={heroBgWebp} type="image/webp" />
        <img
          src={heroBgJpg}
          alt=""
          width={1600}
          height={1060}
          className="h-full w-full object-cover"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div
        className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
        data-node-id="103:391"
      />
    </section>
  );
}
