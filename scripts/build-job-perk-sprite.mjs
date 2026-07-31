/**
 * 将 job-perk-icon-1…6 拼成 3×2 雪碧图（仅图标区），供薪酬福利卡片 background-position 使用。
 * 输出：job-perk-sprite.png（1×）、job-perk-sprite-2x.png（2×）
 */
import fs from "fs";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const imagesDir = path.join(root, "src/images");

const COLS = 3;
const ROWS = 2;
/** 稿面单格宽 68px@1920；格高按最宽比例预留 */
const CELL_W_1X = 68;
const CELL_H_1X = 78;
const CELL_W_2X = 136;
const CELL_H_2X = 156;

const ICON_FILES = [1, 2, 3, 4, 5, 6].map((n) => `job-perk-icon-${n}.png`);

async function fitIconToCell(absInput, cellW, cellH) {
  return sharp(absInput)
    .resize(cellW, cellH, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();
}

async function buildSprite(cellW, cellH, outName) {
  const canvasW = cellW * COLS;
  const canvasH = cellH * ROWS;
  const composites = [];

  for (let i = 0; i < ICON_FILES.length; i++) {
    const file = ICON_FILES[i];
    const abs = path.join(imagesDir, file);
    if (!fs.existsSync(abs)) {
      console.warn(`skip missing: ${file}`);
      continue;
    }
    const col = i % COLS;
    const row = Math.floor(i / COLS);
    const tile = await fitIconToCell(abs, cellW, cellH);
    composites.push({
      input: tile,
      left: col * cellW,
      top: row * cellH,
    });
  }

  const outPath = path.join(imagesDir, outName);
  await sharp({
    create: {
      width: canvasW,
      height: canvasH,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite(composites)
    .png()
    .toFile(outPath);

  console.log(`[sprite] ${outName} ${canvasW}x${canvasH}`);
}

await buildSprite(CELL_W_1X, CELL_H_1X, "job-perk-sprite.png");
await buildSprite(CELL_W_2X, CELL_H_2X, "job-perk-sprite-2x.png");
