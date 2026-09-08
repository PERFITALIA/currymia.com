import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, ChevronRight, Snowflake, ShoppingBag, Apple, Beef } from "lucide-react";
import logo from "../assets/logo.png";
import OptimizedImage from "./OptimizedImage";

/* ─── Two main product categories ───────────────────────────── */
const productCategories = [
  {
    label: "Currymia Frozen Vegetable Collection",
    path: "/products/frozen-vegetable-collection",
    desc: "IQF Vegetables, Frozen Snacks, Parathas & Momos",
    icon: <Snowflake size={20} className="text-[#FFD700]" />,
  },
  {
    label: "Currymia RTE Food Products",
    path: "/products/rte-food-products",
    desc: "Ready-to-Eat Meals & Natural Fruit Pulps",
    icon: <ShoppingBag size={20} className="text-[#FFD700]" />,
  },
];

/* ─── Business Segments Hierarchy ────────────────────────────── */
const businessSegmentsList = [
  {
    label: "Fruit & Vegetables",
    id: "fruit-and-vegetables",
    path: "/business-segments/fruit-and-vegetables",
    icon: <Apple size={18} className="text-emerald-400" />,
    items: [
      { label: "Export", path: "/business-segments/fruit-and-vegetables/export" },
      { label: "Domestic", path: "/business-segments/fruit-and-vegetables/domestic" },
    ],
  },
  {
    label: "Proteins",
    id: "proteins",
    path: "/business-segments/proteins",
    icon: <Beef size={18} className="text-amber-400" />,
    items: [
      { label: "Frozen Meat", path: "/business-segments/proteins/frozen-meat" },
      { label: "Chilled Meat", path: "/business-segments/proteins/chilled-meat" },
      { label: "Retail", path: "/business-segments/proteins/retail" },
    ],
  },
];

/* ─── Top-level nav links ──────────────────────────────────────── */
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products/frozen-vegetable-collection", hasDropdown: true },
  { label: "Leadership", path: "/leadership" },
  { label: "Business Segments", path: "/business-segments", hasBusinessDropdown: true },
  { label: "Quality", path: "/quality" },
  { label: "Export", path: "/export" },
  { label: "Contact Us", path: "/contactus" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [bizDropOpen, setBizDropOpen] = useState(false);
  const [activeBizHover, setActiveBizHover] = useState("fruit-and-vegetables");

  // Mobile menu accordions
  const [mobileBizOpen, setMobileBizOpen] = useState(false);
  const [mobileProdOpen, setMobileProdOpen] = useState(false);

  const dropRef = useRef(null);
  const bizDropRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  /* scroll shadow (passive listener for 60fps scroll performance) */
  useEffect(() => {
    let ticking = false;
    const fn = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  /* close dropdowns on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) {
        setDropOpen(false);
      }
      if (bizDropRef.current && !bizDropRef.current.contains(e.target)) {
        setBizDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler, { passive: true });
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* close dropdown on route change and sync active segment */
  useEffect(() => {
    setDropOpen(false);
    setBizDropOpen(false);
    setMobileOpen(false);

    if (location.pathname.includes("proteins")) {
      setActiveBizHover("proteins");
    } else if (location.pathname.includes("fruit-and-vegetables")) {
      setActiveBizHover("fruit-and-vegetables");
    }
  }, [location.pathname]);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropOpen(false);
    setBizDropOpen(false);

    if (link.hash) {
      if (location.pathname !== link.path) {
        navigate(link.path);
        setTimeout(() => {
          const el = document.querySelector(link.hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        const el = document.querySelector(link.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(link.path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    setDropOpen(false);
    setBizDropOpen(false);
    const el = document.querySelector("#contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const goTo = (path) => {
    setDropOpen(false);
    setBizDropOpen(false);
    setMobileOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const isProductsActive = location.pathname.startsWith("/products");
  const isBusinessActive = location.pathname.startsWith("/business-segments");

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ filter: scrolled ? "drop-shadow(0 6px 16px rgba(0,0,0,0.4))" : "none" }}
      >
        <div className="bg-[#0f2d1a]">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="flex items-center justify-between h-16">

              {/* Logo */}
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex items-center gap-2 flex-shrink-0"
              >
                <OptimizedImage src={logo} alt="Currymia Foods" className="h-8 w-auto object-contain" priority={true} />
              </Link>

              {/* ── Desktop nav ── */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path && !link.hash;

                  // ── Products Dropdown ──
                  if (link.hasDropdown) {
                    return (
                      <div key="products" ref={dropRef} className="relative">
                        <button
                          onClick={() => {
                            setDropOpen((v) => !v);
                            setBizDropOpen(false);
                          }}
                          className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-2 rounded-md transition-all duration-200 hover:bg-white/10 ${
                            isProductsActive || dropOpen ? "text-[#FFD700]" : "text-white/85 hover:text-[#FFD700]"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Products Dropdown Panel */}
                        {dropOpen && (
                          <div className="absolute top-[calc(100%+8px)] left-0 bg-gradient-to-b from-[#082414] via-[#051a0e] to-[#03130a] border border-[#FFD700]/30 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.6)] p-2.5 w-[270px] z-50 animate-in fade-in duration-150 backdrop-blur-md">
                            <div className="space-y-1.5">
                              {productCategories.map((cat) => (
                                <button
                                  key={cat.path}
                                  onClick={() => goTo(cat.path)}
                                  className="w-full text-left py-3 px-3 rounded-xl hover:bg-white/10 transition-all duration-150 flex items-start gap-2.5 group border border-transparent hover:border-[#FFD700]/20"
                                >
                                  <div className="p-1.5 rounded-lg bg-[#FFD700]/15 border border-[#FFD700]/30 flex-shrink-0 mt-0.5">
                                    {cat.icon}
                                  </div>
                                  <div className="flex-1">
                                    <p className="text-xs font-bold text-white group-hover:text-[#FFD700] transition-colors leading-snug">
                                      {cat.label}
                                    </p>
                                    <p className="text-[10.5px] text-white/60 mt-0.5 leading-relaxed">
                                      {cat.desc}
                                    </p>
                                  </div>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  // ── Business Segments Cascading Dropdown ──
                  if (link.hasBusinessDropdown) {
                    const activeHoveredSegment =
                      businessSegmentsList.find((s) => s.id === activeBizHover) ||
                      businessSegmentsList[0];

                    return (
                      <div
                        key="business-segments"
                        ref={bizDropRef}
                        className="relative"
                        onMouseEnter={() => setBizDropOpen(true)}
                        onMouseLeave={() => setBizDropOpen(false)}
                      >
                        <button
                          onClick={() => {
                            setBizDropOpen((v) => !v);
                            setDropOpen(false);
                          }}
                          className={`flex items-center gap-1 text-sm font-semibold px-2.5 py-2 rounded-md transition-all duration-200 hover:bg-white/10 ${
                            isBusinessActive || bizDropOpen ? "text-[#FFD700]" : "text-white/85 hover:text-[#FFD700]"
                          }`}
                        >
                          {link.label}
                          <ChevronDown
                            size={14}
                            className={`transition-transform duration-200 ${bizDropOpen ? "rotate-180" : ""}`}
                          />
                        </button>

                        {/* Multi-Level Cascading Dropdown with hover bridge */}
                        {bizDropOpen && (
                          <div className="absolute top-full pt-2 left-0 z-50 animate-in fade-in duration-150">
                            <div className="flex bg-[#061d10] border border-[#FFD700]/30 rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.65)] overflow-hidden backdrop-blur-md">

                              {/* Left Column: Primary Categories */}
                              <div className="w-[195px] p-2 bg-[#04160c] border-r border-white/10 flex flex-col gap-1">
                                <div className="px-2.5 py-1 text-[10px] font-black uppercase tracking-wider text-[#FFD700]/80">
                                  Business Segments
                                </div>
                                {businessSegmentsList.map((seg) => {
                                  const isSelected = activeBizHover === seg.id;
                                  const isCurrentRouteSeg = location.pathname.includes(seg.id);

                                  return (
                                    <button
                                      key={seg.id}
                                      onMouseEnter={() => setActiveBizHover(seg.id)}
                                      onClick={() => goTo(seg.path)}
                                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-left group cursor-pointer ${
                                        isSelected
                                          ? "bg-white/15 text-[#FFD700] border border-[#FFD700]/30"
                                          : isCurrentRouteSeg
                                          ? "bg-white/5 text-white border border-white/10"
                                          : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent"
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        {seg.icon}
                                        <span>{seg.label}</span>
                                      </div>
                                      <ChevronRight
                                        size={14}
                                        className={`transition-transform ${
                                          isSelected ? "translate-x-0.5 text-[#FFD700]" : "text-stone-500 group-hover:text-white"
                                        }`}
                                      />
                                    </button>
                                  );
                                })}
                              </div>

                              {/* Right Column: Flyout Sub-Items */}
                              <div className="w-[160px] p-2 bg-[#082414] flex flex-col justify-center gap-1 min-h-[140px]">
                                <div className="px-2 py-0.5 text-[9.5px] font-bold text-stone-400 uppercase tracking-wide">
                                  {activeHoveredSegment.label}
                                </div>
                                {activeHoveredSegment.items.map((item) => {
                                  const isItemActive = location.pathname === item.path;

                                  return (
                                    <button
                                      key={item.path}
                                      onClick={() => goTo(item.path)}
                                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between group cursor-pointer ${
                                        isItemActive
                                          ? "text-[#FFD700] bg-white/15 font-black shadow-2xs"
                                          : "text-white/90 hover:text-[#FFD700] hover:bg-white/10"
                                      }`}
                                    >
                                      <span>{item.label}</span>
                                      <span className={`text-[#FFD700] transition-opacity ${isItemActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
                                        →
                                      </span>
                                    </button>
                                  );
                                })}
                              </div>

                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <a
                      key={link.label}
                      href={link.path}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`text-sm font-semibold px-2.5 py-2 rounded-md transition-all duration-200 hover:bg-white/10 relative group ${
                        isActive ? "text-[#FFD700]" : "text-white/85 hover:text-[#FFD700]"
                      }`}
                    >
                      {link.label}
                      <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#FFD700] transition-all duration-300 rounded-full ${
                        isActive ? "w-4/5" : "w-0 group-hover:w-4/5"
                      }`} />
                    </a>
                  );
                })}
              </div>

              {/* Right: CTA + Hamburger */}
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={handleEnquiryClick}
                  className="hidden md:inline-flex items-center gap-1.5 bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold text-sm px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40 hover:-translate-y-0.5 cursor-pointer"
                >
                  Request Enquiry
                </a>

                <button
                  onClick={() => setMobileOpen((v) => !v)}
                  className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/10 transition"
                  aria-label="Toggle menu"
                >
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                  <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </button>
              </div>

            </div>
          </div>

          {/* ── Mobile menu ── */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? "max-h-[85vh] overflow-y-auto opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="bg-[#0a2014] border-t border-white/10 px-4 py-4 flex flex-col gap-1.5">

              {navLinks.map((link) => {
                // Products in Mobile Drawer
                if (link.hasDropdown) {
                  return (
                    <div key="mob-products" className="py-1 border-b border-white/5">
                      <button
                        onClick={() => setMobileProdOpen(!mobileProdOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-white/90 hover:bg-white/5"
                      >
                        <span className={isProductsActive ? "text-[#FFD700]" : "text-white"}>Products</span>
                        <ChevronDown size={16} className={`transition-transform ${mobileProdOpen ? "rotate-180 text-[#FFD700]" : "text-stone-400"}`} />
                      </button>

                      {mobileProdOpen && (
                        <div className="mt-1 pl-3 pr-1 flex flex-col gap-1">
                          {productCategories.map((cat) => {
                            const isCatActive = location.pathname === cat.path;
                            return (
                              <button
                                key={cat.path}
                                onClick={() => goTo(cat.path)}
                                className={`w-full text-left py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                                  isCatActive ? "text-[#FFD700] bg-white/10 font-bold" : "text-white/75 hover:bg-white/5"
                                }`}
                              >
                                {cat.label}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                // Business Segments in Mobile Drawer
                if (link.hasBusinessDropdown) {
                  return (
                    <div key="mob-business-segments" className="py-1 border-b border-white/5">
                      <button
                        onClick={() => setMobileBizOpen(!mobileBizOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-bold text-white/90 hover:bg-white/5"
                      >
                        <span className={isBusinessActive ? "text-[#FFD700]" : "text-white"}>Business Segments</span>
                        <ChevronDown size={16} className={`transition-transform ${mobileBizOpen ? "rotate-180 text-[#FFD700]" : "text-stone-400"}`} />
                      </button>

                      {mobileBizOpen && (
                        <div className="mt-1 pl-3 pr-1 flex flex-col gap-2.5 py-1">
                          {businessSegmentsList.map((seg) => (
                            <div key={seg.id} className="bg-white/5 rounded-xl p-2.5 border border-white/5">
                              <div
                                onClick={() => goTo(seg.path)}
                                className="flex items-center gap-2 text-xs font-black text-[#FFD700] uppercase tracking-wider mb-1.5 cursor-pointer"
                              >
                                {seg.icon}
                                <span>{seg.label}</span>
                              </div>
                              <div className="flex flex-col gap-1 pl-5">
                                {seg.items.map((item) => (
                                  <button
                                    key={item.path}
                                    onClick={() => goTo(item.path)}
                                    className="w-full text-left py-1.5 px-2 rounded text-xs font-medium text-white/80 hover:text-[#FFD700] hover:bg-white/5"
                                  >
                                    • {item.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = location.pathname === link.path && !link.hash;

                return (
                  <a
                    key={link.label}
                    href={link.path || "#"}
                    onClick={(e) => handleNavClick(e, link)}
                    className={`hover:text-[#FFD700] hover:bg-white/5 py-2.5 px-3 rounded-lg text-sm font-medium transition-all ${
                      isActive ? "text-[#FFD700] bg-white/5" : "text-white/80"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={handleEnquiryClick}
                className="mt-3 w-full text-center bg-[#FFD700] hover:bg-[#FFC200] text-black font-bold text-sm px-4 py-2.5 rounded-lg transition-all cursor-pointer"
              >
                Enquiry
              </a>
            </div>
          </div>
        </div>

        {/* Curved bottom border */}
        <div className="w-full overflow-hidden leading-none relative bg-transparent pointer-events-none" style={{ height: "28px", marginTop: "-1px" }}>
          <svg viewBox="0 0 1440 28" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0,0 L1440,0 L1440,0 Q720,22 0,0 Z" fill="#0f2d1a" />
            <path d="M0,0 Q720,24 1440,0" fill="none" stroke="#FFD700" strokeWidth="2" />
          </svg>
        </div>
      </nav>
    </>
  );
}