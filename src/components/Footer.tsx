import { CONTENT_MAX_WIDTH } from "../constants/contentAlign";
import { assets } from "./assets";

/** 1920 稿 20px；与首页段落同一套：PingFang、流体字号、行高、字距 */
const footerSectionTitle =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] font-medium leading-[1.7] tracking-[0.03em] text-[#f96d01]";

/** 1920 稿 16px */
const footerBodyText =
  "font-['PingFang_SC'] text-[max(14px,calc(100vw*16/1920))] font-medium leading-[1.7] tracking-[0.03em] text-[#e8e8e8]";

/** 1920 稿 12px */
const footerLegalText =
  "font-['PingFang_SC'] text-[max(11px,calc(100vw*12/1920))] font-medium leading-[1.7] tracking-[0.03em] text-[#9c9c9c]";

/**
 * Figma 470:41 底栏 #252525；内容区与首页 juzhen 图同宽（1153@1920）左对齐。
 */
export default function Footer() {
  return (
    <footer className="bg-[#252525] text-[#363636]" data-node-id="470:41">
      <div className="mx-auto box-border w-full min-h-[320px] px-4 pb-[clamp(24px,2.2vw,36px)] pt-[clamp(32px,2.9vw,48px)]">
        <div className="mx-auto w-full" style={{ maxWidth: CONTENT_MAX_WIDTH }}>
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:justify-start lg:gap-[clamp(48px,4.17vw,80px)]">
          {/* 左栏：公司地址 + 联系方式 */}
          <div className="flex max-w-[475px] flex-col gap-[clamp(26px,2.35vw,45px)] lg:max-w-[40.4%]">
            <section data-node-id="470:42">
              <h3 className={footerSectionTitle}>公司地址</h3>
              <div
                className="mt-2 h-px w-full bg-[#5c5c5c]"
                data-node-id="470:48"
                aria-hidden
              />
              <p className={`mt-3 ${footerBodyText}`} data-node-id="470:45">
                北京市海淀区海淀大悦信息科技园D2号楼4楼C-403室
              </p>
            </section>
            <section data-node-id="470:43">
              <h3 className={footerSectionTitle}>联系方式</h3>
              <div
                className="mt-2 h-px w-[min(100%,178px)] bg-[#5c5c5c] lg:w-[9.27vw] lg:max-w-[178px]"
                data-node-id="470:51"
                aria-hidden
              />
              <p className={`mt-3 ${footerBodyText}`} data-node-id="470:46">
                xzsd@xinzhu-ai.com.cn
              </p>
            </section>
          </div>

          {/* 右栏：二维码 + 关注我们 */}
          <div className="flex flex-col items-start lg:min-w-[min(16.04vw,308px)]">
            <img
              src={assets.qrcode}
              alt="公众号二维码"
              width={129}
              height={129}
              className="block size-[clamp(96px,calc(100vw*129/1920),240px)] bg-white object-contain p-1"
              data-node-id="470:53"
              loading="lazy"
              decoding="async"
            />
            <h3
              className={`mt-6 lg:mt-[clamp(22px,1.46vw,28px)] ${footerSectionTitle}`}
              data-node-id="470:44"
            >
              关注我们
            </h3>
            <div
              className="mt-2 h-px w-[min(100%,199px)] bg-[#5c5c5c] lg:w-[10.36vw] lg:max-w-[199px]"
              data-node-id="470:52"
              aria-hidden
            />
            <p className={`mt-3 ${footerBodyText}`} data-node-id="470:47">
              扫描二维码关注新烛时代公众号
            </p>
          </div>
        </div>

        {/* 底部分割 + 备案 */}
        <div
          className="mt-10 border-t border-[#5c5c5c] pt-5 sm:mt-12 sm:pt-6"
          data-node-id="470:49"
        >
          <p className={`text-center ${footerLegalText}`} data-node-id="470:50">
            <span>©2025 北京新烛时代科技有限公司 版权所有 </span>
            <a
              className="underline decoration-solid underline-offset-2 transition hover:text-[#e8e8e8]"
              href="http://beian.miit.gov.cn/"
              target="_blank"
              rel="noreferrer"
            >
              京ICP备2025157244号-1
            </a>
            <span> </span>
            <a
              className="underline decoration-solid underline-offset-2 transition hover:text-[#e8e8e8]"
              href="https://beian.mps.gov.cn/#/query/webSearch?code=11010802048377"
              target="_blank"
              rel="noreferrer"
            >
              京公网安备11010802048377号
            </a>
          </p>
        </div>
        </div>
      </div>
    </footer>
  );
}
