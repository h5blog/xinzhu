import { assets } from "./assets";

/**
 * Figma 470:41 底栏矩形 #252525 h320 + Group 14 (470:40) 文案与分割线布局
 */
export default function Footer() {
  return (
    <footer className="bg-[#252525] text-[#363636]" data-node-id="470:41">
      <div className="mx-auto min-h-[320px] max-w-[1180px] px-6 pb-6 pt-11 sm:px-8 sm:pb-8 sm:pt-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-start lg:gap-[80px]">
          {/* 左栏：公司地址 + 联系方式 */}
          <div className="flex max-w-[475px] flex-col gap-9">
            <section data-node-id="470:42">
              <h3 className="text-[20px] font-medium leading-normal text-[#f96d01]">公司地址</h3>
              <div
                className="mt-2 h-px max-w-[384px] bg-[#5c5c5c]"
                data-node-id="470:48"
                aria-hidden
              />
              <p
                className="mt-3 text-[16px] font-medium leading-normal text-[#e8e8e8]"
                data-node-id="470:45"
              >
                北京市海淀区海淀大悦信息科技园D2号楼4楼C-403室
              </p>
            </section>
            <section data-node-id="470:43">
              <h3 className="text-[20px] font-medium leading-normal text-[#f96d01]">联系方式</h3>
              <div
                className="mt-2 h-px w-[178px] max-w-full bg-[#5c5c5c]"
                data-node-id="470:51"
                aria-hidden
              />
              <p
                className="mt-3 text-[16px] font-medium leading-normal text-[#e8e8e8]"
                data-node-id="470:46"
              >
                xzsd@xinzhu-ai.com.cn
              </p>
            </section>
          </div>

          {/* 右栏：二维码 + 关注我们 */}
          <div className="flex flex-col items-start lg:min-w-[308px]">
            <img
              src={assets.qrcode}
              alt="公众号二维码"
              width={129}
              height={129}
              className="block h-[129px] w-[129px] bg-white object-contain p-1"
              data-node-id="470:53"
              loading="lazy"
              decoding="async"
            />
            <h3
              className="mt-6 text-[20px] font-medium leading-normal text-[#f96d01] lg:mt-7"
              data-node-id="470:44"
            >
              关注我们
            </h3>
            <div
              className="mt-2 h-px w-[199px] max-w-full bg-[#5c5c5c]"
              data-node-id="470:52"
              aria-hidden
            />
            <p
              className="mt-3 max-w-[308px] text-[16px] font-medium leading-normal text-[#e8e8e8]"
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
            className="text-center text-[12px] font-medium leading-normal text-[#9c9c9c]"
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
