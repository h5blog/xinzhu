import { assets } from "./assets";
import QinghuaCollaboration from "./QinghuaCollaboration";

/** 装饰线/框：线粗按 7/1920；线段长度用 vw 随屏宽增长，仅保最小可读长度 */
const LINE = "clamp(5px,0.365vw,7px)";
const TOP_SEG_W = "max(40px,5.2vw)";
const TOP_CENTER_W = "max(120px,18.5vw)";
const BOT_SEG_L = "max(52px,7vw)";
const BOT_SEG_C = "max(100px,14.5vw)";
const BOT_SEG_R = "max(44px,5.5vw)";
const V_TOP = "max(140px,18.229vw)";
const V_H = "max(120px,20vw)";
const CORNER_T = "max(56px,5.625vw)";
const CORNER_T_W = "max(56px,5.833vw)";
const CORNER_B = "max(48px,4.948vw)";

export default function Partners() {
  return (
      <div className="text-center" style={{background: 'linear-gradient(310deg, #F96D01 33%, #FFB941 100%)'}} >
        <div className="break-words px-4 py-[clamp(40px,3.23vw,62px)] text-center font-['PingFang_SC',sans-serif] text-3xl font-semibold text-white md:text-4xl lg:text-[2.08vw]">
          核心战略协作方
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-[clamp(12px,2.08vw,40px)] gap-y-4 px-2 py-[18px] pb-[clamp(48px,4.17vw,80px)] sm:px-4">
          <div
            className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(200px,18.02vw,346px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:18.02vw_auto]"
            style={{ backgroundImage: `url(${assets.partnerA})` }}
          />
          <div
            className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(220px,22.29vw,428px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:22.29vw_auto]"
            style={{ backgroundImage: `url(${assets.partnerB})` }}
          />
        </div>
        <div
        style={{
          width: "100%",
          minHeight: "clamp(980px,75.94vw,1458px)",
          backgroundColor: "#fff",
          backgroundImage: `url(${assets.partnerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          paddingTop: "clamp(40px,3.23vw,62px)",
          paddingBottom: "clamp(48px,4.17vw,80px)",
        }}>
          <div className="mb-[max(18px,1.56vw)] break-words px-4 text-center font-['PingFang_SC',sans-serif] text-3xl font-semibold text-[#f96d01] md:text-4xl lg:text-[2.08vw]">
            数字化资源支撑矩阵
          </div>
          <div className="mx-auto w-full max-w-[1140px] px-2 sm:px-4 lg:w-[59.38vw] lg:max-w-none">
           
            <div className="relative p-4 px-5 sm:p-5 sm:px-7 lg:p-[max(1.25rem,calc(2vw+0.625rem))]">
            <div
              className="pointer-events-none absolute h-[clamp(72px,5.47vw,105px)] w-[clamp(120px,9.69vw,186px)] bg-contain bg-center bg-no-repeat left-[clamp(12px,8.33vw,160px)] top-[clamp(-60px,-3.125vw,-48px)] xl:left-[8.33vw] xl:top-[-3.125vw] xl:h-[5.47vw] xl:w-[9.69vw] xl:max-h-none xl:max-w-none"
              style={{ backgroundImage: `url(${assets.partneraWhite})` }}
            />
            <div
              className="pointer-events-none absolute h-[clamp(56px,3.91vw,75px)] w-[clamp(140px,13.33vw,256px)] bg-contain bg-center bg-no-repeat right-[clamp(8px,6.25vw,140px)] top-[clamp(-36px,-2.5vw,-48px)] xl:right-[6.25vw] xl:top-[-2.5vw] xl:h-[3.91vw] xl:w-[13.33vw] xl:max-h-none xl:max-w-none"
              style={{ backgroundImage: `url(${assets.partnerbWhite})` }}
            />
            <div
              className="pointer-events-none absolute left-[max(0.75rem,1.04vw)] top-0 bg-[#fb6b00] lg:left-[max(1rem,1.04vw)]"
              style={{ height: LINE, width: TOP_SEG_W }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 bg-[#fb6b00]"
              style={{ height: LINE, width: TOP_CENTER_W }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-[max(0.75rem,1.04vw)] top-0 bg-[#fb6b00] lg:right-[max(1rem,1.04vw)]"
              style={{ height: LINE, width: TOP_SEG_W }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 bg-[#fb6b00]"
              style={{ height: LINE, width: BOT_SEG_L }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 bg-[#fb6b00]"
              style={{ height: LINE, width: BOT_SEG_C }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 bg-[#fb6b00]"
              style={{ height: LINE, width: BOT_SEG_R }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-0 bg-[#fb6b00]"
              style={{ top: V_TOP, height: V_H, width: LINE }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-0 bg-[#fb6b00]"
              style={{ top: V_TOP, height: V_H, width: LINE }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-0 top-0 box-border border-[#fb6b00]"
              style={{
                height: CORNER_T,
                width: CORNER_T_W,
                borderLeftWidth: LINE,
                borderTopWidth: LINE,
                borderLeftStyle: "solid",
                borderTopStyle: "solid",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-0 top-0 box-border border-[#fb6b00]"
              style={{
                height: CORNER_T,
                width: CORNER_T_W,
                borderRightWidth: LINE,
                borderTopWidth: LINE,
                borderRightStyle: "solid",
                borderTopStyle: "solid",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 left-0 box-border border-[#fb6b00]"
              style={{
                height: CORNER_B,
                width: CORNER_B,
                borderBottomWidth: LINE,
                borderLeftWidth: LINE,
                borderBottomStyle: "solid",
                borderLeftStyle: "solid",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-0 right-0 box-border border-[#fb6b00]"
              style={{
                height: CORNER_B,
                width: CORNER_B,
                borderBottomWidth: LINE,
                borderRightWidth: LINE,
                borderBottomStyle: "solid",
                borderRightStyle: "solid",
              }}
              aria-hidden
            />
            <div className="relative z-0">
              <QinghuaCollaboration />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

