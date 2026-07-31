import { useEffect } from "react";
import { JOIN_PERK_CARDS } from "../data/joinPerks";
import {
  joinPerkSpriteBgSize,
  joinPerkSpriteCellH,
  joinPerkSpriteCellW,
  joinPerkSpriteImageSet,
  joinPerkSpriteSources,
  preloadJoinPerkSprite,
} from "../data/joinPerkSprite";

const joinPerkBodyText =
  "w-full text-left font-['PingFang_SC'] text-[16px] leading-[1.7] tracking-[0.03em] text-[#666666]";

const joinSectionHeading =
  "text-center font-['PingFang_SC'] text-[28px] font-semibold leading-tight text-[#f96d01]";

const joinPerkCardTitle =
  "m-0 font-['PingFang_SC'] text-[18px] font-semibold leading-snug text-[#f96d01]";

const joinPerkCardShadow =
  "shadow-[0px_7px_8px_0px_rgba(0,0,0,0.12)] lg:shadow-[0px_0.36458333333333335vw_0.4166666666666667vw_0px_rgba(0,0,0,0.12)]";

/** 稿 68×78@1920，与雪碧单格一致 */
const joinPerkIconBoxClass =
  "mx-auto w-[max(56px,calc(100vw*68/1920))] aspect-[68/78] shrink-0 bg-no-repeat";

function JoinSectionRuleBar({
  className = "",
  "data-node-id": nodeId,
}: {
  className?: string;
  "data-node-id": string;
}) {
  return (
    <div
      className={`mx-auto h-[3px] w-full bg-[linear-gradient(90deg,#f0f0f0_0%,#f96d01_49.519%,#f0f0f0_100%)] lg:h-[0.15625vw] lg:max-h-[5px] lg:min-h-[3px] ${className}`}
      data-node-id={nodeId}
      aria-hidden
    />
  );
}

function JoinPerkSpriteIcon({ position }: { position: string }) {
  return (
    <div
      aria-hidden
      className={joinPerkIconBoxClass}
      style={{
        backgroundImage: joinPerkSpriteImageSet,
        backgroundSize: joinPerkSpriteBgSize,
        backgroundPosition: position,
      }}
    />
  );
}

function JoinPerkCard({
  title,
  body,
  spritePosition,
  "data-node-id": nodeId,
}: {
  title: string;
  body: string;
  spritePosition: string;
  "data-node-id": string;
}) {
  return (
    <article
      data-node-id={nodeId}
      className={`flex min-h-[max(200px,calc(100vw*220/1920))] flex-col items-center rounded-2xl bg-white px-4 py-6 sm:px-5 sm:py-7 lg:rounded-[max(24px,calc(100vw*24/1920))] lg:px-[calc(100vw*20/1920)] lg:py-[calc(100vw*28/1920)] ${joinPerkCardShadow}`}
    >
      <JoinPerkSpriteIcon position={spritePosition} />
      <h3
        className={`mt-4 w-full text-center sm:mt-5 lg:mt-[calc(100vw*20/1920)] ${joinPerkCardTitle}`}
      >
        {title}
      </h3>
      <p className={`mt-2 sm:mt-2.5 lg:mt-[calc(100vw*12/1920)] ${joinPerkBodyText}`}>
        {body}
      </p>
    </article>
  );
}

/** 首屏预加载雪碧图（单请求），无 JS 时仍显示 PNG 兜底 */
function JoinPerkSpritePreload() {
  const avifSrcSet = `${joinPerkSpriteSources.avif1x} ${joinPerkSpriteCellW * 3}w, ${joinPerkSpriteSources.avif2x} ${joinPerkSpriteCellW * 6}w`;
  const webpSrcSet = `${joinPerkSpriteSources.webp1x} ${joinPerkSpriteCellW * 3}w, ${joinPerkSpriteSources.webp2x} ${joinPerkSpriteCellW * 6}w`;
  return (
    <picture className="hidden" aria-hidden>
      <source srcSet={avifSrcSet} type="image/avif" />
      <source srcSet={webpSrcSet} type="image/webp" />
      <img
        src={joinPerkSpriteSources.png1x}
        alt=""
        width={joinPerkSpriteCellW * 3}
        height={joinPerkSpriteCellH * 2}
        decoding="async"
        loading="eager"
        fetchPriority="high"
      />
    </picture>
  );
}

export default function JoinBenefitsSection() {
  const gridGap =
    "gap-4 sm:gap-5 lg:gap-x-[clamp(16px,calc(100vw*24/1920),28px)] lg:gap-y-[clamp(16px,calc(100vw*24/1920),28px)]";

  useEffect(() => {
    preloadJoinPerkSprite();
  }, []);

  return (
    <section className="min-w-0" data-node-id="1296:237">
      <JoinPerkSpritePreload />
      <h2 className={joinSectionHeading} data-node-id="729:29274">
        薪酬福利
      </h2>
      <JoinSectionRuleBar className="mt-4 lg:mt-5" data-node-id="924:280" />

      <div
        className={`mt-10 grid grid-cols-1 sm:grid-cols-2 lg:mt-[2.6042vw] lg:grid-cols-3 ${gridGap}`}
        data-node-id="1296:244"
      >
        {JOIN_PERK_CARDS.map((card) => (
          <JoinPerkCard
            key={card.title}
            title={card.title}
            body={card.body}
            spritePosition={card.spritePosition}
            data-node-id={card["data-node-id"]}
          />
        ))}
      </div>
    </section>
  );
}
