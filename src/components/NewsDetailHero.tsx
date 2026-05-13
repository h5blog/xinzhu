import detailBannerAvif from "../images/news-detail-banner.opt.avif";
import detailBannerWebp from "../images/news-detail-banner.opt.webp";
import detailBannerJpg from "../images/news-detail-banner.opt.jpg";

/** 新闻详情页顶部横幅：稿 1920×217；资源至多 3840 宽（2×）+ AVIF/WebP/JPEG；与 103:391 渐变叠层 */
export default function NewsDetailHero() {
  return (
    <section className="relative aspect-[1920/217] w-full overflow-hidden" data-name="banner-wrap">
      <picture className="absolute inset-0 block h-full w-full">
        <source srcSet={detailBannerAvif} type="image/avif" />
        <source srcSet={detailBannerWebp} type="image/webp" />
        <img
          src={detailBannerJpg}
          alt=""
          width={1920}
          height={217}
          className="h-full w-full object-cover object-center"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          decoding="sync"
          data-name="banner"
        />
      </picture>
      <div
        className="absolute inset-0 bg-gradient-to-l from-[rgba(249,109,1,0.9)] via-[rgba(249,109,1,0.53)] via-[51.442%] to-[rgba(249,109,1,0)]"
        data-node-id="103:391"
      />
    </section>
  );
}
