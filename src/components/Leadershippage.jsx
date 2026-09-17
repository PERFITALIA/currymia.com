import { motion } from "framer-motion";
import { Quote, Award, Sparkles, Phone, UserCheck, Globe } from "lucide-react";
import useSEO from "../hooks/useSEO";

export default function Leadership() {
  useSEO({
    title: "Leadership & Management Team | Currymia Foods Limited",
    description: "Meet the executive leadership and founders steering Currymia Foods Limited towards global excellence in frozen food manufacturing.",
    canonical: "/leadership",
  });
  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-24 sm:pb-32">
      {/* ── Hero Banner (Seamless Top Header) ── */}
      <section className="relative overflow-hidden bg-[#0f2d1a] pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24">
        {/* Ambient Glow & Grid Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 sm:w-[500px] h-72 sm:h-[500px] rounded-full bg-[#FFD700]/15 blur-[130px]" />
          <div className="absolute bottom-0 left-4 sm:left-10 w-64 sm:w-[420px] h-64 sm:h-[420px] rounded-full bg-emerald-400/15 blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 text-[#FFD700] text-[11px] sm:text-xs font-bold tracking-[3px] uppercase mb-4 sm:mb-6 border border-[#FFD700]/30 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#FFD700]/10 backdrop-blur-sm"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Currymia Foods Limited
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-4 sm:mb-6"
          >
            Founding Vision & <span className="text-[#FFD700]">Leadership</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed sm:leading-8"
          >
            Guided by technical expertise, entrepreneurial vision, and a strong commitment to quality and sustainable growth.
          </motion.p>

          {/* Hero Quick Stat Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-10 pt-8 border-t border-white/15"
          >
            {[
              { label: "Food Safety", val: "Quality." },
              { label: "Trust & Ethics", val: "Integrity." },
              { label: "Advanced Processing", val: "Innovation." },
              { label: "Sustainable Value", val: "Growth." }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 border border-white/10 backdrop-blur-sm p-3 rounded-xl text-center">
                <div className="text-[#FFD700] font-black text-sm sm:text-base">{stat.val}</div>
                <div className="text-white/60 text-[10px] sm:text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Main Leadership Statement Card (Wide max-w-7xl Container) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-12 sm:mt-16 lg:mt-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative bg-white rounded-2xl sm:rounded-3xl border border-stone-200/90 p-6 sm:p-10 lg:p-12 shadow-xl overflow-hidden text-center sm:text-left"
        >
          {/* Top Decorative Gradient Accent Line */}
          <div className="h-2 w-full bg-gradient-to-r from-[#0f2d1a] via-[#FFD700] to-[#0f2d1a] absolute top-0 left-0" />

          {/* Watermark Quote Icon */}
          <Quote className="absolute right-8 top-10 w-28 h-28 sm:w-40 sm:h-40 text-stone-100/70 pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Header Badge & Title */}
            <div className="mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[3px] text-[#0f2d1a] bg-[#0f2d1a]/5 px-3.5 py-1.5 rounded-md border border-[#0f2d1a]/15 inline-block mb-2 sm:mb-3">
                Leadership
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a]">
                Our Leadership
              </h2>
            </div>

            {/* Separator Accent Line */}
            <div className="w-16 h-1 bg-[#FFD700] rounded-full mb-6 sm:mb-8 mx-auto sm:mx-0" />

            {/* User Requested Statement Paragraph */}
            <div>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 font-normal">
                “Our leadership team brings together experience, technical expertise, entrepreneurial vision, and a strong commitment to quality and sustainable growth. Together, we are focused on building a responsible, innovative and customer-centric organisation with long-term value for our stakeholders.”
              </p>
            </div>

            {/* Bottom Leadership Sign-off Line */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0f2d1a]">
                  Executive Leadership Team
                </h3>
                <p className="text-stone-500 text-xs sm:text-sm font-medium mt-0.5">
                  Currymia Foods Limited • Quality & Sustainable Growth Focus
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Director's Message Section (Wide max-w-7xl Container) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0f2d1a] text-white rounded-2xl sm:rounded-3xl border border-[#FFD700]/25 p-6 sm:p-10 lg:p-14 shadow-2xl overflow-hidden text-center sm:text-left"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/10 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/10 rounded-full blur-[100px] pointer-events-none" />

          {/* Watermark Quote Icon */}
          <Quote className="absolute right-8 top-10 w-28 h-28 sm:w-40 sm:h-40 text-white/5 pointer-events-none -z-0" />

          <div className="relative z-10">
            {/* Header Badge & Title */}
            <div className="mb-6 sm:mb-8">
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[3px] text-[#FFD700] bg-[#FFD700]/10 px-3.5 py-1.5 rounded-md border border-[#FFD700]/30 inline-block mb-2 sm:mb-3 backdrop-blur-sm">
                Director's Perspective
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                Director's Message
              </h2>
            </div>

            {/* Separator Accent Line */}
            <div className="w-16 h-1 bg-[#FFD700] rounded-full mb-6 sm:mb-8 mx-auto sm:mx-0" />

            {/* Statement Paragraph */}
            <div>
              <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 font-normal">
                “We are building this organisation with a long-term perspective. Our commitment is to quality, transparency, customer satisfaction and ethical business practices. As we grow, we will continue to embrace new opportunities while remaining grounded in our values and our responsibility towards our stakeholders.”
              </p>
            </div>

            {/* Bottom Director Sign-off Line */}
            <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-white">
                  Board of Directors
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-medium mt-0.5">
                  Currymia Foods Limited • Long-term Ethical Growth
                </p>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-[#FFD700] text-xs font-bold tracking-wider uppercase bg-white/5 border border-white/15 px-4 py-2.5 rounded-lg w-fit shadow-sm self-center sm:self-auto backdrop-blur-sm">
                <Award className="w-4 h-4 text-[#FFD700]" />
                Ethical Responsibility
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Marketing & Commercial Leadership Section (Sleek Non-Rectangular Capsule Layout) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase block mb-2 sm:mb-3">
            Commercial & Growth
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a]">
            Marketing Leaders
          </h2>
          <div className="w-16 h-1 bg-[#FFD700] mx-auto mt-3.5 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-5">
          {/* Leader 1: Mr. Devika Rele Capsule */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full border border-stone-200/90 p-5 sm:p-6 sm:px-8 shadow-md hover:shadow-xl hover:border-[#0f2d1a]/30 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden group"
          >
            {/* Top Subtle Accent Bar */}
            <div className="w-full sm:w-1.5 sm:h-12 bg-[#0f2d1a] rounded-full sm:absolute sm:left-2" />

            <div className="flex items-center gap-4 text-center sm:text-left sm:pl-3">
              <div className="w-12 h-12 rounded-full bg-[#0f2d1a] text-[#FFD700] flex items-center justify-center shrink-0 shadow-md font-bold group-hover:scale-105 transition-transform">
                <UserCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-0.5">
                  <h3 className="text-lg sm:text-xl font-black text-[#0f2d1a]">
                    Mr. Devika Rele
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f2d1a] bg-[#0f2d1a]/10 px-2.5 py-0.5 rounded-full">
                    Marketing Leader
                  </span>
                </div>
               
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <a 
                href="tel:7028046868" 
                className="inline-flex items-center gap-2 bg-[#0f2d1a] text-white font-bold px-5 py-2.5 rounded-full hover:bg-[#FFD700] hover:text-black transition-all text-xs sm:text-sm shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD700] group-hover:text-black" />
                +91 7028046868
              </a>
               
            
            </div>
          </motion.div>

          {/* Leader 2: Mr. Anurag Capsule */}
          {/* <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-full border border-stone-200/90 p-5 sm:p-6 sm:px-8 shadow-md hover:shadow-xl hover:border-[#FFD700]/50 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 relative overflow-hidden group"
          > */}
            {/* Top Subtle Accent Bar */}
            {/* <div className="w-full sm:w-1.5 sm:h-12 bg-[#FFD700] rounded-full sm:absolute sm:left-2" />

            <div className="flex items-center gap-4 text-center sm:text-left sm:pl-3">
              <div className="w-12 h-12 rounded-full bg-[#0f2d1a] text-[#FFD700] flex items-center justify-center shrink-0 shadow-md font-bold group-hover:scale-105 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-0.5">
                  <h3 className="text-lg sm:text-xl font-black text-[#0f2d1a]">
                    Mr. Anurag
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0f2d1a] bg-[#FFD700]/25 px-2.5 py-0.5 rounded-full">
                    Marketing Leader
                  </span>
                </div>
              
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 shrink-0">
              <a 
                href="tel:+971506173857" 
                className="inline-flex items-center gap-2 bg-[#0f2d1a] text-white font-bold px-5 py-2.5 rounded-full hover:bg-[#FFD700] hover:text-black transition-all text-xs sm:text-sm shadow-md"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFD700] group-hover:text-black" />
                +971 50 617 3857
              </a>
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* ── Our Commitment Grid (Wide max-w-7xl Container) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-16 sm:mt-20 lg:mt-24">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f2d1a] text-xs font-bold tracking-[4px] uppercase block mb-2 sm:mb-3">
            Our Pillars
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0f2d1a]">
            Our Commitment
          </h2>
          <div className="w-16 h-1 bg-[#FFD700] mx-auto mt-3.5 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            {
              step: "01",
              title: "Quality.",
              desc: "Uncompromising food safety, in-house lab screening, and zero pesticide residue guarantee on every batch."
            },
            {
              step: "02",
              title: "Integrity.",
              desc: "Complete transparency, ethical business practices, and direct fair-pay partnerships with farming communities."
            },
            {
              step: "03",
              title: "Innovation.",
              desc: "Advanced IQF freezing and retort technology to preserve natural taste and nutrition without artificial preservatives."
            },
            {
              step: "04",
              title: "Growth.",
              desc: "Building sustainable long-term value for customers, partners, and global stakeholders as we expand across 30+ markets."
            }
          ].map((commit) => (
            <div 
              key={commit.title}
              className="bg-white rounded-2xl p-6 border border-stone-200/90 shadow-sm relative overflow-hidden group hover:border-[#0f2d1a]/40 hover:shadow-md transition-all duration-300"
            >
              <div className="h-1 w-12 bg-[#FFD700] mb-4 transition-all duration-300 group-hover:w-20" />
              <div className="text-[#0f2d1a]/20 text-2xl font-black mb-2">{commit.step}</div>
              <h3 className="text-lg font-black text-[#0f2d1a] mb-2">{commit.title}</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{commit.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


