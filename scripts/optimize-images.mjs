import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/**
 * Batch targets:
 * - input: source file under src/images
 * - maxWidth: resize upper bound (no upscaling)
 * - coverWidth + coverHeight: optional fixed box, fit "cover" + centre crop (e.g. 设计稿比例)
 * - quality: output quality for lossy formats
 */
const targets = [
  { input: "src/images/banner.png", maxWidth: 1920, quality: 70 },
  { input: "src/images/news-detail-5-main.png", maxWidth: 1064, quality: 72 },
  // 详情页头图仅约 217px 高，无需 2K 宽；缩小体积加快首屏
  { input: "src/images/news-detail-hero-bg.jpg", maxWidth: 1600, quality: 62 },
  { input: "src/images/join-hero-bg.png", maxWidth: 1920, quality: 70 },
  { input: "src/images/join-footer-1.png", maxWidth: 812, quality: 72 },
  { input: "src/images/join-footer-2.png", maxWidth: 812, quality: 72 },
  { input: "src/images/news-detail-3-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-1-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-4-main.png", maxWidth: 1064, quality: 72 },
  { input: "src/images/our-team.png", maxWidth: 1920, quality: 70 },
  // 产品中心首图：设计稿 1920×659，源图 1920×759，居中裁去上下多余像素以减小体积
  { input: "src/images/jishu-a.jpg", coverWidth: 1920, coverHeight: 659, quality: 70 },
  { input: "src/images/news-bg.jpg", maxWidth: 1920, quality: 70 },
  // 关于我们页首屏横幅
  { input: "src/images/about-hero-bg.jpg", maxWidth: 1920, quality: 66 },
  // 新闻列表缩略图（卡片约 358×172，2x 约 716 宽）
  { input: "src/images/news-thumb-1.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-2.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-3.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-4.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-5.jpg", maxWidth: 716, quality: 72 },
  // 首页 AI 解决方案区背景，原 png 较大，转多格式并保持 1920 宽
  { input: "src/images/tech-bg.png", maxWidth: 1920, quality: 66 },
];

function toOutputPaths(absInput) {
  const dir = path.dirname(absInput);
  const ext = path.extname(absInput);
  const base = path.basename(absInput, ext);
  return {
    avif: path.join(dir, `${base}.opt.avif`),
    webp: path.join(dir, `${base}.opt.webp`),
    jpg: path.join(dir, `${base}.opt.jpg`),
  };
}

async function optimizeOne(target) {
  const absInput = path.join(root, target.input);
  if (!fs.existsSync(absInput)) {
    console.warn(`skip missing file: ${target.input}`);
    return;
  }

  const meta = await sharp(absInput).metadata();
  const outputs = toOutputPaths(absInput);

  let pipeline;
  let sizeLabel;
  if (target.coverWidth && target.coverHeight) {
    pipeline = sharp(absInput).resize({
      width: target.coverWidth,
      height: target.coverHeight,
      fit: "cover",
      position: "centre",
      withoutEnlargement: true,
    });
    sizeLabel = `${target.coverWidth}x${target.coverHeight} cover`;
  } else {
    const width = meta.width ? Math.min(meta.width, target.maxWidth) : target.maxWidth;
    pipeline = sharp(absInput).resize({ width, withoutEnlargement: true });
    sizeLabel = `${width}px wide`;
  }

  await pipeline.clone().avif({ quality: Math.max(45, target.quality - 10), effort: 6 }).toFile(outputs.avif);
  await pipeline.clone().webp({ quality: target.quality, effort: 6 }).toFile(outputs.webp);
  await pipeline.clone().jpeg({ quality: target.quality, mozjpeg: true, progressive: true }).toFile(outputs.jpg);

  console.log(`[ok] ${target.input} (${meta.width ?? "?"}x${meta.height ?? "?"}) -> ${sizeLabel}; wrote .opt.avif/.opt.webp/.opt.jpg`);
}

for (const target of targets) {
  // eslint-disable-next-line no-await-in-loop
  await optimizeOne(target);
}
