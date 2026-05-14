import { pageMainWidthClassName } from "../constants/contentAlign";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoGroupA from "../images/logo-group-a.svg";
import logoGroupB from "../images/logo-group-b.svg";
import logoGroupC from "../images/logo-group-c.svg";
import aboutTagAvif from "../images/about-tag.opt.avif";
import gsjjBanner1xAvif from "../images/gsjj-banner-1x.opt.avif";
import gsjjBanner2xAvif from "../images/gsjj-banner.opt.avif";
import joinPageBanner1xAvif from "../images/job-banner-1x.opt.avif";
import joinPageBanner2xAvif from "../images/job-banner.opt.avif";
import joinFuliAvif from "../images/fuli.opt.avif";
import newsBanner1xAvif from "../images/news-banner-1x.opt.avif";
import newsBanner2xAvif from "../images/news-banner.opt.avif";
import teamPageBanner1xAvif from "../images/team-banner-1x.opt.avif";
import teamPageBanner2xAvif from "../images/team-banner.opt.avif";
import techBanner1xAvif from "../images/tech-banner-1x.opt.avif";
import techIconAvif from "../images/tech-icon.opt.avif";

/**
 * 与首页引言同一套：PingFang、leading-[1.7]、tracking-[0.03em]；
 * 稿面 1920 主菜单 16px → text-[max(16px,calc(100vw*16/1920))]（窄屏不低于 16px，与引言的 max 下限规则一致）。
 */
const linkBase =
  "relative whitespace-nowrap font-['PingFang_SC'] text-[max(16px,calc(100vw*16/1920))] font-medium leading-[1.7] tracking-[0.03em] transition-colors duration-200 ease-out motion-reduce:transition-none";

/** 1920 稿顶栏内容区高度 58px，随视口比例缩放，窄屏不低于 58px（与稿一致） */
const navBarInnerMinH = "min-h-[max(58px,calc(100vw*58/1920))]";
/**
 * Logo 1920 稿 106×30；与首页引言同一套 max(下限, calc(100vw*稿面/1920))。
 * 引言为 max(16px, …×24/1920)，下限/稿面=16/24；Logo 宽下限取 106×(16/24)，高由 aspect-[106/30] 跟宽走。
 */
const logoBoxClassName =
  "relative block w-[max(calc(106px*16/24),calc(100vw*106/1920))] shrink-0 self-center aspect-[106/30] h-auto";
/** 贴齐触发项所在行底边（top-full），不再用 pt 留出缝隙，避免鼠标移入时断开 */
const submenuWrap =
  "absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-0";
/** 下拉：淡入 + 轻微下落与缩放（替代 hidden/block 才能做 transition） */
const submenuPanel =
  "origin-top rounded-b-md rounded-t-none border border-t-0 border-black/5 bg-white/95 text-center shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-[2px] pointer-events-none translate-y-1 scale-[0.98] opacity-0 transition-[opacity,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:transition-opacity group-hover/drop:pointer-events-auto group-hover/drop:translate-y-0 group-hover/drop:scale-100 group-hover/drop:opacity-100 group-focus-within/drop:pointer-events-auto group-focus-within/drop:translate-y-0 group-focus-within/drop:scale-100 group-focus-within/drop:opacity-100";

/** 1920 稿子菜单宽 112px；下限与稿对齐，避免随视口缩得过窄 */
const submenuPanelW = "w-[max(112px,calc(100vw*112/1920))]";

type NavPreloadImage = {
  href: string;
  mime: string;
  id: string;
  fetchPriority?: "high" | "low";
  /** 横幅 1×/2× 与页面 <picture> 一致时用 imagesrcset */
  imageSrcSet?: string;
  imageSizes?: string;
};

const TECH_ROUTE_PRELOADS: NavPreloadImage[] = [
  {
    href: techBanner1xAvif,
    mime: "image/avif",
    id: "preload-tech-banner-avif",
  },
  { href: techIconAvif, mime: "image/avif", id: "preload-tech-icon-avif", fetchPriority: "low" },
];

const NEWS_ROUTE_PRELOADS: NavPreloadImage[] = [
  {
    href: newsBanner1xAvif,
    imageSrcSet: `${newsBanner1xAvif} 1920w, ${newsBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-news-banner-avif",
  },
];

/** 悬停「关于我们」整块：子路由顶栏预热（薪酬福利图仅在「加入我们」预取时高优加载，避免占住 preload id 为 low） */
const ABOUT_MENU_PRELOADS: NavPreloadImage[] = [
  {
    href: gsjjBanner1xAvif,
    imageSrcSet: `${gsjjBanner1xAvif} 1920w, ${gsjjBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-gsjj-banner-avif",
  },
  {
    href: teamPageBanner1xAvif,
    imageSrcSet: `${teamPageBanner1xAvif} 1920w, ${teamPageBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-team-banner-avif",
  },
  {
    href: joinPageBanner1xAvif,
    imageSrcSet: `${joinPageBanner1xAvif} 1920w, ${joinPageBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-join-banner-avif",
  },
];

const ABOUT_ROUTE_PRELOADS: NavPreloadImage[] = [
  {
    href: gsjjBanner1xAvif,
    imageSrcSet: `${gsjjBanner1xAvif} 1920w, ${gsjjBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-gsjj-banner-avif",
  },
  { href: aboutTagAvif, mime: "image/avif", id: "preload-about-tag-avif", fetchPriority: "low" },
];

const TEAM_ROUTE_PRELOADS: NavPreloadImage[] = [
  {
    href: teamPageBanner1xAvif,
    imageSrcSet: `${teamPageBanner1xAvif} 1920w, ${teamPageBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-team-banner-avif",
  },
];

const JOIN_ROUTE_PRELOADS: NavPreloadImage[] = [
  {
    href: joinPageBanner1xAvif,
    imageSrcSet: `${joinPageBanner1xAvif} 1920w, ${joinPageBanner2xAvif} 3840w`,
    imageSizes: "100vw",
    mime: "image/avif",
    id: "preload-join-banner-avif",
  },
  { href: joinFuliAvif, mime: "image/avif", id: "preload-join-fuli-avif", fetchPriority: "high" },
];

function preloadImageOnce(img: NavPreloadImage) {
  if (document.getElementById(img.id)) return;
  const link = document.createElement("link");
  link.id = img.id;
  link.rel = "preload";
  link.as = "image";
  link.type = img.mime;
  link.setAttribute("fetchpriority", img.fetchPriority ?? "high");
  if (img.imageSrcSet) {
    link.setAttribute("imagesrcset", img.imageSrcSet);
    link.setAttribute("imagesizes", img.imageSizes ?? "100vw");
    link.href = img.href;
  } else {
    link.href = img.href;
  }
  document.head.appendChild(link);
}

/** 按传入列表预加载图片（除首页外各菜单在 hover / focus 时调用） */
function warmNavAssets(images: readonly NavPreloadImage[]) {
  for (const img of images) {
    preloadImageOnce(img);
  }
}

let aboutPageChunkPrefetched = false;
function prefetchAboutPageChunk() {
  if (aboutPageChunkPrefetched) return;
  aboutPageChunkPrefetched = true;
  warmNavAssets(ABOUT_ROUTE_PRELOADS);
  void import("../pages/AboutPage");
}

let newsPageChunkPrefetched = false;
function prefetchNewsPageChunk() {
  if (newsPageChunkPrefetched) return;
  newsPageChunkPrefetched = true;
  warmNavAssets(NEWS_ROUTE_PRELOADS);
  void import("../pages/NewsPage");
}

let techCorePageChunkPrefetched = false;
function prefetchTechCorePageChunk() {
  if (techCorePageChunkPrefetched) return;
  techCorePageChunkPrefetched = true;
  warmNavAssets(TECH_ROUTE_PRELOADS);
  void import("../pages/TechCorePage");
}

let teamPageChunkPrefetched = false;
function prefetchTeamPageChunk() {
  if (teamPageChunkPrefetched) return;
  teamPageChunkPrefetched = true;
  warmNavAssets(TEAM_ROUTE_PRELOADS);
  void import("../pages/TeamPage");
}

let joinUsPageChunkPrefetched = false;
function prefetchJoinUsPageChunk() {
  if (joinUsPageChunkPrefetched) return;
  joinUsPageChunkPrefetched = true;
  warmNavAssets(JOIN_ROUTE_PRELOADS);
  void import("../pages/JoinUsPage");
}

/** 子菜单：与主菜单同一套字号 / 行高 / 字距（1920 为 16px） */
function SubmenuLink({
  to,
  children,
  onHoverPrefetch,
}: {
  to: string;
  children: string;
  onHoverPrefetch?: () => void;
}) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      onMouseEnter={onHoverPrefetch}
      className={`group/subitem relative flex min-h-[44px] items-center justify-center whitespace-nowrap px-[clamp(10px,0.7vw,14px)] text-center font-['PingFang_SC'] text-[max(16px,calc(100vw*16/1920))] font-medium leading-[1.7] tracking-[0.03em] transition-[color,background-color,transform] duration-200 ease-out motion-reduce:transition-colors active:scale-[0.98] motion-reduce:active:scale-100 lg:min-h-[3.57em] ${
        active ? "bg-[rgba(255,255,255,0.8)] text-[#f96d01]" : "text-[#363636] hover:bg-[rgba(255,255,255,0.8)] hover:text-[#f96d01]"
      }`}
    >
      <span className="relative z-10 transition-transform duration-200 ease-out group-hover/subitem:translate-x-0.5 motion-reduce:group-hover/subitem:translate-x-0">
        {children}
      </span>
      <span
        className={`absolute inset-x-0 bottom-0 h-[3px] origin-center bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none ${active ? "scale-x-100" : "scale-x-0 group-hover/subitem:scale-x-100"}`}
        aria-hidden
      />
    </Link>
  );
}

function NavItem({
  to,
  end,
  children,
  onHoverPrefetch,
}: {
  to: string;
  end?: boolean;
  children: string;
  onHoverPrefetch?: () => void;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      onMouseEnter={onHoverPrefetch}
      className={({ isActive }) =>
        `${linkBase} group/nav inline-flex h-full min-h-0 items-stretch self-stretch ${isActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`
      }
    >
      {({ isActive }) => (
        <span className="relative inline-flex h-full min-h-0 items-center">
          <span className="transition-transform duration-200 ease-out group-hover/nav:-translate-y-px motion-reduce:group-hover/nav:translate-y-0">
            {children}
          </span>
          <span
            className={`absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-[1px] bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none ${isActive ? "scale-x-100" : "scale-x-0 group-hover/nav:scale-x-100"}`}
            aria-hidden
          />
        </span>
      )}
    </NavLink>
  );
}

export default function Navbar() {
  const { pathname } = useLocation();
  const aboutSectionActive = pathname === "/about" || pathname === "/team" || pathname === "/join";
  const productSectionActive = pathname === "/tech";

  return (
    <header
      className="sticky top-0 z-50 border-b-0 bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.06)] transition-shadow duration-300 ease-out"
      data-node-id="103:327"
    >
      <div
        className={`${pageMainWidthClassName} flex items-stretch justify-between px-4 sm:px-6 md:px-8 ${navBarInnerMinH}`}
      >
        <Link
          to="/"
          className={`${logoBoxClassName} transition-opacity duration-200 ease-out hover:opacity-90 motion-reduce:transition-none`}
          data-name="logo"
          data-node-id="103:339"
          aria-label="首页"
        >
          <div className="absolute inset-[17%_36.03%_70.42%_31.68%]" data-node-id="103:341">
            <img alt="" className="block h-full w-full" src={logoGroupA} />
          </div>
          <div className="absolute inset-[0_72.31%_0_0]" data-node-id="103:350">
            <img alt="" className="block h-full w-full" src={logoGroupB} />
          </div>
          <div className="absolute inset-[34.64%_0_5.25%_31.14%]" data-node-id="103:355">
            <img alt="" className="block h-full w-full" src={logoGroupC} />
          </div>
        </Link>

        <nav
          className="flex min-h-0 min-w-0 flex-1 items-stretch justify-end gap-6 pl-4 sm:gap-7 sm:pl-6 lg:gap-[max(1.875rem,3.35vw)] lg:pl-2"
          aria-label="主导航"
        >
          <NavItem to="/" end>
            首页
          </NavItem>
          <div
            className="group/drop relative flex items-stretch"
            onMouseEnter={() => warmNavAssets(TECH_ROUTE_PRELOADS)}
            onFocusCapture={() => warmNavAssets(TECH_ROUTE_PRELOADS)}
          >
            <span
              tabIndex={0}
              className={`${linkBase} group/trigger relative inline-flex h-full min-h-0 cursor-default items-stretch self-stretch rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#f96d01]/35 focus-visible:ring-offset-2 ${productSectionActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`}
              data-node-id="103:330"
            >
              <span className="inline-flex h-full min-h-0 items-center transition-transform duration-200 ease-out group-hover/trigger:-translate-y-px motion-reduce:group-hover/trigger:translate-y-0">
                <span>产品中心</span>
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-[1px] bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none ${productSectionActive ? "scale-x-100 group-hover/drop:scale-x-0 group-focus-within/drop:scale-x-0" : "scale-x-0 group-hover/trigger:scale-x-100"}`}
                aria-hidden
              />
            </span>
            <div className={submenuWrap}>
              <div className={`${submenuPanel} ${submenuPanelW}`}>
                <SubmenuLink to="/tech" onHoverPrefetch={prefetchTechCorePageChunk}>
                  核心技术
                </SubmenuLink>
              </div>
            </div>
          </div>
          <NavItem to="/news" onHoverPrefetch={prefetchNewsPageChunk}>
            新闻中心
          </NavItem>
          <div
            className="group/drop relative flex items-stretch"
            onMouseEnter={() => warmNavAssets(ABOUT_MENU_PRELOADS)}
            onFocusCapture={() => warmNavAssets(ABOUT_MENU_PRELOADS)}
          >
            <span
              tabIndex={0}
              className={`${linkBase} group/trigger relative inline-flex h-full min-h-0 cursor-default items-stretch self-stretch rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#f96d01]/35 focus-visible:ring-offset-2 ${aboutSectionActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`}
              data-node-id="103:335"
            >
              <span className="inline-flex h-full min-h-0 items-center transition-transform duration-200 ease-out group-hover/trigger:-translate-y-px motion-reduce:group-hover/trigger:translate-y-0">
                <span>关于我们</span>
              </span>
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-[1px] bg-[#f96d01] transition-transform duration-300 ease-out motion-reduce:transition-none ${aboutSectionActive ? "scale-x-100 group-hover/drop:scale-x-0 group-focus-within/drop:scale-x-0" : "scale-x-0 group-hover/trigger:scale-x-100"}`}
                aria-hidden
              />
            </span>
            <div className={submenuWrap}>
              <div className={`${submenuPanel} ${submenuPanelW}`}>
                <SubmenuLink to="/about" onHoverPrefetch={prefetchAboutPageChunk}>
                  公司简介
                </SubmenuLink>
                <SubmenuLink to="/team" onHoverPrefetch={prefetchTeamPageChunk}>
                  创始团队
                </SubmenuLink>
                <SubmenuLink to="/join" onHoverPrefetch={prefetchJoinUsPageChunk}>
                  加入我们
                </SubmenuLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
