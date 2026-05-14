import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import heroBanner1xAvif from "./images/home-banner-1x.opt.avif";
import heroBanner2xAvif from "./images/home-banner.opt.avif";

/** 与首屏 JS 并行拉取横幅（响应式 imagesrcset，与 Home picture AVIF 一致） */
{
  const imagesrcset = `${heroBanner1xAvif} 1920w, ${heroBanner2xAvif} 3840w`;
  if (!document.querySelector('link[rel="preload"][data-xz-home-banner]')) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.type = "image/avif";
    link.setAttribute("imagesrcset", imagesrcset);
    link.setAttribute("imagesizes", "100vw");
    link.setAttribute("fetchpriority", "high");
    link.setAttribute("data-xz-home-banner", "1");
    document.head.appendChild(link);
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

