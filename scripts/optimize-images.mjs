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
 * - outputBase: optional basename (no ext) for .opt.* outputs，同源多档宽时用于如 home-banner-1x
 */
const targets = [
  // 首页顶栏横幅 home-banner：稿 1920×461；1× 1920w + 2× 3840w，picture 用 srcset 按 DPR/宽度选用
  {
    input: "src/images/home-banner.png",
    maxWidth: 1920,
    outputBase: "home-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/home-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  { input: "src/images/news-detail-5-main.png", maxWidth: 1064, quality: 72 },
  // 新闻详情页顶栏 news-detail-banner：稿 1920×217；1×1920w + 2×3840w
  {
    input: "src/images/news-detail-banner.png",
    maxWidth: 1920,
    outputBase: "news-detail-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/news-detail-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 岗位详情页顶栏 job-detail-banner：稿 1920×217；1× + 2×
  {
    input: "src/images/job-detail-banner.png",
    maxWidth: 1920,
    outputBase: "job-detail-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/job-detail-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 加入我们页顶栏 job-banner：稿 1920×217；1× + 2×
  {
    input: "src/images/job-banner.png",
    maxWidth: 1920,
    outputBase: "job-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/job-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 创始团队页顶栏 team-banner：稿 1920×217；1× + 2×
  {
    input: "src/images/team-banner.png",
    maxWidth: 1920,
    outputBase: "team-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/team-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 首页「创始团队」区块背景：稿 1920 宽；1×1920w + AVIF/WebP/JPEG（避免 PNG 兜底体积膨胀）
  {
    input: "src/images/team-bg.png",
    maxWidth: 1920,
    quality: 82,
    avifQuality: 76,
    avifEffort: 6,
    fallbackFormat: "jpeg",
  },
  // 首页创始团队头像：稿 187px@1920，源 374×375；导出 ≤374 + AVIF/WebP/JPEG
  {
    input: "src/images/home-zw.png",
    maxWidth: 374,
    quality: 82,
    avifQuality: 72,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/home-wy.png",
    maxWidth: 374,
    quality: 82,
    avifQuality: 72,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/home-wg.png",
    maxWidth: 374,
    quality: 82,
    avifQuality: 72,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/home-lty.png",
    maxWidth: 374,
    quality: 82,
    avifQuality: 72,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 加入我们「薪酬福利」fuli：稿 1124×687@1920；导出 2400 宽覆盖 2×；AVIF/WebP/JPEG 控体积
  {
    input: "src/images/fuli.png",
    maxWidth: 2400,
    quality: 76,
    avifQuality: 66,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  { input: "src/images/join-footer-1.png", maxWidth: 812, quality: 72 },
  { input: "src/images/join-footer-2.png", maxWidth: 812, quality: 72 },
  { input: "src/images/news-detail-3-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-1-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/news-detail-4-main.png", maxWidth: 1064, quality: 72 },
  { input: "src/images/our-team.png", maxWidth: 1920, quality: 70 },
  // 技术中心顶栏 tech-banner：稿 1920×461；仅 1×1920w（不重导 3840 2×，控体积）
  {
    input: "src/images/tech-banner.png",
    maxWidth: 1920,
    outputBase: "tech-banner-1x",
    quality: 72,
    avifQuality: 62,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 技术中心胶囊区顶图：稿展示宽约 952@1920（1×），仅导出 ≤952 宽以控体积
  {
    input: "src/images/tech-icon.png",
    maxWidth: 952,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 技术核心页「核心技术体系示意图」：源 1132×483，1× 多格式替代 ~550KB PNG
  {
    input: "src/images/jishu-b.png",
    maxWidth: 1132,
    quality: 82,
    avifQuality: 70,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 新闻中心顶栏 news-banner：稿 1920×217；1× + 2×
  {
    input: "src/images/news-banner.png",
    maxWidth: 1920,
    outputBase: "news-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/news-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 公司简介页首屏 gsjj-banner：稿 1920×461；1× + 2×
  {
    input: "src/images/gsjj-banner.png",
    maxWidth: 1920,
    outputBase: "gsjj-banner-1x",
    quality: 88,
    avifQuality: 82,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/gsjj-banner.png",
    maxWidth: 3840,
    quality: 90,
    avifQuality: 84,
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
  // 公司简介底部双栏配图：稿比例 539×404，桌面单列宽约 ≤565px；1200 覆盖 2×，原 PNG 数 MB
  {
    input: "src/images/about-gallery-1.png",
    maxWidth: 1200,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  {
    input: "src/images/about-gallery-2.png",
    maxWidth: 1200,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 新闻列表缩略图（卡片约 358×172，2x 约 716 宽）
  { input: "src/images/news-thumb-1.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-2.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-3.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-4.jpg", maxWidth: 716, quality: 72 },
  { input: "src/images/news-thumb-5.jpg", maxWidth: 716, quality: 72 },
  // 首页 AI 解决方案区 tech-bg：稿 1920×583@1920；1×1920w 控体积（不重导 3840 2×）
  {
    input: "src/images/tech-bg.png",
    maxWidth: 1920,
    quality: 88,
    avifQuality: 80,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 首页「数字化资源支撑矩阵」：稿 1200×1075@1920，导出宽 2400 覆盖 2×；AVIF/WebP/JPEG 控体积
  {
    input: "src/images/juzhen.png",
    maxWidth: 2400,
    quality: 78,
    avifQuality: 68,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 首页矩阵卡片 3D 图标：稿展示宽 170px@1920（2×≈340）；源已更新为大图，导出宽 ≤400 + AVIF/WebP/PNG
  ...[1, 2, 3, 4, 5, 6].map((n) => ({
    input: `src/images/juzhen-icon${n}.png`,
    maxWidth: 400,
    quality: 82,
    avifQuality: 70,
    avifEffort: 7,
    fallbackFormat: "png",
  })),
  // 首页「核心战略协作方」下方白底区背景：稿 1920×1460；1×1920w + AVIF/WebP/JPEG（不重导 3840 2×）
  {
    input: "src/images/partner-bg.png",
    maxWidth: 1920,
    quality: 72,
    avifQuality: 64,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
  // 创始团队页头像（稿宽约 259px，520 覆盖 2×）
  { input: "src/images/zw.jpg", maxWidth: 520, quality: 82, avifQuality: 72, avifEffort: 7, fallbackFormat: "jpeg" },
  { input: "src/images/wg.jpg", maxWidth: 520, quality: 82, avifQuality: 72, avifEffort: 7, fallbackFormat: "jpeg" },
  { input: "src/images/wy.jpg", maxWidth: 520, quality: 82, avifQuality: 72, avifEffort: 7, fallbackFormat: "jpeg" },
  { input: "src/images/lty.jpg", maxWidth: 520, quality: 82, avifQuality: 72, avifEffort: 7, fallbackFormat: "jpeg" },
  // 创始团队文案卡片底图（多卡片复用同一 URL）
  {
    input: "src/images/team-list.jpg",
    maxWidth: 1600,
    quality: 74,
    avifQuality: 64,
    avifEffort: 7,
    fallbackFormat: "jpeg",
  },
];

function toOutputPaths(absInput, fallbackFormat = "jpeg", outputBase) {
  const dir = path.dirname(absInput);
  const ext = path.extname(absInput);
  const base = outputBase ?? path.basename(absInput, ext);
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
  const outputs = toOutputPaths(absInput, fallbackFormat, target.outputBase);

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
  const outLabel = target.outputBase ? `${target.outputBase}.opt.*` : `${path.basename(absInput, path.extname(absInput))}.opt.*`;
  console.log(`[ok] ${target.input} (${meta.width ?? "?"}x${meta.height ?? "?"}) -> ${sizeLabel}; wrote ${outLabel} (${fbLabel})`);
}

const onlyInput = process.argv[2];
for (const target of targets) {
  if (onlyInput && target.input !== onlyInput) continue;
  // eslint-disable-next-line no-await-in-loop
  await optimizeOne(target);
}
