import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, X, Eye, Package, Award, ArrowRight, Globe } from "lucide-react";
import redBg from "../assets/red-bg.png";
import cardBg from "../assets/card-bg.png";
import OptimizedImage from "./OptimizedImage";

export default function ProductCarousel({ products, externalSearchQuery = "" }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const CARDS_PER_PAGE = 6;

  const filteredProducts = products.filter((p) => {
    if (!externalSearchQuery.trim()) return true;
    const q = externalSearchQuery.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.desc.toLowerCase().includes(q) ||
      (p.items && p.items.some((item) => item.toLowerCase().includes(q)))
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / CARDS_PER_PAGE));
  const visibleProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(
        currentPage * CARDS_PER_PAGE,
        (currentPage + 1) * CARDS_PER_PAGE
      );

  const canGoNext = currentPage < totalPages - 1;
  const canGoPrev = currentPage > 0;

  useEffect(() => {
    if (currentPage >= totalPages) setCurrentPage(Math.max(0, totalPages - 1));
  }, [totalPages, currentPage]);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 < 0 ? totalPages - 1 : prev - 1));
  };

  if (filteredProducts.length === 0) {
    return (
      <div className="flex items-center justify-center py-16 text-stone-400">
        <p className="text-sm font-medium">No products match your search.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* ── Top Bar: Total items in range & View All toggle ── */}
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-bold text-stone-500">
          Showing <span className="text-[#1a5c30] font-black">{visibleProducts.length}</span> of <span className="text-[#1a5c30] font-black">{filteredProducts.length}</span> products
        </span>
        {filteredProducts.length > CARDS_PER_PAGE && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs font-extrabold text-[#1a5c30] hover:text-[#0f2d1a] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 px-3 py-1 rounded-full transition-all cursor-pointer shadow-xs"
          >
            {showAll ? "Show in Pages (6/page)" : `View All (${filteredProducts.length})`}
          </button>
        )}
      </div>

      {/* ══════════════════════════════════════════
          PRODUCT GRID — Compact & Touch-Friendly on Mobile
         ══════════════════════════════════════════ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={showAll ? "all" : currentPage}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5"
        >
          {visibleProducts.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.25) }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(p)}
            >
              {/* ──────────────────────────────────────
                  CARD — Left Image | Right Content (Mobile Compact h-36 sm:h-52)
                 ────────────────────────────────────── */}
              <div className="relative bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm group-hover:shadow-xl group-hover:border-emerald-200 transition-all duration-300 flex h-36 sm:h-52">

                {/* Ribbon bookmark */}
                {p.ribbonText && (
                  <div
                    className={`absolute top-0 right-3 sm:right-4 w-4 sm:w-5 h-7 sm:h-9 ${p.ribbonColor} z-20 shadow-md`}
                    style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 78%, 0% 100%)" }}
                  />
                )}

                {/* ── LEFT: Image Panel ── */}
                <div className="relative w-[40%] sm:w-[50%] flex-shrink-0 overflow-hidden bg-gradient-to-br from-[#f3faf5] to-[#edf7f0] border-r border-stone-100/80">
                  {/* Soft background circles */}
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-emerald-100/60 pointer-events-none" />
                  <div className="absolute -top-5 -right-5 w-16 h-16 rounded-full bg-yellow-50/60 pointer-events-none" />

                  {p.image ? (
                    <motion.img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-contain p-1 sm:p-1.5 drop-shadow-[0_6px_14px_rgba(0,0,0,0.16)] contrast-[1.02] saturate-[1.03]"
                      whileHover={{ scale: 1.12, rotate: 1.5 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    />
                  ) : (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl"
                      whileHover={{ scale: 1.12, rotate: 2 }}
                      transition={{ type: "spring", stiffness: 280, damping: 18 }}
                    >
                      {p.icon}
                    </motion.div>
                  )}
                </div>

                {/* ── RIGHT: Content Panel ── */}
                <div className="flex-1 flex flex-col justify-between p-2.5 sm:p-4 min-w-0">

                  {/* TOP */}
                  <div className="space-y-0.5 sm:space-y-1">
                    <span className="inline-block text-[7.5px] sm:text-[8px] font-extrabold uppercase tracking-[0.12em] text-[#1a5c30] bg-emerald-50 border border-emerald-100 px-1.5 sm:px-2 py-0.5 rounded-full">
                      {p.badgeTag || "IQF FROZEN"}
                    </span>

                    <h3 className="text-xs sm:text-[16px] font-black text-[#0f2d1a] leading-snug sm:leading-tight line-clamp-2 group-hover:text-[#1a5c30] transition-colors duration-200">
                      {p.title}
                    </h3>

                    <p className="text-[9.5px] sm:text-[11px] text-stone-400 font-medium leading-tight sm:leading-snug line-clamp-1">
                      {p.tagline}
                    </p>
                  </div>

                  {/* MIDDLE: Attribute chips */}
                  <div className="flex flex-wrap gap-1">
                    {p.items && p.items.slice(0, 2).map((item, idx) => (
                      <span
                        key={idx}
                        className="text-[7.5px] sm:text-[9px] font-bold text-[#1a5c30] bg-emerald-50/80 border border-emerald-100 px-1.5 sm:px-2 py-0.5 rounded-full truncate max-w-[110px] sm:max-w-none"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* BOTTOM: Stars + CTA */}
                  <div className="flex items-center justify-between pt-1 border-t border-stone-100/80 sm:border-0 sm:pt-0">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, si) => (
                        <Star key={si} size={9} fill="#F59E0B" stroke="none" className="sm:w-2.5 sm:h-2.5" />
                      ))}
                    </div>

                    <motion.button
                      onClick={(e) => { e.stopPropagation(); setSelectedProduct(p); }}
                      whileHover={{ x: 3 }}
                      className="flex items-center gap-1 text-[8.5px] sm:text-[10px] font-extrabold uppercase tracking-wider text-stone-500 group-hover:text-[#1a5c30] transition-colors"
                    >
                      <Eye size={10} className="sm:w-3 sm:h-3" />
                      VIEW
                    </motion.button>
                  </div>
                </div>

                {/* Hover Overlay — centered "View Detail" text */}
                <div className="absolute inset-0 bg-[#0f2d1a]/0 group-hover:bg-[#0f2d1a]/60 transition-all duration-300 z-10 hidden sm:flex items-center justify-center rounded-2xl pointer-events-none">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 flex flex-col items-center gap-1.5">
                    <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Eye size={16} className="text-[#1a5c30]" />
                    </div>
                    <span className="text-white text-xs font-extrabold uppercase tracking-widest">View Detail</span>
                  </div>
                </div>

                {/* Green left accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1a5c30] scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 rounded-l-full z-20" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ── Pagination (When not in View All mode) ── */}
      {!showAll && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-4 border-t border-stone-100">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              aria-label="Previous Page"
              className={`p-2 sm:p-2.5 rounded-full font-bold transition-all ${
                canGoPrev
                  ? "bg-[#1a5c30] text-white hover:bg-[#0f2d1a] shadow-md hover:shadow-lg active:scale-95"
                  : "bg-stone-100 text-stone-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNext}
              disabled={!canGoNext}
              aria-label="Next Page"
              className={`p-2 sm:p-2.5 rounded-full font-bold transition-all ${
                canGoNext
                  ? "bg-[#FFD700] text-[#0f2d1a] hover:bg-[#FFC200] shadow-md hover:shadow-lg active:scale-95"
                  : "bg-stone-100 text-stone-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={16} />
            </button>
            <span className="text-xs font-extrabold text-stone-600 ml-1">
              Page {currentPage + 1} of {totalPages}
            </span>
          </div>

          <div className="flex items-center gap-1 sm:gap-1.5">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-black transition-all flex items-center justify-center ${
                  idx === currentPage
                    ? "bg-[#1a5c30] text-white shadow-md scale-105"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════
          PRODUCT DETAIL MODAL
          LEFT: White panel with big product image (no white box)
          RIGHT: Full product details
         ══════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/55 backdrop-blur-sm z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 32 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 32 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            >
              <div
                className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] md:max-h-[92vh] overflow-y-auto md:overflow-hidden flex flex-col md:flex-row shadow-black/30"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-white border border-stone-200 rounded-full shadow-md hover:bg-stone-50 transition-all"
                >
                  <X size={17} className="text-stone-500" />
                </button>

                {/* ═══════════════════════════════════════
                    LEFT PANEL — Dynamic Background:
                    Red Texture (redBg) for RTE Food Products
                    Green Wave (cardBg) for Frozen Food Products
                   ═══════════════════════════════════════ */}
                {(() => {
                  const isRteProduct =
                    selectedProduct.mainCat === "rte" ||
                    (selectedProduct.badgeTag && selectedProduct.badgeTag.toLowerCase().includes("rte")) ||
                    (selectedProduct.subCatId && (selectedProduct.subCatId.includes("jain") || selectedProduct.subCatId.includes("rte"))) ||
                    (selectedProduct.ribbonText && (selectedProduct.ribbonText.toLowerCase().includes("rte") || selectedProduct.ribbonText.toLowerCase().includes("jain"))) ||
                    (selectedProduct.tagline && selectedProduct.tagline.toLowerCase().includes("rte")) ||
                    (selectedProduct.title && (selectedProduct.title.toLowerCase().includes("dal") || selectedProduct.title.toLowerCase().includes("paneer") || selectedProduct.title.toLowerCase().includes("curry") || selectedProduct.title.toLowerCase().includes("gravy") || selectedProduct.title.toLowerCase().includes("biryani") || selectedProduct.title.toLowerCase().includes("khichdi") || selectedProduct.title.toLowerCase().includes("pav bhaji")));

                  const popupBgImage = isRteProduct ? redBg : cardBg;

                  return (
                    <div
                      className="md:w-[48%] flex-shrink-0 relative bg-cover bg-center flex items-center justify-center p-0 min-h-[340px] sm:min-h-[400px] md:min-h-[520px] overflow-hidden"
                      style={{ backgroundImage: `url(${popupBgImage})` }}
                    >
                      {/* Subtle dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10 pointer-events-none" />

                      {/* Ribbon label */}
                      {selectedProduct.ribbonText && (
                        <div className={`absolute top-4 left-4 z-20 text-[10px] font-extrabold uppercase tracking-wider text-white px-3.5 py-1.5 rounded-full shadow-md ${selectedProduct.ribbonColor}`}>
                          {selectedProduct.ribbonText}
                        </div>
                      )}

                      {/* BIG Product Image — maximum size with zero padding constraint */}
                      <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center p-3 sm:p-5 min-h-[280px] sm:min-h-[360px] md:min-h-[460px]"
                        initial={{ scale: 0.88, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {selectedProduct.image ? (
                          <OptimizedImage
                            src={selectedProduct.image}
                            alt={selectedProduct.title}
                            wrapperClassName="w-full h-full max-h-[320px] sm:max-h-[420px] md:max-h-[480px]"
                            imgClassName="w-full h-full object-contain max-h-[320px] sm:max-h-[420px] md:max-h-[480px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                            loading="lazy"
                          />
                        ) : (
                          <div className="text-8xl text-white drop-shadow-lg">{selectedProduct.icon}</div>
                        )}
                      </motion.div>

                      {/* Pack size badge at bottom */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-center gap-2 pointer-events-none">
                        {selectedProduct.packSize && (
                          <span className="bg-[#0f2d1a] text-white text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                            {selectedProduct.packSize}
                          </span>
                        )}
                        <span className="bg-white/90 border border-emerald-200 text-[#1a5c30] text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm">
                          {selectedProduct.processType || "IQF"}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                {/* ═══════════════════════════════════════
                    RIGHT PANEL — Content
                   ═══════════════════════════════════════ */}
                <div className="flex-1 flex flex-col overflow-y-auto">
                  {/* Header */}
                  <div className="p-6 sm:p-7 border-b border-stone-100">
                    <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.15em] text-[#1a5c30] bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full mb-3">
                      {selectedProduct.badgeTag || "IQF FROZEN"}
                    </span>

                    <h2 className="text-2xl sm:text-3xl font-black text-[#0f2d1a] leading-tight mb-1">
                      {selectedProduct.title}
                    </h2>
                    <p className="text-stone-400 text-sm font-medium mb-3">
                      {selectedProduct.tagline}
                    </p>

                    <div className="flex items-center gap-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                      ))}
                      <span className="text-xs font-bold text-stone-400 ml-1">5.0 · Export Grade</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 sm:p-7 space-y-5 flex-1">
                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2.5">
                      {[
                        { label: "Pack Size", value: selectedProduct.packSize || "300g", icon: <Package size={14} className="text-[#1a5c30]" /> },
                        { label: "Process", value: selectedProduct.processType || "IQF Frozen", icon: <Award size={14} className="text-[#1a5c30]" /> },
                        {
                          label: "Origin",
                          value: selectedProduct.origin || "India",
                          icon: <Globe size={14} className="text-[#1a5c30]" />
                        }
                      ].map((spec, i) => (
                        <div key={i} className="bg-stone-50 border border-stone-100 rounded-xl p-3 text-center">
                          <div className="flex justify-center mb-1">{spec.icon}</div>
                          <p className="text-[8px] uppercase font-bold text-stone-400 mb-0.5">{spec.label}</p>
                          <p className="text-xs font-extrabold text-[#0f2d1a] leading-tight">{spec.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* About */}
                    <div>
                      <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">About This Product</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{selectedProduct.desc}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2.5">Key Highlights</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProduct.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-3 py-2.5 rounded-xl">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#1a5c30] flex-shrink-0" />
                            <span className="text-xs font-bold text-[#1a5c30] leading-tight">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="p-5 sm:p-6 border-t border-stone-100 flex gap-3">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold py-3 rounded-xl text-sm transition-all"
                    >
                      Close
                    </button>
                    <a
                      href="#contact"
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-[#0f2d1a] font-extrabold py-3 rounded-xl text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      Request Quote <ArrowRight size={15} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}