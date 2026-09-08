import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, lazy, Suspense } from "react";
import Navbar    from "./common/navbar";
import Footer    from "./common/Footer";
import Contact   from "./common/Contact";
import PageLoader from "./common/PageLoader";



// ── Lazy-loaded page components ──────────────────────────────────────────────
// Each page is a separate JS chunk; it downloads only when the user navigates
// to that route — keeps the initial bundle small and first-load fast.
const LandingPage             = lazy(() => import("./components/Landingpage"));
const About                   = lazy(() => import("./components/About"));
const ProductsPage            = lazy(() => import("./components/Productpage"));
const QualityPage             = lazy(() => import("./components/Qualitypage"));
const ExportPage              = lazy(() => import("./components/Exportpage"));
const MainProductCategoryPage = lazy(() => import("./components/MainProductCategoryPage"));
const RTEFoodCataloguePage    = lazy(() => import("./components/RTEFoodCataloguePage"));
const Leadership              = lazy(() => import("./components/Leadershippage"));
const BusinessSegments        = lazy(() => import("./components/BusinessSegmentsPage"));
const Contactus               = lazy(() => import("./components/Contactus"));

// Lightweight fallback shown while a lazy chunk is downloading
function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#1a5c30] border-t-transparent rounded-full animate-spin" />
        <p className="text-[#1a5c30] font-semibold text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    // Hide loader
    setShowLoader(false);
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        {showLoader && <PageLoader />}
        <Navbar />
        <main>
          {/* Suspense catches any lazy chunk that is still loading */}
          <Suspense fallback={<PageFallback />}>
            <Routes>
              {/* ── Main pages ── */}
              <Route path="/"        element={<LandingPage />} />
              <Route path="/about"   element={<About />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/business-segments" element={<BusinessSegments />} />
              <Route path="/business-segments/:segmentId" element={<BusinessSegments />} />
              <Route path="/business-segments/:segmentId/:subId" element={<BusinessSegments />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/quality" element={<QualityPage />} />
              <Route path="/export"  element={<ExportPage />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/contactus" element={<Contactus />} />
              <Route path="/Contact" element={<Contactus />} />
              <Route path="/Contactus" element={<Contactus />} />

              {/* ── Product category pages ── */}
              <Route path="/products/frozen-vegetable-collection" element={<MainProductCategoryPage pageKey="frozen-vegetable-collection" />} />
              <Route path="/products/rte-food-products"           element={<RTEFoodCataloguePage />} />

              {/* ── 404 / Catch-all fallback ── */}
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Contact section appears on every page just before Footer */}
        <Contact />
        <Footer />
      </div>
    </Router>
  );
}

export default App;