import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Globe, Ship, TrendingUp, ChevronRight, Package,
  Handshake, Award, Store, UtensilsCrossed, Building2, Users,
} from "lucide-react";
import exportimg from "../assets/banner/export.png";
import exportMobileImg from "../assets/mobile-banner/export-m.png";
import OptimizedImage from "../common/OptimizedImage";
import useSEO from "../hooks/useSEO";

const marketIcons = {
  "Retail & Food Service": Store,
  "HORECA & Modern Trade": UtensilsCrossed,
  "Indian Grocery Chains": Store,
  "Specialty & Organic Retail": Store,
  "Private Label & Distribution": Building2,
  "Premium Retail Chains": Store,
  "Ethnic Food Retail": Users,
  "Specialty Food Import": Package,
};

const exportRegions = [
  {
    continent: "Europe",
    accent: "from-blue-500 to-blue-700",
    tint: "bg-blue-50/60",
    countries: [
      { flag: "https://flagcdn.com/w80/gb.png", region: "United Kingdom", markets: "Retail & Food Service" },
      { flag: "https://flagcdn.com/w80/de.png", region: "Germany", markets: "Private Label & Distribution" },
      { flag: "https://flagcdn.com/w80/nl.png", region: "Netherlands", markets: "Private Label & Distribution" },
    ],
  },
  {
    continent: "UAE, GCC & KSA",
    accent: "from-amber-500 to-amber-700",
    tint: "bg-amber-50/60",
    countries: [
      { flag: "https://flagcdn.com/w80/ae.png", region: "UAE", markets: "HORECA & Modern Trade" },
      { flag: "https://flagcdn.com/w80/sa.png", region: "KSA (Saudi Arabia)", markets: "HORECA & Modern Trade" },
      { flag: "https://flagcdn.com/w80/kw.png", region: "GCC / Kuwait", markets: "Retail & Food Service" },
    ],
  },
  {
    continent: "Americas",
    accent: "from-red-500 to-red-700",
    tint: "bg-red-50/60",
    countries: [
      { flag: "https://flagcdn.com/w80/us.png", region: "United States", markets: "Indian Grocery Chains" },
      { flag: "https://flagcdn.com/w80/ca.png", region: "Canada", markets: "Indian Grocery Chains" },
    ],
  },
  {
    continent: "Asia Pacific",
    accent: "from-emerald-500 to-emerald-700",
    tint: "bg-emerald-50/60",
    countries: [
      { flag: "https://flagcdn.com/w80/in.png", region: "India", markets: "Global HQ & Processing Plant" },
      { flag: "https://flagcdn.com/w80/au.png", region: "Australia", markets: "Specialty & Organic Retail" },
      { flag: "https://flagcdn.com/w80/nz.png", region: "New Zealand", markets: "Ethnic Food Retail" },
      { flag: "https://flagcdn.com/w80/sg.png", region: "Singapore", markets: "Premium Retail Chains" },
      { flag: "https://flagcdn.com/w80/my.png", region: "Malaysia", markets: "Premium Retail Chains" },
      { flag: "https://flagcdn.com/w80/jp.png", region: "Japan", markets: "Specialty Food Import" },
      { flag: "https://flagcdn.com/w80/kr.png", region: "South Korea", markets: "Specialty Food Import" },
    ],
  },
];

// Flatten all countries into one list, tagging each with its continent info
const allCountries = exportRegions.flatMap((group) =>
  group.countries.map((c) => ({
    ...c,
    continent: group.continent,
    accent: group.accent,
    tint: group.tint,
  }))
);

const totalCountries = allCountries.length;
const filterTabs = ["All", ...exportRegions.map((r) => r.continent)];

const exportServices = [
  {
    icon: <Package size={24} />,
    title: "Private Label",
    desc: "We manufacture under your brand identity. Custom packaging, branding, and formulations tailored for your target market.",
  },
  {
    icon: <Handshake size={24} />,
    title: "B2B Supply",
    desc: "Bulk supply partnerships for food service chains, restaurants, airline caterers, and institutional buyers worldwide.",
  },
  {
    icon: <Ship size={24} />,
    title: "Logistics & Cold Chain",
    desc: "End-to-end temperature-controlled logistics, container loading, and export documentation handled by our experienced team.",
  },
  {
    icon: <Award size={24} />,
    title: "Certifications",
    desc: "We hold FSSAI, HACCP, ISO 22000, BRC, Halal, and APEDA certifications meeting the requirements of over 30 export markets.",
  },
];

const stats = [
  { val: "30+", label: "Export Countries" },
  { val: "50+", label: "Global Partners" },
  { val: "15+", label: "Years Experience" },
  { val: "500+", label: "Containers/Year" },
];

function CountrySlideCard({ country }) {
  const Icon = marketIcons[country.markets] || Store;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 ${country.tint} shadow-sm hover:shadow-xl transition-all duration-300 flex-shrink-0 w-[220px] sm:w-[240px]`}
    >
      <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${country.accent}`} />

      <div className="p-5 pt-6 flex flex-col items-center text-center mb-4">
        <div className="relative mb-3">
          <OptimizedImage
            src={country.flag}
            alt={country.region}
            draggable="false"
            className="w-[76px] h-[50px] rounded-md object-cover border-2 border-white shadow-md ring-1 ring-black/10"
            loading="lazy"
          />
          <div className={`absolute -bottom-2 -right-2 bg-gradient-to-br ${country.accent} text-white rounded-full p-1.5 shadow-md border border-white`}>
            <Icon size={12} strokeWidth={2.5} />
          </div>
        </div>

        <div className="font-bold text-[#0f2d1a] text-sm sm:text-base">{country.region}</div>
        <div className="text-gray-400 text-[11px] font-semibold tracking-wide uppercase mt-1">{country.continent}</div>
        <div className="text-gray-500 text-xs sm:text-sm mt-2 leading-5">{country.markets}</div>

      </div>
    </div>
  );
}

function CountryMarquee() {
  const [activeTab, setActiveTab] = useState("All");

  const visibleCountries =
    activeTab === "All" ? allCountries : allCountries.filter((c) => c.continent === activeTab);

  // Duplicate the list so the loop is seamless
  const trackCountries = [...visibleCountries, ...visibleCountries];
  // Roughly scale speed to the number of cards so the loop feels consistent
  const duration = Math.max(visibleCountries.length * 3.2, 10);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
              activeTab === tab
                ? "bg-[#0f2d1a] text-white border-[#0f2d1a] shadow-md"
                : "bg-white text-gray-500 border-gray-200 hover:border-[#0f2d1a]/30 hover:text-[#0f2d1a]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Continuous marquee */}
      <div className="relative overflow-hidden py-2">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-r from-[#f8faf7] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-24 bg-gradient-to-l from-[#eef7f0] to-transparent z-10" />

        <div className="marquee-viewport">
          <div
            key={activeTab}
            className="marquee-track flex gap-4 w-max"
            style={{ animationDuration: `${duration}s` }}
          >
            {trackCountries.map((country, i) => (
              <CountrySlideCard key={`${country.region}-${i}`} country={country} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-viewport {
          width: 100%;
          overflow: hidden;
        }
        .marquee-track {
          animation-name: marquee-scroll;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-viewport:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function ExportPage() {
  useSEO({
    title: "Global Export & Private Label | Currymia Foods Limited",
    description: "Currymia exports frozen vegetables & ready-to-eat meals to 30+ countries across the US, UK, Europe, UAE/GCC, and Asia-Pacific. Private label partner.",
    canonical: "/export",
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#fcfbf9]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-16 lg:pb-24">
        {/* Mobile banner image */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${exportMobileImg})` }}
        />
        {/* Desktop banner image */}
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${exportimg})` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#0f2d1a]/80" />

        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FFD700]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-[#FFD700] text-xs font-bold tracking-[4px] sm:tracking-[5px] uppercase mb-4 sm:mb-6 border border-[#FFD700]/30 px-3 sm:px-4 py-1.5 rounded-full"
          >
            Global Export
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 sm:mb-6"
          >
            India's Finest Flavours<br />
            <span className="text-[#FFD700]">Reaching the World</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/70 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-7 sm:leading-8"
          >
            Currymia Foods exports premium frozen foods, ready-to-eat meals, and fruit products to over 30 countries across 5 continents — meeting the highest international food safety and quality standards.
          </motion.p>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 mt-8 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="text-center bg-white/5 backdrop-blur border border-white/10 rounded-xl sm:rounded-2xl py-4 sm:py-5 px-3 sm:px-4">
              <div className="text-2xl sm:text-3xl font-black text-[#FFD700]">{s.val}</div>
              <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Export Markets — continuous marquee with continent filter, same soft gradient wash as the landing page's Manufacturing section */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#f8faf7] via-white to-[#eef7f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase flex items-center justify-center gap-2">
              <Globe size={14} /> Export Destinations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3">
              Where Currymia Foods Goes
            </h2>
            <p className="text-gray-500 mt-3 sm:mt-4 max-w-xl mx-auto text-sm sm:text-base leading-6 sm:leading-7">
              {totalCountries} countries across {exportRegions.length} regions — filter by region and watch the strip scroll continuously. Hover to pause.
            </p>
          </div>

          <CountryMarquee />
        </div>
      </section>

      {/* Export Services */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase">What We Offer</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3">
              End-to-End Export Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {exportServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-[#fcfbf9] rounded-xl sm:rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-[#0f2d1a] bg-[#FFD700]/10 rounded-xl p-2.5 sm:p-3 w-fit mb-3 sm:mb-4">{svc.icon}</div>
                <h3 className="font-black text-[#0f2d1a] text-base sm:text-lg mb-1.5 sm:mb-2">{svc.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-6 sm:leading-7">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner with Us */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase">Partner with Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
              Why Global Buyers <span className="text-[#FFD700]">Choose Currymia</span>
            </h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                "Consistent supply capacity — 500+ containers annually",
                "Private label with your branding on all packaging",
                "HACCP & BRC compliant production facility",
                "Flexible MOQs to suit small and large distributors",
                "On-time delivery with full export documentation",
                "Dedicated export support team in your timezone",
              ].map((pt) => (
                <div key={pt} className="flex items-start gap-2.5 sm:gap-3 text-gray-700 text-xs sm:text-sm">
                  <TrendingUp size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  {pt}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="bg-[#0f2d1a] rounded-2xl sm:rounded-3xl p-7 sm:p-10 text-white"
          >
            <h3 className="text-xl sm:text-2xl font-black text-[#FFD700] mb-1.5 sm:mb-2">
              Start Your Export Journey
            </h3>
            <p className="text-white/60 text-xs sm:text-sm leading-6 sm:leading-7 mb-5 sm:mb-6">
              Reach out to our dedicated export team for product catalogues, pricing, and samples.
            </p>
            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {["Product Catalogue & Brochure", "Lab Test Reports & Certifications", "Sample Request", "Custom Formulation Inquiry"].map((item) => (
                <li key={item} className="flex items-center gap-2.5 sm:gap-3 text-white/80 text-xs sm:text-sm">
                  <ChevronRight size={13} className="text-[#FFD700]" />{item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg text-sm sm:text-base"
            >
              Contact Export Team <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}