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
 * - quality: output quality for lossy formats (WebP / JPEG fallback)
 * - avifQuality: optional AVIF quality（默认 quality-10，含文字的横幅建议单独调高）
 * - webpNearLossless: optional，WebP 近无损，文字/边缘更利（体积会变大）
 * - avifEffort: optional AVIF effort 0–9（默认 6）
 * - fallbackFormat: "jpeg" | "png" — 兜底图格式（PNG 无损更清晰，体积更大）
 */
const targets = [
  // 首页顶栏横幅：与 gsjj-banner 相同策略（2880 宽 + 高码率 AVIF/WebP）
  {
    input: "src/images/banner.png",
    maxWidth: 2880,
    quality: 94,
    avifQuality: 90,
    avifEffort: 7,
    fallbackFormat: "png",
  },
  { input: "src/images/news-detail-5-main.png", maxWidth: 1064, quality: 72 },
  // 详情页头图仅约 217px 高，无需 2K 宽；缩小体积加快首屏
  { input: "src/images/news-detail-hero-bg.jpg", maxWidth: 1600, quality: 62 },
  { input: "src/images/join-hero-bg.png", maxWidth: 1920, quality: 70 },
  // 加入我们顶栏横幅（join-bg.png，源图多为 3840×434 类超宽条）
  {
    input: "src/images/join-bg.png",
    maxWidth: 2880,
    quality: 94,
    avifQuality: 90,
    avifEffort: 7,
    fallbackFormat: "png",
  },
  // 创始团队页顶栏横幅 team-bg.png（源图多为 3840×434）
  {
    input: "src/images/team-bg.png",
    maxWidth: 2880,
    quality: 94,
    avifQuality: 90,
    avifEffort: 7,
    fallbackFormat: "png",
  },
  { input: "src/images/join-footer-1.png", maxWidth: 812, quality: 72 },
  { input: "src/images/join-footer-2.png", maxWidth: 812, quality: 72 },
  { input: "src/images/news-detail-3-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-1-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-4-main.png", maxWidth: 1064, quality: 72 },
  { input: "src/images/our-team.png", maxWidth: 1920, quality: 70 },
  // 技术中心顶栏横幅（与首页横幅同比例 1920×461）
  { input: "src/images/tech-banner.png", maxWidth: 1920, quality: 70, fallbackFormat: "png" },
  // 技术中心「强化学习」等胶囊区背景：设计稿 1920 下约 952×475，源图多为 @2x
  { input: "src/images/tech-icon.png", maxWidth: 1904, quality: 72, fallbackFormat: "png" },
  { input: "src/images/news-bg.jpg", maxWidth: 1920, quality: 70 },
  // 关于我们页首屏横幅：2880 宽（≈2× 设计稿）+ 高码率；WebP 不用 nearLossless（否则体积暴涨）
  {
    input: "src/images/gsjj-banner.png",
    maxWidth: 2880,
    quality: 94,
    avifQuality: 90,
    avifEffort: 7,
    fallbackFormat: "png",
  },
  // 关于我们「我们的目标」插图：展示宽约 800px，源图超宽条，压到 1600 宽以内并出 AVIF/WebP
  { input: "src/images/gj.png", maxWidth: 1600, quality: 74 },
  // 新闻列表缩略图（卡片约 358×172，2x 约 716 宽）
  { input: "src/images/news-thumb-1.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-2.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-3.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-4.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-5.jpg", maxWidth: 716, quality: 72 },
  // 首页 AI 解决方案区背景，原 png 较大，转多格式并保持 1920 宽
  { input: "src/images/tech-bg.png", maxWidth: 1920, quality: 66 },
];

function toOutputPaths(absInput, fallbackFormat = "jpeg") {
  const dir = path.dirname(absInput);
  const ext = path.extname(absInput);
  const base = path.basename(absInput, ext);
  const fallbackExt = fallbackFormat === "png" ? ".png" : ".jpg";
  return {
    avif: path.join(dir, `${base}.opt.avif`),
    webp: path.join(dir, `${base}.opt.webp`),
    fallback: path.join(dir, `${base}.opt${fallbackExt}`),
  };
}

async function optimizeOne(target) {
  const absInput = path.join(root, target.input);
  if (!fs.existsSync(absInput)) {
    console.warn(`skip missing file: ${target.input}`);
    return;
  }

  const meta = await sharp(absInput).metadata();
  const fallbackFormat = target.fallbackFormat ?? "jpeg";
  const outputs = toOutputPaths(absInput, fallbackFormat);

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

  const avifQ = target.avifQuality ?? Math.max(45, target.quality - 10);
  const avifEffort = target.avifEffort ?? 6;
  await pipeline.clone().avif({ quality: avifQ, effort: avifEffort }).toFile(outputs.avif);
  const webpOpts = { quality: target.quality, effort: 6 };
  if (target.webpNearLossless) {
    webpOpts.nearLossless = true;
  }
  await pipeline.clone().webp(webpOpts).toFile(outputs.webp);
  if (fallbackFormat === "png") {
    await pipeline.clone().png({ compressionLevel: 9, effort: 10 }).toFile(outputs.fallback);
  } else {
    await pipeline.clone().jpeg({ quality: target.quality, mozjpeg: true, progressive: true }).toFile(outputs.fallback);
  }

  const fbLabel = fallbackFormat === "png" ? ".opt.png" : ".opt.jpg";
  console.log(`[ok] ${target.input} (${meta.width ?? "?"}x${meta.height ?? "?"}) -> ${sizeLabel}; wrote .opt.avif/.opt.webp/${fbLabel}`);
}

for (const target of targets) {
  // eslint-disable-next-line no-await-in-loop
  await optimizeOne(target);
}
