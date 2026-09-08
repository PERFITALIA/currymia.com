import { motion, useScroll, useSpring } from "framer-motion";
import {
  ShieldCheck, Microscope, BadgeCheck, ClipboardList,
  ThumbsUp, Award, CheckCircle, Zap, ChevronRight,
  TestTube, Sparkles, Binary, HeartPulse, FileCheck
} from "lucide-react";
import testingImg from "../assets/testin.png";
import OptimizedImage from "../common/OptimizedImage";
import useSEO from "../hooks/useSEO";

const certifications = [
  { name: "FSSAI", desc: "Food Safety & Standards Authority of India", color: "border-emerald-400/40 bg-emerald-50" },
  { name: "HACCP", desc: "Hazard Analysis Critical Control Point", color: "border-sky-400/40 bg-sky-50" },
  { name: "ISO 22000", desc: "International Food Safety Management", color: "border-purple-400/40 bg-purple-50" },
  { name: "BRC", desc: "British Retail Consortium Global Standard", color: "border-rose-400/40 bg-rose-50" },
  { name: "Halal", desc: "Certified Halal for global Muslim markets", color: "border-amber-400/40 bg-amber-50" },
  { name: "APEDA", desc: "Agricultural & Processed Food Export Authority", color: "border-teal-400/40 bg-teal-50" },
];

const processes = [
  {
    step: "01",
    icon: <Microscope size={24} />,
    title: "Raw Material Testing",
    desc: "Every incoming batch of produce is tested for pesticide residue, microbial load, and nutritional composition before entering production.",
  },
  {
    step: "02",
    icon: <ClipboardList size={24} />,
    title: "In-Process Monitoring",
    desc: "HACCP-based checkpoints at each critical control stage ensure consistency in texture, temperature, and hygiene during processing.",
  },
  {
    step: "03",
    icon: <Zap size={24} />,
    title: "IQF & Cold Chain Control",
    desc: "State-of-the-art Individual Quick Freezing locks in freshness. Our cold chain maintains -18°C from processing to final shipping.",
  },
  {
    step: "04",
    icon: <BadgeCheck size={24} />,
    title: "Final Product QC",
    desc: "Finished goods undergo visual, sensory, microbiological, and shelf-life testing before batch approval and dispatch.",
  },
];

const labCapabilities = [
  {
    icon: <Microscope className="w-5 h-5 text-emerald-600" />,
    title: "Microbiological Testing",
    desc: "In-house pathogen screening (Salmonella, E. Coli, Listeria) for zero-risk export safety."
  },
  {
    icon: <TestTube className="w-5 h-5 text-amber-600" />,
    title: "Pesticide Residue Analysis",
    desc: "Multi-residue testing ensuring compliance with EU, US FDA, and Gulf import norms."
  },
  {
    icon: <Binary className="w-5 h-5 text-sky-600" />,
    title: "Metal Detection & X-Ray",
    desc: "Dual-stage high-sensitivity detectors on every single automated packing line."
  },
  {
    icon: <HeartPulse className="w-5 h-5 text-rose-600" />,
    title: "Sensory & Nutritional Control",
    desc: "Organoleptic panel evaluations for color, aroma, crunch, and nutritional retention."
  }
];

const whyPoints = [
  "Zero compromises on food safety — ever",
  "In-house laboratory with certified testing equipment",
  "Trained QA team with global food safety expertise",
  "Third-party audits and certifications for export markets",
  "Full traceability from farm to final shipment",
  "Real-time data logging at each production stage",
];

export default function QualityPage() {
  useSEO({
    title: "Quality & Certifications | Currymia Foods Limited",
    description: "Discover Currymia's quality assurance standards: BRC, FSSAI, HACCP, Halal, APEDA, and ISO 22000 certified manufacturing processes.",
    canonical: "/quality",
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

      {/* Hero Section (Clean Centered Hero) */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-[#FFD700]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-emerald-400/10 blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-block text-[#FFD700] text-xs font-bold tracking-[4px] sm:tracking-[5px] uppercase mb-4 sm:mb-6 border border-[#FFD700]/30 px-3 sm:px-4 py-1.5 rounded-full"
          >
            Quality Assurance
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-5 sm:mb-6"
          >
            Zero Compromise on <span className="text-[#FFD700]">Quality & Safety</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          >
            At Currymia Foods, quality is embedded into every workflow. From farm-level procurement to in-house microbiological lab screening, every batch meets strict international standards.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 items-center"
          >
            <a
              href="#lab-section"
              className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-6 sm:px-8 py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-yellow-500/20 text-sm sm:text-base"
            >
              Explore In-House Lab <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#certifications"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white font-semibold px-6 sm:px-7 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/10 text-sm sm:text-base"
            >
              Global Certifications
            </a>
          </motion.div>

          {/* Key Highlights */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-white/10 max-w-lg mx-auto"
          >
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFD700]">100%</div>
              <div className="text-white/60 text-xs sm:text-sm mt-0.5 font-medium">Batch Checked</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFD700]">24+</div>
              <div className="text-white/60 text-xs sm:text-sm mt-0.5 font-medium">Lab Checks/Batch</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl lg:text-3xl font-black text-[#FFD700]">6+</div>
              <div className="text-white/60 text-xs sm:text-sm mt-0.5 font-medium">Global Standards</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase">Our Process</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3">
            How We Ensure Quality at Every Step
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {processes.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl sm:text-5xl font-black text-[#FFD700]/30 mb-2">{p.step}</div>
              <div className="text-[#0f2d1a] mb-2 sm:mb-3">{p.icon}</div>
              <h3 className="font-bold text-[#0f2d1a] text-base sm:text-lg mb-1.5 sm:mb-2">{p.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-6 sm:leading-7">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dedicated Laboratory Showcase Section featuring testin.png */}
      <section id="lab-section" className="py-14 sm:py-20 bg-gradient-to-b from-[#f4f8f5] to-[#FAF8F5] border-y border-emerald-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Image Feature - Animated Circular Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col items-center justify-center relative py-6"
            >
              {/* Pulsing Circular Ambient Background Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.12, 1],
                  opacity: [0.4, 0.75, 0.4]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4.5,
                  ease: "easeInOut"
                }}
                className="absolute w-80 sm:w-96 lg:w-[450px] h-80 sm:h-96 lg:h-[450px] rounded-full bg-gradient-to-tr from-emerald-500/20 via-[#FFD700]/20 to-emerald-300/15 blur-3xl -z-10 pointer-events-none"
              />

              {/* Main Circular Container */}
              <div className="relative group">
                
                {/* Continuously Rotating Outer Golden Orbital Ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 30,
                    ease: "linear"
                  }}
                  className="absolute -inset-4 sm:-inset-6 rounded-full border-2 border-dashed border-[#FFD700]/70 pointer-events-none"
                />

                {/* Counter-Rotating Inner Dotted Accent Ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 40,
                    ease: "linear"
                  }}
                  className="absolute -inset-2 sm:-inset-3 rounded-full border border-dotted border-emerald-600/35 pointer-events-none"
                />

                {/* Central Circular Image Frame - Completely Clear & Unobstructed */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[390px] lg:h-[390px] rounded-full overflow-hidden shadow-2xl border-4 sm:border-8 border-white ring-4 ring-[#0f2d1a]/15 bg-stone-100">
                  <OptimizedImage
                    src={testingImg}
                    alt="In-House Food Safety & Quality Control Laboratory"
                    imgClassName="w-full h-full object-cover object-[52%_35%] rounded-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    priority={true}
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Floating Top-Left Badge with Smooth Continuous Float */}
                <motion.div
                  animate={{
                    y: [0, -8, 0],
                    x: [0, 2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3.6,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 rounded-2xl shadow-xl border border-emerald-100/90 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="p-2 bg-emerald-100/90 rounded-xl text-emerald-800 shadow-sm flex items-center justify-center">
                    <Microscope className="w-4 h-4 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-extrabold text-gray-900 leading-tight">In-House Lab</div>
                    <div className="text-[10px] text-gray-500 font-semibold">Bio & Chemical QA</div>
                  </div>
                </motion.div>

                {/* Floating Bottom-Left Verified Badge with Smooth Continuous Float */}
                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    x: [0, -2, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.2,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-6 bg-[#0f2d1a] text-white px-3.5 sm:px-4 py-2 rounded-2xl shadow-xl border border-[#FFD700]/30 flex items-center gap-2.5 z-20 hover:scale-105 transition-transform cursor-pointer"
                >
                  <div className="p-2 bg-[#FFD700]/20 rounded-xl text-[#FFD700] shadow-sm flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] sm:text-xs font-black text-[#FFD700] leading-tight">100% Tested</div>
                    <div className="text-[10px] text-white/80 font-medium">Zero-Risk Export</div>
                  </div>
                </motion.div>

                {/* Floating Right Certified Stamp with Smooth Continuous Wobble */}
                <motion.div
                  animate={{
                    y: [-6, 6, -6],
                    rotate: [0, 3, 0, -3, 0]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.8,
                    ease: "easeInOut",
                    delay: 1.0
                  }}
                  className="absolute top-1/2 -right-4 sm:-right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-full shadow-2xl border border-emerald-100 flex flex-col items-center justify-center text-center w-20 h-20 sm:w-24 sm:h-24 z-20 hover:scale-105 transition-transform cursor-pointer"
                >
                  <BadgeCheck className="w-6 h-6 sm:w-7 sm:h-7 text-emerald-600 mb-0.5" />
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-900 uppercase tracking-tighter leading-tight">
                    FSSAI & ISO
                  </span>
                  <span className="text-[8px] font-bold text-emerald-700 uppercase tracking-widest">
                    Approved
                  </span>
                </motion.div>

              </div>
            </motion.div>

            {/* Right Capabilities Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-200 text-emerald-900 text-xs font-bold tracking-wider uppercase mb-3">
                <Microscope className="w-3.5 h-3.5 text-emerald-700" />
                Lab Capabilities
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] leading-tight mb-3">
                Advanced In-House <span className="text-emerald-700">Testing Standards</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Equipped with advanced instruments for real-time batch inspection, ensuring strict compliance with global food safety & export standards.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {labCapabilities.map((cap, idx) => (
                  <motion.div
                    key={cap.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="bg-white rounded-xl p-4 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all"
                  >
                    <div className="p-2.5 bg-emerald-50/80 rounded-lg w-fit mb-2.5">
                      {cap.icon}
                    </div>
                    <h4 className="font-bold text-[#0f2d1a] text-base mb-1">{cap.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{cap.desc}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-xl bg-[#0f2d1a] text-white flex items-center justify-between gap-4 shadow-lg shadow-emerald-950/10">
                <div className="flex items-center gap-3">
                  <FileCheck className="w-6 h-6 text-[#FFD700] flex-shrink-0" />
                  <div>
                    <div className="font-bold text-sm">Full Batch Traceability</div>
                    <div className="text-white/70 text-xs">Farm origin to container seal logging</div>
                  </div>
                </div>
                <a href="#contact" className="text-xs font-bold bg-[#FFD700] text-black px-3.5 py-2 rounded-lg hover:bg-yellow-400 transition-colors whitespace-nowrap">
                  View Logs →
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-10 sm:mb-14">
            <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase">Certifications</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3">
              Internationally Recognised Standards
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className={`rounded-xl sm:rounded-2xl border ${cert.color} p-4 sm:p-6 flex items-center gap-4 sm:gap-5 hover:shadow-md transition-all`}
              >
                <Award size={28} className="text-[#0f2d1a] flex-shrink-0 sm:size-9" />
                <div>
                  <div className="font-black text-[#0f2d1a] text-lg sm:text-xl">{cert.name}</div>
                  <div className="text-gray-500 text-xs sm:text-sm mt-0.5">{cert.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why our quality */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase">Why It Matters</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a] mt-2 sm:mt-3 mb-4 sm:mb-6 leading-tight">
              Quality That Opens <span className="text-[#FFD700]">Global Markets</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-base leading-7 sm:leading-8 mb-6 sm:mb-8">
              Retail chains and distributors across Europe, the Middle East, and Asia trust Currymia Foods because our quality standards match — and often exceed — the requirements of the world's most demanding markets.
            </p>
            <ul className="space-y-2.5 sm:space-y-3">
              {whyPoints.map((pt) => (
                <li key={pt} className="flex items-start gap-2.5 sm:gap-3 text-gray-700 text-xs sm:text-sm">
                  <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {[
              { icon: <ShieldCheck size={24} />, label: "Food Safety", val: "100%" },
              { icon: <ThumbsUp size={24} />, label: "Customer Satisfaction", val: "98%" },
              { icon: <Microscope size={24} />, label: "Lab Tests/Batch", val: "24+" },
              { icon: <BadgeCheck size={24} />, label: "Active Certifications", val: "6+" },
            ].map((s) => (
              <div key={s.label} className="bg-[#0f2d1a] rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-[#FFD700] flex justify-center mb-2 sm:mb-3">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-black text-white">{s.val}</div>
                <div className="text-white/60 text-xs sm:text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0f2d1a] py-14 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">
            Want Our Full Quality Documentation?
          </h2>
          <p className="text-white/60 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg">
            We provide full audit reports, certificates, and lab test results to verified buyers and distributors.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl transition-all hover:-translate-y-0.5 shadow-lg shadow-yellow-500/30 text-sm sm:text-base">
            Request Documentation <ChevronRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}

