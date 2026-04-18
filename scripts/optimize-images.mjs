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
 * - quality: output quality for lossy formats
 */
const targets = [
  { input: "src/images/banner.png", maxWidth: 1920, quality: 70 },
  { input: "src/images/news-detail-5-main.png", maxWidth: 1064, quality: 72 },
  { input: "src/images/news-detail-hero-bg.jpg", maxWidth: 1920, quality: 70 },
  { input: "src/images/join-hero-bg.png", maxWidth: 1920, quality: 70 },
  { input: "src/images/join-footer-1.png", maxWidth: 812, quality: 72 },
  { input: "src/images/join-footer-2.png", maxWidth: 812, quality: 72 },
  { input: "src/images/news-detail-3-main.png", maxWidth: 1103, quality: 72 },
  { input: "src/images/our-team.png", maxWidth: 1920, quality: 70 },
  { input: "src/images/jishu-a.jpg", maxWidth: 1920, quality: 70 },
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
  const width = meta.width ? Math.min(meta.width, target.maxWidth) : target.maxWidth;
  const outputs = toOutputPaths(absInput);

  const pipeline = sharp(absInput).resize({ width, withoutEnlargement: true });

  await pipeline.clone().avif({ quality: Math.max(45, target.quality - 10), effort: 6 }).toFile(outputs.avif);
  await pipeline.clone().webp({ quality: target.quality, effort: 6 }).toFile(outputs.webp);
  await pipeline.clone().jpeg({ quality: target.quality, mozjpeg: true, progressive: true }).toFile(outputs.jpg);

  console.log(
    `[ok] ${target.input} (${meta.width ?? "?"}x${meta.height ?? "?"}) -> ${width}px; wrote .opt.avif/.opt.webp/.opt.jpg`,
  );
}

for (const target of targets) {
  // eslint-disable-next-line no-await-in-loop
  await optimizeOne(target);
}
