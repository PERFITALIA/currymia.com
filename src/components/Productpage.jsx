import { motion, useScroll, useSpring } from "framer-motion";
import { Snowflake, Package, Flame, Leaf, ShoppingBag, Utensils, ChevronRight, Star } from "lucide-react";
import ProductSlider from "../common/slider";
import ProductCard from "../common/ProductCard";
import useSEO from "../hooks/useSEO";

const productCategories = [
  {
    icon: <Snowflake size={32} className="text-[#0f2d1a]" />,
    title: "Frozen Vegetables",
    tagline: "IQF Processed · Farm Fresh",
    desc: "Premium individually quick-frozen vegetables retaining full nutrition and crunch. Sourced from certified farms across Maharashtra.",
    items: ["Green Peas", "Sweet Corn", "Mixed Vegetables", "Spinach", "Broccoli", "Baby Carrots"],
    ribbonText: "IQF FROZEN",
    ribbonColor: "bg-[#FF6B5B]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "100% FARM FRESH",
  },
  {
    icon: <Package size={32} className="text-[#0f2d1a]" />,
    title: "Frozen Snacks",
    tagline: "Crispy · Ready in Minutes",
    desc: "Restaurant-quality frozen snacks ready in minutes. Made with authentic Indian recipes and high-grade ingredients.",
    items: ["Spring Rolls", "Veg Cutlets", "Corn Tikki", "Potato Wedges", "Samosas", "Croquettes"],
    ribbonText: "HOT SNACKS",
    ribbonColor: "bg-[#36B3B9]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "AUTHENTIC RECIPE",
  },
  {
    icon: <Flame size={32} className="text-[#0f2d1a]" />,
    title: "Parathas & Naan",
    tagline: "Authentic Indian Breads",
    desc: "Soft, flaky, and full of flavour — our frozen Indian breads bring traditional tandoor taste to every table worldwide.",
    items: ["Aloo Paratha", "Paneer Paratha", "Plain Naan", "Garlic Naan", "Laccha Paratha", "Methi Paratha"],
    ribbonText: "HANDMADE",
    ribbonColor: "bg-[#D4A84F]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "SOFT & FLAKY",
  },
  {
    icon: <Utensils size={32} className="text-[#0f2d1a]" />,
    title: "Frozen Momos",
    tagline: "Steamed · Pan-Fried · Authentic",
    desc: "Handcrafted-style momos with juicy fillings and authentic seasoning. A global street-food favourite frozen to perfection.",
    items: ["Veg Momos", "Paneer Momos", "Corn & Cheese Momos", "Fried Momos", "Soup Momos", "Spicy Momos"],
    ribbonText: "STREET STYLE",
    ribbonColor: "bg-[#8A4FFF]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "JUICY FILLING",
  },
  {
    icon: <ShoppingBag size={32} className="text-[#0f2d1a]" />,
    title: "Ready-to-Eat Meals",
    tagline: "RETORT Processed · Shelf Stable",
    desc: "RETORT-processed, shelf-stable ready meals capturing authentic Indian flavours. No refrigeration or preservatives needed.",
    items: ["Chole Masala", "Dal Tadka", "Paneer Butter Masala", "Mixed Veg Curry", "Rajma Masala", "Palak Paneer"],
    ribbonText: "RETORT RTE",
    ribbonColor: "bg-[#2E8B57]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "ZERO PRESERVATIVES",
  },
  {
    icon: <Leaf size={32} className="text-[#0f2d1a]" />,
    title: "Fruit Pulp & Purees",
    tagline: "Natural · Pure · Export Grade",
    desc: "Premium Alphonso and Kesar mango pulp, guava, and tropical fruit purees processed under strict HACCP standards for global export.",
    items: ["Alphonso Mango Pulp", "Kesar Mango Pulp", "Guava Pulp", "Papaya Puree", "Mixed Fruit Pulp", "Strawberry Puree"],
    ribbonText: "100% NATURAL",
    ribbonColor: "bg-[#E67E22]",
    buttonColor: "bg-[#0f2d1a]",
    badgeTag: "EXPORT GRADE",
  },
];

const stats = [
  { value: "6+",   label: "Product Categories" },
  { value: "80+",  label: "SKUs Available" },
  { value: "30+",  label: "Export Destinations" },
  { value: "100%", label: "Quality Certified" },
];

export default function ProductsPage() {
  useSEO({
    title: "Product Range | Currymia Foods Limited – Frozen & Ready-To-Eat",
    description: "Explore Currymia's full range of IQF frozen vegetables, crispy snacks, parathas, authentic momos, shelf-stable RTE meals, and fruit pulps.",
    canonical: "/products",
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FFD700]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-4 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-[#FFD700] text-xs font-bold tracking-[4px] sm:tracking-[5px] uppercase mb-4 sm:mb-6 border border-[#FFD700]/30 px-3 sm:px-4 py-1.5 rounded-full"
          >
            Our Product Range
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            World-Class <span className="text-[#FFD700]">Frozen Foods</span>
            <br />Made in India
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7 sm:leading-8"
          >
            From farm-fresh IQF vegetables to authentic Indian snacks and ready-to-eat meals — Currymia Foods delivers premium quality to retail shelves and food service kitchens worldwide.
          </motion.p>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-xl sm:rounded-2xl py-4 sm:py-5 px-3 sm:px-4">
              <div className="text-2xl sm:text-3xl font-black text-[#FFD700]">{s.value}</div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── 100+ Product Gallery Showcase Section ── */}
      <section id="gallery" className="py-12 sm:py-16 bg-white border-t border-b border-gray-100">
        <ProductSlider />
      </section>

      {/* ── Products Grid ── */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* 1 col mobile → 2 col sm → 3 col lg, design preserved */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {productCategories.map((cat, i) => (
            <ProductCard
              key={cat.title}
              index={i}
              title={cat.title}
              tagline={cat.tagline}
              desc={cat.desc}
              icon={cat.icon}
              items={cat.items}
              ribbonText={cat.ribbonText}
              ribbonColor={cat.ribbonColor}
              buttonColor={cat.buttonColor}
              badgeTag={cat.badgeTag}
              buttonText="INQUIRE FOR SAMPLE →"
            />
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-[#0f2d1a] py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Star className="text-[#FFD700] mx-auto mb-3 sm:mb-4" size={28} />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            Need Custom or Private Label Products?
          </h2>
          <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            We develop custom formulations and private-label solutions for global retailers and distributors.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-500/30 text-sm sm:text-base"
          >
            Get in Touch <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
