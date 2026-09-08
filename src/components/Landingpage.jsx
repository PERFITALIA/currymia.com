import { useState, useEffect, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Rocket, Eye, Compass, ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";
import currymiaImg from "../assets/currymia.png";
import Frozen from "../assets/Frozen.png"
import mapimg from "../assets/map.png"
import chef from "../assets/chef.png"
import home1 from "../assets/banner/home1.png"
import home2 from "../assets/banner/home2.png"
import home3 from "../assets/banner/home3.png"
import home4 from "../assets/banner/home4.png"
import home5 from "../assets/banner/home5.png"
import home6 from "../assets/banner/home6.png"
import home7 from "../assets/banner/home7.png"
import mh1 from "../assets/mobile-banner/mh1.png"
import mh2 from "../assets/mobile-banner/mh2.png"
import mh3 from "../assets/mobile-banner/mh3.png"
import mh4 from "../assets/mobile-banner/mh4.png"
import mh5 from "../assets/mobile-banner/mh5.png"
import mh6 from "../assets/mobile-banner/mh6.png"
import mh7 from "../assets/mobile-banner/mh7.png"
import machine1 from "../assets/machine1.png"
import machine2 from "../assets/machine2.png"
import cert1 from "../assets/certificates/cert1.png";
import cert2 from "../assets/certificates/cert2.png";
import cert3 from "../assets/certificates/cert3.png";
import cert4 from "../assets/certificates/cert4.png";
import cert5 from "../assets/certificates/cert5.png";
import cert6 from "../assets/certificates/cert6.png";
import technologyVideo from "../assets/technology.mp4";

import ProductSlider from "../common/slider";
import OptimizedImage from "../common/OptimizedImage";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  BadgeCheck,
  Snowflake,
  ShieldCheck,
  Globe,
  PackageCheck,
  Award,
  Globe2,
  ClipboardCheck,
  Leaf,
  Ship,
  Boxes,
  Truck,
  Sparkles,
  Factory,
  PackageOpen,
  Lightbulb,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
const MAP_PINS = [
  { name: "India (HQ)", label: "India (HQ)", flag: "https://flagcdn.com/w80/in.png", top: "52%", left: "68%", isHq: true },
  { name: "United States", label: "USA", flag: "https://flagcdn.com/w80/us.png", top: "36%", left: "18%" },
  { name: "United Kingdom", label: "UK", flag: "https://flagcdn.com/w80/gb.png", top: "20%", left: "41%" },
  { name: "Germany", label: "Germany", flag: "https://flagcdn.com/w80/de.png", top: "29%", left: "51%" },
  { name: "KSA / Saudi Arabia", label: "KSA", flag: "https://flagcdn.com/w80/sa.png", top: "47%", left: "49%" },
  { name: "UAE / GCC", label: "UAE / GCC", flag: "https://flagcdn.com/w80/ae.png", top: "38%", left: "61%" },
  { name: "Singapore", label: "Singapore", flag: "https://flagcdn.com/w80/sg.png", top: "65%", left: "76%" },
  { name: "Japan", label: "Japan", flag: "https://flagcdn.com/w80/jp.png", top: "32%", left: "85%" },
  { name: "Australia", label: "Australia", flag: "https://flagcdn.com/w80/au.png", top: "78%", left: "83%" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};
// Integrated Direct SectionTag Component
const SectionTag = ({ children }) => (
  <span className="inline-block bg-[#FFD700]/10 border border-[#FFD700]/30 text-[#FFD700] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
    {children}
  </span>
);

const exportRegions = [
  { flag: "https://flagcdn.com/w80/in.png", region: "India (Global HQ)", markets: "Processing & Export Hub" },
  { flag: "https://flagcdn.com/w80/gb.png", region: "United Kingdom", markets: "Retail & Food Service" },
  { flag: "https://flagcdn.com/w80/us.png", region: "United States", markets: "Distributors & Retail" },
  { flag: "https://flagcdn.com/w80/ae.png", region: "UAE, GCC & KSA", markets: "Hotels, HORECA & Modern Trade" },
  { flag: "https://flagcdn.com/w80/au.png", region: "Australia", markets: "Indian Diaspora Markets" },
  { flag: "https://flagcdn.com/w80/de.png", region: "Europe / Germany", markets: "Premium Organic Buyers" },
];
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -80,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
// ─── Hero Slides ─────────────────────────────────────────────────────────────
const heroSlides = [
  {
    id: 1,
    title: "Farm Fresh Picks, Frozen to Perfection",
    subtitle: "Enjoy garden-picked goodness, ready to cook anytime.",
    overlayImg: home1,
    mobileOverlayImg: mh1,
    primaryBtn: { label: "Know More", path: "/about" },
    secondaryBtn: { label: "Explore Products", hash: "#products" },
    mobileBtnTop: "72%",
  },
  {
    id: 2,
    title: "Asian Specialty Vegetables",
    subtitle: "Sourced with care, packed with goodness.",
    overlayImg: home2,
    mobileOverlayImg: mh2,
    primaryBtn: { label: "Explore Products", hash: "#products" },
    secondaryBtn: { label: "Quality Standards", path: "/quality" },
    mobileBtnTop: "80%",
  },
  {
    id: 3,
    title: "Bases & Kitchen Essentials",
    subtitle: "Essential ingredients for every kitchen, every meal.",
    overlayImg: home3,
    mobileOverlayImg: mh3,
    primaryBtn: { label: "Export Quality", path: "/export" },
    secondaryBtn: { label: "Contact Us", hash: "#contact" },
    mobileBtnTop: "72%",
  },
  {
    id: 4,
    title: "Punjabi Specialty Foods",
    subtitle: "Authentic Punjabi delicacies crafted with rich spices & premium ingredients.",
    overlayImg: home4,
    mobileOverlayImg: mh4,
    primaryBtn: { label: "Explore Products", hash: "#products" },
    secondaryBtn: { label: "Quality Assurance", path: "/quality" },
    mobileBtnTop: "72%",
  },
  {
    id: 5,
    title: "Ready to Eat",
    subtitle: "Pure ingredients. Perfect taste.",
    overlayImg: home5,
    mobileOverlayImg: mh5,
    primaryBtn: { label: "Export Global", path: "/export" },
    secondaryBtn: { label: "About Us", path: "/about" },
    mobileBtnTop: "72%",
  },
  {
    id: 6,
    title: "RTE Food — Ready to Eat!",
    subtitle: "Authentic Indian recipes ready in minutes.",
    overlayImg: home6,
    mobileOverlayImg: mh6,
    primaryBtn: { label: "Quality & Safety", path: "/quality" },
    secondaryBtn: { label: "Explore Products", hash: "#products" },
    mobileBtnTop: "72%",
  },
  {
    id: 7,
    title: "Parathas World",
    subtitle: "Authentic Indian flatbreads — no preservatives, made with finest ingredients.",
    overlayImg: home7,
    mobileOverlayImg: mh7,
    primaryBtn: { label: "Explore Products", hash: "#products" },
    secondaryBtn: { label: "Request Quote", hash: "#contact" },
    mobileBtnTop: "72%",
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: "100+", label: "Products" },
  { value: "30+", label: "Export Markets" },
  { value: "5000 MT", label: "Annual Processing Capacity" },
  { value: "8+", label: "Product Categories" },
];

// ─── Products ─────────────────────────────────────────────────────────────────
const products = [
  {
    icon: "🥦",
    title: "Frozen Vegetables",
    desc: "Freshly harvested and IQF processed to preserve natural taste, colour, and texture.",
    tag: "IQF Processed",
  },
  {
    icon: "🥟",
    title: "Frozen Snacks",
    desc: "Classic Indian snacks prepared for convenience without compromising authenticity.",
    tag: "Ready to Fry",
  },
  {
    icon: "🫓",
    title: "Frozen Parathas & Naan",
    desc: "Traditional flatbreads ready to heat and serve.",
    tag: "Heat & Serve",
  },
  {
    icon: "🥮",
    title: "Frozen Momos",
    desc: "A delicious range of steamed and frozen momos for retail and food service.",
    tag: "Retail & Foodservice",
  },
  {
    icon: "🍱",
    title: "Ready-to-Eat Meals",
    desc: "Authentic Indian recipes that are ready in minutes.",
    tag: "Ready in Minutes",
  },
  {
    icon: "🍹",
    title: "Fruit Pulp",
    desc: "Premium fruit pulp processed for beverages, desserts, and food manufacturing.",
    tag: "Premium Grade",
  },
  {
    icon: "🌯",
    title: "Frozen Wraps",
    desc: "Quick and convenient meal solutions with authentic Indian flavours.",
    tag: "Convenient",
  },
  {
    icon: "🍛",
    title: "Pastes & Base Gravies",
    desc: "Ready-to-use cooking bases developed for commercial kitchens and restaurants.",
    tag: "Commercial Kitchen",
  },
];

// ─── Why Choose Us ────────────────────────────────────────────────────────────
const features = [
  {
    icon: "⚙️",
    title: "Advanced Processing",
    desc: "Modern IQF and food processing technology that locks in freshness from the very beginning.",
  },
  {
    icon: "🏭",
    title: "Reliable Manufacturing",
    desc: "Integrated production and quality systems ensure consistency across every batch.",
  },
  {
    icon: "🌍",
    title: "Export Expertise",
    desc: "Serving international buyers with efficient logistics and complete export support.",
  },
  {
    icon: "🏷️",
    title: "Private Label",
    desc: "Flexible packaging and branding solutions tailored to your business.",
  },
  {
    icon: "✅",
    title: "Food Safety",
    desc: "Manufactured under strict quality and hygiene standards.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnerships",
    desc: "Focused on reliability, transparency, and lasting customer relationships.",
  },
];

// ─── Certifications ───────────────────────────────────────────────────────────
const certs = [
  { name: "FSSAI", desc: "Food Safety & Standards Authority of India" },
  { name: "ISO 22000", desc: "Food Safety Management System" },
  { name: "HACCP", desc: "Hazard Analysis Critical Control Points" },
  { name: "APEDA", desc: "Agricultural & Processed Food Export" },
  { name: "USFDA", desc: "US Food & Drug Administration Compliant" },
  { name: "Halal", desc: "Certified Halal for Global Markets" },
];

// ─── Gallery Images ───────────────────────────────────────────────────────────
const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1604719312566-8912e9c8a213?w=600&q=80",
    caption: "IQF Processing Line",
  },
  {
    url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80",
    caption: "Fresh Vegetable Sourcing",
  },
  {
    url: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80",
    caption: "Quality Control Lab",
  },
  {
    url: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
    caption: "Cold Chain Storage",
  },
  {
    url: "https://images.unsplash.com/photo-1543353071-873f17a7a088?w=600&q=80",
    caption: "Export Packaging",
  },
  {
    url: "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?w=600&q=80",
    caption: "Ready-to-Eat Range",
  },
];

// ─── Animated Counter ─────────────────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const observed = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const num = parseInt(target.replace(/\D/g, ""), 10) || 0;
          const duration = 1800;
          const steps = 60;
          const increment = num / steps;
          let count = 0;
          const timer = setInterval(() => {
            count += increment;
            if (count >= num) {
              setCurrent(num);
              clearInterval(timer);
            } else {
              setCurrent(Math.floor(count));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  const displaySuffix = target.replace(/\d/g, "").trim() || suffix;

  return (
    <span ref={ref} className="tabular-nums">
      {current}
      {displaySuffix}
    </span>
  );
}

// ─── Section Wrapper ──────────────────────────────────────────────────────────
function Section({ id, children, className = "" }) {
  const hasPadding = /\bpy-|\bpt-|\bpb-/.test(className);
  return (
    <section id={id} className={`${hasPadding ? "" : "py-12 sm:py-16 lg:py-20"} ${className}`}>
      {children}
    </section>
  );
}



// ─── Manufacturing Video Card Component ───────────────────────────────────────
function ManufacturingVideoPlayer({ videoSrc }) {
  return (
    <div className="relative col-span-2 rounded-3xl overflow-hidden shadow-2xl border border-white/10 group bg-black">
      {/* Video Element */}
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="h-[380px] sm:h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Dark Vignette Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/20 pointer-events-none" />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
        {/* Top Header */}
        <div>
          <span className="inline-block bg-[#FFD700] text-black text-xs font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
            Advanced Manufacturing
          </span>

          <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-white max-w-md">
            Save Your Time <br />
            <span className="text-[#FFD700]">& Reduce Your Cost</span>
          </h3>

          <p className="mt-3 text-white/80 text-xs sm:text-sm max-w-lg leading-relaxed font-light hidden sm:block">
            High-speed automated packaging solutions designed to improve
            productivity, reduce operational costs, and deliver consistent
            export-quality food products.
          </p>
        </div>

        {/* Bottom Tagline */}
        <div className="flex items-center gap-3 pt-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD700]"></span>
          </span>
          <span className="text-[#FFD700] font-extrabold text-xs sm:text-sm uppercase tracking-wider">
            Fast • Hygienic • Export Ready
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function LandingPage() {
  useSEO({
    title: "Currymia Foods Limited – Premium Frozen Foods & Global Export Partner",
    description: "India's premier frozen food manufacturer & exporter. Farm-fresh IQF vegetables, authentic snacks, ready-to-eat meals, and private label solutions.",
    canonical: "/",
  });

  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleBannerBtnClick = (btn) => {
    if (!btn) return;
    if (btn.hash) {
      const el = document.querySelector(btn.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else if (btn.path) {
      navigate(btn.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Preload all hero banner images immediately on mount to prevent any blank panels
  useEffect(() => {
    heroSlides.forEach((slide) => {
      if (slide.overlayImg) {
        const img = new Image();
        img.src = slide.overlayImg;
      }
      if (slide.mobileOverlayImg) {
        const mImg = new Image();
        mImg.src = slide.mobileOverlayImg;
      }
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ──── HERO SECTION (Mobile Responsive) ────────────────────── */}
      <section
        id="hero"
        className="relative flex flex-col pt-16 sm:pt-24 lg:pt-10 pb-0 sm:pb-20 lg:pb-18 overflow-hidden"
      >
        {/* Custom Swiper pagination styling - visible & tap-friendly on mobile */}
        <style>{`
          .hero-swiper .swiper-pagination {
            bottom: 8px !important;
            left: 50% !important;
            transform: translateX(-50%);
            width: auto !important;
            background: rgba(0, 0, 0, 0.35);
            backdrop-filter: blur(4px);
            padding: 5px 12px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .hero-swiper .swiper-pagination-bullet {
            width: 8px;
            height: 8px;
            background: #ffffff;
            opacity: 0.6;
            margin: 0 !important;
            transition: all 0.3s ease;
          }
          .hero-swiper .swiper-pagination-bullet-active {
            opacity: 1;
            background: #FFD700;
            width: 22px;
            border-radius: 4px;
          }
          .hero-swiper .swiper-wrapper {
            transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1) !important;
          }
          @media (min-width: 640px) {
            .hero-swiper .swiper-pagination {
              bottom: 20px !important;
              background: transparent;
              backdrop-filter: none;
              padding: 0;
              border-radius: 0;
            }
            .hero-swiper .swiper-pagination-bullet {
              width: 10px;
              height: 10px;
              margin: 0 4px !important;
            }
          }
        `}</style>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".hero-prev-btn",
            nextEl: ".hero-next-btn",
          }}
          speed={850}
          grabCursor={true}
          resistanceRatio={0.65}
          touchRatio={1.2}
          loop={true}
          loopAdditionalSlides={2}
          observer={true}
          observeParents={true}
          watchSlidesProgress={true}
          onSlideChange={(s) => setActiveSlide(s.realIndex)}
          className="w-full flex-1 h-full hero-swiper relative"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id}>

              {/* ─── MOBILE BANNER ─────────────────────────────────── */}
              <div
                onClick={() => handleBannerBtnClick(slide.primaryBtn)}
                className="block sm:hidden relative w-full overflow-hidden cursor-pointer active:opacity-95 transition-opacity"
                title={`Tap to explore ${slide.title || 'Currymia'}`}
              >
                <OptimizedImage
                  src={slide.mobileOverlayImg}
                  alt={slide.title || "Currymia mobile banner"}
                  wrapperClassName="w-full h-auto block"
                  imgClassName="w-full h-auto block select-none pointer-events-none"
                  priority={true}
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* ─── DESKTOP BANNER ────────────────────────────────── */}
              <div className="hidden sm:block relative w-full overflow-hidden">
                <OptimizedImage
                  src={slide.overlayImg}
                  alt={slide.title || "Currymia banner"}
                  className="w-full h-auto block select-none"
                  priority={true}
                  loading="eager"
                  decoding="async"
                />

                {/* Desktop Buttons */}
                <div
                  className="absolute z-20 flex items-center gap-4"
                  style={{ right: "8.5%", bottom: "12%" }}
                >
                  {/* Primary */}
                  <button
                    onClick={() => handleBannerBtnClick(slide.primaryBtn)}
                    className="group flex items-center gap-2.5 bg-[#FFD700] hover:bg-[#FFE040] active:scale-95 text-[#0c2210] font-black text-sm md:text-base px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.4)] border border-yellow-300/40 hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                  >
                    <span>{slide.primaryBtn.label}</span>
                    <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                  {/* Secondary */}
                  {slide.secondaryBtn && (
                    <button
                      onClick={() => handleBannerBtnClick(slide.secondaryBtn)}
                      className="group flex items-center gap-2 bg-white/10 hover:bg-white/25 active:scale-95 text-white font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.3)] border border-white/20 backdrop-blur-md hover:scale-105 transition-all duration-300 cursor-pointer whitespace-nowrap"
                    >
                      <span>{slide.secondaryBtn.label}</span>
                    </button>
                  )}
                </div>
              </div>

            </SwiperSlide>
          ))}

          {/* Previous Slide Arrow Button */}
          <button
            type="button"
            aria-label="Previous Slide"
            className="hero-prev-btn hidden sm:flex absolute left-4 lg:left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-black/45 hover:bg-[#FFD700] text-white hover:text-[#0f2d1a] border border-white/25 hover:border-[#FFD700] backdrop-blur-md items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next Slide Arrow Button */}
          <button
            type="button"
            aria-label="Next Slide"
            className="hero-next-btn hidden sm:flex absolute right-4 lg:right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 lg:w-13 lg:h-13 rounded-full bg-black/45 hover:bg-[#FFD700] text-white hover:text-[#0f2d1a] border border-white/25 hover:border-[#FFD700] backdrop-blur-md items-center justify-center transition-all duration-300 shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronRight size={22} />
          </button>
        </Swiper>

        {/* Floating Scroll Indicator to next section */}
        <div className="absolute bottom-2.5 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-auto">
          <button
            onClick={() => {
              const el = document.querySelector("#products");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-1 text-white/90 hover:text-[#FFD700] transition-colors cursor-pointer group"
            title="Scroll down to explore products"
          >
            <span className="text-[9.5px] sm:text-[11px] font-black uppercase tracking-[2px] opacity-80 group-hover:opacity-100 drop-shadow-md">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 flex items-center justify-center text-[#FFD700] shadow-md group-hover:border-[#FFD700]"
            >
              <ChevronDown size={13} />
            </motion.div>
          </button>
        </div>
      </section>



      {/* ──── STATS BAR ──────────────────────────────────────────────── */}
      <div className="bg-white border-y border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label} className="group p-2">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a5c30] mb-1 leading-none">
                <AnimatedNumber target={s.value} />
              </div>
              <div className="text-[10px] sm:text-xs font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-gray-400 group-hover:text-[#1a5c30] transition-colors">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>



      {/* ──── ABOUT SECTION ──────────────────────────────────────────── */}
      <Section id="about" className="bg-[#fcfbf9] pt-6 sm:pt-8 lg:pt-10 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">

            {/* 1. Top Left - Journey Card */}
            <div
              onClick={() => navigate("/about")}
              className="group relative lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:border-[#1a5c30]/30 min-h-[340px]"
            >
              <div>
                <div className="flex items-center gap-3 text-[#1a5c30] font-bold text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-9">
                  <div className="p-2.5 sm:p-3 bg-[#1a5c30]/10 rounded-2xl text-[#1a5c30] flex items-center justify-center">
                    <Compass className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  Our Journey
                </div>
                <p className="text-gray-600 leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base">
                  Currymia Foods Limited (CFL) is a leading Indian food processing company specializing in Frozen Foods and Ready-to-Eat (RTE) Food Solutions for domestic and international markets. Our state-of-the-art manufacturing facility is located at Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-6 border-t border-gray-100 pt-6 sm:pt-8 text-center sm:text-left">
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a5c30] mb-1">25+</div>
                  <div className="text-[9px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a5c30] mb-1">30+</div>
                  <div className="text-[9px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Export Destinations</div>
                </div>
                <div>
                  <div className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#1a5c30] mb-1">100+</div>
                  <div className="text-[9px] sm:text-xs text-gray-500 font-bold uppercase tracking-wider">Product Range</div>
                </div>
              </div>

              {/* Light Centered Hover Overlay Button */}
              <div className="absolute inset-0 bg-black/25 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-6 text-center z-20">
                <button className="bg-[#FFD700] hover:bg-[#FFC200] text-black font-extrabold px-8 py-3.5 rounded-full shadow-2xl flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:scale-105 text-sm md:text-base">
                  <span>More About Us</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* 2. Top Right - Quality Control Image Card */}
            <div className="group relative lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-sm min-h-[340px]">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&q=80"
                alt="Quality Control"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

              {/* Center Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFD700] mb-3">
                  QUALITY CONTROL
                </span>

                <h3 className="text-3xl lg:text-5xl font-black leading-none tracking-tight bg-gradient-to-r from-[#FF512F] via-[#F09819] to-[#FFE259] bg-clip-text text-transparent">
                  Purity <br />
                  Guaranteed
                </h3>
                <p className="mt-3 max-w-md text-white/90 text-sm lg:text-base">
                  From India's Heart to Global Tables
                </p>
              </div>
            </div>

            {/* 3. Bottom Left - Mission Card */}
            <div className="lg:col-span-3 bg-[#1a5c30] rounded-3xl p-8 lg:p-10 shadow-sm text-white flex flex-col justify-center min-h-[220px]">
              <div className="flex items-center gap-3 font-bold text-xl mb-4">
                <div className="bg-white/10 p-2.5 rounded-2xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-[#FFD700]" />
                </div>
                <span>Our Mission</span>
              </div>
              <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                Deliver premium-quality food products that meet international standards. Maintain the highest levels of food safety, hygiene, and quality assurance. Build long-term partnerships with customers through reliability, innovation, and exceptional service.
              </p>
            </div>

            {/* 4. Bottom Right - Vision Card */}
            <div className="lg:col-span-3 bg-[#8b6508] rounded-3xl p-8 lg:p-10 shadow-sm text-white flex flex-col justify-center min-h-[220px]">
              <div className="flex items-center gap-3 font-bold text-xl mb-4">
                <div className="bg-white/10 p-2.5 rounded-2xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-[#FFD700]" />
                </div>
                <span>Our Vision</span>
              </div>
              <p className="text-white/80 leading-relaxed text-sm lg:text-base">
                To become a globally trusted food company by delivering safe, innovative, and high-quality frozen and ready-to-eat food products that delight customers worldwide.
              </p>
            </div>

          </div>
        </div>
      </Section>
      {/* ──── PRODUCT SHOWCASE SLIDER ──── */}
      <div id="products" className="scroll-mt-16" style={{ background: "#f5f5f0", paddingBottom: "56px" }}>
        <ProductSlider />
      </div>

      {/* ─── Visual divider between slider and Why Choose Us ─── */}
      <div style={{
        height: "6px",
        background: "linear-gradient(to right, #0f2d1a, #1a5c30, #FFD700, #1a5c30, #0f2d1a)",
        boxShadow: "0 2px 12px rgba(26,92,48,0.35)",
      }} />

      {/* ──── WHY CHOOSE US ──────────────────────────────────────────── */}
      <Section id="why-choose-us" className="bg-[#0f2d1a] relative overflow-hidden py-24 px-4 sm:px-6">
        {/* Background Ambient Glow Effects */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#FFD700] blur-[170px]" />
          <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#1a5c30] blur-[150px]" />
        </div>

        {/* Outer Curved Container with Border Radius & Glass Effect */}
        <div className="relative max-w-7xl mx-auto bg-white/[0.04] backdrop-blur-2xl border border-white/15 rounded-[2.5rem] p-8 lg:p-14 shadow-2xl overflow-hidden">

          {/* Subtle Corner Glow Accent */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FFD700]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">

            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight mt-3 mb-4 tracking-tight">
              Why Choose <span className="text-[#FFD700]">Us ?</span>
            </h2>
            <p className="text-white/70 text-xl font-medium">
              Built for Quality. Designed for Global Markets.
            </p>
          </div>

          {/* CIRCULAR / RADIAL FEATURE HUB LAYOUT */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-8">

            {/* Left Points (3 Points) */}
            <div className="lg:col-span-4 space-y-6 order-2 lg:order-1">
              {[
                {
                  icon: <Factory size={28} strokeWidth={2.2} />,
                  title: "Modern food processing facility",
                  desc: "State-of-the-art infrastructure built for hygiene, high-volume output, and consistency.",
                },
                {
                  icon: <Snowflake size={28} strokeWidth={2.2} />,
                  title: "Advanced IQF and Retort technology",
                  desc: "Preserving natural taste, color, and essential nutrients from farm to freezer.",
                },
                {
                  icon: <ShieldCheck size={28} strokeWidth={2.2} />,
                  title: "Strict quality control & hygiene",
                  desc: "Rigorous testing protocols adhering to FSSAI, ISO 22000, HACCP, and USFDA norms.",
                }].map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex items-start gap-4 p-5 rounded-3xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 shadow-lg hover:-translate-y-1 lg:text-right flex-row lg:flex-row-reverse"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FFD700]/15 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] font-black text-sm group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300 shadow-md">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-base lg:text-lg font-bold group-hover:text-[#FFD700] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/60 text-xs lg:text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            {/* Center Image Circular Hub */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center relative my-8 lg:my-0 order-1 lg:order-2">
              {/* Outer Decorative Orbit Rings */}
              <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-[#FFD700]/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-0 -m-4 rounded-full border border-white/15" />

              {/* Center Image Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full p-3 bg-gradient-to-tr from-[#FFD700]/40 via-[#1a5c30] to-[#0f2d1a] border-2 border-[#FFD700]/50 shadow-2xl shadow-yellow-500/20 flex items-center justify-center group">
                <div className="w-full h-full rounded-full bg-[#0f2d1a] p-4 flex items-center justify-center overflow-hidden border border-white/10 shadow-inner">
                  <span className="text-[#FFD700] text-xl text-center font-semibold leading-relaxed px-6">
                    Why Choose Currymia Foods Limited?
                  </span>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-3 bg-[#FFD700] text-black text-xs font-black px-5 py-1.5 rounded-full shadow-xl border border-white/40 tracking-wider uppercase">
                  Quality Brand
                </div>
              </div>
            </div>

            {/* Right Points (4 Points) */}
            <div className="lg:col-span-4 space-y-6 order-3">
              {[
                {
                  icon: <Globe2 size={28} strokeWidth={2.2} />,
                  title: "Reliable Export Capabilities",
                  desc: "Seamless cold-chain management and documentation serving 30+ international markets.",
                },
                {
                  icon: <PackageOpen size={28} strokeWidth={2.2} />,
                  title: "Customized Private Label & OEM",
                  desc: "End-to-end recipe formulation, custom cut sizes, and co-packing solutions.",
                },
                {
                  icon: <Truck size={28} strokeWidth={2.2} />,
                  title: "Timely Deliveries & Service",
                  desc: "Dedicated logistics support and transparent communication for every shipment.",
                },
                {
                  icon: <Lightbulb size={28} strokeWidth={2.2} />,
                  title: "Commitment to Innovation",
                  desc: "Constantly upgrading food technology and sustainable processing methods.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="group relative flex items-start gap-4 p-5 rounded-3xl bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-[#FFD700]/50 transition-all duration-300 shadow-lg hover:-translate-y-1"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#FFD700]/15 border border-[#FFD700]/40 flex items-center justify-center text-[#FFD700] font-black text-sm group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300 shadow-md">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-base lg:text-lg font-bold group-hover:text-[#FFD700] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-white/60 text-xs lg:text-sm mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Dedicated Closing Statement Highlight Box at Bottom */}
          <div className="mt-14 bg-gradient-to-r from-white/10 via-white/5 to-white/10 border border-white/20 rounded-[2rem] p-8 text-center backdrop-blur-xl relative overflow-hidden shadow-xl max-w-4xl mx-auto">
            <p className="text-white/95 text-base lg:text-lg leading-relaxed font-medium relative z-10 italic">
              At Currymia Foods Limited, we are dedicated to bringing the authentic taste of India to global markets while maintaining the highest standards of quality, freshness, and customer satisfaction.
            </p>
            <div className="mt-4 text-xs text-[#FFD700] font-bold uppercase tracking-widest">
              Currymia Foods Limited • Quality Commitment
            </div>
          </div>

        </div>
      </Section>

      {/* ──── MANUFACTURING SECTION ──────────────────────────────────── */}
      <Section
        id="manufacturing"
        className="bg-gradient-to-br from-[#f8faf7] via-white to-[#eef7f0]"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT: Video & Facility Photos */}
            <div className="space-y-5">
              {/* Clean Video Player */}
              <ManufacturingVideoPlayer videoSrc={technologyVideo} />

              {/* 2-Column Facility Photos (Super Clear & High-Res View) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Photo 1: Processing Machinery (machine2) */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 group h-[280px] sm:h-[270px] bg-[#0f2d1a]">
                  <OptimizedImage
                    src={machine2}
                    alt="Advanced Processing Machinery"
                    className="h-full w-full object-contain sm:object-cover sm:object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#12311E]/90 backdrop-blur-md text-[#FFD700] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FFD700]/30 shadow-md">
                      Automated Sealing Line
                    </span>
                  </div>
                </div>

                {/* Photo 2: Sealing Operator (machine1) */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-200/80 group h-[240px] sm:h-[270px] bg-gray-100">
                  <OptimizedImage
                    src={machine1}
                    alt="Automated Sealing Line Operator"
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                    <span className="bg-[#12311E]/90 backdrop-blur-md text-[#FFD700] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border border-[#FFD700]/30 shadow-md">
                      RETORT Technology
                    </span>
                  </div>
                </div>
              </div>

              {/* Clean ISO Certification Banner */}
              <div className="bg-white rounded-2xl shadow-md p-4 sm:p-5 border border-gray-200/80 flex items-center justify-between gap-4 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-[#1a5c30] flex items-center justify-center flex-shrink-0 shadow-md">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-gray-900 leading-tight">
                      ISO 22000 & HACCP Certified
                    </h4>
                    <p className="text-xs text-gray-500 font-medium mt-0.5">
                      International Food Safety & Quality Management
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-200 flex-shrink-0">
                  ✓ Verified Quality
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div>

              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-6">
                Advanced Manufacturing
                <span className="text-[#1a5c30] block">
                  Built for Global Quality
                </span>
              </h2>

              <p className="text-gray-600 leading-8 mb-6">
                Every product passes through a carefully managed production process,
                combining modern technology and international
                quality standards to deliver consistent excellence.
              </p>

              <div className="space-y-2">

                {[
                  {
                    icon: <Leaf size={22} />,
                    title: "Raw Material Selection",
                    desc: "Fresh vegetables sourced directly from trusted farms.",
                  },
                  {
                    icon: <ShieldCheck size={22} />,
                    title: "Quality Inspection",
                    desc: "Multi-level quality checks following HACCP & ISO.",
                  },
                  {
                    icon: <PackageCheck size={22} />,
                    title: "Packaging",
                    desc: "Export-grade packaging with complete traceability.",
                  },
                  {
                    icon: <Ship size={22} />,
                    title: "Worldwide Export",
                    desc: "Reliable cold-chain logistics across global markets.",
                  },
                ].map((item, i) => (

                  <div
                    key={i}
                    className="group flex gap-5 bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition duration-300 border border-gray-100"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#1a5c30]/10 text-[#1a5c30] flex items-center justify-center group-hover:bg-[#1a5c30] group-hover:text-white duration-300 flex-shrink-0">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="font-bold text-lg text-gray-900">
                        {item.title}
                      </h4>

                      <p className="text-gray-500 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>
      </Section>


      {/* Premium Certification Timeline */}

      {/* ================= Premium Certification Timeline ================= */}

      <div id="certifications" className="relative mt-24 px-6 lg:px-10 scroll-mt-20">

        {/* Section Heading & Chef Banner Block */}
        <div className="max-w-6xl mx-auto relative flex flex-col md:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Left Side: Chef Artwork Image */}
          <div className="flex-shrink-0 relative group">
            <div className="absolute inset-0 bg-[#FFD700]/20 rounded-full blur-2xl group-hover:bg-[#FFD700]/35 transition-all duration-500"></div>
            <OptimizedImage
              src={chef}
              alt="Master Chef Quality Guarantee"
              className="relative w-44 sm:w-52 lg:w-64 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Floating Quality Stamp on Chef */}
            <div className="absolute -bottom-2 -right-2 bg-[#12311E] text-[#FFD700] text-[10px] font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#FFD700]/40 shadow-xl flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#FFD700]" />
              <span>Globally Approved</span>
            </div>
          </div>

          {/* Right Side: Heading & Subtitle */}
          <div className="text-center md:text-left max-w-2xl relative">
            {/* Top Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#12311E]/10 border border-[#12311E]/20 text-[#12311E] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#D4A017]" />
              <span>100% Certified Food Safety</span>
            </div>

            <h2 className="relative block text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-[#12311E]">
              Globally Trusted
              <span className="block text-[#D4A017]">
                Quality Certifications
              </span>

              {/* Upper Right Verified Tick Badge */}
              <span className="absolute -top-3 right-0 sm:right-4 hidden sm:flex items-center gap-1.5 bg-[#12311E] text-[#FFD700] text-xs font-black px-3.5 py-1.5 rounded-full shadow-xl border border-[#FFD700]/50 transform rotate-6 hover:rotate-0 transition-transform duration-300">
                <BadgeCheck className="w-4 h-4 text-[#FFD700]" />
                <span>Verified ✓</span>
              </span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
              <span className="font-semibold text-[#12311E]">
                Our products are certified
              </span>{" "}
              by internationally recognized food safety and quality organizations,
              ensuring every product meets the highest global standards for safety,
              hygiene, quality, and export compliance.
            </p>
          </div>

        </div>

        {/* Timeline Line */}
        <div className="hidden lg:block relative mt-20 mb-[-64px] max-w-7xl mx-auto">
          <div className="h-1 rounded-full bg-gradient-to-r from-[#FFD700] via-[#1a5c30] to-[#FFD700]" />
        </div>

        {/* Certifications */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-10 relative z-10"
        >
          {[
            {
              img: cert1,
              title: "FSSAI",
              sub: "Food Safety",
            },
            {
              img: cert2,
              title: "ISO 22000",
              sub: "Quality System",
            },
            {
              img: cert3,
              title: "HACCP",
              sub: "Critical Control",
            },
            {
              img: cert4,
              title: "APEDA",
              sub: "Export Authority",
            },
            {
              img: cert5,
              title: "USFDA",
              sub: "FDA Compliance",
            },
            {
              img: cert6,
              title: "HALAL",
              sub: "Certified Food",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="group flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div className="w-32 h-32 rounded-full bg-white border-2 border-[#1a5c30] shadow-xl flex items-center justify-center transition-all duration-500 group-hover:border-[#FFD700] group-hover:shadow-2xl">

                <OptimizedImage
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />

              </div>
              <h3 className="mt-6 text-xl font-bold text-[#12311E]">
                {item.title}
              </h3>

              <p className="mt-2 text-gray-500">
                {item.sub}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* ──── EXPORT SECTION ─────────────────────────────────────────── */}
      <section id="export" className="bg-[#0f2d1a] relative overflow-hidden py-24 mt-24">
        {/* Dynamic Background Glow Decorations */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full bg-[#FFD700]/20 blur-[120px] animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full bg-[#FFD700]/15 blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Information & Regions */}
            <div className="z-10">
              {SectionTag && <SectionTag>Export</SectionTag>}

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                Supplying Food Businesses{" "}
                <span className="text-[#FFD700] relative inline-block">
                  Across the Globe
                  <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FFD700]/40 rounded-full"></span>
                </span>
              </h2>

              <p className="text-white/70 leading-relaxed mb-8 text-base  sm:text-lg font-light">
                Our products are trusted by importers, distributors, retailers,
                and food service companies across multiple international markets.
                With dependable cold-chain logistics and efficient export
                operations, we deliver quality without compromise.
              </p>

              {/* Export Regions Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {exportRegions.map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-all duration-300 ${item.region.includes("India")
                        ? "bg-[#FFD700]/15 border-[#FFD700]/50 hover:bg-[#FFD700]/25 shadow-md"
                        : "bg-white/5 border-white/10 hover:border-[#FFD700]/40 hover:bg-white/10"
                      }`}
                  >
                    <OptimizedImage
                      src={item.flag}
                      alt={item.region}
                      className="w-7 h-4.5 object-cover rounded border border-white/30 flex-shrink-0 shadow-sm"
                      loading="lazy"
                    />
                    <div className="overflow-hidden">
                      <div className={`text-xs font-bold truncate ${item.region.includes("India") ? "text-[#FFD700]" : "text-white"}`}>
                        {item.region}
                      </div>
                      <div className="text-[10px] text-white/60 truncate font-medium">{item.markets}</div>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Hero Interactive Map */}
            <div className="relative group">
              {/* Outer Decorative Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#FFD700]/20 via-transparent to-[#FFD700]/10 opacity-75 blur-md group-hover:opacity-100 transition duration-500"></div>

              <div className="rounded-2xl overflow-hidden border border-white/15 bg-[#0a1e11] relative shadow-2xl">
                {/* Main Base Image */}
                <OptimizedImage
                  src={mapimg}
                  alt="Global export logistics map"
                  className="w-full h-[450px] sm:h-[500px] object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Gradient Overlay for Vignette Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f2d1a] via-[#0f2d1a]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f2d1a]/50 via-transparent to-[#0f2d1a]/50" />

                {/* Flag Map Pins Overlay */}
                <div className="absolute inset-0 pointer-events-auto">
                  {MAP_PINS.map((pin, idx) => (
                    <div
                      key={idx}
                      className="absolute group/pin cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 hover:scale-125 z-10 hover:z-30"
                      style={{ top: pin.top, left: pin.left }}
                    >
                      {/* Flag Badge Container */}
                      <div
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 ${pin.isHq
                            ? "bg-[#0f2d1a]/95 border-[#FFD700] ring-2 ring-[#FFD700]/60 shadow-[0_0_15px_rgba(255,215,0,0.4)]"
                            : "bg-black/85 border-white/20 hover:border-[#FFD700]/80 hover:bg-black/95"
                          }`}
                      >
                        {/* Pulsing Dot Indicator */}
                        <span className="relative flex h-2 w-2 flex-shrink-0">
                          <span
                            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${pin.isHq ? "bg-[#FFD700]" : "bg-emerald-400"
                              }`}
                          ></span>
                          <span
                            className={`relative inline-flex rounded-full h-2 w-2 ${pin.isHq ? "bg-[#FFD700]" : "bg-emerald-500"
                              }`}
                          ></span>
                        </span>

                        {/* Rectangular Flag Image */}
                        <OptimizedImage
                          src={pin.flag}
                          alt={pin.name}
                          className="w-4.5 h-3 object-cover rounded-[2px] shadow-sm border border-white/40 flex-shrink-0"
                          loading="lazy"
                        />

                        {/* Country Label */}
                        <span
                          className={`text-[10px] font-extrabold tracking-tight whitespace-nowrap ${pin.isHq ? "text-[#FFD700]" : "text-white"
                            }`}
                        >
                          {pin.label || pin.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Overlay Highlight Stat Box */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="bg-[#FFD700] rounded-xl px-6 py-4 text-black shadow-2xl backdrop-blur-md border border-white/20 flex items-center justify-between transform transition duration-300 hover:scale-[1.02]">
                    <div>
                      <div className="font-black text-xl tracking-tight leading-none">30+ Export Markets</div>
                      <div className="text-xs font-semibold opacity-85 uppercase tracking-wider mt-1">Across 5 Continents</div>
                    </div>

                    {/* Globe Icon Badge */}
                    <div className="p-2.5 bg-black/10 rounded-lg">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V11a2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}