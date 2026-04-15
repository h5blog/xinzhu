import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

/** 线稿火箭（稿：浅灰轮廓、斜向右上） */
function RocketOutline({ className = "" }: { className?: string }) {
  return (
    <div className={`text-[#c8c8c8] ${className}`}>
      <div className="h-full w-full -rotate-[32deg]">
        <svg
          className="block h-full w-full"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M100 28 L148 118 L100 98 L52 118 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        <circle cx="100" cy="72" r="10" stroke="currentColor" strokeWidth="3" />
        <path
          d="M72 118 L52 158 L88 130"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          opacity={0.85}
        />
        <path
          d="M128 118 L148 158 L112 130"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          opacity={0.85}
        />
        <path
          d="M100 118 L100 168 L118 138 L100 118 L82 138 Z"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinejoin="round"
          opacity={0.6}
        />
        </svg>
      </div>
    </div>
  );
}

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f9] text-[#363636]">
      <Navbar />
      <main
        className="flex flex-1 flex-col items-center justify-center bg-[#f9f9f9] px-4 py-16"
        data-node-id="108:28319"
      >
        <RocketOutline className="h-36 w-36 shrink-0 sm:h-44 sm:w-44" />
        <h1 className="mt-10 text-[56px] font-bold leading-none tracking-tight text-[#363636] sm:text-[64px]">
          404
        </h1>
        <p className="mt-4 text-[20px] font-medium leading-normal text-[#363636] sm:text-[22px]">页面丢了</p>
        <Link
          to="/"
          className="mt-10 inline-flex min-h-[44px] items-center justify-center border border-solid border-[#f96d01] bg-transparent px-10 text-[16px] font-medium leading-none text-[#f96d01] transition hover:bg-[#f96d01]/5"
        >
          返回主页
        </Link>
      </main>
      <Footer />
    </div>
  );
}
