import { Link, NavLink, useLocation } from "react-router-dom";
import logoGroupA from "../images/logo-group-a.svg";
import logoGroupB from "../images/logo-group-b.svg";
import logoGroupC from "../images/logo-group-c.svg";

const linkBase =
  "relative whitespace-nowrap text-[14px] font-medium leading-none tracking-normal transition-colors duration-150 md:text-[15px] lg:text-[0.96vw]";
const submenuWrap =
  "absolute left-1/2 top-full z-50 w-max -translate-x-1/2 pt-[clamp(8px,0.625vw,12px)]";
const submenuPanel =
  "hidden origin-top rounded-md border border-black/5 bg-white/95 text-center text-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-all duration-150 group-hover:block group-focus-within:block md:text-[15px] lg:text-[0.96vw]";

/** 子菜单项：与「公司团队」同一套样式（字号、字重、背景、下划线） */
function SubmenuLink({ to, children }: { to: string; children: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`relative flex h-[clamp(38px,2.4vw,48px)] items-center justify-center whitespace-nowrap px-[clamp(10px,0.7vw,14px)] text-center text-[14px] font-medium transition-colors md:text-[15px] lg:h-[2.4vw] lg:text-[0.96vw] ${
        active ? "bg-[rgba(255,255,255,0.8)] text-[#f96d01]" : "text-[#363636] hover:bg-[rgba(255,255,255,0.8)] hover:text-[#f96d01]"
      }`}
    >
      {children}
      <span
        className={`absolute inset-x-0 bottom-0 h-[3px] bg-[#f96d01] transition-opacity ${active ? "opacity-100" : "opacity-0 hover:opacity-100"}`}
        aria-hidden
      />
    </Link>
  );
}

function NavItem({
  to,
  end,
  children,
}: {
  to: string;
  end?: boolean;
  children: string;
}) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `${linkBase} inline-flex h-full items-center ${isActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`
      }
    >
      {({ isActive }) => (
        <span className="relative inline-flex h-full items-center">
          <span className="py-[2px]">{children}</span>
          <span
            className={`absolute bottom-0 left-0 h-[3px] w-full rounded-[1px] transition-opacity ${isActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
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
      className="sticky top-0 z-50 h-[3.385vw] border-b border-black/[0.06] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"
      data-node-id="103:327"
    >
      <div className="mx-auto flex h-full w-full max-w-[min(100%-2rem,1213px)] items-center justify-between px-4 sm:px-6 lg:w-[63.18vw] lg:max-w-none lg:px-[max(1rem,calc(0.833vw+0.75rem))]">
        <Link
          to="/"
          className="relative block h-[46.15%] min-h-[22px] w-auto shrink-0 aspect-[106/30]"
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
          className="flex h-full min-w-0 flex-1 items-center justify-end gap-6 pl-4 sm:gap-7 sm:pl-6 lg:gap-[max(1.875rem,3.35vw)] lg:pl-2"
          aria-label="主导航"
        >
          <NavItem to="/" end>
            首页
          </NavItem>
          <div className="group relative flex h-full items-center">
            <span
              tabIndex={0}
              className={`${linkBase} relative inline-flex h-full cursor-default items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#f96d01]/35 focus-visible:ring-offset-2 ${productSectionActive ? "text-[#f96d01]" : "text-black"}`}
              data-node-id="103:330"
            >
              <span className="py-[2px]">产品中心</span>
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full rounded-[1px] transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 ${productSectionActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
                aria-hidden
              />
            </span>
            <div className={submenuWrap}>
              <div className={`${submenuPanel} min-w-[132px] lg:min-w-[9.48vw]`}>
                <SubmenuLink to="/tech">核心技术</SubmenuLink>
              </div>
            </div>
          </div>
          <NavItem to="/news">新闻中心</NavItem>
          <div className="group relative flex h-full items-center">
            <span
              tabIndex={0}
              className={`${linkBase} relative inline-flex h-full cursor-default items-center rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#f96d01]/35 focus-visible:ring-offset-2 ${aboutSectionActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`}
              data-node-id="103:335"
            >
              <span className="py-[2px]">关于我们</span>
              <span
                className={`absolute bottom-0 left-0 h-[3px] w-full rounded-[1px] transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 ${aboutSectionActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
                aria-hidden
              />
            </span>
            <div className={submenuWrap}>
              <div className={`${submenuPanel} min-w-[140px] lg:min-w-[10.52vw]`}>
                <SubmenuLink to="/about">公司简介</SubmenuLink>
                <SubmenuLink to="/team">创始团队</SubmenuLink>
                <SubmenuLink to="/join">加入我们</SubmenuLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
