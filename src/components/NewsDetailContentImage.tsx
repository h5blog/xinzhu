type NewsDetailContentImageProps = {
  avif: string;
  webp: string;
  jpg: string;
  width: number;
  height: number;
  /** 外层为固定高度时用 h-full；正文流式大图用 w-full */
  pictureClassName?: string;
  imgClassName: string;
};

/** 新闻详情正文首图：多格式 + 优先加载，减轻第二张图（相对头图）的等待感 */
export default function NewsDetailContentImage({
  avif,
  webp,
  jpg,
  width,
  height,
  pictureClassName = "block h-full w-full min-h-0",
  imgClassName,
}: NewsDetailContentImageProps) {
  return (
    <picture className={pictureClassName}>
      <source srcSet={avif} type="image/avif" />
      <source srcSet={webp} type="image/webp" />
      <img
        src={jpg}
        alt=""
        width={width}
        height={height}
        className={imgClassName}
        sizes="(max-width: 1127px) 100vw, 1127px"
        loading="eager"
        fetchPriority="high"
        decoding="async"
      />
    </picture>
  );
}
