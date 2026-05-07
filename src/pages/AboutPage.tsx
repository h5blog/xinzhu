import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import gsjjBannerAvif from "../images/gsjj-banner.opt.avif";
import gsjjBannerWebp from "../images/gsjj-banner.opt.webp";
import gsjjBannerPng from "../images/gsjj-banner.opt.png";
import aboutCardRoute from "../images/about-card-route.png";
import aboutCardPosition from "../images/about-card-position.png";
import aboutCardGoal from "../images/about-card-goal.png";
import aboutGallery1 from "../images/about-gallery-1.png";
import aboutGallery2 from "../images/about-gallery-2.png";
import gsjjIcon from "../images/gsjj-icon.png";

/** 正文：与 TechCorePage（产品中心）一致 — 16/18/19px + lg 起 1.0417vw（1920 下约 20px），行高 1.7 */
const bodyText =
  "font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[16px] leading-[1.7] text-black sm:text-[18px] md:text-[19px] lg:text-[1.0417vw]";

/** 与招聘页等一致：main 即内容列，mx-auto 在视口中左右居中；1920 下约 1130 → 58.9583vw */
const mainContent =
  "relative z-10 mx-auto box-border w-[min(100%-24px,1130px)] px-0 lg:w-[58.9583vw] lg:max-w-none";

/** 中文正文首行缩进两个汉字（随字号缩放） */
const indent2 = "[text-indent:2em]";

function AboutPillarCard({
  image,
  title,
  body,
}: {
  image: string;
  title: string;
  body: string;
}) {
  return (
    <div className="relative mx-auto aspect-[360/426] w-full max-w-[min(360px,100%)] overflow-hidden rounded-bl-[clamp(3rem,12vw,8.75rem)] rounded-tr-[clamp(3rem,12vw,8.75rem)] lg:mx-0 lg:max-w-none lg:rounded-bl-[min(7rem,5.5vw)] lg:rounded-tr-[min(7rem,5.5vw)]">
      <img src={image} alt="" className="absolute inset-0 size-full object-cover" loading="lazy" decoding="async" />
      <div className="relative z-10 flex h-full min-h-0 flex-col px-5 pb-7 pt-9 min-[400px]:px-6 sm:px-8 sm:pb-8 sm:pt-11 lg:px-[min(1.75rem,4.2vw)] lg:pb-[min(2rem,4.8vw)] lg:pt-[min(2.75rem,6.2vw)] xl:px-[2.34vw] xl:pb-8 xl:pt-[2.45vw]">
        <p className="m-0 font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[18px] font-semibold leading-snug tracking-[0.06em] text-white sm:text-[24px] sm:tracking-[0.08em] md:text-[28px] lg:text-[1.4583vw]">
          {title}
        </p>
        <div className="mt-2.5 h-px w-full max-w-[288px] bg-white/90 sm:mt-3 lg:max-w-none" aria-hidden />
        <p
          className={`mt-3 min-w-0 break-words font-['PingFang_SC','Microsoft_YaHei',sans-serif] text-[16px] font-normal leading-[1.7] tracking-[0.05em] text-white sm:mt-4 sm:text-[18px] sm:tracking-[0.08em] md:text-[19px] lg:text-[1.0417vw] ${indent2}`}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#363636]" data-name="关于我们" data-node-id="942:40">
      <Navbar />

      <section className="relative w-full overflow-hidden">
        <div className="relative w-full">
          <picture className="block w-full">
            <source srcSet={gsjjBannerAvif} type="image/avif" />
            <source srcSet={gsjjBannerWebp} type="image/webp" />
            <img
              src={gsjjBannerPng}
              alt=""
              width={2880}
              height={692}
              className="block h-auto w-full max-w-none"
              sizes="100vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </section>

      <main
        className={`${mainContent} pb-[max(4rem,env(safe-area-inset-bottom,0px))] pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-[min(3.75rem,3.125vw)]`}
      >
        <p
          className={`w-full text-pretty sm:text-justify ${indent2} ${bodyText} tracking-[0.06em] sm:tracking-[0.1em] lg:tracking-[0.14em]`}
          data-node-id="942:47"
        >
          <span className="font-semibold text-[#f96d01]">新烛时代 (XinZhuAI)</span>
          作为国内AI赋能可控核聚变的引领者，通过深度融合物理机理与人工智能技术，致力于打造服务全球聚变能源产业的通用“聚变智能体”。我们为全球聚变研究机构及商业公司提供涵盖设计、模拟到运维控制的全栈式AI解决方案，推动聚变研发从传统的“经验试错”向“智能预测与主动控制”变革，加速全人类迈向聚变能源新时代。
        </p>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 sm:mt-14 sm:gap-6 md:mt-16 md:grid-cols-2 md:gap-5 lg:mt-[min(5rem,4.17vw)] lg:grid-cols-3 lg:justify-items-stretch lg:gap-[min(1.25rem,1.1vw)]">
          <AboutPillarCard
            image={aboutCardRoute}
            title="我们的路线"
            body="打造聚变的 “智能操作系统” "
          />
          <AboutPillarCard
            image={aboutCardPosition}
            title="我们的定位"
            body="我们不造硬件，我们打造驱动硬件的“智慧大脑”。"
          />
          <div className="flex min-w-0 justify-center md:col-span-2 lg:col-span-1 lg:block lg:w-full">
            <AboutPillarCard
              image={aboutCardGoal}
              title="我们的目标"
              body="让这套智能系统从实验室的辅助工具，进化为驱动聚变电厂硬件运行的神经中枢，在每一次能量的脉动中，贡献源自“新烛”的驱动力！"
            />
          </div>
        </div>

        <div
          className={`mt-12 w-full text-pretty sm:text-justify sm:mt-14 md:mt-16 lg:mt-[min(5rem,4.17vw)] ${indent2} ${bodyText} tracking-[0.05em] sm:tracking-[0.06em] lg:tracking-[0.08em]`}
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
            <img
              src={aboutGallery1}
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="relative aspect-[539/404] w-full overflow-hidden">
            <img
              src={aboutGallery2}
              alt=""
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
