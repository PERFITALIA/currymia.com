import React from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProductCard({
  index = 0,
  title,
  tagline,
  desc,
  icon,
  items = [],
  ribbonText,
  ribbonColor = "bg-[#FF6B5B]",
  badgeTag,
  buttonColor = "bg-[#0f2d1a]",
  buttonText = "VIEW DETAILS",
  linkTo,
}) {
  const navigate = useNavigate();

  const openCategory = () => {
    if (linkTo) {
      navigate(linkTo);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative w-full h-full"
    >
      <div className="bg-white shadow-md hover:shadow-xl flex flex-col rounded-t-2xl sm:rounded-t-3xl overflow-hidden h-full relative transition-shadow duration-300">
        {/* Ribbon Badge */}
        {ribbonText && (
          <div
            className={`absolute top-0 right-4 sm:right-5 w-6 sm:w-7 h-10 sm:h-12 ${ribbonColor} shadow-sm z-10`}
            style={{ clipPath: "polygon(0% 0%,100% 0%,100% 100%,50% 80%,0% 100%)" }}
          />
        )}

        {/* Icon Area — min-height, not fixed height, so it never clips */}
        <div className="p-2.5 sm:p-3">
          <div className="bg-[#FFFDF6] border border-stone-200/40 rounded-2xl min-h-[128px] sm:min-h-[144px] flex flex-col items-center justify-center p-3 text-center">
            <div className="text-4xl sm:text-5xl mb-1">{icon}</div>
            <h3 className="mt-1 font-black text-stone-800 uppercase text-[10px] sm:text-xs leading-tight tracking-wide px-1">
              {title}
            </h3>
            <p className="text-[8px] sm:text-[9px] text-stone-400 mt-0.5 font-semibold">
              {tagline}
            </p>
          </div>
        </div>

        {/* Description — grows naturally, no fixed box */}
        <div className="px-2.5 sm:px-3 py-2 flex-1">
          <h2 className="text-sm sm:text-base font-black text-[#0f2d1a] leading-snug line-clamp-2">
            {title}
          </h2>
          <p className="mt-1 text-[10px] sm:text-xs text-[#6E4A38] leading-4 line-clamp-3">
            {desc}
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            {items.slice(0, 2).map((item, idx) => (
              <span
                key={idx}
                className="text-[7px] sm:text-[8px] font-bold text-[#1a5c30] bg-[#1a5c30]/8 px-1.5 py-0.5 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Rating + Button — pinned to the bottom with mt-auto, never cut off */}
        <div className="px-2.5 sm:px-3 py-2 mt-auto">
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[7px] sm:text-xs font-bold text-[#1a5c30] uppercase tracking-widest">
              {badgeTag}
            </span>
            <div className="flex flex-col items-end">
              <div className="flex gap-0.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={9} className="sm:w-2.5 sm:h-2.5" fill="currentColor" stroke="none" />
                ))}
              </div>
              <span className="text-[6px] sm:text-[7px] text-stone-500 mt-0.5">5.0 (124 Reviews)</span>
            </div>
          </div>

          <button
            onClick={openCategory}
            type="button"
            className={`w-full ${buttonColor} hover:opacity-90 text-white font-bold py-2 px-3 rounded-xl text-[9px] sm:text-xs transition-all shadow-lg`}
          >
            <span className="flex items-center justify-center gap-1.5 font-semibold uppercase tracking-wide">
              {buttonText}
              <ChevronRight size={11} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Curved bottom accent */}
      <svg
        viewBox="0 0 1000 80"
        preserveAspectRatio="none"
        className="w-full h-3 sm:h-4 drop-shadow-md"
        style={{ display: "block", marginTop: "-1px" }}
      >
        <path d="M0 0 L0 15 C180 70 380 80 500 80 C620 80 820 70 1000 15 L1000 0 Z" fill="white" />
      </svg>
    </motion.div>
  );
}