import { Link, NavLink, useLocation } from "react-router-dom";
import logoGroupA from "../images/logo-group-a.svg";
import logoGroupB from "../images/logo-group-b.svg";
import logoGroupC from "../images/logo-group-c.svg";

const linkBase =
  "relative whitespace-nowrap text-[16px] font-medium leading-none tracking-normal transition-colors duration-150";

/** 子菜单项：与「公司团队」同一套样式（字号、字重、背景、下划线） */
function SubmenuLink({ to, children }: { to: string; children: string }) {
  const { pathname } = useLocation();
  const active = pathname === to;
  return (
    <Link
      to={to}
      className={`relative block px-4 py-2.5 text-[16px] font-medium transition-colors ${
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
        `${linkBase} ${isActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`
      }
    >
      {({ isActive }) => (
        <span className="relative inline-flex items-center">
          <span className="py-[2px]">{children}</span>
          <span
            className={`absolute -bottom-[20px] left-0 h-[3px] w-full rounded-[1px] transition-opacity ${isActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
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
      className="sticky top-0 z-50 h-[58px] border-b border-black/[0.06] bg-white shadow-[0px_2px_8px_rgba(0,0,0,0.06)]"
      data-node-id="103:327"
    >
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="relative block h-[30px] w-[106px] shrink-0"
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
          className="flex min-w-0 flex-1 items-center justify-end gap-6 pl-6 sm:gap-8 sm:pl-10 lg:gap-[55px] lg:pl-0"
          aria-label="主导航"
        >
          <NavItem to="/" end>
            首页
          </NavItem>
          <div className="group relative">
            <span
              className={`${linkBase} relative inline-flex cursor-default items-center ${productSectionActive ? "text-[#f96d01]" : "text-black"}`}
              data-node-id="103:330"
            >
              <span className="py-[2px]">产品中心</span>
              <span
                className={`absolute -bottom-[20px] left-0 h-[3px] w-full rounded-[1px] transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 ${productSectionActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
                aria-hidden
              />
            </span>
            <div className="absolute left-1/2 top-full z-50 min-w-[148px] -translate-x-1/2 pt-[16px]">
              <div className="invisible rounded-sm bg-white text-center text-[16px] font-medium opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100">
                <SubmenuLink to="/tech">核心技术</SubmenuLink>
              </div>
            </div>
          </div>
          <NavItem to="/news">新闻中心</NavItem>
          <div className="group relative">
            <Link
              to="/about"
              className={`${linkBase} relative inline-flex items-center ${aboutSectionActive ? "text-[#f96d01]" : "text-black hover:text-[#f96d01]/90"}`}
              data-node-id="103:335"
            >
              <span className="py-[2px]">关于我们</span>
              <span
                className={`absolute -bottom-[20px] left-0 h-[3px] w-full rounded-[1px] transition-opacity group-hover:opacity-0 group-focus-within:opacity-0 ${aboutSectionActive ? "bg-[#f96d01] opacity-100" : "opacity-0"}`}
                aria-hidden
              />
            </Link>
            <div className="absolute left-1/2 top-full z-50 min-w-[148px] -translate-x-1/2 pt-[16px]">
              <div className="invisible rounded-sm bg-white text-center text-[16px] font-medium opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100">
                <SubmenuLink to="/team">公司团队</SubmenuLink>
                <SubmenuLink to="/join">加入我们</SubmenuLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
