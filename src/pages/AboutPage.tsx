import { pageMainWidthClassName } from "../constants/contentAlign";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gsjjBannerAvif from "../images/gsjj-banner.opt.avif";
import gsjjBannerWebp from "../images/gsjj-banner.opt.webp";
import gsjjBannerJpg from "../images/gsjj-banner.opt.jpg";
import gsjjBanner1xAvif from "../images/gsjj-banner-1x.opt.avif";
import gsjjBanner1xWebp from "../images/gsjj-banner-1x.opt.webp";
import gsjjBanner1xJpg from "../images/gsjj-banner-1x.opt.jpg";
import aboutTagAvif from "../images/about-tag.opt.avif";
import aboutTagWebp from "../images/about-tag.opt.webp";
import aboutTagJpg from "../images/about-tag.opt.jpg";
import aboutGallery1Avif from "../images/about-gallery-1.opt.avif";
import aboutGallery1Webp from "../images/about-gallery-1.opt.webp";
import aboutGallery1Jpg from "../images/about-gallery-1.opt.jpg";
import aboutGallery2Avif from "../images/about-gallery-2.opt.avif";
import aboutGallery2Webp from "../images/about-gallery-2.opt.webp";
import aboutGallery2Jpg from "../images/about-gallery-2.opt.jpg";
import gsjjIcon from "../images/gsjj-icon.png";

/** 1920 稿 20px；字族/行高/字距同首页 AI 段 */
const aboutBodyText =
  "font-['PingFang_SC'] text-[max(16px,calc(100vw*20/1920))] leading-[1.7] tracking-[0.03em] text-black";

/** 中文正文首行缩进两个汉字（随字号缩放） */
const indent2 = "[text-indent:2em]";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="关于我们" data-node-id="942:40">
      <Navbar />

      {/* gsjj-banner：稿 1920×461；1×1920w + 2×3840w */}
      <section className="relative aspect-[1920/461] w-full overflow-hidden" data-name="banner-wrap">
        <picture className="absolute inset-0 block h-full w-full">
          <source
            type="image/avif"
            srcSet={`${gsjjBanner1xAvif} 1920w, ${gsjjBannerAvif} 3840w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`${gsjjBanner1xWebp} 1920w, ${gsjjBannerWebp} 3840w`}
            sizes="100vw"
          />
          <img
            src={gsjjBanner1xJpg}
            srcSet={`${gsjjBanner1xJpg} 1920w, ${gsjjBannerJpg} 3840w`}
            sizes="100vw"
            alt=""
            width={1920}
            height={461}
            className="h-full w-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            data-name="banner"
          />
        </picture>
      </section>

      <main
        className={`${pageMainWidthClassName} relative z-10 pb-[max(4rem,env(safe-area-inset-bottom,0px))] pt-9 sm:pb-20 lg:pb-24 lg:pt-[1.875vw]`}
      >
        <p
          className={`w-full text-pretty sm:text-justify ${indent2} ${aboutBodyText}`}
          data-node-id="942:47"
        >
          <span className="font-semibold text-[#f96d01]">新烛时代 (XinZhuAI)</span>
          作为国内AI赋能可控核聚变的引领者，通过深度融合物理机理与人工智能技术，致力于打造服务全球聚变能源产业的通用“聚变智能体”。我们为全球聚变研究机构及商业公司提供涵盖设计、模拟到运维控制的全栈式AI解决方案，推动聚变研发从传统的“经验试错”向“智能预测与主动控制”变革，加速全人类迈向聚变能源新时代。
        </p>

        <div className="mt-12 w-full sm:mt-14 md:mt-16 lg:mt-[min(5rem,4.17vw)]">
          <div className="mx-auto aspect-[1122/459] w-full max-w-[min(100%,calc(100vw*1122/1920))]">
            <picture className="block h-full w-full">
              <source srcSet={aboutTagAvif} type="image/avif" />
              <source srcSet={aboutTagWebp} type="image/webp" />
              <img
                src={aboutTagJpg}
                alt="新烛时代：路线、定位与目标"
                width={1122}
                height={459}
                className="block h-full w-full object-contain object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1920px) min(100vw, 1122px), 1122px"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>

        <div
          className={`mt-12 w-full text-pretty sm:text-justify sm:mt-14 md:mt-16 lg:mt-[min(5rem,4.17vw)] ${indent2} ${aboutBodyText}`}
          data-node-id="942:49"
        >
          <p className="mb-4">
            如果说全球聚变公司正在建造性能强大的“CPU”裸机，新烛时代要做的，就是为所有聚变装置打造一个可移植、可扩展、可进化的“智能操作系统”。
          </p>
          <p className="mb-4">但这不仅仅是算法的堆砌，而是对物理世界的深度重构。</p>
          <p className="mb-4">
            在底层架构上，我们集结了强化学习、生成式模型、智能体技术与算子学习等前沿AI战力，并引入不确定性估计来构筑安全边界。
          </p>
          <p className="mb-4">
            我们以<span className="font-semibold text-[#f96d01]">“工程痛点”为导向</span>
            ，以<span className="font-semibold text-[#f96d01]">“物理先验”为基石</span>
            ，构建起一个<span className="font-semibold text-[#f96d01]">“物理+数据”双轮驱动的强大内核</span>。
          </p>
          <p className="mb-4">
            我们将以标准化的智能服务赋能全行业，让每一台昂贵的聚变装置都能在我们的系统支持下高效运转。而放眼终局，这套系统将成为未来聚变电厂真正的“灵魂”。
          </p>
          <p>
            当万亿级的聚变能源市场开启，那些由钢筋混凝土与超导磁体构成的庞大躯壳，都需要一颗智慧的心脏来驾驭。
          </p>
        </div>

        <div className="mt-12 w-full sm:mt-14 md:mt-16 lg:mt-[min(5rem,4.17vw)]">
          <img
            src={gsjjIcon}
            alt="从实验室辅助工具到驱动聚变电厂硬件运行的神经中枢"
            className="block h-auto w-full max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 lg:mt-[min(5rem,4.17vw)] lg:gap-8">
          <div className="relative aspect-[539/404] w-full overflow-hidden">
            <picture className="absolute inset-0 block size-full">
              <source srcSet={aboutGallery1Avif} type="image/avif" />
              <source srcSet={aboutGallery1Webp} type="image/webp" />
              <img
                src={aboutGallery1Jpg}
                alt=""
                width={539}
                height={404}
                className="absolute inset-0 size-full object-cover"
                sizes="(max-width: 767px) min(calc(100vw - 48px), 1130px), min(565px, calc(50vw - 28px))"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </picture>
          </div>
          <div className="relative aspect-[539/404] w-full overflow-hidden">
            <picture className="absolute inset-0 block size-full">
              <source srcSet={aboutGallery2Avif} type="image/avif" />
              <source srcSet={aboutGallery2Webp} type="image/webp" />
              <img
                src={aboutGallery2Jpg}
                alt=""
                width={539}
                height={404}
                className="absolute inset-0 size-full object-cover"
                sizes="(max-width: 767px) min(calc(100vw - 48px), 1130px), min(565px, calc(50vw - 28px))"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </picture>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
