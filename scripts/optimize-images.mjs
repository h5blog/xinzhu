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
  // 首页顶栏横幅：源图 3840×922，导出 3840 宽覆盖 1920 CSS 下的 2×（Retina）
  {
    input: "src/images/banner.png",
    maxWidth: 3840,
    quality: 92,
    avifQuality: 88,
    avifEffort: 7,
    fallbackFormat: "png",
  },
  { input: "src/images/news-detail-5-main.png", maxWidth: 1064, quality: 72 },
  // 详情页头图仅约 217px 高，无需 2K 宽；缩小体积加快首屏
  { input: "src/images/news-detail-hero-bg.jpg", maxWidth: 1600, quality: 62 },
  { input: "src/images/join-hero-bg.png", maxWidth: 1920, quality: 70 },
  // 加入我们顶栏：源图 3840×434，导出 3840 宽覆盖 1920 CSS 下的 2×（Retina）
  {
    input: "src/images/join-bg.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 创始团队顶栏：源图 3840 宽，导出 3840 以覆盖 2x 屏（1920 CSS px）；略提质量保文字锐利
  {
    input: "src/images/team-banner-bg.png",
    maxWidth: 3840,
    quality: 92,
    avifQuality: 88,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 首页「创始团队」区块背景（首屏下方：体积适中即可）
  {
    input: "src/images/team-bg.png",
    maxWidth: 1920,
    quality: 82,
    avifQuality: 76,
    avifEffort: 6,
    fallbackFormat: "png",
  },
  // 首页创始团队头像（展示约 176px～9vw，352 宽覆盖 2x）
  { input: "src/images/team-1.jpg", maxWidth: 352, quality: 82 },
  { input: "src/images/team-2.jpg", maxWidth: 352, quality: 82 },
  { input: "src/images/team-3.jpg", maxWidth: 352, quality: 82 },
  { input: "src/images/team-4.jpg", maxWidth: 352, quality: 82 },
  // 加入我们「薪酬福利」：展示宽约 1096，1200 宽约 1.1× 稿宽，体积明显小于 1600；原 PNG ~1.6MB
  {
    input: "src/images/fuli.png",
    maxWidth: 1200,
    quality: 68,
    avifQuality: 56,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  { input: "src/images/join-footer-1.png", maxWidth: 812, quality: 72 },
  { input: "src/images/join-footer-2.png", maxWidth: 812, quality: 72 },
  { input: "src/images/news-detail-3-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-1-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-4-main.png", maxWidth: 1064, quality: 72 },
  { input: "src/images/our-team.png", maxWidth: 1920, quality: 70 },
  // 技术中心顶栏横幅（JPEG 兜底远小于 PNG）
  {
    input: "src/images/tech-banner.png",
    maxWidth: 1920,
    quality: 82,
    avifQuality: 78,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 技术中心胶囊区顶图：展示宽约 min(100%,49.58vw)≈952@1920，1200 宽覆盖常见 DPR；JPEG 兜底远小于原 .opt.png
  {
    input: "src/images/tech-icon.png",
    maxWidth: 1200,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 新闻中心顶栏：源图 3840×434，导出 3840 宽覆盖 1920 CSS 下的 2×（Retina）
  {
    input: "src/images/news-bg.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 关于我们页首屏横幅：源图 3840×922，导出 3840 宽覆盖 1920 CSS 宽度下的 2×（Retina）
  {
    input: "src/images/gsjj-banner.png",
    maxWidth: 3840,
    quality: 92,
    avifQuality: 88,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 关于我们「我们的目标」插图：展示宽约 800px，源图超宽条，压到 1600 宽以内并出 AVIF/WebP
  { input: "src/images/gj.png", maxWidth: 1600, quality: 74 },
  // 关于我们三列卡片底图（约 736～764 宽）：多格式减小体积与解码耗时
  {
    input: "src/images/about-card-route.png",
    maxWidth: 800,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/about-card-position.png",
    maxWidth: 800,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/about-card-goal.png",
    maxWidth: 800,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 关于我们标签整图：稿 1122×459；压到约 1500 宽 + 现代格式，显著小于原 PNG
  {
    input: "src/images/about-tag.png",
    maxWidth: 1500,
    quality: 76,
    avifQuality: 66,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 新闻列表缩略图（卡片约 358×172，2x 约 716 宽）
  { input: "src/images/news-thumb-1.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-2.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-3.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-4.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-5.jpg", maxWidth: 716, quality: 72 },
  // 首页 AI 解决方案区背景（首屏下方）：1920 宽 + AVIF/WebP/JPEG，体积与解码兼顾
  {
    input: "src/images/tech-bg.png",
    maxWidth: 1920,
    quality: 70,
    avifQuality: 62,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
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
