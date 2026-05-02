import { assets } from "./assets";

/**
 * Figma 470:41 底栏矩形 #252525 h320 + Group 14 (470:40) 文案与分割线布局
 */
export default function Footer() {
  return (
    <footer className="bg-[#252525] text-[#363636]" data-node-id="470:41">
      <div className="mx-auto min-h-[320px] w-[min(100%-2rem,1213px)] pb-[clamp(24px,2.2vw,36px)] pt-[clamp(32px,2.9vw,48px)] lg:w-[63.18vw] lg:max-w-none">
        <div className="flex flex-col gap-10 md:gap-12 lg:flex-row lg:justify-start lg:gap-[clamp(48px,4.17vw,80px)]">
          {/* 左栏：公司地址 + 联系方式 */}
          <div className="flex max-w-[475px] flex-col gap-[clamp(26px,2.35vw,45px)] lg:max-w-[40.4%]">
            <section data-node-id="470:42">
              <h3 className="text-[17px] font-medium leading-normal text-[#f96d01] md:text-[18px] lg:text-[1.04vw]">公司地址</h3>
              <div
                className="mt-2 h-px w-[min(100%,384px)] bg-[#5c5c5c] lg:w-[32.5vw] lg:max-w-[384px]"
                data-node-id="470:48"
                aria-hidden
              />
              <p
                className="mt-3 text-[14px] font-medium leading-normal text-[#e8e8e8] md:text-[15px] lg:text-[0.83vw]"
                data-node-id="470:45"
              >
                北京市海淀区海淀大悦信息科技园D2号楼4楼C-403室
              </p>
            </section>
            <section data-node-id="470:43">
              <h3 className="text-[17px] font-medium leading-normal text-[#f96d01] md:text-[18px] lg:text-[1.04vw]">联系方式</h3>
              <div
                className="mt-2 h-px w-[min(100%,178px)] bg-[#5c5c5c] lg:w-[9.27vw] lg:max-w-[178px]"
                data-node-id="470:51"
                aria-hidden
              />
              <p
                className="mt-3 text-[14px] font-medium leading-normal text-[#e8e8e8] md:text-[15px] lg:text-[0.83vw]"
                data-node-id="470:46"
              >
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
              className="block h-[clamp(108px,6.72vw,129px)] w-[clamp(108px,6.72vw,129px)] bg-white object-contain p-1"
              data-node-id="470:53"
              loading="lazy"
              decoding="async"
            />
            <h3
              className="mt-6 text-[17px] font-medium leading-normal text-[#f96d01] md:text-[18px] lg:mt-[clamp(22px,1.46vw,28px)] lg:text-[1.04vw]"
              data-node-id="470:44"
            >
              关注我们
            </h3>
            <div
              className="mt-2 h-px w-[min(100%,199px)] bg-[#5c5c5c] lg:w-[10.36vw] lg:max-w-[199px]"
              data-node-id="470:52"
              aria-hidden
            />
            <p
              className="mt-3 max-w-[308px] text-[14px] font-medium leading-normal text-[#e8e8e8] md:text-[15px] lg:text-[0.83vw]"
              data-node-id="470:47"
            >
              扫描二维码关注新烛时代公众号
            </p>
          </div>
        </div>

        {/* 底部分割 + 备案 */}
        <div
          className="mt-10 border-t border-[#5c5c5c] pt-5 sm:mt-12 sm:pt-6"
          data-node-id="470:49"
        >
          <p
            className="text-center text-[11px] font-medium leading-normal text-[#9c9c9c] md:text-[12px] lg:text-[0.625vw]"
            data-node-id="470:50"
          >
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
              href="https://beian.mps.gov.cn/#/query/webSearch?code=31011402021678"
              target="_blank"
              rel="noreferrer"
            >
              沪公网安备31011402021678号
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
