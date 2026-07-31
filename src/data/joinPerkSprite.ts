import spriteAvif1x from "../images/job-perk-sprite-1x.opt.avif";
import spriteAvif2x from "../images/job-perk-sprite-2x.opt.avif";
import spriteWebp1x from "../images/job-perk-sprite-1x.opt.webp";
import spriteWebp2x from "../images/job-perk-sprite-2x.opt.webp";
import spritePng1x from "../images/job-perk-sprite-1x.opt.png";
import spritePng2x from "../images/job-perk-sprite-2x.opt.png";

/** 3×2 雪碧；稿单格 68×78@1920 */
export const JOIN_PERK_SPRITE_COLS = 3;
export const JOIN_PERK_SPRITE_ROWS = 2;
export const joinPerkSpriteCellW = 68;
export const joinPerkSpriteCellH = 78;

export const joinPerkSpriteBgSize = `${JOIN_PERK_SPRITE_COLS * 100}% ${JOIN_PERK_SPRITE_ROWS * 100}%`;

export const joinPerkSpriteSources = {
  avif1x: spriteAvif1x,
  avif2x: spriteAvif2x,
  webp1x: spriteWebp1x,
  webp2x: spriteWebp2x,
  png1x: spritePng1x,
  png2x: spritePng2x,
} as const;

/** 与 JOIN_PERK_CARDS 顺序一致：左→右、上→下 */
export const JOIN_PERK_SPRITE_POSITIONS = [
  "0% 0%",
  "50% 0%",
  "100% 0%",
  "0% 100%",
  "50% 100%",
  "100% 100%",
] as const;

export const joinPerkSpriteImageSet = `image-set(
  url(${spriteAvif1x}) type('image/avif') 1x,
  url(${spriteAvif2x}) type('image/avif') 2x,
  url(${spriteWebp1x}) type('image/webp') 1x,
  url(${spriteWebp2x}) type('image/webp') 2x,
  url(${spritePng1x}) type('image/png') 1x,
  url(${spritePng2x}) type('image/png') 2x
)`;

export function preloadJoinPerkSprite() {
  if (typeof document === "undefined") return;
  const id = "preload-join-perk-sprite-avif";
  if (document.getElementById(id)) return;
  const link = document.createElement("link");
  link.id = id;
  link.rel = "preload";
  link.as = "image";
  link.type = "image/avif";
  link.href = spriteAvif1x;
  link.setAttribute("fetchpriority", "high");
  document.head.appendChild(link);
}
