"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import AccordionService from "@/components/ui/AccordionService";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Title, Description, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="font-serif text-4xl font-light tracking-tight text-[#3D4A32] sm:text-5xl lg:text-6xl">
              Services
            </h2>
            <p className="mt-6 max-w-md text-[#3D4A32]/70 leading-relaxed">
              At Melona Dent Clinic, we are dedicated to providing a wide range of
              dental solutions to meet your individual needs. If you have a
              specific requirement or need more information about any of our
              services, please don&apos;t hesitate to get in touch with us.
            </p>
            <div className="mt-10">
              <Link
                href="#free-consultation"
                className="inline-flex items-center justify-center rounded-full bg-[#3D4A32] px-6 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all hover:bg-[#3D4A32]/90"
              >
                Book Today
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="border-t border-[#3D4A32]/20">
              {services.map((category, index) => (
                <AccordionService
                  key={category.category}
                  category={category}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
