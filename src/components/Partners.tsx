import { CONTENT_MAX_WIDTH } from "../constants/contentAlign";
import { assets } from "./assets";

/** @1920 稿：juzhen.png 1153×1041 */
const JZ_W = 1153;
const JZ_H = 1041;

export default function Partners() {
  return (
      <div className="text-center" style={{background: 'linear-gradient(310deg, #F96D01 33%, #FFB941 100%)'}} >
        <div className="break-words px-4 py-[clamp(40px,3.23vw,62px)] text-center font-['PingFang_SC',sans-serif] text-3xl font-semibold text-white md:text-4xl lg:text-[2.08vw]">
          核心战略协作方
        </div>
        <div style={{opacity: 0}} className="flex w-full flex-wrap items-center justify-center gap-x-[clamp(12px,2.08vw,40px)] gap-y-4 px-2 py-[18px] pb-[clamp(48px,4.17vw,80px)] sm:px-4">
          <div
            className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(200px,18.02vw,346px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:18.02vw_auto]"
            // style={{ backgroundImage: `url(${assets.partnerA})` }}
          />
          <div
            className="aspect-[491/142] w-full max-w-[491px] overflow-hidden rounded-[14px] bg-white bg-[length:clamp(220px,22.29vw,428px)_auto] bg-center bg-no-repeat sm:w-[calc(50%-0.75rem)] sm:max-w-[491px] xl:w-[25.57vw] xl:max-w-none xl:rounded-[0.73vw] xl:bg-[length:22.29vw_auto]"
            // style={{ backgroundImage: `url(${assets.partnerB})` }}
          />
        </div>
        <div
        style={{
          width: "100%",
          backgroundColor: "#fff",
          backgroundImage: `url(${assets.partnerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
          paddingTop: "clamp(40px,3.23vw,62px)",
          paddingBottom: "clamp(48px,4.17vw,80px)",
        }}>
          <div className="mx-auto w-full px-4">
            <div className="mx-auto w-full" style={{ maxWidth: CONTENT_MAX_WIDTH }}>
              {/* Figma 838:1310 — PingFang Medium，40px，#f96d01；文案勿删 */}
              <h2
                className="type-title-xl m-0 mb-[clamp(40px,3.33vw,72px)] text-center font-['PingFang_SC',sans-serif] !font-medium !leading-normal text-[#f96d01]"
                data-node-id="838:1310"
              >
                数字化资源支撑矩阵
              </h2>
              <img
                src={assets.juzhen}
                alt=""
                width={JZ_W}
                height={JZ_H}
                decoding="async"
                className="mx-auto block h-auto w-full object-contain"
                style={{ maxWidth: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
  );
}
