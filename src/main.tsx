import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import heroBannerAvif from "./images/banner.opt.avif";

/** 与首屏 JS 并行拉取横幅（与 picture 首源 AVIF 一致，避免等 Home  chunk 再请求） */
{
  const href = heroBannerAvif;
  if (!document.querySelector(`link[rel="preload"][href="${CSS.escape(href)}"]`)) {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.type = "image/avif";
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

