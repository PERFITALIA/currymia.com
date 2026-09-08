import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import plant from "../assets/plant.png"
import cook from "../assets/cook.png"
import logo from "../assets/logo.png"
import iqf from "../assets/iqf.png"
import coldchain from "../assets/coldchain.png"
import machine1 from "../assets/machine1.png"
import machine3 from "../assets/machine3.png"
import technology from "../assets/technology.mp4"
import transportimg from "../assets/trancsportimg.png"
import OptimizedImage from "../common/OptimizedImage";
import {
  ShieldCheck,
  Award,
  Globe2,
  ArrowRight,
  ChevronRight,
  Snowflake,
  Flame,
  Truck,
  Box,
  Factory,
  Check,
  Globe,
  Ship,
  PackageCheck,
  Sprout,
  Tractor,
  Search,
  Cog,
  Package,
  Warehouse,
  Quote,
  UserRound,
} from 'lucide-react';
import currymiaImg from "../assets/currymia.png";
import mapimg from "../assets/map.png";
import maharashtraMap from "../assets/maharashtra_map.png";
import useSEO from "../hooks/useSEO";

export default function About() {
  useSEO({
    title: "About Us | Currymia Foods Limited – Manufacturing & Infrastructure",
    description: "Learn about Currymia Foods Limited — our state-of-the-art IQF processing plant in Maharashtra, cold chain logistics, and global quality certifications.",
    canonical: "/about",
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeTech, setActiveTech] = useState(0);
  const [activeRegion, setActiveRegion] = useState(0);
  const [hoveredRegionIndex, setHoveredRegionIndex] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [readMoreOpen, setReadMoreOpen] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.4; // Increase video speed
    }
  }, []);

  // Counter animation component
  const StatCounter = ({ value, suffix = "" }) => {
    const numericVal = parseInt(value, 10);
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const end = isNaN(numericVal) ? 100 : numericVal;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 50));

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 50);
      return () => clearInterval(timer);
    }, [numericVal]);

    return (
      <span className="font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-[#D4A017]">
        {isNaN(numericVal) ? value : `${count}${suffix}`}
      </span>
    );
  };

  // Certifications shown in the "Who We Are" section
  const certifications = [
    { title: "FSSAI Certified", desc: "Food safety compliance for domestic & export operations.", icon: ShieldCheck },
    { title: "USFDA Registered", desc: "Approved for exports to the United States market.", icon: Award },
    { title: "APEDA Recognized", desc: "Registered agricultural & processed food exporter.", icon: PackageCheck },
    { title: "HACCP Compliant", desc: "Hazard analysis & critical control points followed plant-wide.", icon: Factory },
  ];

  const manufacturingHighlights = [
    {
      id: "iqf",
      title: "RETORT Technology" ,
      subtitle: "Advanced RETORT Sterilization Technology",
description: "Our state-of-the-art RETORT processing ensures complete food safety, extended shelf life, and preserved taste, texture, and nutritional value without the need for artificial preservatives.",
      icon: Snowflake,
      badge: "Sub-Zero Precision",
      image: machine1,
    },
    {
      id: "retort",
      title: "RETORT Processing",
      subtitle: "Long Shelf-Life Without Preservatives",
      description: "Advanced thermal processing in hermetically sealed pouches guarantees 100% commercial sterility and authentic Indian kitchen flavor.",
      icon: Flame,
      badge: "Zero Preservatives",
      image: "https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "coldchain",
      title: "Cold Chain Logistics",
      subtitle: "End-to-End Temperature Control",
      description: "Integrated real-time IoT monitored cold chain maintaining optimum -18°C temperature from our Ahilyanagar plant to overseas ports.",
      icon: Truck,
      badge: "Real-time IoT",
      image: coldchain,
    },
    {
      id: "packaging",
      title: "Automated Packaging",
      subtitle: "Zero-Touch Clean Room Packaging",
      description: "Multi-head computerized weighers and nitrogen-flushed modified atmosphere packaging protect shelf stability and visual presentation.",
      icon: Box,
      badge: "Hygienic Clean Room",
      image: machine3,
    }
  ];

  const journeySteps = [
    { step: "01", title: "Farm", desc: "Ethical sourcing from Maharashtra's fertile belt", icon: Sprout },
    { step: "02", title: "Fresh Harvest", desc: "Peak ripeness raw material selection", icon: Tractor },
    { step: "03", title: "Sorting", desc: "Automated optical & manual quality grading", icon: Search },
    { step: "04", title: "Processing", desc: "Hygienic washing, blanching & preparation", icon: Cog },
    { step: "05", title: "IQF Freezing", desc: "Rapid freezing at -40°C in minutes", icon: Snowflake },
    { step: "06", title: "Packaging", desc: "Nitrogen flushed, vacuum sealed pouches", icon: Package },
    { step: "07", title: "Cold Storage", desc: "Dedicated -18°C deep freeze warehousing", icon: Warehouse },
    { step: "08", title: "International Shipping", desc: "Reefer containerized sea & air freight", icon: Ship },
    { step: "09", title: "Global Delivery", desc: "Reaching distributors & retail networks", icon: Globe }
  ];

  const keyHighlights = [
    { title: "Certified & Compliant", text: "Meets stringent USFDA, EU, APEDA, and FSSAI export parameters for international trade.", icon: ShieldCheck },
    { title: "End-to-End Operations", text: "Complete ownership from farm gate procurement to final destination sea port customs clearance.", icon: PackageCheck },
    { title: "Advanced Manufacturing", text: "Ultra-modern plant at Ahilyanagar equipped with automated European processing lines.", icon: Factory },
    { title: "Cold Chain Logistics", text: "Unbroken temperature-monitored supply chain ensuring zero thawing risk.", icon: Truck },
    { title: "Growing Export Network", text: "Established distribution footprint spanning GCC, Europe, North America, and APAC.", icon: Globe2 },
    { title: "Quality Assurance", text: "In-house microbiological lab & metal detectors on every packing line.", icon: Award }
  ];

  const filterOptions = ["All", "UAE, GCC & KSA", "Europe", "North America", "Asia Pacific", "Australia & NZ"];

  const exportDestinations = [
    {
      region: "UAE, GCC & KSA",
      countries: "UAE, KSA (Saudi Arabia), GCC, Qatar, Oman, Kuwait",
      flags: [
        { code: "ae", name: "UAE" },
        { code: "sa", name: "KSA (Saudi Arabia)" },
        { code: "kw", name: "Kuwait / GCC" },
        { code: "qa", name: "Qatar" },
        { code: "om", name: "Oman" },
      ],
      badge: "Major Market",
      transitTime: "3-5 Days Sea Freight",
      ports: "Jebel Ali, Dammam, Hamad, Sohar",
    },
    {
      region: "Europe",
      countries: "UK, Germany, Netherlands, France",
      flags: [
        { code: "gb", name: "UK" },
        { code: "de", name: "Germany" },
        { code: "nl", name: "Netherlands" },
        { code: "fr", name: "France" },
      ],
      badge: "EU Certified",
      transitTime: "18-22 Days Sea Freight",
      ports: "Felixstowe, Rotterdam, Hamburg",
    },
    {
      region: "North America",
      countries: "USA, Canada",
      flags: [
        { code: "us", name: "USA" },
        { code: "ca", name: "Canada" },
      ],
      badge: "FDA Registered",
      transitTime: "24-28 Days Sea Freight",
      ports: "New York, Los Angeles, Vancouver",
    },
    {
      region: "Australia & NZ",
      countries: "Sydney, Melbourne, Auckland",
      flags: [
        { code: "au", name: "Australia" },
        { code: "nz", name: "New Zealand" },
      ],
      badge: "Ethnic Retail",
      transitTime: "16-20 Days Sea Freight",
      ports: "Sydney, Melbourne, Auckland",
    },
    {
      region: "Asia Pacific",
      countries: "India (HQ), Singapore, Malaysia, Japan",
      flags: [
        { code: "in", name: "India HQ" },
        { code: "sg", name: "Singapore" },
        { code: "my", name: "Malaysia" },
        { code: "jp", name: "Japan" },
      ],
      badge: "Global HQ & Hub",
      transitTime: "Direct Processing & Distribution",
      ports: "Nhava Sheva, Singapore, Yokohama",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] text-gray-800 font-sans selection:bg-[#FFD700] selection:text-[#0f2d1a] overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#1a5c30] via-[#FFD700] to-[#12311E] z-50 origin-left"
        style={{ scaleX }}
      />

      {/* ──── HERO SECTION ──── */}
      <section className="relative min-h-[100svh] sm:min-h-[90vh] bg-gradient-to-br from-[#0a2014] via-[#0f2d1a] to-[#1a3d25] flex items-center pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-10 overflow-hidden text-white">

        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1576181256399-834e3ef79e65?w=1400&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        {/* Ambient Glow Bubbles */}
        <div className="absolute top-1/4 left-4 sm:left-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#FFD700]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
        <div className="absolute bottom-8 right-4 sm:right-10 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#1a5c30]/40 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">

          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex justify-start"
          >
            <div className="w-full max-w-full lg:max-w-[640px]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/40 text-[#FFD700] text-[10px] sm:text-xs font-semibold uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FFD700] animate-pulse" />
                ABOUT CURRYMIA FOODS LIMITED
              </div>

              {/* Heading */}
              <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black leading-[1.05] tracking-tight text-white">
                WHERE INDIA'S
                <br />
                <span className="text-[#FFD700]">
                  SOUL MEETS
                </span>
                <br />
                GLOBAL FLAVOUR
              </h1>

              {/* Description */}
              <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-white/80 leading-7 sm:leading-8 max-w-full sm:max-w-[560px]">
                Currymia Foods Limited (CFL) is a trusted Indian food manufacturing and
                export company dedicated to bringing authentic Indian flavours to
                customers worldwide through advanced IQF processing, RETORT solutions,
                world-class quality, and efficient cold-chain operations.
              </p>

              {/* Buttons */}
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4">

                <a
                  href="#who-we-are"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#FFD700] px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-bold text-black shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400"
                >
                  Explore Operations
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/20 bg-white/10 px-5 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
                >
                  Contact Us
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFD700]" />
                </a>

              </div>

              {/* Metrics */}
              <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-8 border-t border-white/15 pt-6 sm:pt-8">

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFD700]">
                    100%
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 leading-snug">
                    Export Compliant
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFD700]">
                    -40°C
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 leading-snug">
                    IQF Freezing
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#FFD700]">
                    30+
                  </h3>
                  <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-white/70 leading-snug">
                    Global Destinations
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Right Side Hero Image — visible on mobile and desktop */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex lg:col-span-5 justify-center lg:justify-end items-center mt-8 sm:mt-0"
          >
            <div className="relative flex items-center justify-center w-full h-[260px] sm:h-[420px] lg:h-[560px] xl:h-[620px]">

              {/* Background Glow */}
              <div className="absolute w-[230px] sm:w-[380px] lg:w-[520px] h-[230px] sm:h-[380px] lg:h-[520px] rounded-full bg-[#FFD700]/15 blur-[60px] sm:blur-[120px]" />

              {/* White Background Circle */}
              <div className="absolute w-[220px] sm:w-[350px] lg:w-[470px] h-[220px] sm:h-[350px] lg:h-[470px] rounded-full bg-white shadow-[0_20px_60px_rgba(255,255,255,0.25)]" />

              {/* Smaller Outer Border Circle */}
              <div className="absolute w-[235px] sm:w-[365px] lg:w-[490px] h-[235px] sm:h-[365px] lg:h-[490px] rounded-full border border-white/10" />

              {/* Cook Image */}
              <OptimizedImage
                src={cook}
                alt="Currymia Chef"
                className="relative z-10 h-[230px] sm:h-[380px] lg:h-[520px] xl:h-[600px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)] transition-all duration-700 hover:scale-105"
                loading="lazy"
              />

            </div>
          </motion.div>
        </div>
      </section>

      {/* ──── WHO WE ARE SECTION ──── */}
      <section id="who-we-are" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT — Facility Image & Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative lg:sticky lg:top-24"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0a2014]" style={{ aspectRatio: "4/3" }}>
                <OptimizedImage src={plant} alt="Currymia Processing Facility" className="w-full h-full object-cover opacity-90" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a2014]/85 via-transparent to-transparent pointer-events-none" />
                {/* Overlay info card */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 z-10">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700]">🏭 State-of-the-Art Plant</p>
                  <p className="text-xs text-white/90 mt-0.5 leading-snug">
                    Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar.
                  </p>
                </div>
              </div>
              {/* Floating stat chip */}
              <div className="absolute -bottom-5 -right-4 bg-[#1a5c30] text-white rounded-2xl px-5 py-3.5 shadow-xl border border-[#1a5c30]/50 z-10">
                <div className="text-2xl font-black text-[#FFD700]">100%</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/80 mt-0.5">Export Ready</div>
              </div>

              {/* Secondary Image — Maharashtra Location Map (expands on Read More click) */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out mt-8"
                style={{ maxHeight: readMoreOpen ? "600px" : "0px", opacity: readMoreOpen ? 1 : 0 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-[#0F172A]" style={{ aspectRatio: "4/3" }}>
                  <OptimizedImage src={maharashtraMap} alt="Maharashtra Location Map" className="w-full h-full object-contain p-2 opacity-95" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/70 via-transparent to-transparent pointer-events-none" />
                  {/* Overlay info card */}
                  <div className="absolute bottom-5 left-5 right-5 bg-white/10 backdrop-blur-md border border-white/25 rounded-2xl p-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#FFD700]">📍 Plant Location Map</p>
                    <p className="text-xs text-white/90 mt-0.5 leading-snug">
                      Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:pt-2"
            >
              {/* Label */}
              <span className="inline-flex items-center gap-1.5 bg-[#1a5c30]/10 border border-[#1a5c30]/20 text-[#1a5c30] text-[11px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1a5c30]" />
                About Currymia Foods Limited
              </span>

              {/* Headline */}
              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-gray-900 leading-[1.08]">
                Who We <span className="text-[#1a5c30]">Are</span>
              </h2>

              {/* Gold pull-quote */}
              <div className="mt-5 border-l-4 border-[#FFD700] pl-5 py-0.5">
                <p className="text-base font-semibold text-[#12311E] italic leading-relaxed">
                  "Bringing the Freshness of India to the World — one frozen pack at a time."
                </p>
              </div>

              {/* Visible intro */}
              <div className="mt-5 space-y-3.5 text-gray-500 text-sm sm:text-base leading-7 text-justify">
                <p>
                  <strong className="text-gray-900 font-semibold">Currymia Foods Limited (CFL)</strong> is a leading Maharashtra-based food processing and export enterprise dedicated to delivering premium-quality frozen vegetables, ready-to-eat meals, and RETORT food products to customers across the globe.
                </p>
                <p>
                  Our state-of-the-art facility at <strong className="text-gray-800">Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar</strong> combines advanced technology with stringent quality standards — preserving freshness, nutrition, and authentic taste in every product.
                </p>
              </div>

              {/* Read More expandable */}
              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: readMoreOpen ? "700px" : "0px", opacity: readMoreOpen ? 1 : 0 }}
              >
                <div className="mt-4 space-y-3.5 text-gray-500 text-sm sm:text-base leading-7 text-justify">
                  <p>
                    We source the finest produce directly from trusted farmers, ensuring traceability from farm to table. Using advanced <strong className="text-gray-800">IQF (Individual Quick Freezing)</strong> and RETORT processing technologies, we lock in natural flavour, texture, and nutrients.
                  </p>
                  <p>
                    Our portfolio includes frozen vegetables, sweet corn, green peas, mixed vegetables, ready-to-eat Indian meals, gravies, snacks, and breads — with <strong className="text-gray-800">private label & contract manufacturing</strong> for international brands.
                  </p>
                  <p>
                    Quality, innovation, food safety, and customer satisfaction drive everything we do. Driven by a passion for excellence, we continue expanding our global footprint across 5 continents.
                  </p>
                </div>
                {/* Cert pills */}
                <div className="mt-6 pt-5 border-t border-gray-100">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Certifications &amp; Compliance</p>
                  <div className="flex flex-wrap gap-2">
                    {certifications.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <div key={idx} className="group flex items-center gap-1.5 bg-gray-50 hover:bg-[#1a5c30] border border-gray-200 hover:border-[#1a5c30] rounded-full px-3.5 py-1.5 transition-all duration-300 cursor-default">
                          <Icon className="w-3 h-3 text-[#1a5c30] group-hover:text-[#FFD700] shrink-0 transition-colors" />
                          <span className="text-[11px] font-bold text-gray-700 group-hover:text-white transition-colors whitespace-nowrap">{item.title}</span>
                          <Check className="w-3 h-3 text-[#1a5c30] group-hover:text-[#FFD700] transition-colors" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Read More / Show Less button */}
              <button
                onClick={() => setReadMoreOpen((prev) => !prev)}
                className="mt-7 flex items-center gap-2.5 text-sm font-bold text-[#1a5c30] hover:text-white border-2 border-[#1a5c30] hover:bg-[#1a5c30] px-6 py-2.5 rounded-full transition-all duration-300 w-fit"
              >
                {readMoreOpen ? "Show Less" : "Read More"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${readMoreOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ──── MANUFACTURING EXCELLENCE ──── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#FAF8F5] relative">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block bg-[#1a5c30]/10 border border-[#1a5c30]/30 text-[#1a5c30] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-2">Our Facility</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
              Manufacturing Excellence
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              High-capacity automated processing lines designed to meet international food safety standards.
            </p>
          </div>

          {/* Interactive Technology Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2 sm:pt-4">

            {/* Nav Cards */}
            <div className="lg:col-span-5 space-y-2 sm:space-y-3">
              {manufacturingHighlights.map((tech, index) => {
                const Icon = tech.icon;
                const isActive = activeTech === index;
                return (
                  <button
                    key={tech.id}
                    onClick={() => setActiveTech(index)}
                    className={`w-full text-left p-3 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-start gap-3 sm:gap-4 ${isActive
                        ? "bg-[#12311E] text-white border-[#12311E] shadow-xl"
                        : "bg-white border-gray-200/80 text-gray-800 hover:border-[#1a5c30]/40"
                      }`}
                  >
                    <div className={`p-2 sm:p-3 rounded-xl shrink-0 ${isActive ? "bg-[#FFD700] text-black" : "bg-[#1a5c30]/10 text-[#1a5c30]"}`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className={`text-sm sm:text-base font-bold truncate ${isActive ? "text-[#FFD700]" : "text-gray-900"}`}>
                          {tech.title}
                        </p>
                        <span className={`text-[9px] sm:text-[10px] uppercase font-bold tracking-wider px-1.5 sm:px-2 py-0.5 rounded-full shrink-0 ${isActive ? "bg-white/10 text-white" : "bg-gray-100 text-gray-600"}`}>
                          {tech.badge}
                        </span>
                      </div>
                      <p className={`text-xs mt-0.5 sm:mt-1 line-clamp-1 ${isActive ? "text-white/70" : "text-gray-500"}`}>{tech.subtitle}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Display Card */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl sm:rounded-[2.5rem] overflow-hidden bg-white border border-gray-100 shadow-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6"
                >
                  <div className="relative h-48 sm:h-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden">
                    <OptimizedImage
                      src={manufacturingHighlights[activeTech].image}
                      alt={manufacturingHighlights[activeTech].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-white/90 backdrop-blur-md text-gray-900 text-xs font-bold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full">
                      ✨ {manufacturingHighlights[activeTech].subtitle}
                    </div>
                  </div>

                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-gray-900">
                      {manufacturingHighlights[activeTech].title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {manufacturingHighlights[activeTech].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* ──── FARM TO GLOBAL JOURNEY ──── */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #1a5c30 1.2px, transparent 1.2px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 space-y-8 sm:space-y-10">
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 bg-[#1a5c30]/10 border border-[#1a5c30]/25 text-[#1a5c30] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
              Our Process
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Farm to Global Journey
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              From harvesting fresh produce to worldwide delivery, every step is carefully managed to preserve freshness, safety, and premium quality.
            </p>
          </div>

          {/* Process Image Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl lg:rounded-[2rem] bg-[#FAF8F5] border border-gray-200/80 p-3 sm:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group overflow-hidden">
              {/* Subtle inner corner glow */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#1a5c30]/5 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl pointer-events-none" />

              <OptimizedImage
                src={transportimg}
                alt="Farm to Global Journey Process Diagram"
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* ──── IQF TECHNOLOGY ──── */}
      <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-10 bg-[#0f2d1a] text-white">

        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={technology} type="video/mp4" />
        </video>

        {/* Light Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6">

          {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">

  <span className="inline-flex items-center px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#FFD700] text-[#0f2d1a] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg">
    RETORT Technology
  </span>

  <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight drop-shadow-lg">
  
    <span className="text-[#FFD700]">
      Ready-to-Eat Foods
    </span>
  </h2>

  <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-gray-100 leading-7 sm:leading-8 max-w-3xl mx-auto drop-shadow">
    RETORT Technology uses advanced heat sterilization to ensure food safety,
    preserve natural taste, texture, and nutrition, while extending shelf life
    without the need for artificial preservatives or refrigeration.
  </p>

</div>
        </div>

      </section>

      {/* ──── KEY HIGHLIGHTS ──── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-white relative">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-block bg-[#1a5c30]/10 border border-[#1a5c30]/30 text-[#1a5c30] text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-2">Why Choose Us</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900">
              Key Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {keyHighlights.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-gray-100 shadow-sm hover:shadow-md hover:border-[#1a5c30]/30 transition-all space-y-2 sm:space-y-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#1a5c30]/10 text-[#1a5c30] flex items-center justify-center">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{card.text}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──── GLOBAL EXPORT NETWORK ──── */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10 bg-[#FAF8F5] relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#1a5c30]/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12 relative z-10">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 bg-[#1a5c30]/10 border border-[#1a5c30]/30 text-[#1a5c30] text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
              <Globe2 className="w-3.5 h-3.5 text-[#1a5c30]" />
              Where We Ship
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
              Global Export Network
            </h2>

            <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Reaching distributors and retailers across 5 continents with unbroken cold-chain integrity.
            </p>

            {/* Interactive Filter Pills */}
            <div className="pt-2 flex items-center justify-center gap-2 flex-wrap">
              {filterOptions.map((filterName) => (
                <button
                  key={filterName}
                  onClick={() => setSelectedFilter(filterName)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all duration-300 cursor-pointer ${
                    selectedFilter === filterName
                      ? "bg-[#12311E] text-[#FFD700] shadow-md border border-[#FFD700]/40 scale-105"
                      : "bg-white border border-gray-200/80 text-gray-700 hover:border-[#1a5c30]/40 hover:bg-emerald-50/50"
                  }`}
                >
                  {filterName === "All" ? "🌍 All Markets (5)" : filterName}
                </button>
              ))}
            </div>
          </div>

          {/* 2-COLUMN LAYOUT: Left Globe Image Card | Right Region Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* LEFT COLUMN: Premium Interactive World Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 relative flex justify-center"
            >
              <div className="w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-[#1a5c30]/30 bg-gradient-to-br from-[#0a2014] via-[#0f2d1a] to-[#1a3d25] relative">

                {/* Header Badge */}
                <div className="px-5 pt-5 pb-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 bg-[#FFD700]/15 border border-[#FFD700]/30 text-[#FFD700] text-[11px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-pulse" />
                    {hoveredRegionIndex !== null
                      ? `\uD83D\uDCCD ${exportDestinations[hoveredRegionIndex]?.region}`
                      : "\uD83C\uDF0D Global Export Network"}
                  </div>
                  <div className="text-[10px] text-white/50 font-semibold uppercase tracking-wider">30+ Countries</div>
                </div>

                {/* World Map with Animated Pins */}
                <div
                  className="relative mx-4 mb-0 rounded-2xl overflow-hidden border border-white/10"
                  style={{ aspectRatio: "2/1" }}
                >
                  {/* Map Image */}
                  <OptimizedImage
                    src={mapimg}
                    alt="Currymia Global Export Map"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0a2014]/30 via-transparent to-[#0a2014]/70 pointer-events-none" />

                  {/* Animated SVG connecting lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 200 100" preserveAspectRatio="none">
                    <line x1="136" y1="52" x2="116" y2="42" stroke="#FFD700" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="136" y1="52" x2="156" y2="62" stroke="#34d399" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="136" y1="52" x2="86" y2="20" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2.5s" repeatCount="indefinite" />
                    </line>
                    <line x1="136" y1="52" x2="32" y2="34" stroke="#60a5fa" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="3s" repeatCount="indefinite" />
                    </line>
                    <line x1="136" y1="52" x2="164" y2="74" stroke="#34d399" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.5">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="2s" repeatCount="indefinite" />
                    </line>
                    <line x1="136" y1="52" x2="100" y2="24" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2,2" opacity="0.4">
                      <animate attributeName="stroke-dashoffset" from="0" to="8" dur="1.8s" repeatCount="indefinite" />
                    </line>
                  </svg>

                  {/* Country Pins */}
                  {[
                    { label: "India HQ", flag: "in", top: "52%", left: "68%", isHq: true, color: "#FFD700" },
                    { label: "USA", flag: "us", top: "34%", left: "16%", color: "#60a5fa" },
                    { label: "UK", flag: "gb", top: "20%", left: "43%", color: "#a78bfa" },
                    { label: "Germany", flag: "de", top: "24%", left: "50%", color: "#a78bfa" },
                    { label: "UAE", flag: "ae", top: "42%", left: "58%", color: "#fb923c" },
                    { label: "KSA", flag: "sa", top: "50%", left: "54%", color: "#fb923c" },
                    { label: "Singapore", flag: "sg", top: "62%", left: "78%", color: "#34d399" },
                    { label: "Australia", flag: "au", top: "74%", left: "82%", color: "#34d399" },
                  ].map((pin) => (
                    <div
                      key={pin.label}
                      className="absolute flex flex-col items-center"
                      style={{ top: pin.top, left: pin.left, transform: "translate(-50%, -100%)" }}
                    >
                      <div className={`relative ${pin.isHq ? "w-4 h-4" : "w-2.5 h-2.5"}`}>
                        <span
                          className="absolute inset-0 rounded-full animate-ping opacity-70"
                          style={{ backgroundColor: pin.color, animationDuration: pin.isHq ? "1s" : "2.2s" }}
                        />
                        <span
                          className="relative block w-full h-full rounded-full border-2 border-white/80 shadow-lg"
                          style={{ backgroundColor: pin.color }}
                        />
                      </div>
                      <div
                        className="mt-0.5 flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[7px] sm:text-[8px] font-bold text-white whitespace-nowrap shadow-lg"
                        style={{ backgroundColor: "rgba(0,0,0,0.7)", backdropFilter: "blur(4px)" }}
                      >
                        <OptimizedImage
                          src={`https://flagcdn.com/w40/${pin.flag}.png`}
                          className="w-3 h-2 object-cover rounded-[1px]"
                          alt={pin.label}
                          loading="lazy"
                        />
                        {pin.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Stats Bar */}
                <div className="mx-4 mb-4 mt-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-3 grid grid-cols-3 gap-2 text-center">
                  <div>
                    <div className="text-[#FFD700] font-black text-lg">5</div>
                    <div className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Continents</div>
                  </div>
                  <div className="border-x border-white/10">
                    <div className="text-[#FFD700] font-black text-lg">30+</div>
                    <div className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Countries</div>
                  </div>
                  <div>
                    <div className="text-[#FFD700] font-black text-lg">-18°C</div>
                    <div className="text-[9px] text-white/60 font-bold uppercase tracking-wider">Cold Chain</div>
                  </div>
                </div>

              </div>
            </motion.div>

            {/* RIGHT COLUMN: Compact Region List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-2.5"
            >
              {exportDestinations.map((dest, idx) => {
                const isFilteredOut = selectedFilter !== "All" && selectedFilter !== dest.region;
                if (isFilteredOut) return null;
                const isActive = hoveredRegionIndex === idx;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredRegionIndex(idx)}
                    onMouseLeave={() => setHoveredRegionIndex(null)}
                    className={`group relative flex items-start gap-4 px-4 py-3.5 rounded-2xl border transition-all duration-300 cursor-default ${
                      isActive
                        ? "bg-[#0f2d1a] border-[#1a5c30] shadow-lg"
                        : "bg-white border-gray-100 hover:border-[#1a5c30]/40 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Left accent line */}
                    <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full transition-all duration-300 ${
                      isActive ? "bg-[#FFD700]" : "bg-gray-200 group-hover:bg-[#1a5c30]/30"
                    }`} />

                    {/* Region index number */}
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black transition-all duration-300 ${
                      isActive ? "bg-[#FFD700] text-[#0f2d1a]" : "bg-[#1a5c30]/10 text-[#1a5c30]"
                    }`}>
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <div className="flex-1 min-w-0">
                      {/* Top row: title + badge + transit */}
                      <div className="flex items-center flex-wrap gap-2 mb-1.5">
                        <h3 className={`font-black text-sm sm:text-base transition-colors ${
                          isActive ? "text-white" : "text-gray-900"
                        }`}>
                          {dest.region}
                        </h3>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors ${
                          isActive ? "bg-[#FFD700] text-[#0f2d1a]" : "bg-[#12311E]/10 text-[#12311E]"
                        }`}>
                          {dest.badge}
                        </span>
                        <span className={`ml-auto text-[10px] font-semibold flex items-center gap-1 ${
                          isActive ? "text-[#FFD700]" : "text-gray-400"
                        }`}>
                          ⚡ {dest.transitTime}
                        </span>
                      </div>

                      {/* Flag pills row */}
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {dest.flags.map((flagObj) => (
                          <div
                            key={flagObj.code}
                            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all duration-200 ${
                              isActive
                                ? "bg-white/10 text-white border border-white/20"
                                : "bg-gray-50 border border-gray-200 text-gray-700"
                            }`}
                          >
                            <OptimizedImage
                              src={`https://flagcdn.com/w40/${flagObj.code}.png`}
                              alt={flagObj.name}
                              className="w-3.5 h-2.5 object-cover rounded-[2px]"
                              loading="lazy"
                            />
                            {flagObj.name}
                          </div>
                        ))}
                        {/* Ports */}
                        <span className={`ml-auto text-[10px] hidden sm:block font-medium ${
                          isActive ? "text-white/50" : "text-gray-400"
                        }`}>
                          🚢 {dest.ports}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

          </div>

        </div>
      </section>

      {/* ──── STATISTICS SECTION ──── */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-10 bg-[#0f2d1a] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 text-center">

            <div className="p-3 sm:p-4 space-y-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 sm:pb-4">
              <StatCounter value="10+" />
              <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80 leading-snug mt-1">Product Categories</p>
              <p className="text-[10px] sm:text-[11px] text-[#FFD700]">Frozen & Ready-to-Eat</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1 border-b lg:border-b-0 lg:border-r border-white/10 pb-6 sm:pb-4">
              <StatCounter value="30+" />
              <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80 leading-snug mt-1">Export Destinations</p>
              <p className="text-[10px] sm:text-[11px] text-[#FFD700]">Across 5 Continents</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1 border-b sm:border-b-0 lg:border-r border-white/10 pt-6 sm:pt-4">
              <StatCounter value="100%" />
              <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80 leading-snug mt-1">Quality Checked</p>
              <p className="text-[10px] sm:text-[11px] text-[#FFD700]">Multi-stage Inspection</p>
            </div>

            <div className="p-3 sm:p-4 space-y-1 pt-6 sm:pt-4">
              <StatCounter value="24/7" />
              <p className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold text-white/80 leading-snug mt-1">Cold Chain Operations</p>
              <p className="text-[10px] sm:text-[11px] text-[#FFD700]">IoT Monitored</p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}