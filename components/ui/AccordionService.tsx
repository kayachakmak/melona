"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ServiceCategory } from "@/data/services";

interface AccordionServiceProps {
  category: ServiceCategory;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AccordionService({
  category,
  isOpen,
  onToggle,
}: AccordionServiceProps) {
  return (
    <div className="border-b border-[#3D4A32]/20">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-xl font-light text-[#3D4A32] group-hover:text-[#3D4A32]/70 transition-colors">
          {category.category}
        </span>
        <span className="text-[#3D4A32] text-2xl font-light">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6">
              <ul className="space-y-2">
                {category.items.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 text-[#3D4A32]/80"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
