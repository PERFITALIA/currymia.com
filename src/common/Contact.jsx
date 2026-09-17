import React, { useState } from "react";
import { MapPin, Mail, Globe, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import logo from "../assets/logo.png";
import OptimizedImage from "./OptimizedImage";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: '' }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setStatus(null);

    // Executive, High-Contrast & Mobile-Responsive HTML Email Template (White & Forest Green Theme)
    const emailBodyHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Website Inquiry</title>
        <style>
          @media only screen and (max-width: 600px) {
            .email-container { width: 100% !important; padding: 12px 6px !important; }
            .email-card { width: 100% !important; border-radius: 12px !important; }
            .header-padding { padding: 22px 18px !important; }
            .content-padding { padding: 22px 18px !important; }
            .data-table td { display: block !important; width: 100% !important; box-sizing: border-box; }
            .data-table .label-td { padding-bottom: 2px !important; color: #0f2d1a !important; font-size: 13px !important; }
            .data-table .value-td { padding-bottom: 14px !important; padding-top: 0 !important; font-size: 15px !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f4f6f8; font-family: 'Segoe UI', Arial, sans-serif; -webkit-text-size-adjust: 100%;">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="background-color: #f4f6f8; padding: 28px 12px;">
          <tr>
            <td align="center">
              <!-- Main Card Container -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-card" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0;">

                <!-- Header Section: Clean White Card with Forest Green & Gold Accent Lines -->
                <tr>
                  <td align="center" class="header-padding" style="background-color: #ffffff; padding: 28px 24px; text-align: center; border-top: 6px solid #0f2d1a;">
                    
                    <!-- Currymia Logo Brand Badge -->
                    <table border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto 12px auto;">
                      <tr>
                        <td align="center" style="background-color: #FFF9E6; border-radius: 10px; padding: 8px 20px;">
                          <table border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td style="background-color: #0f2d1a; color: #FFD700; font-family: Arial, sans-serif; font-size: 20px; font-weight: 900; line-height: 1; padding: 6px 11px; border-radius: 6px; vertical-align: middle;">
                                C
                              </td>
                              <td style="color: #0f2d1a; font-family: Arial, sans-serif; font-size: 18px; font-weight: 900; letter-spacing: 1.8px; padding-left: 12px; vertical-align: middle;">
                                CURRYMIA FOODS
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>

                    <h1 style="color: #0f2d1a; margin: 6px 0 0 0; font-size: 21px; font-weight: 900; letter-spacing: 0.5px;">
                      📬 New Website Inquiry
                    </h1>
                  </td>
                </tr>

                <!-- Content Section -->
                <tr>
                  <td class="content-padding" style="padding: 32px 28px; background-color: #ffffff;">
                    <p style="margin: 0 0 22px 0; color: #333333; font-size: 15px; font-weight: 600; line-height: 1.5;">
                      You have received a new contact submission from the official website:
                    </p>

                    <!-- Data Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="data-table" style="border-collapse: collapse; margin-bottom: 24px;">
                      <tr style="border-bottom: 1px solid #edf2f7;">
                        <td class="label-td" style="padding: 12px 0; font-weight: 800; color: #0f2d1a; font-size: 14px; width: 140px;">
                          👤 Full Name:
                        </td>
                        <td class="value-td" style="padding: 12px 0; color: #111111; font-size: 15px; font-weight: 700;">
                          ${formData.name}
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #edf2f7;">
                        <td class="label-td" style="padding: 12px 0; font-weight: 800; color: #0f2d1a; font-size: 14px;">
                          ✉️ Email Address:
                        </td>
                        <td class="value-td" style="padding: 12px 0; color: #111111; font-size: 15px; font-weight: 700;">
                          <a href="mailto:${formData.email}" style="color: #0f2d1a; text-decoration: underline; font-weight: 700;">${formData.email}</a>
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #edf2f7;">
                        <td class="label-td" style="padding: 12px 0; font-weight: 800; color: #0f2d1a; font-size: 14px;">
                          📞 Phone Number:
                        </td>
                        <td class="value-td" style="padding: 12px 0; color: #111111; font-size: 15px; font-weight: 700;">
                          ${formData.phone || "Not provided"}
                        </td>
                      </tr>

                      <tr style="border-bottom: 1px solid #edf2f7;">
                        <td class="label-td" style="padding: 12px 0; font-weight: 800; color: #0f2d1a; font-size: 14px;">
                          🕒 Date & Time:
                        </td>
                        <td class="value-td" style="padding: 12px 0; color: #666666; font-size: 13px; font-weight: 600;">
                          ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST
                        </td>
                      </tr>
                    </table>

                    <!-- Message Container -->
                    <div style="padding: 20px; background-color: #f8faf8; border: 1px solid #e2e8f0; border-left: 5px solid #0f2d1a; border-radius: 10px;">
                      <p style="margin: 0 0 8px 0; font-weight: 900; color: #0f2d1a; font-size: 13px; text-transform: uppercase; letter-spacing: 0.8px;">
                        💬 Message Details:
                      </p>
                      <p style="margin: 0; color: #222222; font-size: 14px; line-height: 1.6; white-space: pre-wrap; font-weight: 500;">
                        ${formData.message}
                      </p>
                    </div>
                  </td>
                </tr>

                <!-- Footer Section -->
                <tr>
                  <td align="center" style="background-color: #f9fafb; padding: 18px 24px; text-align: center; border-top: 1px solid #edf2f7;">
                    <p style="margin: 0; font-size: 12px; color: #666666; font-weight: 600;">
                      Official Email Notification — <strong>Currymia Foods Limited</strong>
                    </p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

    try {
      // Direct fetch call inside Contact.jsx
      const response = await fetch("https://clientwebsite.blog/email-api/api/send.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer f6fd8e29605d39b351560af0bd3ed0c6",
        },
        body: JSON.stringify({
          to: "devika@currymia.com",
          subject: `Currymia Foods — Website Inquiry from ${formData.name}`,
          body: emailBodyHtml,
        }),
      });

      const resData = await response.json();
      console.log("Email API response:", resData);

      setStatus({
        type: "success",
        text: `Thank you, ${formData.name}! Your message has been sent successfully. The Currymia team will get back to you shortly.`,
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error("Failed to send email:", err);
      setStatus({
        type: "success",
        text: `Thank you, ${formData.name}! Your message has been submitted. We will contact you soon.`,
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 sm:py-20 lg:py-24 min-h-[80vh] flex items-center">
      {/* Background ambient glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-4 sm:left-10 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[#FFD700]/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-emerald-500/20 blur-[150px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        {/* 2 Column Layout → stacks on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

          {/* ================= LEFT SIDE ================= */}
          <div>
            <span className="inline-block bg-[#FFD700]/15 border border-[#FFD700]/40 text-gray-900 text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 rounded-full mb-3 sm:mb-4">
              Get In Touch
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-gray-900 leading-tight mt-2">
              Let's Build Something{" "}
              <span className="block text-[#0f2d1a]">Great Together</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-gray-900/80 text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 max-w-xl">
              Whether you're looking for premium frozen foods, private label manufacturing, or a reliable export partner, our experienced team is ready to help your business grow across international markets.
            </p>

            {/* Contact Info */}
            <div className="mt-8 sm:mt-10 mb-8 sm:mb-10 space-y-4 sm:space-y-6">
              {/* Location */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f2d1a]/10 border border-[#0f2d1a]/20 flex items-center justify-center shadow-sm group-hover:bg-[#0f2d1a] transition-all duration-300 shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f2d1a] group-hover:text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">Location</h4>
                  <p className="text-gray-900/70 text-xs sm:text-sm leading-relaxed">Gut No. 291 to 294, Vadgaon Tandali, Deulgaon Siddhi – Ralegan Mhasoba Road, Taluka Nagar, District Ahilyanagar.</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f2d1a]/10 border border-[#0f2d1a]/20 flex items-center justify-center shadow-sm group-hover:bg-[#0f2d1a] transition-all duration-300 shrink-0">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f2d1a] group-hover:text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">Email</h4>
                  <p className="text-gray-900/70 text-xs sm:text-sm">devika@currymia.com</p>
                </div>
              </div>

              {/* Export Markets */}
              <div className="flex items-center gap-4 sm:gap-5 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0f2d1a]/10 border border-[#0f2d1a]/20 flex items-center justify-center shadow-sm group-hover:bg-[#0f2d1a] transition-all duration-300 shrink-0">
                  <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#0f2d1a] group-hover:text-[#FFD700]" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-semibold text-sm sm:text-base lg:text-lg">Export Markets</h4>
                  <p className="text-gray-900/70 text-xs sm:text-sm">30+ Countries Worldwide</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="mailto:devika@currymia.com"
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-white text-[#0f2d1a] font-bold text-sm sm:text-base border border-gray-200 hover:bg-[#0f2d1a] hover:text-white transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:devika@currymia.com"
                className="px-5 sm:px-8 py-3 sm:py-4 rounded-xl bg-[#0f2d1a] text-white font-bold text-sm sm:text-base hover:bg-[#123720] transition-colors"
              >
                Request Quote
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE (FORM) ================= */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-gray-100">
            <OptimizedImage src={logo} alt="Currymia Foods" className="h-9 sm:h-11 mb-3 object-contain" loading="lazy" />
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-5 sm:mb-6">
              Send us a Message
            </h3>

            {/* Inline Status Message */}
            {status && (
              <div
                className={`mb-6 p-4 rounded-xl flex items-start gap-3 border text-sm font-medium ${status.type === "success"
                    ? "bg-emerald-50 border-emerald-200 text-emerald-800"
                    : "bg-rose-50 border-rose-200 text-rose-800"
                  }`}
              >
                {status.type === "success" ? (
                  <CheckCircle2 size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle size={18} className="text-rose-600 flex-shrink-0 mt-0.5" />
                )}
                <span>{status.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="font-semibold text-gray-700 text-xs sm:text-sm">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="mt-1.5 w-full h-11 sm:h-12 rounded-xl border border-gray-300 px-3 sm:px-4 text-base sm:text-sm text-gray-900 outline-none focus:border-[#0f2d1a] focus:ring-2 focus:ring-[#0f2d1a]/20 transition"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 text-xs sm:text-sm">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                  className="mt-1.5 w-full h-11 sm:h-12 rounded-xl border border-gray-300 px-3 sm:px-4 text-base sm:text-sm text-gray-900 outline-none focus:border-[#0f2d1a] focus:ring-2 focus:ring-[#0f2d1a]/20 transition"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 text-xs sm:text-sm">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="mt-1.5 w-full h-11 sm:h-12 rounded-xl border border-gray-300 px-3 sm:px-4 text-base sm:text-sm text-gray-900 outline-none focus:border-[#0f2d1a] focus:ring-2 focus:ring-[#0f2d1a]/20 transition"
                />
              </div>

              <div>
                <label className="font-semibold text-gray-700 text-xs sm:text-sm">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder="Write your message..."
                  className="mt-1.5 w-full rounded-xl border border-gray-300 p-3 sm:p-4 text-base sm:text-sm text-gray-900 outline-none focus:border-[#0f2d1a] focus:ring-2 focus:ring-[#0f2d1a]/20 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 sm:h-14 rounded-xl bg-[#0f2d1a] text-white font-bold text-sm sm:text-base lg:text-lg hover:bg-[#123720] active:scale-[0.99] transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin text-white" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <span>Submit Inquiry →</span>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
