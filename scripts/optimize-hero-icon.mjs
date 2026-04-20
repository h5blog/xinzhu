import fs from "fs";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "src/images/hero-icon.png");
const avifOut = path.join(root, "src/images/hero-icon.avif");
const webpOut = path.join(root, "src/images/hero-icon.webp");
const pngOut = path.join(root, "src/images/hero-icon.png");
const pngTmp = path.join(root, "src/images/hero-icon.png.tmp");

const meta = await sharp(input).metadata();
const fallbackW = 488;
const pngW = meta.width ? Math.min(fallbackW, meta.width) : fallbackW;

await sharp(input)
  .resize({ width: pngW, withoutEnlargement: true })
  .avif({ quality: 55, effort: 6 })
  .toFile(avifOut);

await sharp(input)
  .resize({ width: pngW, withoutEnlargement: true })
  .webp({ quality: 76, effort: 6 })
  .toFile(webpOut);

await sharp(input)
  .resize({ width: pngW })
  .png({ compressionLevel: 9, palette: true, quality: 82, effort: 10 })
  .toFile(pngTmp);

fs.renameSync(pngTmp, pngOut);

console.log(`hero-icon: ${meta.width}x${meta.height} -> width ${pngW}`);
console.log("wrote:", avifOut, webpOut, pngOut);
