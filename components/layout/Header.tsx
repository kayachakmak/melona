"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#our-dentist", label: "Our Dentist" },
  { href: "#services", label: "Services" },
  { href: "#assesment", label: "Assesment" },
  { href: "/practice", label: "Practice" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past 80% of viewport height (hero section)
      const heroHeight = window.innerHeight * 1;
      setIsVisible(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E1] shadow-sm"
      >
        <nav className="px-4 sm:px-6 lg:px-4">
          <div className="flex h-16 items-center">
            {/* Logo - Left aligned */}
            <Link href="/" className="flex-shrink-0">
              <span className="font-serif text-lg font-normal tracking-tight text-[#3D4A32] md:text-xl">
                Melona Dent Clinic
              </span>
            </Link>

            {/* Desktop Navigation - Right aligned */}
            <div className="hidden lg:flex items-center gap-12 ml-auto">
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

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-10 w-10 items-center justify-center lg:hidden text-[#3D4A32] ml-auto"
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
      </motion.header>

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
