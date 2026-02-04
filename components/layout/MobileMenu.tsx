"use client";

import { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    document.body.style.overflow = "unset";
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-[#F5F0E1] flex flex-col"
    >
      {/* Close button — centered */}
      <div className="flex h-14 items-center justify-center">
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center text-[#3D4A32]"
          aria-label="Close menu"
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
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <motion.nav
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex-1 flex flex-col items-center justify-center px-4"
      >
        <ul className="space-y-5 text-center">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.href}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }}
            >
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="text-lg font-normal text-[#3D4A32] transition-colors hover:text-[#3D4A32]/60"
              >
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </motion.nav>

      {/* Brand name — bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="pb-10 text-center"
      >
        <span className="font-serif text-2xl font-light tracking-tight text-[#3D4A32]">
          Melona Dent Clinic
        </span>
      </motion.div>
    </motion.div>
  );
}
