import { useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import ProductCarousel from "../common/ProductCarousel";
import { Snowflake, Package, Leaf, Utensils, ShoppingBag, ChevronRight, ChevronDown, CheckCircle, ThumbsUp, Star, Search, X, Layers } from "lucide-react";
import { frozenVegetablesCategories } from "../data/frozenVegetablesData";
import { rteFoodCategories } from "../data/rteFoodData";
import useSEO from "../hooks/useSEO";

const categoryIcons = [
  <Snowflake key="cat-1" size={24} className="text-emerald-600" />,
  <Leaf key="cat-2" size={24} className="text-amber-500" />,
  <Package key="cat-3" size={24} className="text-rose-500" />,
  <Utensils key="cat-4" size={24} className="text-purple-600" />
];

export default function MainProductCategoryPage({ pageKey }) {
  const isFrozen = pageKey === "frozen-vegetable-collection";
  const pageTitle = isFrozen ? "Currymia Frozen Vegetables Portfolio" : "Currymia Ready To Eat Food Products";
  const pageSubtitle = isFrozen ? "IQF Processed · Farm Harvested · 34 SKUs" : `RETORT Processed · Shelf Stable · ${rteFoodCategories.reduce((acc, cat) => acc + cat.products.length, 0)} SKUs`;
  const pageDesc = isFrozen
    ? "Explore our 34-SKU catalog of premium IQF frozen vegetables across 4 distinct categories: Everyday Staples, Asian Specialty Vegetables, Bases & Kitchen Essentials, and Regional Blend Mixes."
    : "Explore our range of Currymia Ready-to-Eat RETORT meals — authentic North Indian recipes and a dedicated Punjabi range, prepared for global export with up to 24-month shelf stability. No preservatives, just real spices.";

  useSEO({
    title: `${pageTitle} | Currymia Foods Limited`,
    description: pageDesc,
    canonical: isFrozen ? "/products/frozen-vegetable-collection" : "/products/rte-food-products",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [collapsedCategories, setCollapsedCategories] = useState({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Organize Frozen products by the 4 PDF catalog categories
  const frozenCategories = frozenVegetablesCategories.map((cat, idx) => ({
    ...cat,
    icon: categoryIcons[idx % categoryIcons.length]
  }));

  // Organize RTE products from real catalogue data with icons
  const rteCategories = rteFoodCategories.map((cat, idx) => ({
    ...cat,
    icon: idx === 0
      ? <ShoppingBag size={24} className="text-[#E67E22]" />
      : <Leaf size={24} className="text-[#2E8B57]" />,
  }));

  const activeCategories = isFrozen ? frozenCategories : rteCategories;

  // Total product count for the ALL button
  const totalProductCount = isFrozen ? 34 : rteFoodCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  // Filter active categories based on dropdown / tab selection and search query
  const displayedCategories = activeCategories
    .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filteredProds = cat.products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.items && p.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      return { ...cat, products: filteredProds };
    })
    .filter((cat) => cat.products.length > 0);

  // Total product count in filtered categories
  const totalFilteredProducts = displayedCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  const toggleCategoryCollapse = (catId) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const isAllCollapsed =
    displayedCategories.length > 0 &&
    displayedCategories.every((cat) => collapsedCategories[cat.id]);

  const toggleAllCollapse = () => {
    if (isAllCollapsed) {
      setCollapsedCategories({});
    } else {
      const next = {};
      displayedCategories.forEach((cat) => {
        next[cat.id] = true;
      });
      setCollapsedCategories(next);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FFD700]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-4 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-[#FFD700] text-xs font-bold tracking-[4px] sm:tracking-[5px] uppercase mb-3 sm:mb-4 border border-[#FFD700]/30 px-3 sm:px-4 py-1.5 rounded-full"
          >
            {pageSubtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            {pageTitle}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/75 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-7 sm:leading-8"
          >
            {pageDesc}
          </motion.p>
        </div>
      </section>

      {/* ── Search & Category Filter Bar (Compact & Mobile-Optimized) ── */}
      <section className="bg-white border-b border-stone-200 py-2.5 px-3 sm:px-6 lg:px-10 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">

          {/* Search Input & Collapse All Toggle */}
          <div className="flex items-center gap-2 justify-between w-full sm:w-auto">
            <div className="relative flex items-center flex-1 sm:flex-initial">
              <Search size={14} className="absolute left-3 text-stone-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-stone-50 border border-stone-200 rounded-full pl-8 pr-7 py-1.5 sm:py-2 text-xs text-[#0f2d1a] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1a5c30]/25 focus:border-[#1a5c30] focus:bg-white transition-all font-medium w-full sm:w-52"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 p-0.5 hover:bg-stone-200 rounded-full text-stone-400 transition-colors"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {displayedCategories.length > 1 && (
              <button
                onClick={toggleAllCollapse}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-black bg-stone-100 hover:bg-[#1a5c30] hover:text-white text-stone-700 border border-stone-200 transition-all flex-shrink-0 cursor-pointer shadow-2xs"
                title={isAllCollapsed ? "Expand all sections" : "Collapse all sections"}
              >
                <Layers size={13} />
                <span>{isAllCollapsed ? "Expand All" : "Collapse All"}</span>
              </button>
            )}
          </div>

          {/* Category Pills — Single row horizontally swipeable on mobile */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 sm:flex-wrap no-scrollbar">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-3 py-1 sm:py-1.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === "all"
                  ? "bg-[#1a5c30] text-white shadow-xs"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#1a5c30]"
              }`}
            >
              ALL ({isFrozen ? 34 : totalProductCount})
            </button>
            {activeCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? "bg-[#1a5c30] text-white shadow-xs"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#1a5c30]"
                }`}
              >
                <span>{cat.title}</span>
                <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none ${
                  selectedCategory === cat.id ? "bg-white/25 text-white" : "bg-stone-200 text-stone-500"
                }`}>
                  {cat.products.length}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ── Products Display (Collapsible Product Range Sections) ── */}
      <section className="py-6 sm:py-12 px-3 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          {displayedCategories.length > 0 ? (
            displayedCategories.map((category, catIdx) => {
              const isCollapsed = !!collapsedCategories[category.id];

              return (
                <div
                  key={category.id || catIdx}
                  className="mb-6 sm:mb-12 last:mb-0"
                >
                  {/* Category Header — Clickable to Retract/Expand */}
                  <div
                    onClick={() => toggleCategoryCollapse(category.id)}
                    className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 mb-3 sm:mb-6 bg-gradient-to-r ${category.color} border ${category.borderColor} backdrop-blur-sm relative overflow-hidden cursor-pointer select-none transition-all duration-200 hover:shadow-md active:scale-[0.99]`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          {category.icon}
                          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a5c30]">{category.badge}</span>
                        </div>
                        <h2 className="text-base sm:text-2xl lg:text-3xl font-black text-[#0f2d1a] leading-tight mb-0.5">
                          {category.title}
                        </h2>
                        <p className="text-[#4A3B32] text-[11px] sm:text-sm font-semibold truncate sm:whitespace-normal">{category.subtitle}</p>
                      </div>

                      {/* Retract / Collapse Toggle Pill */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <div className="flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/95 shadow-sm border border-stone-200/80 text-[11px] sm:text-xs font-extrabold text-[#0f2d1a] hover:bg-white transition-all">
                          <span className="hidden sm:inline">{isCollapsed ? `Show Range (${category.products.length})` : "Hide Range"}</span>
                          <span className="sm:hidden">{isCollapsed ? `${category.products.length} Items` : "Hide"}</span>
                          <ChevronDown
                            size={15}
                            className={`transition-transform duration-300 ${isCollapsed ? "-rotate-90 text-stone-400" : "rotate-0 text-[#1a5c30]"}`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Collapsible Products Carousel Content */}
                  <AnimatePresence initial={false}>
                    {!isCollapsed && (
                      <motion.div
                        key="carousel"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ProductCarousel
                          products={category.products}
                          externalSearchQuery={searchQuery}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-20 bg-stone-50 border border-stone-200 rounded-3xl p-8">
              <Search className="text-stone-300 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-bold text-[#0f2d1a] mb-2">No Products Found</h3>
              <p className="text-stone-500 text-sm max-w-md mx-auto mb-6">
                No products match "{searchQuery}" in {selectedCategory === "all" ? "any category" : "the selected category"}.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="bg-[#1a5c30] hover:bg-[#0f2d1a] text-white font-bold px-6 py-2.5 rounded-full text-xs transition-all shadow-md"
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Quality Assurance Banner ── */}
      <section className="bg-white py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <Star className="text-[#FFD700] mx-auto mb-2 sm:mb-3" size={24} />
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f2d1a]">Quality & Export Certification</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {[
              "100% Quality Checked before every export dispatch",
              "Zero added artificial chemical preservatives",
              "HACCP, ISO 22000, FSSAI & Halal export compliant",
              "Custom private label branding & OEM packaging",
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3 bg-[#FAF6EE] border border-[#E6DAC8] rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <span className="text-[#4A3B32] text-xs sm:text-sm leading-5 sm:leading-6 font-semibold">{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0f2d1a] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <ThumbsUp className="text-[#FFD700] mx-auto mb-3 sm:mb-4" size={28} />
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3 sm:mb-4">Request Export Quotation or Samples</h2>
          <p className="text-white/70 mb-6 sm:mb-8 text-sm sm:text-base">Get product specifications, pricing, and samples sent directly to your purchasing team.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base"
          >
            Contact Export Desk <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}