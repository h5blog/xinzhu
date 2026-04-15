import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import TeamPage from "./pages/TeamPage";
import AboutPage from "./pages/AboutPage";
import JoinUsPage from "./pages/JoinUsPage";
import JobDetailPage from "./pages/JobDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import TechCorePage from "./pages/TechCorePage";
import NewsDetailPage1 from "./pages/NewsDetailPage1";
import NewsDetailPage2 from "./pages/NewsDetailPage2";
import NewsDetailPage3 from "./pages/NewsDetailPage3";
import NewsDetailPage4 from "./pages/NewsDetailPage4";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/1" element={<NewsDetailPage1 />} />
        <Route path="/news/2" element={<NewsDetailPage2 />} />
        <Route path="/news/3" element={<NewsDetailPage3 />} />
        <Route path="/news/4" element={<NewsDetailPage4 />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/join" element={<JoinUsPage />} />
        <Route path="/join/:jobId" element={<JobDetailPage />} />
        <Route path="/tech" element={<TechCorePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
