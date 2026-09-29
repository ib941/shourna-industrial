"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";

export default function WhatsAppButton() {
  const { isRTL } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  // Phone number: +966 57 452 5139 (formatted for WhatsApp wa.me API)
  const whatsappUrl = "https://wa.me/966574525139";

  return (
    <aside
      aria-label={isRTL ? "زر التواصل عبر واتساب" : "WhatsApp Chat"}
      className="fixed bottom-6 end-6 z-50 flex items-center"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={isRTL ? "تواصل معنا عبر واتساب: +966 57 452 5139" : "Chat with us on WhatsApp: +966 57 452 5139"}
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#00878a] to-[#00A3A6] text-white shadow-xl shadow-[#00A3A6]/35 hover:shadow-2xl hover:shadow-[#00A3A6]/55 hover:scale-108 active:scale-95 transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-4 focus:ring-[#00A3A6]/40"
      >
        {/* Subtle glowing ring using brand leaf green */}
        <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00A3A6] to-[#74B743] opacity-0 group-hover:opacity-60 blur-xs transition-opacity duration-300 pointer-events-none" />

        {/* 24/7 Availability Pulse Indicator using logo leaf green #74B743 */}
        <span className="absolute top-1 end-1 flex h-3.5 w-3.5 z-10 pointer-events-none">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#74B743] opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#74B743] border-2 border-white shadow-xs" />
        </span>

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white relative z-10 drop-shadow-xs transition-transform duration-300 group-hover:scale-105"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2.5C8.544 2.5 2.5 8.544 2.5 16c0 2.628.747 5.08 2.038 7.159L2.83 29.17a1 1 0 0 0 1.258 1.258l6.011-1.708A13.438 13.438 0 0 0 16 29.5c7.456 0 13.5-6.044 13.5-13.5S23.456 2.5 16 2.5zm0 24.5a11.417 11.417 0 0 1-5.787-1.579.997.997 0 0 0-.699-.115l-4.133 1.174 1.174-4.133a.998.998 0 0 0-.115-.699A11.416 11.416 0 0 1 4.5 16C4.5 9.659 9.659 4.5 16 4.5S27.5 9.659 27.5 16 22.341 27 16 27zm6.732-8.324c-.37-.185-2.186-1.078-2.524-1.202-.339-.123-.585-.185-.831.185-.247.37-.954 1.202-1.17 1.448-.215.247-.431.277-.801.093-.37-.185-1.562-.576-2.975-1.836-1.1-0.98-1.844-2.19-2.06-2.56-.215-.37-.023-.57.162-.755.166-.166.37-.431.554-.647.185-.215.247-.37.37-.616.123-.247.062-.462-.031-.647-.093-.185-.831-2.003-1.139-2.743-.3-.72-.605-.623-.831-.634-.215-.011-.462-.013-.708-.013-.247 0-.647.093-.986.462-.339.37-1.294 1.264-1.294 3.082 0 1.818 1.324 3.575 1.509 3.821.185.247 2.604 3.976 6.309 5.577.881.381 1.569.609 2.105.78.885.281 1.691.241 2.327.146.71-.106 2.186-.893 2.494-1.756.308-.863.308-1.602.215-1.756-.092-.154-.338-.246-.708-.431z" />
        </svg>

        {/* Hover Floating Tooltip Badge with site primary colors */}
        <span
          className={`pointer-events-none absolute bottom-1/2 translate-y-1/2 end-full me-3 px-3.5 py-2 bg-gray-900/95 backdrop-blur-md text-white text-xs font-bold rounded-sm border border-gray-700 shadow-xl whitespace-nowrap transition-all duration-200 flex items-center gap-2 ${
            isHovered
              ? "opacity-100 translate-x-0"
              : isRTL
              ? "opacity-0 -translate-x-2"
              : "opacity-0 translate-x-2"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#74B743] shrink-0" />
          <span>{isRTL ? "تواصل معنا عبر واتساب" : "Chat on WhatsApp"}</span>
          <span className="font-mono text-[11px] text-[#00A3A6] tabular-nums ltr:ml-1 rtl:mr-1">
            +966 57 452 5139
          </span>
        </span>
      </a>
    </aside>
  );
}
