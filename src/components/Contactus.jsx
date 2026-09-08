import useSEO from "../hooks/useSEO";

export default function ContactUsHero() {
  useSEO({
    title: "Contact Us | Currymia Foods Limited",
    description: "Get in touch with Currymia Foods Limited for export inquiries, private label food partnerships, bulk frozen vegetables, and ready meals.",
    canonical: "/contactus",
  });
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2419] via-[#0d2d20] to-[#123a29] px-6 py-24 text-center">
      {/* top gold hairline */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#e8c34a] to-transparent opacity-80" />

      <div className="relative z-10 mx-auto max-w-2xl">
        <span className="inline-block rounded-full border border-[#e8c34a]/50 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#e8c34a]">
          We'd Love to Hear From You
        </span>

        <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Contact Currymia
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#b9c9bf] sm:text-lg">
          Questions about our frozen vegetables, bulk orders, or distribution
          partnerships? Reach our team and we'll get back to you within one
          business day.
        </p>
      </div>
    </section>
  );
}