import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Apple,
  Beef,
  Globe2,
  Truck,
  Snowflake,
  Flame,
  ShoppingBag,
  ShieldCheck,
  CheckCircle2,
  Award,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  ThermometerSnowflake,
  PackageCheck,
  Building2,
  Factory
} from "lucide-react";
import useSEO from "../hooks/useSEO";
import OptimizedImage from "../common/OptimizedImage";
import frozenMeat3d from "../assets/Mutton Cubes CFL.webp";
import chilledMeat3d from "../assets/Boneless mutton.webp";
import retailMeat3d from "../assets/Retail mutton cubes packaging.webp";
import exportProduce3d from "../assets/segments/export_produce_3d.jpg";
import domesticProduce3d from "../assets/segments/domestic_produce_3d.jpg";

export const BUSINESS_SEGMENTS_DATA = {
  "fruit-and-vegetables": {
    id: "fruit-and-vegetables",
    name: "Fruit & Vegetables",
    shortName: "Fruits & Veg",
    tagline: "Farm-Fresh Sourcing, IQF Precision & Cold-Chain Excellence",
    description:
      "Currymia Foods is a premier processor and exporter of individually quick-frozen (IQF) fruits and vegetables, serving high-volume international food importers as well as expansive domestic retail and institutional networks.",
    icon: Apple,
    color: "from-emerald-900 via-[#0f2d1a] to-emerald-950",
    accentColor: "#10B981",
    subSegments: [
      {
        id: "export",
        title: "Export Division",
        badge: "GLOBAL DISTRIBUTION · 30+ COUNTRIES",
        tagline: "Export-grade IQF fruits & vegetables for global food service and retail brands",
        image3d: exportProduce3d,
        description:
          "Our export division supplies containerized IQF frozen vegetables, exotic regional specialties, and premium natural fruit pulps (Alphonso, Kesar, Guava) to leading distributors across North America, Europe, the Middle East, UK, and Asia-Pacific. All dispatches strictly comply with international phytosanitary, HACCP, BRC, and USFDA standards.",
        stats: [
          { value: "30+", label: "Export Destinations" },
          { value: "100%", label: "Traceable Produce" },
          { value: "-18°C", label: "Cold Chain Integrity" },
          { value: "Zero", label: "Chemical Preservatives" },
        ],
        keyFeatures: [
          {
            title: "Reefer Container Freight",
            desc: "Continuous temperature-logged shipping from Nhava Sheva / Mumbai ports to all major international maritime hubs.",
          },
          {
            title: "Custom OEM & Private Label",
            desc: "Tailored polybag, zipper pouch, and bulk carton packaging configured with multi-language nutritional labelling.",
          },
          {
            title: "Strict Phytosanitary Clearance",
            desc: "Comprehensive microbiological testing, pesticide residue screening (APEDA accredited), and certificate of analysis for each batch.",
          },
          {
            title: "Year-Round Supply Contracts",
            desc: "Long-term contract manufacturing and harvest-linked pricing stability for institutional food conglomerates.",
          },
        ],
        popularItems: [
          "IQF Green Peas & Sweet Corn",
          "Regional Indian Veg (Okra, Ivy Gourd, Bitter Gourd, Drumstick)",
          "100% Natural Alphonso & Kesar Mango Pulps",
          "Vegetable Base Pastes & Gravies",
        ],
      },
      {
        id: "domestic",
        title: "Domestic Division",
        badge: "PAN-INDIA DISTRIBUTION · FARM TO SHELF",
        tagline: "Supplying top Indian supermarkets, HORECA, and food manufacturers",
        image3d: domesticProduce3d,
        description:
          "Within India, Currymia connects fertile agricultural belts in Maharashtra directly to metropolitan retail shelves and HORECA kitchens. Our robust cold distribution network ensures freshness and nutritional integrity from farm harvest to table.",
        stats: [
          { value: "500+", label: "Retail Touchpoints" },
          { value: "24-48h", label: "Farm-to-Freezer Processing" },
          { value: "Tier 1-3", label: "City Cold Reach" },
          { value: "FSSAI", label: "Certified Grade A" },
        ],
        keyFeatures: [
          {
            title: "HORECA & Quick Service Food Chains",
            desc: "Bulk institutional food packs (1kg, 2.5kg, 5kg) tailored for hotels, restaurant chains, and commercial cloud kitchens.",
          },
          {
            title: "Direct Farmer Procurement",
            desc: "Collaborative farming partnerships empowering local agrarian communities in Ahilyanagar and western Maharashtra.",
          },
          {
            title: "Centralized Cold Hubs",
            desc: "Temperature-controlled warehousing and refrigerated fleet ensuring 100% cold-chain continuity across India.",
          },
          {
            title: "Retail Ready Formats",
            desc: "Consumer-friendly 200g, 400g, and 500g nitrogen-flushed pillow packs for premier retail supermarket chains.",
          },
        ],
        popularItems: [
          "Currymia Everyday Staples Range",
          "Fresh Frozen Sweet Corn & Green Peas",
          "Paneer Cubes & Frozen Snacks Range",
          "Traditional Punjabi Specialty Meal Pouches",
        ],
      },
    ],
  },
  proteins: {
    id: "proteins",
    name: "Proteins",
    shortName: "Proteins",
    tagline: "Quality-Certified Frozen, Chilled & Retail Protein Solutions",
    description:
      "Our dedicated Protein business segment delivers world-class mutton and protein products processed in state-of-the-art hygienic abattoirs and facilities with end-to-end cold-chain assurance and strict international Halal certifications.",
    icon: Beef,
    color: "from-amber-950 via-[#1c150c] to-stone-950",
    accentColor: "#D97706",
    subSegments: [
      {
        id: "frozen-mutton",
        title: "Frozen Mutton",
        badge: "BLAST FROZEN AT -40°C · EXPORT QUALITY",
        tagline: "Hygienically processed, individually quick-frozen and vacuum-packed cuts",
        image3d: frozenMeat3d,
        description:
          "Our Frozen Mutton division specializes in prime cuts, boneless portions, and customized specifications blast-frozen at ultra-low temperatures (-40°C) to lock in natural moisture, tenderness, and vital nutrients. Designed for global export, food service wholesalers, and industrial catering.",
        stats: [
          { value: "-40°C", label: "Ultra Blast Freezing" },
          { value: "100%", label: "Halal Certified" },
          { value: "Zero", label: "Added Hormones" },
          { value: "24 Mo", label: "Shelf Life at -18°C" },
        ],
        keyFeatures: [
          {
            title: "Advanced Blast Freezing",
            desc: "Rapid deep-freezing prevents cell membrane rupture, preserving natural mutton tenderness, texture, and juiciness.",
          },
          {
            title: "Certified Halal Compliance",
            desc: "Processed in certified modern facilities with complete ritual slaughter compliance and stringent veterinary inspection.",
          },
          {
            title: "Export Carton & Poly-lined Packing",
            desc: "Vacuum-sealed shrink bags and heavy-duty 20kg Master export cartons designed for rough maritime handling.",
          },
          {
            title: "Microbial Safety",
            desc: "Rigorous testing for salmonella, E. coli, prior to every container dispatch.",
          },
        ],
        popularItems: [
          "Fresh Frozen Whole Carcass",
          "Portioned Curry Cuts & Bone-in Cubes",
          "Minced & Ground Frozen Protein Blocks",
          "Food Service Bulk Portions",
        ],
      },
      {
        id: "chilled-mutton",
        title: "Chilled Mutton",
        badge: "0°C TO 4°C CONTROL · FRESH DELIVERIES",
        tagline: "Fresh premium cuts with uninterrupted precision temperature maintenance",
        image3d: chilledMeat3d,
        description:
          "Our chilled mutton division caters to high-end hospitality, executive chef requirements, and premium gourmet butcheries requiring fresh, chilled Mutton with strict 0°C to 4°C temperature control. Air-freighted and expedited via cold logistics.",
        stats: [
          { value: "0°C - 4°C", label: "Precision Range" },
          { value: "Daily", label: "Fresh Dispatches" },
          { value: "MAP", label: "Modified Atmosphere" },
          { value: "100%", label: "Hygienic Deboning" },
        ],
        keyFeatures: [
          {
            title: "Strict Cold Integrity (0°C to 4°C)",
            desc: "Real-time IoT temperature data loggers accompany every consignment from processing to final delivery.",
          },
          {
            title: "Modified Atmosphere Packaging (MAP)",
            desc: "Gas-flushed barrier packaging that naturally inhibits bacterial growth and extends fresh shelf life without chemical preservatives.",
          },
          {
            title: "Chef-Grade Primal Cuts",
            desc: "Expertly trimmed, silver-skinned, and precision portioned according to exacting international culinary standards.",
          },
          {
            title: "Expedited Cold Freight",
            desc: "Express cold-van and temperature-controlled air freight connections for time-sensitive culinary operations.",
          },
        ],
        popularItems: [
          "Fresh Chilled Whole Carcass",
          "Fresh Chilled Mutton Cubes",
          "Vacuum-Sealed Vacuum Packs",
          "Gourmet Restaurant Specifications",
        ],
      },
      {
        id: "retail",
        title: "Retail Division",
        badge: "CONSUMER READY · PORTION PACKED",
        tagline: "Convenient, hygienic, and branded consumer packs for modern retail shelves",
        image3d: retailMeat3d,
        description:
          "The Retail division provides premium, consumer-ready pre-packaged portions designed for modern trade supermarket chillers and freezers. With tamper-evident packaging, clear nutrition labeling, and QR-enabled batch traceability, we bring supreme food trust to everyday families.",
        stats: [
          { value: "100%", label: "Tamper Proof Trays" },
          { value: "QR Code", label: "Farm Traceability" },
          { value: "Ready", label: "Portion Controlled" },
          { value: "Grade A", label: "Supermarket Quality" },
        ],
        keyFeatures: [
          {
            title: "Skin-Pack & Tray Sealing",
            desc: "Aesthetically pleasing leak-proof skin packaging that showcases product freshness and cuts on store display shelves.",
          },
          {
            title: "Portion Control & Convenience",
            desc: "Single-meal and family-sized 250g, 500g, and 1kg portioning for hassle-free culinary preparation at home.",
          },
          {
            title: "Barcoded & Export Labelling",
            desc: "Fully compliant with GS1 barcodes, FDA/FSSAI nutritional facts, allergen declarations, and cooking guidelines.",
          },
          {
            title: "Private Label Co-Packing",
            desc: "End-to-end turnkey branding and packaging solutions for domestic and multinational supermarket supermarket private labels.",
          },
        ],
        popularItems: [
          "Pre-cut Curry Cuts & Boneless (500g Trays)",
          "Lean Mince (400g MAP Sealed)",
          "Marinated & Seasoned Quick-Cook Packs",
          "Premium Vacuum Skin Packs",
        ],
      },
    ],
  },
};

export default function BusinessSegmentsPage() {
  const { segmentId, subId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  // Derive active segment directly from URL or fallback
  const queryParams = new URLSearchParams(location.search);
  const requestedSegment =
    segmentId ||
    queryParams.get("segment") ||
    (location.pathname.includes("proteins") ? "proteins" : "proteins");

  const currentSegment = BUSINESS_SEGMENTS_DATA[requestedSegment]
    ? requestedSegment
    : "proteins";

  const segmentData = BUSINESS_SEGMENTS_DATA[currentSegment];

  // Derive active sub-segment directly from URL or default to first
  const requestedSub = subId || queryParams.get("sub");
  const availableSubIds = segmentData.subSegments.map((s) => s.id);
  const currentSubId =
    requestedSub && availableSubIds.includes(requestedSub)
      ? requestedSub
      : segmentData.subSegments[0].id;

  const activeSubSegment =
    segmentData.subSegments.find((s) => s.id === currentSubId) ||
    segmentData.subSegments[0];

  useSEO({
    title: `${segmentData.name} – ${activeSubSegment.title} | Business Segments | Currymia Foods Limited`,
    description: `${segmentData.name} Division: ${activeSubSegment.description.slice(0, 155)}...`,
    canonical: `/business-segments/${currentSegment}/${activeSubSegment.id}`,
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const handleSelectSegment = (key) => {
    const defaultSub = BUSINESS_SEGMENTS_DATA[key].subSegments[0].id;
    navigate(`/business-segments/${key}/${defaultSub}`);
  };

  const handleSelectSub = (subKey) => {
    navigate(`/business-segments/${currentSegment}/${subKey}`);
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ── HERO BANNER ── */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-20 text-white">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#FFD700]/10 blur-[130px]" />
          <div className="absolute bottom-0 left-4 sm:left-10 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-emerald-400/10 blur-[110px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#FFD700] text-xs font-black tracking-[4px] uppercase mb-4 border border-[#FFD700]/30 px-4 py-1.5 rounded-full bg-[#FFD700]/5 backdrop-blur-sm"
          >
            <Layers size={13} />
            Currymia Business Segments
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-4"
          >
            Commercial <span className="text-[#FFD700]">Business Divisions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/75 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Specialized manufacturing, cold chain logistics, and supply chain operations catering to global exporters, institutional HORECA, and nationwide retail networks.
          </motion.p>

          {/* ── Main Segment Switcher Pills (Fruit & Veg vs Proteins) ── */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {Object.values(BUSINESS_SEGMENTS_DATA).map((seg) => {
              const IconComp = seg.icon;
              const isSelected = seg.id === currentSegment;

              return (
                <button
                  key={seg.id}
                  onClick={() => handleSelectSegment(seg.id)}
                  className={`flex items-center gap-2.5 px-5 sm:px-7 py-3 rounded-2xl font-black text-xs sm:text-sm transition-all duration-300 shadow-md cursor-pointer border ${
                    isSelected
                      ? "bg-[#FFD700] text-[#0f2d1a] border-[#FFD700] shadow-yellow-500/20 scale-105"
                      : "bg-white/10 text-white/90 border-white/15 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  <IconComp size={18} className={isSelected ? "text-[#0f2d1a]" : "text-[#FFD700]"} />
                  <span>{seg.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SUB-SEGMENT SELECTOR TABS ── */}
      <section className="bg-white border-b border-stone-200 sticky top-16 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-2.5">
          <div className="flex items-center justify-between gap-3 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-wider hidden sm:inline mr-2">
                Sub-Division:
              </span>
              {segmentData.subSegments.map((sub) => {
                const isSelected = sub.id === activeSubSegment.id;

                return (
                  <button
                    key={sub.id}
                    onClick={() => handleSelectSub(sub.id)}
                    className={`px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-extrabold transition-all whitespace-nowrap flex-shrink-0 cursor-pointer ${
                      isSelected
                        ? "bg-[#1a5c30] text-white shadow-sm"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200 hover:text-[#1a5c30]"
                    }`}
                  >
                    {sub.title}
                  </button>
                );
              })}
            </div>

            <div className="text-xs font-extrabold text-[#1a5c30] bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full whitespace-nowrap hidden md:flex items-center gap-1.5">
              <ShieldCheck size={14} className="text-emerald-600" />
              <span>Certified Division</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ACTIVE SUB-SEGMENT CONTENT ── */}
      <section className="py-10 sm:py-16 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentSegment}-${activeSubSegment.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-10 sm:space-y-14"
            >
              {/* Main Banner Card with 3D Visual Asset */}
              <div className="bg-white rounded-3xl border border-stone-200/90 shadow-md overflow-hidden p-6 sm:p-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Column: Description & Stats */}
                  <div className="lg:col-span-7">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#1a5c30] text-xs font-black uppercase tracking-wider mb-3">
                      <Sparkles size={13} className="text-emerald-600" />
                      {activeSubSegment.badge}
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] leading-tight mb-2">
                      {segmentData.name} — <span className="text-[#1a5c30]">{activeSubSegment.title}</span>
                    </h2>

                    <p className="text-[#1a5c30] font-bold text-sm sm:text-base mb-3">
                      {activeSubSegment.tagline}
                    </p>

                    <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6">
                      {activeSubSegment.description}
                    </p>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-4 border-t border-stone-100">
                      {activeSubSegment.stats.map((s, idx) => (
                        <div key={idx} className="bg-stone-50 border border-stone-200/80 rounded-2xl p-2.5 sm:p-3 text-center">
                          <div className="text-lg sm:text-xl font-black text-[#0f2d1a]">{s.value}</div>
                          <div className="text-[11px] font-bold text-stone-500 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: 3D Visual Showcase */}
                  <div className="lg:col-span-5 flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative w-full max-w-[420px] aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-xl border border-stone-200/90 bg-gradient-to-br from-stone-50 via-white to-stone-100 p-2.5 group"
                    >
                      <div className="w-full h-full rounded-2xl overflow-hidden relative flex items-center justify-center bg-white/70">
                        <OptimizedImage
                          src={activeSubSegment.image3d}
                          alt={activeSubSegment.title}
                          className="w-full h-full object-contain rounded-2xl drop-shadow-md group-hover:scale-105 transition-transform duration-500"
                          priority={true}
                        />
                        {/* 3D Glass Badge */}
                        <div className="absolute bottom-3 left-3 right-3 bg-[#0f2d1a]/85 backdrop-blur-md border border-white/20 rounded-xl px-3.5 py-2 text-white flex items-center justify-between shadow-lg">
                          <div className="flex items-center gap-1.5 text-xs font-black">
                            <Sparkles size={12} className="text-[#FFD700]" />
                            <span className="truncate">{activeSubSegment.title}</span>
                          </div>
                          <span className="text-[9.5px] uppercase font-black tracking-wider text-[#FFD700] bg-white/10 px-2 py-0.5 rounded-md flex-shrink-0">
                            3D Showcase
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                </div>
              </div>

              {/* Core Pillars / Operational Capabilities */}
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#1a5c30] uppercase tracking-widest">Key Infrastructure</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0f2d1a]">Operational Capabilities & Quality Assurance</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  {activeSubSegment.keyFeatures.map((feat, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-5 sm:p-6 border border-stone-200/80 shadow-2xs hover:shadow-md transition-all hover:border-emerald-200 flex items-start gap-4"
                    >
                      <div className="p-2.5 rounded-xl bg-emerald-50 text-[#1a5c30] border border-emerald-100 flex-shrink-0 mt-1">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="text-base font-black text-[#0f2d1a] mb-1">{feat.title}</h4>
                        <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">{feat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specifications & Offerings */}
              <div className="bg-gradient-to-br from-[#0f2d1a] to-[#12311E] text-white rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="max-w-xl">
                    <span className="text-xs font-black uppercase tracking-[3px] text-[#FFD700] mb-2 block">
                      Portfolio Highlights
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                      Representative Products in this Division
                    </h3>
                    <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-6">
                      Engineered to meet client-specific specifications, packaging dimensions, and bulk volume procurement contracts.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeSubSegment.popularItems.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/10 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white">
                          <PackageCheck size={16} className="text-[#FFD700] flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                    <Link
                      to="/contactus"
                      className="inline-flex items-center justify-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-[#0f2d1a] font-extrabold px-6 py-3.5 rounded-xl transition-all shadow-lg text-xs sm:text-sm"
                    >
                      <span>Inquire for this Segment</span>
                      <ArrowRight size={16} />
                    </Link>

                    {currentSegment === "fruit-and-vegetables" ? (
                      <Link
                        to="/products/frozen-vegetable-collection"
                        className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl transition-all border border-white/20 text-xs sm:text-sm"
                      >
                        <span>View Product Catalogue</span>
                        <ChevronRight size={16} />
                      </Link>
                    ) : (
                      <Link
                        to="/quality"
                        className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-3.5 rounded-xl transition-all border border-white/20 text-xs sm:text-sm"
                      >
                        <span>Quality & Certifications</span>
                        <ChevronRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── DIVISION INQUIRY BOTTOM CTA ── */}
      <section className="bg-white border-t border-stone-200 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <Award className="text-[#1a5c30] mx-auto mb-3 sm:mb-4" size={32} />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mb-3">
            Partner with Currymia's Commercial Divisions
          </h2>
          <p className="text-stone-600 mb-6 sm:mb-8 text-sm sm:text-base max-w-2xl mx-auto">
            Whether for international reefer shipments, domestic retail listings, or institutional food service supply contracts — connect with our division heads today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 bg-[#1a5c30] hover:bg-[#0f2d1a] text-white font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all shadow-md text-sm"
            >
              <span>Contact Business Desk</span>
              <ChevronRight size={16} />
            </Link>
            <Link
              to="/export"
              className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all text-sm"
            >
              <span>Explore Global Export</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
