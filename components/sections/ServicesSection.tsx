"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-14 sm:py-20 lg:py-12 bg-[#FAF9F6]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-8"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#3D4A32] lg:text-5xl">
            Treatments
          </h2>
          <p className="mt-3 sm:mt-4 text-lg text-[#3D4A32]/70 max-w-2xl mx-auto">
            At Melona Dent Clinic, we are dedicated to providing a wide range of
            dental solutions to meet your individual needs.
          </p>
        </motion.div>

        {/* Desktop — 4 columns */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {services.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <h3 className="font-serif underline text-2xl font-medium text-[#3D4A32] mb-4">
                {category.category}
              </h3>

              <div className="space-y-3">
                {category.items.map((item, i) => (
                  <div key={i}>
                    <div className="grid grid-cols-2 gap-1.5 mb-1">
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[#3D4A32]/5">
                        {item.beforeImage ? (
                          <Image
                            src={item.beforeImage}
                            alt={`${item.name} before`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-[#3D4A32]/30">
                            Before
                          </span>
                        )}
                      </div>
                      <div className="relative aspect-[3/2] rounded-lg overflow-hidden bg-[#3D4A32]/5">
                        {item.afterImage ? (
                          <Image
                            src={item.afterImage}
                            alt={`${item.name} after`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-[#3D4A32]/30">
                            After
                          </span>
                        )}
                      </div>
                    </div>
                    {item.caseStudySlug ? (
                      <Link
                        href={`/casestudy#${item.caseStudySlug}`}
                        className="text-sm text-[#3D4A32]/70 hover:text-[#3D4A32] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-sm text-[#3D4A32]/70">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/tablet — stacked list */}
        <div className="lg:hidden space-y-8">
          {services.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              viewport={{ once: true, margin: "-30px" }}
            >
              <h3 className="font-serif text-xl font-medium text-[#3D4A32] mb-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.items.map((item, i) => (
                  <div key={i}>
                    <div className="grid grid-cols-2 gap-1.5 mb-1.5">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#3D4A32]/5">
                        {item.beforeImage ? (
                          <Image
                            src={item.beforeImage}
                            alt={`${item.name} before`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-[#3D4A32]/30">
                            Before
                          </span>
                        )}
                      </div>
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-[#3D4A32]/5">
                        {item.afterImage ? (
                          <Image
                            src={item.afterImage}
                            alt={`${item.name} after`}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center text-xs text-[#3D4A32]/30">
                            After
                          </span>
                        )}
                      </div>
                    </div>
                    {item.caseStudySlug ? (
                      <Link
                        href={`/casestudy#${item.caseStudySlug}`}
                        className="text-xs text-[#3D4A32]/70 hover:text-[#3D4A32] transition-colors"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-xs text-[#3D4A32]/70">
                        {item.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
