import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const TeamPage = lazy(() => import("./pages/TeamPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const JoinUsPage = lazy(() => import("./pages/JoinUsPage"));
const JobDetailPage = lazy(() => import("./pages/JobDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const TechCorePage = lazy(() => import("./pages/TechCorePage"));
const NewsDetailPage1 = lazy(() => import("./pages/NewsDetailPage1"));
const NewsDetailPage2 = lazy(() => import("./pages/NewsDetailPage2"));
const NewsDetailPage3 = lazy(() => import("./pages/NewsDetailPage3"));
const NewsDetailPage4 = lazy(() => import("./pages/NewsDetailPage4"));
const NewsDetailPage5 = lazy(() => import("./pages/NewsDetailPage5"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen w-full bg-white" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/1" element={<NewsDetailPage1 />} />
          <Route path="/news/2" element={<NewsDetailPage2 />} />
          <Route path="/news/3" element={<NewsDetailPage3 />} />
          <Route path="/news/4" element={<NewsDetailPage4 />} />
          <Route path="/news/5" element={<NewsDetailPage5 />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinUsPage />} />
          <Route path="/join/:jobId" element={<JobDetailPage />} />
          <Route path="/tech" element={<TechCorePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
