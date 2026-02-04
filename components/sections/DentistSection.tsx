"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function DentistSection() {
  return (
    <section id="our-dentist" className="py-14 sm:py-20 lg:py-32 bg-[#efebf0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-tight text-[#3D4A32] lg:text-5xl">
            Meet Our Dentist
          </h2>
        </motion.div>

        <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0"
          >
            <Image
              src="/images/practice/DtMelek.jpg"
              alt="Dt. Melek - Principal Dentist"
              fill
              className="object-cover rounded-2xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="mb-6">
              <h3 className="font-serif text-3xl font-light text-[#3D4A32]">
                Dt. Melek Merve Nurlu
              </h3>
              <p className="mt-2 text-lg text-[#293314]/70 font-medium">
                Principal Dentist
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-[#3D4A32]/80">
              <p>
              After years of honing her skills in the private sector, Dt. Melek established her own clinic to escape the "assembly-line" feel of large practices. Specializing in <b> Smile Design and Cosmetic Dentistry</b>, she brings seven years of clinical excellence to her own boutique space.

Unlike larger clinics where you might see multiple doctors, Dt. Melek is your dedicated partner in health. She hand-selects every material and performs every procedure herself. Her philosophy is simple: <b>  Modern technology, premium materials,</b>  and a doctor <b> who listens</b> .              </p>
            </div>

            {/* Our Approach */}
            <div className="mt-6 sm:mt-8 lg:mt-10">
              <h4 className="font-serif text-xl font-light text-[#3D4A32] mb-4 sm:mb-6">
                Our Approach
              </h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="#ffffff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#3D4A32]">Results That Last</h5>
                    <p className="text-sm text-[#3D4A32]/70">
                    Focus on long-term oral health and natural-looking aesthetics you'll love
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="#ffffff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#3D4A32]">Welcoming Nervous Patients</h5>
                    <p className="text-sm text-[#3D4A32]/70">
                      Gentle, patient approach for those who feel anxious about dental visits
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      stroke="#ffffff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h5 className="font-semibold text-[#3D4A32]">Built for International Patients
                    </h5>
                    <p className="text-sm text-[#3D4A32]/70">
                    Streamlined processes and comprehensive support from consultation through recovery
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
