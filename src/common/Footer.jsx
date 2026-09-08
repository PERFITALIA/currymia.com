// Premium Footer.jsx
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import OptimizedImage from "./OptimizedImage";
import {
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FiChevronRight } from "react-icons/fi";

const footerLinks = {
  Products: ["Frozen Vegetables", "Frozen Snacks", "Parathas & Naan", "Frozen Momos", "Ready-to-Eat Meals", "Fruit Pulp"],
  Segments: ["Fruit & Vegetables", "Proteins (Meat)", "Export Division", "Domestic Division", "Retail Portions"],
  Company: ["About Us", "Leadership", "Manufacturing", "Quality", "Export Markets"],
};

const socials = [
  { icon: <FaWhatsapp />, href: "https://wa.me/919850032743", target: "_blank", rel: "noopener noreferrer", title: "WhatsApp" },
  { icon: <FaFacebookF />, href: "https://facebook.com", target: "_blank", rel: "noopener noreferrer", title: "Facebook" },
  { icon: <MdEmail />, href: "mailto:Sunil@currymia.com", title: "Email" },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleNavClick = (e, item) => {
    e.preventDefault();
    let path = "/";
    let hash = "";

    switch (item) {
      // Products Links
      case "Frozen Vegetables":
        path = "/products/frozen-vegetable-collection";
        break;
      case "Frozen Snacks":
      case "Parathas & Naan":
      case "Frozen Momos":
      case "Ready-to-Eat Meals":
      case "Fruit Pulp":
        path = "/products/rte-food-products";
        break;

      // Business Segments Links
      case "Fruit & Vegetables":
        path = "/business-segments/fruit-and-vegetables";
        break;
      case "Proteins (Meat)":
        path = "/business-segments/proteins";
        break;
      case "Export Division":
        path = "/business-segments/fruit-and-vegetables/export";
        break;
      case "Domestic Division":
        path = "/business-segments/fruit-and-vegetables/domestic";
        break;
      case "Retail Portions":
        path = "/business-segments/proteins/retail";
        break;

      // Company Links
      case "About Us":
        path = "/about";
        break;
      case "Leadership":
        path = "/leadership";
        break;
      case "Manufacturing":
        path = "/about";
        hash = "#manufacturing";
        break;
      case "Infrastructure":
        path = "/about";
        hash = "#infrastructure";
        break;
      case "Quality":
        path = "/quality";
        break;
      case "Gallery":
        path = "/";
        hash = "#gallery";
        break;

      // Export Links
      case "Export Markets":
      case "Private Label":
      case "Logistics":
        path = "/export";
        break;
      case "Certifications":
        path = "/";
        hash = "#certifications";
        break;

      default:
        path = "/products/frozen-vegetable-collection";
    }

    navigate(path);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
        else window.scrollTo({ top: 0, behavior: "smooth" });
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleEnquiryClick = (e) => {
    e.preventDefault();
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/contactus");
    }
  };

  return (
    <footer className="relative w-full max-w-full overflow-x-hidden bg-gradient-to-br from-[#05160d] via-[#0b2b18] to-black text-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-yellow-400/10 blur-[100px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-[420px] sm:h-[420px] rounded-full bg-green-500/10 blur-[110px] sm:blur-[140px]" />
        <div className="absolute top-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-14 box-border">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-9 sm:gap-10"
        >

          {/* Logo / About */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <OptimizedImage src={logo} className="h-10 sm:h-12 mb-4 sm:mb-5 hover:opacity-90 transition-opacity" alt="Currymia Foods" loading="lazy" />
            </Link>
            <p className="text-gray-300 leading-7 sm:leading-8 text-sm sm:text-base max-w-xs md:max-w-none">
              Premium frozen food manufacturer & global export partner.
            </p>

            <div className="flex flex-row items-center gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center md:justify-start flex-nowrap">
              {socials.map((s, i) => (
                <motion.a
                  whileHover={{ scale: 1.10, y: -3 }}
                  key={i}
                  href={s.href}
                  target={s.target}
                  rel={s.rel}
                  title={s.title}
                  onClick={s.href === "#contact" ? handleEnquiryClick : undefined}
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/5 border border-yellow-400/20 text-yellow-400 flex items-center justify-center transition-all text-base sm:text-lg hover:bg-yellow-400 hover:text-black flex-shrink-0"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns (Products, Company, Export) */}
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-yellow-400 font-bold tracking-[2px] sm:tracking-[4px] uppercase text-xs sm:text-sm mb-4 sm:mb-5">
                {title}
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, item)}
                      className="flex items-start gap-2 text-gray-300 hover:text-yellow-300 transition text-xs sm:text-sm leading-snug cursor-pointer group"
                    >
                      <FiChevronRight className="text-yellow-400 mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Details */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <h3 className="text-yellow-400 font-bold tracking-[2px] sm:tracking-[4px] uppercase text-xs sm:text-sm mb-4 sm:mb-5">
              Contact
            </h3>

            <div className="flex flex-col gap-4">
              {/* Location */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0">
                  <MdLocationOn className="text-yellow-400 text-sm" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-xs sm:text-sm">Location</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar.</p>
                </div>
              </div>

              {/* Email */}
              <a
                href="mailto:Sunil@currymia.com"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-400 transition-all">
                  <MdEmail className="text-yellow-400 group-hover:text-black text-sm" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-white font-medium text-xs sm:text-sm group-hover:text-yellow-400 transition-colors">Email</h4>
                  <p className="text-gray-400 text-xs break-all">Sunil@currymia.com</p>
                </div>
              </a>

              {/* Marketing Leadership Phones */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MdPhone className="text-yellow-400 text-sm" />
                </div>
                <div className="min-w-0 text-xs">
                  <h4 className="text-white font-medium text-xs sm:text-sm mb-1">Marketing Leaders</h4>
                  <div className="space-y-1">
                    <a href="tel:9850032743" className="block text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap">
                      Sunil Shinde: <span className="font-semibold text-white">+91 98500 32743</span>
                    </a>
                    <a href="tel:+971506173857" className="block text-gray-300 hover:text-yellow-400 transition-colors whitespace-nowrap">
                      Mr. Anurag: <span className="font-semibold text-white">+97 15061 73857</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        <div className="my-6 sm:my-5 h-px bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
          <div className="flex gap-6 text-sm"></div>
        </div>

      </div>
    </footer>
  );
}