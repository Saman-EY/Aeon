import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { SiteChrome } from "./components/SiteChrome";
import { initInteractions } from "./lib/interactions";
import { Home } from "./pages/Home";
import { Ecosystem } from "./pages/Ecosystem";
import { Thesis } from "./pages/Thesis";
import { About } from "./pages/About";
import { Insights } from "./pages/Insights";
import { InsightDetail } from "./pages/InsightDetail";
import { Contact } from "./pages/Contact";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    // The interaction layer originally relied on full page loads. With
    // client-side routing it must be re-armed after every route render, so the
    // scroll-reveal, nav, diagram and form wiring attach to the new DOM.
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return initInteractions();
  }, [pathname]);

  return (
    <>
      <SiteChrome />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ecosystem" element={<Ecosystem />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:slug" element={<InsightDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
