import Link from "next/link.js";
import { information } from "../data/information.js";

export default function Footer() {
  const footerData = {
    navLinks: [
      { name: "About Us", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Packages", href: "#packages" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "FAQ", href: "#faq" },
      { name: "Contact", href: "#contact" },
    ],
  };

  return (
    <footer className="w-full bg-black text-white px-4 md:px-8 py-8 flex flex-col justify-between border-t border-white/10 relative overflow-hidden gap-4">
      {/* ATAS: BRAND STATEMENT, CTA & BACK TO TOP */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 pb-16 border-b border-white/10">
        <div className="flex flex-col gap-4">
          <h2 className="font-serif text-3xl md:text-6xl font-normal text-second leading-tight">
            {information.name}
          </h2>
          <p className="font-sans text-sm text-white/70 max-w-md">
            Luxury celebrations crafted with elegance and precision in{" "}
            {information.city}.
          </p>
        </div>

        {/* CTA & BACK TO TOP */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-second text-primary whitespace-nowrap font-sans text-xs uppercase tracking-[0.2em] font-bold rounded-full hover:bg-second/60 transition-colors duration-300"
          >
            Book Consultation
          </Link>
          <Link
            href="#top"
            className="group flex items-center gap-4 whitespace-nowrap text-xs font-sans uppercase tracking-[0.2em] text-white/70 hover:text-second transition-colors duration-300 p-2"
          >
            <span>Back to top</span>
            <span className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-second group-hover:-translate-y-1 transition-all duration-300">
              ↑
            </span>
          </Link>
        </div>
      </div>

      {/* TENGAH: NAVIGASI, CONNECT (SOSMED & INFO), & MAP */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 py-8 border-b border-white/10">
        {/* 1. NAVIGASI */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-second font-bold">
            Navigation
          </span>
          <nav className="flex flex-col gap-4">
            {footerData.navLinks.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative font-sans text-xs uppercase tracking-[0.2em] text-white/80 hover:text-second transition-colors duration-300 w-fit py-2 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-second transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        {/* 2. CONNECT & SOSMED */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-second font-bold">
            Connect & Office
          </span>
          <div className="flex flex-col gap-4 font-sans text-sm text-white/80">
            <p className="leading-relaxed">{information.address}</p>
            <p>{information.officeHours}</p>
            <div className="flex items-center gap-4 pt-4">
              <Link
                href={`https://instagram.com/${information.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:border-second hover:text-second transition-colors duration-300"
              >
                Instagram
              </Link>
              <Link
                href={`https://wa.me/${information.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:border-second hover:text-second transition-colors duration-300"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* 3. GOOGLE MAPS */}
        <div className="flex flex-col gap-4">
          <span className="font-sans text-xs uppercase tracking-[0.3em] text-second font-bold">
            Location Map
          </span>
          <div
            className="w-full h-[240px] rounded-2xl overflow-hidden border border-white/10 shadow-lg [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
            dangerouslySetInnerHTML={{ __html: information.map }}
          />
        </div>
      </div>

      {/* BAWAH: COPYRIGHT & CREDITS */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-sans text-xs text-white/50">
        <p>© 2026 {information.name}. All Rights Reserved.</p>
        <p className="tracking-widest uppercase">
          Designed for Luxury Celebrations
        </p>
      </div>
    </footer>
  );
}
