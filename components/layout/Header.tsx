"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#our-dentist", label: "Our Dentist" },
  { href: "/#plan-your-visit", label: "Your Visit" },
  { href: "/#services", label: "Services" },
  { href: "/#assesment", label: "Assesment" },
  { href: "/practice", label: "Practice" },
  { href: "/casestudy", label: "Case Studies" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#F5F0E1] transition-all duration-300">
        <nav className="px-4 sm:px-6 lg:px-0">
          {/* Desktop Navigation */}
          <div className="hidden lg:grid lg:grid-cols-2 h-14">
            <div className="m-4 text-2xl font-light text-[#3D4A32] tracking-tight">
              Melona Dent Clinic
            </div>
            <div className="flex items-center justify-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-normal text-[#3D4A32] transition-colors hover:text-[#3D4A32]/70"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex lg:hidden h-14 items-center justify-between">
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-lg font-normal tracking-tight text-[#3D4A32]">
                Melona Dent Clinic
              </span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-[#3D4A32]"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
            navLinks={navLinks}
          />
        )}
      </AnimatePresence>
    </>
  );
}
