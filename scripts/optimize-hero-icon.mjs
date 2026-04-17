import fs from "fs";
import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const input = path.join(root, "src/images/hero-icon.png");
const webpOut = path.join(root, "src/images/hero-icon.webp");
const pngOut = path.join(root, "src/images/hero-icon.png");
const pngTmp = path.join(root, "src/images/hero-icon.png.tmp");

const meta = await sharp(input).metadata();
const maxW = 976;
const fallbackW = 488;
const width = meta.width ? Math.min(maxW, meta.width) : maxW;
const pngW = meta.width ? Math.min(fallbackW, meta.width) : fallbackW;

await sharp(input)
  .resize({ width })
  .webp({ quality: 82, effort: 6 })
  .toFile(webpOut);

await sharp(input)
  .resize({ width: pngW })
  .png({ compressionLevel: 9, palette: true, quality: 82, effort: 10 })
  .toFile(pngTmp);

fs.renameSync(pngTmp, pngOut);

console.log(`hero-icon: ${meta.width}x${meta.height} -> width ${width}`);
console.log("wrote:", webpOut, pngOut);
