import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Snowflake,
  ShoppingBag,
  ChevronDown,
  Filter,
  Sparkles,
  Layers,
  X,
  Star,
  Package,
  Award,
  Globe,
  ArrowRight,
  UtensilsCrossed,
  Wheat,
  ChefHat,
  Droplet
} from "lucide-react";
import sliderBg from "../assets/slider-bg.png";
import redBg from "../assets/red-bg.png";
import cardBg from "../assets/card-bg.png";
import OptimizedImage from "./OptimizedImage";

// ── Data imports ──────────────────────────────────────────────────────────────
import { rteFoodCategories } from "../data/rteFoodData";
import { frozenVegetablesCategories } from "../data/frozenVegetablesData";
import { frozenParathasData } from "../data/frozenParathasData";
import { frozenSnacksData } from "../data/frozenSnacksData";
import { frozenFruitPulpData } from "../data/frozenFruitPulpData";
import { frozenMomosData } from "../data/frozenMomosData";
import { frozenPastesData } from "../data/frozenPastesData";
import { frozenWrapsData } from "../data/frozenWrapsData";

// ── Flatten & normalize all products with categories ──────────────────────────
const rawAllProducts = [
  // RTE Food Products
  ...(rteFoodCategories || []).flatMap((c) =>
    (c.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "rte",
      subCatId: c.id,
      subCatTitle: c.id === "jain-range" ? "Punjabi Specialty Range" : "Classic RTE Range",
      path: "/products/rte-food-products",
      desc: p.desc || p.description || `Premium ready-to-eat ${p.title} cooked to perfection using traditional Indian recipes. Preserved using advanced RETORT sterilization technology for long shelf life with zero preservatives.`,
      tagline: p.tagline || p.badge || "Authentic ready-to-eat meal",
      items: p.items || ["No Preservatives", "100% Vegetarian", "24-Month Shelf Life"],
      packSize: p.packSize || "280g",
      processType: "RETORT Processed",
      origin: p.origin || "Maharashtra, India",
      badgeTag: c.id === "jain-range" ? "PUNJABI SPECIALTY" : "RETORT RTE",
    }))
  ),
  // Frozen Vegetable Collections
  ...(frozenVegetablesCategories || []).flatMap((c) =>
    (c.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: c.id,
      subCatTitle: c.title,
      path: "/products/frozen-vegetable-collection",
      desc: p.desc || p.description || `Freshly harvested ${p.title} processed immediately using advanced Individual Quick Freezing (IQF) technology to lock in natural sweetness, color, and nutritional value.`,
      tagline: p.tagline || p.badge || "Individually quick-frozen at peak freshness",
      items: p.items || ["Farm-Fresh Selection", "100% Natural", "No Added Preservatives"],
      packSize: p.packSize || "500g / 1kg",
      processType: "IQF Frozen",
      origin: p.origin || "Maharashtra, India",
      badgeTag: "IQF VEGETABLES",
    }))
  ),
  // Frozen Parathas & Naan
  ...(frozenParathasData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-parathas",
      subCatTitle: "Frozen Parathas & Naan",
      path: "/products/rte-food-products",
      desc: `Delicious, flaky, and golden-brown ${p.title} prepared in traditional clay tandoors and hand-stretched to perfection. Frozen fresh to preserve authentic flavor and texture. Just heat and eat!`,
      tagline: p.badge || "Traditional recipe flatbread",
      items: ["Just Heat & Eat", p.pieces || "5 Pcs", "Preservative Free"],
      packSize: p.weight || "400g",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "FROZEN FLATBREADS",
    }))
  ),
  // Frozen Snacks
  ...(frozenSnacksData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-snacks",
      subCatTitle: "Frozen Snacks & Starters",
      path: "/products/rte-food-products",
      desc: `Authentic crispy and delicious ${p.title} prepared with fresh vegetables, spices, and premium ingredients. Frozen fresh to guarantee maximum crunchiness and authentic flavor.`,
      tagline: p.badge || "Crispy & authentic Indian starter",
      items: ["Easy to Fry/Bake", p.pieces || "Premium pack", "Maximum Crunch"],
      packSize: p.weight || "400g",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "FROZEN STARTERS",
    }))
  ),
  // Frozen Momos
  ...(frozenMomosData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-momos",
      subCatTitle: "Frozen Momos",
      path: "/products/rte-food-products",
      desc: `Soft, hand-folded, and thin-wrapper ${p.title} filled with perfectly seasoned ingredients. Steam or fry directly from the freezer for a quick and premium Asian snack experience.`,
      tagline: p.badge || "Handcrafted steamed/fried momos",
      items: ["Thin Wrapper", p.pieces || "10 Pcs", "Includes Spicy Dip"],
      packSize: p.weight || "300g",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "FROZEN MOMOS",
    }))
  ),
  // Frozen Fruit Pulp
  ...(frozenFruitPulpData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-fruit-pulp",
      subCatTitle: "Fruit Pulps & Purees",
      path: "/products/rte-food-products",
      desc: `100% natural and pure ${p.title} extracted from premium ripe fruits harvested at peak sweetness. Zero artificial colors, sugar, or preservatives added.`,
      tagline: p.badge || "Pure ripe fruit pulp & puree",
      items: ["100% Fruit", "No Added Sugar", "Rich Natural Taste"],
      packSize: p.weight || "1kg",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "FRUIT PULPS",
    }))
  ),
  // Frozen Pastes
  ...(frozenPastesData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-pastes",
      subCatTitle: "Pastes & Base Gravies",
      path: "/products/rte-food-products",
      desc: `Hygienically ground and prepared ${p.title} designed for quick kitchen operations. Ideal for restaurants, hotels, catering, and home cooking to save preparation time.`,
      tagline: p.badge || "Kitchen preparation essential",
      items: ["Saves Prep Time", "No Preservatives", "Consistent Taste"],
      packSize: p.weight || "1kg",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "BASE PASTES",
    }))
  ),
  // Frozen Wraps
  ...(frozenWrapsData?.sections || []).flatMap((s) =>
    (s.products || []).map((p) => ({
      id: p.id,
      title: p.title,
      image: p.image,
      mainCat: "frozen",
      subCatId: "frozen-wraps",
      subCatTitle: "Frozen Wraps & Rolls",
      path: "/products/rte-food-products",
      desc: `Freshly prepared and rolled ${p.title} packed with authentic ingredients, spices, and base fillings. A convenient, wholesome, and delicious meal options on-the-go.`,
      tagline: p.badge || "Wholesome on-the-go wrap",
      items: ["Convenient Meal", p.pieces || "4 Pcs", "Wholesome Fillings"],
      packSize: p.weight || "400g",
      processType: "IQF Frozen",
      origin: "Maharashtra, India",
      badgeTag: "FROZEN ROLLS",
    }))
  ),
];

// Clean High-Level Product Categories with Lucide React Icons & custom badge colors
const CATEGORIES = [
  { id: "all", title: "All Products (100+ SKUs)", Icon: Layers, iconBg: "bg-amber-100 text-amber-700" },
  { id: "frozen-vegetables", title: "Frozen Vegetables", Icon: Snowflake, iconBg: "bg-emerald-100 text-emerald-700" },
  { id: "frozen-snacks", title: "Frozen Snacks & Starters", Icon: UtensilsCrossed, iconBg: "bg-rose-100 text-rose-600" },
  { id: "frozen-parathas", title: "Frozen Parathas & Breads", Icon: Wheat, iconBg: "bg-amber-100 text-amber-800" },
  { id: "frozen-momos", title: "Frozen Momos & Dumplings", Icon: ChefHat, iconBg: "bg-purple-100 text-purple-700" },
  { id: "rte-meals", title: "Ready-To-Eat Meals", Icon: ShoppingBag, iconBg: "bg-orange-100 text-orange-700" },
  { id: "pastes-pulps", title: "Pastes, Gravies & Pulps", Icon: Droplet, iconBg: "bg-teal-100 text-teal-700" },
];

export default function ProductSlider() {
  const navigate = useNavigate();
  const [activeMainCat, setActiveMainCat] = useState("all");
  const [activeSubCat, setActiveSubCat] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle main category switch
  const handleMainCatChange = (cat) => {
    setActiveMainCat(cat);
    setIsDropdownOpen(false);
    if (cat === "frozen") {
      setActiveSubCat("frozen-vegetables");
    } else if (cat === "rte") {
      setActiveSubCat("rte-meals");
    } else {
      setActiveSubCat("all");
    }
  };

  // Handle dropdown selection
  const handleSelectCategory = (catId) => {
    setActiveSubCat(catId);
    setIsDropdownOpen(false);

    if (catId === "all") {
      setActiveMainCat("all");
    } else if (["frozen-vegetables", "frozen-snacks", "frozen-parathas", "frozen-momos"].includes(catId)) {
      setActiveMainCat("frozen");
    } else if (catId === "rte-meals") {
      setActiveMainCat("rte");
    }
  };

  // Filter products based on active categories
  const filteredProducts = useMemo(() => {
    let list = rawAllProducts;

    if (activeSubCat === "frozen-vegetables") {
      list = list.filter(
        (p) =>
          p.mainCat === "frozen" &&
          ["everyday-staples", "asian-specialty", "kitchen-essentials", "regional-blends"].includes(p.subCatId)
      );
    } else if (activeSubCat === "frozen-snacks") {
      list = list.filter((p) => p.subCatId === "frozen-snacks");
    } else if (activeSubCat === "frozen-parathas") {
      list = list.filter((p) => p.subCatId === "frozen-parathas");
    } else if (activeSubCat === "frozen-momos") {
      list = list.filter((p) => p.subCatId === "frozen-momos");
    } else if (activeSubCat === "rte-meals") {
      list = list.filter((p) => p.mainCat === "rte" || ["classic-range", "jain-range"].includes(p.subCatId));
    } else if (activeSubCat === "pastes-pulps") {
      list = list.filter((p) => ["frozen-pastes", "frozen-fruit-pulp", "frozen-wraps"].includes(p.subCatId));
    } else if (activeMainCat === "frozen") {
      list = list.filter((p) => p.mainCat === "frozen");
    } else if (activeMainCat === "rte") {
      list = list.filter((p) => p.mainCat === "rte");
    }

    return list;
  }, [activeMainCat, activeSubCat]);

  // Create infinite continuous track
  const { track, duration } = useMemo(() => {
    if (filteredProducts.length === 0) return { track: [], duration: 30 };
    const minHalfLength = 14;
    const repeatFactor = Math.max(1, Math.ceil(minHalfLength / filteredProducts.length));
    let half = [];
    for (let i = 0; i < repeatFactor; i++) {
      half.push(...filteredProducts);
    }
    const fullTrack = [...half, ...half];
    const dur = Math.min(Math.max(half.length * 8.5, 60), 320);
    return { track: fullTrack, duration: dur };
  }, [filteredProducts]);

  // Current active category icon and title
  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find((c) => c.id === activeSubCat) || CATEGORIES[0];
  }, [activeSubCat]);

  return (
    <section
      style={{
        position: "relative",
        zIndex: selectedProduct ? 99999 : 10,
        marginTop: "0",
        backgroundImage: `url(${sliderBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "15px",
        paddingBottom: "10px",
      }}
    >
      {/* Subtle dot background texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(255, 193, 7, 0.08) 1px, transparent 1px)",
          backgroundSize: "25px 25px",
          pointerEvents: "none",
          borderRadius: "inherit",
        }}
      />

      {/* ── Heading & Filter Controls ─────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        {/* Top Tag */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,215,0,0.12)",
            border: "1px solid rgba(255,215,0,0.38)",
            borderRadius: "999px",
            padding: "5px 18px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2.5px",
            textTransform: "uppercase",
            color: "#FFD700",
            marginBottom: "2px",
          }}
        >
          <Layers size={14} className="text-[#FFD700]" />
          Our Products Catalogue
        </div>

        {/* Dynamic Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
          <span className="text-[#FFD700]">100+</span> Products
        </h2>

        <p className="text-white/70 text-xs sm:text-sm max-w-2xl mx-auto mb-6">
          Explore our complete range of IQF Frozen Foods and Ready-to-Eat meals. Select categories and sub-categories to filter products.
        </p>

        {/* ── Category Filters Section (Horizontal Flex Row) ── */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 mb-5">
          {/* Main Category Tabs */}
          <div className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 bg-white p-1.5 rounded-2xl border border-gray-200/90 shadow-xl">
            <button
              onClick={() => handleMainCatChange("all")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${activeMainCat === "all"
                  ? "bg-[#FFD700] text-black shadow-md shadow-yellow-500/20 scale-105"
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
                }`}
            >
              <Sparkles size={15} className={activeMainCat === "all" ? "text-black" : "text-[#1a5c30]"} />
              All Products (100+)
            </button>

            <button
              onClick={() => handleMainCatChange("frozen")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${activeMainCat === "frozen"
                  ? "bg-[#FFD700] text-black shadow-md shadow-yellow-500/20 scale-105"
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
                }`}
            >
              <Snowflake size={15} className={activeMainCat === "frozen" ? "text-black" : "text-[#1a5c30]"} />
              Frozen Food
            </button>

            <button
              onClick={() => handleMainCatChange("rte")}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 ${activeMainCat === "rte"
                  ? "bg-[#FFD700] text-black shadow-md shadow-yellow-500/20 scale-105"
                  : "text-gray-700 hover:text-black hover:bg-gray-100"
                }`}
            >
              <ShoppingBag size={15} className={activeMainCat === "rte" ? "text-black" : "text-[#1a5c30]"} />
              Ready-To-Eat Food
            </button>
          </div>

          {/* ── Custom React Lucide Category Dropdown Menu ── */}
          <div className="relative w-full md:w-auto min-w-[280px] sm:min-w-[340px] max-w-md">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between gap-3 bg-white border border-gray-200/90 rounded-2xl px-4 py-2.5 shadow-xl hover:border-[#1a5c30] focus:outline-none transition-all"
            >
              <div className="flex items-center gap-2.5 overflow-hidden">
                <div className={`p-1.5 rounded-xl ${activeCategoryObj.iconBg || 'bg-emerald-100 text-emerald-700'} flex-shrink-0`}>
                  {(() => {
                    const ActiveIcon = activeCategoryObj.Icon || Filter;
                    return <ActiveIcon size={16} />;
                  })()}
                </div>
                <div className="flex flex-col text-left truncate">
                  <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-wider leading-none">
                    Category Filter
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#0f2d1a] truncate leading-tight mt-0.5">
                    {activeCategoryObj.title}
                  </span>
                </div>
              </div>
              <ChevronDown
                size={16}
                className={`text-[#1a5c30] flex-shrink-0 transition-transform duration-250 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu Popup with Lucide Icons */}
            <AnimatePresence>
              {isDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-30"
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-40 max-h-80 overflow-y-auto"
                  >
                    {CATEGORIES.map((cat) => {
                      const IconComp = cat.Icon;
                      const isSelected = activeSubCat === cat.id;
                      return (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleSelectCategory(cat.id)}
                          className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                            isSelected
                              ? "bg-[#1a5c30] text-white shadow-md font-bold"
                              : "hover:bg-stone-50 text-gray-800 font-semibold"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg ${isSelected ? "bg-white/20 text-white" : cat.iconBg} flex-shrink-0`}>
                              <IconComp size={16} />
                            </div>
                            <span className="text-xs sm:text-sm font-bold truncate">
                              {cat.title}
                            </span>
                          </div>
                          {isSelected && (
                            <Sparkles size={14} className="text-[#FFD700] flex-shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Active Filter Pill & SKU Count */}

      </div>

      {/* ── Marquee Strip ───────────────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          overflowX: "hidden",
          overflowY: "visible",
          paddingTop: "15px",
          paddingBottom: "8px",
          zIndex: 2,
        }}
      >
        <div className="ps-track-wrap">
          {filteredProducts.length > 0 ? (
            <div className="ps-track" style={{ animationDuration: `${duration}s` }}>
              {track.map((product, i) => (
                <div
                  key={`${product.id}-${i}`}
                  onClick={() => setSelectedProduct(product)}
                  draggable="false"
                  className="ps-item group cursor-pointer"
                >
                  {/* Product packet image */}
                  <OptimizedImage
                    src={product.image}
                    alt={product.title}
                    draggable="false"
                    loading="eager"
                    priority={true}
                    decoding="async"
                    wrapperClassName="ps-img block overflow-visible"
                    imgClassName="w-full h-full object-contain pointer-events-none"
                  />

                  {/* Product Name Badge */}
                  <div className=" text-center">
                    <span className="inline-block bg-white border border-gray-200/90 text-[#0f2d1a] text-xs sm:text-sm font-extrabold px-4 py-1.5 rounded-full shadow-md shadow-black/10 transition-all duration-300 group-hover:bg-[#FFD700] group-hover:text-black group-hover:border-[#FFD700] group-hover:scale-105 whitespace-nowrap">
                      {product.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-white/50 text-sm">
              No products found in this sub-category.
            </div>
          )}
        </div>
      </div>

      {/* ── Product Detail Modal ── */}
      <AnimatePresence>
        {selectedProduct && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProduct(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999]"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            >
              <div
                className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[85vh] overflow-y-auto flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-white border border-stone-200 rounded-full shadow-md hover:bg-stone-50 transition-all cursor-pointer"
                >
                  <X size={16} className="text-stone-500" />
                </button>

                {/* Left image area */}
                {(() => {
                  const isRte = selectedProduct.mainCat === "rte";
                  return (
                    <div
                      className="md:w-[48%] flex-shrink-0 relative bg-cover bg-center flex items-center justify-center p-4 sm:p-6 min-h-[340px] sm:min-h-[400px] md:min-h-[500px] overflow-hidden"
                      style={{ backgroundImage: `url(${isRte ? redBg : cardBg})` }}
                    >
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                      <motion.div
                        className="relative z-10 w-full h-full flex items-center justify-center min-h-[300px] sm:min-h-[360px] md:min-h-[450px]"
                        whileHover={{ scale: 1.03 }}
                      >
                        <OptimizedImage
                          src={selectedProduct.image}
                          alt={selectedProduct.title}
                          wrapperClassName="w-full h-full max-h-[360px] sm:max-h-[420px] md:max-h-[480px]"
                          imgClassName="w-full h-full object-contain max-h-[360px] sm:max-h-[420px] md:max-h-[480px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                          loading="lazy"
                        />
                      </motion.div>
                      <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-center gap-1.5">
                        <span className="bg-[#0f2d1a] text-white text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
                          {selectedProduct.packSize}
                        </span>
                        <span className="bg-white text-[#1a5c30] text-[8px] sm:text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-md">
                          {selectedProduct.processType}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                {/* Right content area */}
                <div className="flex-1 flex flex-col p-4 sm:p-7 justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh] md:overflow-visible">
                  <div className="space-y-4">
                    <div>
                      <span className="inline-block text-[9px] font-extrabold uppercase tracking-widest text-[#1a5c30] bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">
                        {selectedProduct.badgeTag}
                      </span>
                      <h2 className="text-lg sm:text-2xl font-black text-[#0f2d1a] mt-1.5 leading-tight">
                        {selectedProduct.title}
                      </h2>
                      <p className="text-stone-400 text-[11px] sm:text-xs font-semibold mt-0.5">
                        {selectedProduct.tagline}
                      </p>
                      <div className="flex items-center gap-1 mt-1.5">
                        {[...Array(5)].map((_, idx) => (
                          <Star key={idx} size={11} fill="#F59E0B" stroke="none" />
                        ))}
                        <span className="text-[9px] font-bold text-stone-400 ml-1">5.0 · Export Quality</span>
                      </div>
                    </div>

                    {/* Spec badges */}
                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                      {[
                        { label: "Pack Size", value: selectedProduct.packSize, icon: <Package size={12} className="text-[#1a5c30]" /> },
                        { label: "Process", value: selectedProduct.processType, icon: <Award size={12} className="text-[#1a5c30]" /> },
                        { label: "Origin", value: selectedProduct.origin, icon: <Globe size={12} className="text-[#1a5c30]" /> }
                      ].map((s, idx) => (
                        <div key={idx} className="bg-stone-50 border border-stone-100 rounded-xl p-2 text-center">
                          <div className="flex justify-center mb-0.5">{s.icon}</div>
                          <p className="text-[7.5px] sm:text-[8px] uppercase font-bold text-stone-400 mb-0.5">{s.label}</p>
                          <p className="text-[9.5px] sm:text-[10px] font-extrabold text-[#0f2d1a] leading-tight truncate">{s.value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-0.5">About Product</h4>
                      <p className="text-stone-600 text-xs leading-relaxed">{selectedProduct.desc}</p>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-[8.5px] sm:text-[9px] font-bold uppercase tracking-widest text-stone-400 mb-1">Highlights</h4>
                      <div className="grid grid-cols-2 gap-1">
                        {selectedProduct.items.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 bg-emerald-50/50 border border-emerald-100/60 px-2 py-1 rounded-lg">
                            <div className="w-1 h-1 rounded-full bg-[#1a5c30] shrink-0" />
                            <span className="text-[9.5px] sm:text-[10px] font-bold text-[#1a5c30] truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 pt-4 border-t border-stone-100 flex gap-2.5 sm:gap-3">
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="flex-1 bg-stone-100 hover:bg-stone-200 text-stone-600 font-bold py-2 sm:py-2.5 rounded-xl text-xs transition-all cursor-pointer"
                    >
                      Close
                    </button>
                    <button
                      onClick={() => {
                        setSelectedProduct(null);
                        navigate(selectedProduct.path);
                      }}
                      className="flex-1 flex items-center justify-center gap-1 bg-[#1a5c30] hover:bg-[#12311E] text-white font-extrabold py-2 sm:py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer"
                    >
                      <span>Go to Product</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        /* ── Track GPU Acceleration ─────────────────── */
        .ps-track-wrap {
          width: 100%;
          overflow: hidden;
          will-change: transform;
          -webkit-overflow-scrolling: touch;
          transform: translate3d(0, 0, 0);
        }
        .ps-track {
          display: flex;
          align-items: flex-start;
          width: max-content;
          animation: ps-scroll linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          perspective: 1000px;
        }
        /* Pause on hover */
        .ps-track-wrap:hover .ps-track,
        div:has(> .ps-track-wrap):hover .ps-track {
          animation-play-state: paused;
        }

        /* ── Item ───────────────────────────────────── */
        .ps-item {
          flex-shrink: 0;
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          margin: 0 20px;
          cursor: pointer;
          text-decoration: none;
          transform: translateZ(0);
          will-change: transform;
        }
        @media (max-width: 880px) { .ps-item { margin: 0 14px; } }

        /* ── Image Optimization ────────────────────── */
        .ps-img {
          display: block;
          height: 220px;
          width: auto;
          object-fit: contain;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), filter 0.3s ease;
          filter: drop-shadow(0 6px 14px rgba(0,0,0,0.22));
          will-change: transform;
          transform: translateZ(0);
        }
        @media (min-width: 480px)  { .ps-img { height: 235px; } }
        @media (min-width: 768px)  { .ps-img { height: 255px; } }
        @media (min-width: 1024px) { .ps-img { height: 275px; } }

        .ps-item:hover .ps-img {
          transform: scale(1.04) translateZ(0);
          filter: drop-shadow(0 10px 22px rgba(0,0,0,0.38));
        }

        /* ── GPU Keyframe ───────────────────────────── */
        @keyframes ps-scroll {
          0%   { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </section>
  );
}
