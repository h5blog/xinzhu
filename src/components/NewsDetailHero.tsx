import detailBannerAvif from "../images/news-detail-banner.opt.avif";
import detailBannerWebp from "../images/news-detail-banner.opt.webp";
import detailBannerJpg from "../images/news-detail-banner.opt.jpg";
import detailBanner1xAvif from "../images/news-detail-banner-1x.opt.avif";
import detailBanner1xWebp from "../images/news-detail-banner-1x.opt.webp";
import detailBanner1xJpg from "../images/news-detail-banner-1x.opt.jpg";

/** 新闻详情页顶部横幅：稿 1920×217；1×1920w + 2×3840w；与 103:391 渐变叠层 */
export default function NewsDetailHero() {
  return (
    <section className="relative aspect-[1920/217] w-full overflow-hidden" data-name="banner-wrap">
      <picture className="absolute inset-0 block h-full w-full">
        <source
          type="image/avif"
          srcSet={`${detailBanner1xAvif} 1920w, ${detailBannerAvif} 3840w`}
          sizes="100vw"
        />
        <source
          type="image/webp"
          srcSet={`${detailBanner1xWebp} 1920w, ${detailBannerWebp} 3840w`}
          sizes="100vw"
        />
        <img
          src={detailBanner1xJpg}
          srcSet={`${detailBanner1xJpg} 1920w, ${detailBannerJpg} 3840w`}
          sizes="100vw"
          alt=""
          width={1920}
          height={217}
          className="h-full w-full object-cover object-center"
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
