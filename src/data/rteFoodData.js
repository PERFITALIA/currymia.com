// ─── Currymia RTE Food Products Data (Sourced from Real Product Packaging) ───
// Real Retort Ready-to-Eat products matching physical packaging artwork

import jainDalFryImg       from "../assets/product/rte_food/Retort Ready-to-Eat/jain_dal_fry.png";
import jainVegKolhapuriImg from "../assets/product/rte_food/Retort Ready-to-Eat/jain_veg_kolhapuri.png";
import vegBiryaniImg       from "../assets/product/rte_food/Retort Ready-to-Eat/veg_biryani.png";

export const rteFoodCategories = [
  // ─────────────────────────────────────────────
  //  CATEGORY 1 — CLASSIC RANGE
  // ─────────────────────────────────────────────
  {
    id: "classic-range",
    title: "CLASSIC RANGE",
    subtitle: "Authentic North Indian recipes retort-processed for global shelf stability",
    badge: "1 SKU • 280g Retort Pouch",
    badgeTag: "CLASSIC",
    color: "from-amber-500/10 to-amber-100/10",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-700",
    products: [
      {
        id: "rte-c-1",
        title: "Veg Biryani",
        subtitle: "Authentic Indian Recipe",
        tagline: "280g · Retort Processed · Ready to Eat",
        desc: "Aromatic basmati rice cooked with mixed vegetables, flavorful spices and a hint of saffron. Perfect for anytime cravings.",
        image: vegBiryaniImg,
        ribbonText: "BESTSELLER",
        ribbonColor: "bg-[#8A4FFF]",
        badgeTag: "280g RETORT POUCH",
        packSize: "280g (9.88 oz)",
        processType: "Retort Processed",
        origin: "India",
        items: [
          "No Preservatives",
          "Made with Real Spices",
          "High in Protein",
          "Ready in Minutes",
          "Medium Spice",
          "Just Heat & Enjoy",
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────
  //  CATEGORY 2 — PUNJABI RANGE
  // ─────────────────────────────────────────────
  {
    id: "jain-range",
    title: "PUNJABI RANGE",
    subtitle: "Authentic Punjabi recipes crafted with rich spices and home-style flavours",
    badge: "2 SKUs • 280g Retort Pouch",
    badgeTag: "PUNJABI",
    color: "from-emerald-500/10 to-emerald-100/10",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-700",
    products: [
      {
        id: "rte-j-1",
        title: "Dal Fry",
        subtitle: "Authentic Indian Recipe",
        tagline: "280g · Homestyle Recipe",
        desc: "A comforting and wholesome preparation of toor dal tempered with aromatic spices and herbs. Simple, pure and packed with homemade goodness.",
        image: jainDalFryImg,
        ribbonText: "HOMESTYLE RECIPE",
        ribbonColor: "bg-[#E67E22]",
        badgeTag: "TRADITIONAL DAL",
        packSize: "280g (9.88 oz)",
        processType: "Retort Processed",
        origin: "India",
        items: [
          "Authentic Dal Taste",
          "No Preservatives",
          "Made with Real Spices",
          "High in Protein",
          "Ready in Minutes",
          "Medium Spice",
        ],
      },
      {
        id: "rte-j-2",
        title: "Veg Kolhapuri",
        subtitle: "Authentic Indian Recipe",
        tagline: "280g · Rich & Spicy Gravy",
        desc: "A medley of fresh vegetables cooked in a rich, spicy Kolhapuri gravy with aromatic spices and herbs. A timeless classic made for today's table.",
        image: jainVegKolhapuriImg,
        ribbonText: "AUTHENTIC GRAVY",
        ribbonColor: "bg-[#E67E22]",
        badgeTag: "SPECIALTY GRAVY",
        packSize: "280g (9.88 oz)",
        processType: "Retort Processed",
        origin: "India",
        items: [
          "Authentic Kolhapuri Taste",
          "No Preservatives",
          "Made with Real Spices",
          "High in Protein",
          "Ready in Minutes",
          "Medium Spice",
        ],
      },
    ],
  },
];
