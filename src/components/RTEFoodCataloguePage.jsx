import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import ProductCarousel from "../common/ProductCarousel";
import {
  Snowflake, Package, Leaf, Utensils, ShoppingBag,
  Coffee, ChevronRight, CheckCircle, ThumbsUp, Star, Search, X, Sparkles
} from "lucide-react";
import useSEO from "../hooks/useSEO";

// ─── Data imports ──────────────────────────────────────────────────────────────
import { rteFoodCategories }    from "../data/rteFoodData";
import { frozenParathasData }   from "../data/frozenParathasData";
import { frozenSnacksData }     from "../data/frozenSnacksData";
import { frozenMomosData }      from "../data/frozenMomosData";
import { frozenFruitPulpData }  from "../data/frozenFruitPulpData";
import { frozenPastesData }     from "../data/frozenPastesData";
import { frozenWrapsData }      from "../data/frozenWrapsData";

// ─── Helper: convert new-format product to ProductCarousel shape ───────────────
function toCarouselProduct(p, defaultBadgeTag, defaultRibbonColor = "bg-[#1a5c30]") {
  return {
    id:           p.id,
    title:        p.title,
    tagline:      [p.weight, p.pieces].filter(Boolean).join(" · ") || "",
    desc:         `Currymia ${p.title} — freshly made and frozen to lock in authentic taste and quality.`,
    image:        p.image,
    ribbonText:   p.badge || defaultBadgeTag,
    ribbonColor:  defaultRibbonColor,
    badgeTag:     defaultBadgeTag,
    packSize:     p.weight || "—",
    processType:  "Keep Frozen",
    origin:       "India",
    items:        p.pieces
      ? [p.weight || "—", p.pieces, "Keep Frozen", "Made in India"]
      : [p.weight || "—", "Keep Frozen", "No Preservatives", "Made in India"],
  };
}

// ─── Flatten all sections of a category into a single products array ──────────
function flattenSections(sections, defaultBadgeTag, defaultRibbonColor) {
  return sections.flatMap((sec) =>
    sec.products.map((p) => toCarouselProduct(p, defaultBadgeTag, defaultRibbonColor))
  );
}

// ─── Build the unified categories list ─────────────────────────────────────────
function buildCategories() {
  const classicCategory = rteFoodCategories.find((c) => c.id === "classic-range") || rteFoodCategories[0];
  const jainCategory    = rteFoodCategories.find((c) => c.id === "jain-range") || rteFoodCategories[1];

  return [
    // 1 ─ Classic Range (Ready-to-Eat)
    {
      id:          "classic-range",
      title:       "Classic Ready-To-Eat Range",
      subtitle:    "Authentic North Indian recipes RETORT-processed for global shelf stability",
      badge:       `${classicCategory?.products?.length || 1} SKU · 280g RETORT Pouch`,
      color:       "from-amber-500/10 to-amber-100/10",
      borderColor: "border-amber-500/30",
      products:    classicCategory ? classicCategory.products : [],
    },

    // 2 ─ Dedicated Punjabi Range
    {
      id:          "jain-range",
      title:       "Punjabi Specialty Range",
      subtitle:    "Authentic Punjabi recipes crafted with rich spices and home-style flavours",
      badge:       `${jainCategory?.products?.length || 2} SKUs · 100% Punjabi Authentic`,
      color:       "from-emerald-500/15 to-emerald-100/10",
      borderColor: "border-emerald-500/40",
      products:    jainCategory ? jainCategory.products : [],
    },

    // 3 ─ Frozen Parathas & Naan
    {
      id:          "frozen-parathas",
      title:       frozenParathasData.categoryTitle,
      subtitle:    frozenParathasData.categorySubtitle,
      badge:       "17 SKUs · Freshly Made · Keep Frozen",
      color:       "from-yellow-500/10 to-yellow-100/10",
      borderColor: "border-yellow-400/30",
      products:    flattenSections(
        frozenParathasData.sections,
        "FROZEN PARATHA",
        "bg-[#D4A84F]"
      ),
    },

    // 4 ─ Frozen Snacks
    {
      id:          "frozen-snacks",
      title:       frozenSnacksData.categoryTitle,
      subtitle:    frozenSnacksData.categorySubtitle,
      badge:       "14 SKUs · Street Style · Crispy Authentic",
      color:       "from-rose-500/10 to-rose-100/10",
      borderColor: "border-rose-500/30",
      products:    flattenSections(
        frozenSnacksData.sections,
        "FROZEN SNACK",
        "bg-[#FF6B5B]"
      ),
    },

    // 5 ─ Frozen Momos
    {
      id:          "frozen-momos",
      title:       frozenMomosData.categoryTitle,
      subtitle:    frozenMomosData.categorySubtitle,
      badge:       "6 SKUs · Steamed · Authentic Asian Recipe",
      color:       "from-blue-500/10 to-blue-100/10",
      borderColor: "border-blue-500/30",
      products:    flattenSections(
        frozenMomosData.sections,
        "FROZEN MOMO",
        "bg-[#38B6FF]"
      ),
    },

    // 6 ─ Frozen Fruit Pulp
    {
      id:          "frozen-fruit-pulp",
      title:       frozenFruitPulpData.categoryTitle,
      subtitle:    frozenFruitPulpData.categorySubtitle,
      badge:       "12 SKUs · 100% Real Fruit · No Additives",
      color:       "from-teal-500/10 to-teal-100/10",
      borderColor: "border-teal-500/30",
      products:    flattenSections(
        frozenFruitPulpData.sections,
        "FRUIT PULP",
        "bg-[#2E8B57]"
      ),
    },

    // 7 ─ Frozen Pastes & Base Gravies
    {
      id:          "frozen-pastes",
      title:       frozenPastesData.categoryTitle,
      subtitle:    frozenPastesData.categorySubtitle,
      badge:       "3 SKUs · 100% Natural · No Preservatives",
      color:       "from-red-500/10 to-red-100/10",
      borderColor: "border-red-500/30",
      products:    flattenSections(
        frozenPastesData.sections,
        "FROZEN PASTE",
        "bg-[#E67E22]"
      ),
    },

    {
      id: "classic-range",
      title: "Classic Indian Curry Range",
      subtitle: "Authentic North Indian curries & gravies in shelf-stable RETORT pouches",
      badge: "RETORT READY MEALS · 12 SKUs",
      color: "from-amber-50 to-orange-50",
      borderColor: "border-amber-200",
      products: classicCategory ? classicCategory.products : [],
    },
    {
      id: "jain-range",
      title: "Punjabi Specialty Food Range",
      subtitle: "Rich, authentic Punjabi recipes crafted without compromise",
      badge: "PUNJABI SPECIALTY · 11 SKUs",
      color: "from-emerald-50 to-teal-50",
      borderColor: "border-emerald-200",
      products: punjabiCategory ? punjabiCategory.products : [],
    },
    {
      id: "frozen-snacks",
      title: "Frozen Snacks & Starters",
      subtitle: "Crispy samosas, spring rolls, tikkis and kebabs ready to fry or air-fry",
      badge: "FROZEN SNACKS · 15 SKUs",
      color: "from-rose-50 to-amber-50",
      borderColor: "border-rose-200",
      products: frozenSnacksData.map((p) =>
        toCarouselProduct(p, "CRISPY SNACK", "bg-rose-600")
      ),
    },
    {
      id: "frozen-parathas",
      title: "Frozen Parathas, Naan & Breads",
      subtitle: "Flaky handmade stuffed parathas, tandoori naan, roti & thepla",
      badge: "INDIAN BREADS · 8 SKUs",
      color: "from-yellow-50 to-amber-50",
      borderColor: "border-yellow-200",
      products: frozenParathasData.map((p) =>
        toCarouselProduct(p, "FLAKY BREAD", "bg-amber-600")
      ),
    },
    {
      id: "frozen-momos",
      title: "Frozen Momos & Dumplings",
      subtitle: "Juicy street-style dumplings with authentic dipping chutney pairing",
      badge: "STEAM & FRY MOMOS · 6 SKUs",
      color: "from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
      products: frozenMomosData.map((p) =>
        toCarouselProduct(p, "JUICY MOMO", "bg-purple-600")
      ),
    },
    {
      id: "frozen-pastes",
      title: "Base Pastes & Purees",
      subtitle: "Ginger, garlic & tomato bases — the foundation of authentic Indian cooking",
      badge: "KITCHEN BASES · 4 SKUs",
      color: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      products: frozenPastesData.map((p) =>
        toCarouselProduct(p, "PURE BASE", "bg-teal-600")
      ),
    },
    {
      id: "fruit-pulp",
      title: "Natural Fruit Pulps",
      subtitle: "100% natural Alphonso, Kesar mango, guava, fig & dragon fruit pulps",
      badge: "NATURAL FRUIT PULP · 8 SKUs",
      color: "from-orange-50 to-yellow-50",
      borderColor: "border-orange-200",
      products: frozenFruitPulpData.map((p) =>
        toCarouselProduct(p, "NATURAL PULP", "bg-orange-500")
      ),
    },
    {
      id: "frozen-wraps",
      title: "Frozen Wraps & Rolls",
      subtitle: "Ready-to-heat street-style wraps with rich cottage cheese and vegetable fillings",
      badge: "GRAB & GO WRAPS · 4 SKUs",
      color: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      products: frozenWrapsData.map((p) =>
        toCarouselProduct(p, "READY WRAP", "bg-emerald-700")
      ),
    },
  ];
}

const ICONS = [
  <ShoppingBag key="i0" size={24} className="text-orange-500" />,
  <Leaf        key="i1" size={24} className="text-emerald-700" />,
  <Utensils    key="i2" size={24} className="text-yellow-600" />,
  <Package     key="i3" size={24} className="text-rose-500" />,
  <Snowflake   key="i4" size={24} className="text-blue-500" />,
  <Leaf        key="i5" size={24} className="text-teal-600" />,
  <Coffee      key="i6" size={24} className="text-red-600" />,
  <Utensils    key="i7" size={24} className="text-emerald-800" />,
];

export default function RTEFoodCataloguePage() {
  useSEO({
    title: "Ready-To-Eat (RTE) Meals & Snacks Catalogue | Currymia Foods Limited",
    description: "Browse Currymia's full catalogue of shelf-stable RETORT meals, authentic frozen snacks, parathas, momos, natural fruit pulps, and gravies for export.",
    canonical: "/products/rte-food-products",
  });

  const [searchQuery,          setSearchQuery]          = useState("");
  const [selectedCategory,     setSelectedCategory]     = useState("all");
  const [collapsedCategories,  setCollapsedCategories]  = useState({});

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const allCategories = buildCategories().map((cat, idx) => ({
    ...cat,
    icon: ICONS[idx % ICONS.length],
  }));

  const totalProductCount = allCategories.reduce((acc, cat) => acc + cat.products.length, 0);

  // Filter by category tab + search query
  const displayedCategories = allCategories
    .filter((cat) => selectedCategory === "all" || cat.id === selectedCategory)
    .map((cat) => {
      if (!searchQuery.trim()) return cat;
      const filtered = cat.products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (p.items && p.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase())))
      );
      return { ...cat, products: filtered };
    })
    .filter((cat) => cat.products.length > 0);

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
            Ready-To-Eat · Frozen Food · {totalProductCount}+ SKUs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            Currymia <span className="text-[#FFD700]">Ready-To-Eat</span> Food Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/75 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-7 sm:leading-8"
          >
            From RETORT-processed shelf-stable meals (Classic & Punjabi Specialty Range) to handcrafted frozen snacks, parathas, momos,
            fruit pulps and wraps — Currymia's complete product portfolio for global retail and food service.
          </motion.p>
        </div>
      </section>

      {/* ── Search & Category Filter Bar (Compact & Mobile-Optimized) ── */}
      <section className="bg-white border-b border-stone-200 py-2.5 px-3 sm:px-6 lg:px-10 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">

          {/* Top Line on Mobile: Search & Expand/Collapse Toggle */}
          <div className="flex items-center gap-2 justify-between w-full sm:w-auto">
            {/* Search Input */}
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

            {/* Collapse/Expand All Master Button */}
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
              ALL ({totalProductCount})
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-extrabold transition-all whitespace-nowrap flex-shrink-0 flex items-center gap-1 ${
                  selectedCategory === cat.id
                    ? cat.id === "jain-range"
                      ? "bg-emerald-700 text-white shadow-xs"
                      : "bg-[#1a5c30] text-white shadow-xs"
                    : cat.id === "jain-range"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100 font-black"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#1a5c30]"
                }`}
              >
                {cat.id === "jain-range" && <Sparkles size={11} className="text-emerald-500" />}
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
                  {/* Category Header Card — Clickable to Retract/Expand */}
                  <div
                    onClick={() => toggleCategoryCollapse(category.id)}
                    className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-7 mb-3 sm:mb-6 bg-gradient-to-r ${category.color} border ${category.borderColor} backdrop-blur-sm relative overflow-hidden cursor-pointer select-none transition-all duration-200 hover:shadow-md active:scale-[0.99]`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                          {category.icon}
                          <span className={`text-[10px] sm:text-xs font-bold uppercase tracking-widest ${category.id === 'jain-range' ? 'text-emerald-700 font-black' : 'text-[#1a5c30]'}`}>
                            {category.badge}
                          </span>
                          {category.id === "jain-range" && (
                            <span className="bg-emerald-700 text-white text-[9px] sm:text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded-full shadow-2xs inline-flex items-center gap-1">
                              <Sparkles size={10} />
                              AUTHENTIC PUNJABI
                            </span>
                          )}
                        </div>
                        <h2 className="text-base sm:text-2xl lg:text-3xl font-black text-[#0f2d1a] leading-tight mb-0.5">
                          {category.title}
                        </h2>
                        <p className="text-[#4A3B32] text-[11px] sm:text-sm font-semibold truncate sm:whitespace-normal">
                          {category.subtitle}
                        </p>
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

                  {/* Collapsible Product Carousel Content */}
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
                onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
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
            href="/Contactus"
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base"
          >
            Contact Export Desk <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
