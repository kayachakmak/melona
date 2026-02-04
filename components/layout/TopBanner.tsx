"use client";

import { useState, useEffect } from "react";

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`bg-[#ebdfed] text-[#3D4A32] text-s transition-all duration-300 overflow-hidden ${
        isVisible ? "max-h-10 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-5 h-10">
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="https://wa.me/905404902425"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path
                fill="#25D366"
                d="M16.04 4C9.95 4 5 8.94 5 15.02c0 2.4.78 4.63 2.12 6.45L5 28l6.7-2.08A11.1 11.1 0 0 0 16.04 26C22.13 26 27.1 21.06 27.1 15S22.13 4 16.04 4z"
              />
              <path
                fill="#fff"
                d="M21.53 18.6c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.1 4.49.71.31 1.26.49 1.7.63.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35z"
              />
            </svg>
            <span>+90 540 490 24 25</span>
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a
            href="mailto:melonadent@gmail.com"
            className="hidden sm:inline hover:opacity-70 transition-opacity"
          >
            melonadent@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <span className="hidden lg:inline">Mon-Fri 10-19.30 / Sat 10-14</span>
          <span className="hidden lg:inline text-[#3D4A32]/30">|</span>
          <a
            href="https://instagram.com/melonadentclinic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61585342079418"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-70 transition-opacity flex items-center gap-1.5"
          >
            <svg
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
