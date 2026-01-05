"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[#faf0be]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="font-serif text-4xl font-light tracking-tight text-[#3D4A32] sm:text-5xl">
              About the Practice
            </h2>
            <div className="mt-6 space-y-4 text-xl text-[#3D4A32]/80">
              <p>
              We are proud to open our doors as a premier boutique destination for oral health. While our clinic is brand new, our philosophy is timeless: patient-first care. We have curated a space where state-of-the-art dental technology meets a calm, sophisticated atmosphere. By investing in the latest diagnostic tools and premium materials, we ensure that your treatment is not only faster and more comfortable but performed with a level of precision that only the newest innovations can provide. At our clinic, the future of dentistry is personal.              </p>
            </div>

            {/* Features */}
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]/10">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="#3D4A32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D4A32]">Modern Equipment</h3>
                  <p className="text-sm text-[#3D4A32]/70">
                    State-of-the-art technology for precise diagnostics and treatment
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]/10">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="#3D4A32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#3D4A32]">Patient Comfort</h3>
                  <p className="text-sm text-[#3D4A32]/70">
                    Relaxing environment designed with your comfort in mind
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative aspect-[4/5] lg:aspect-[3/4]"
          >
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1470&auto=format&fit=crop"
              alt="Modern dental clinic with comfortable patient chair"
              fill
              className="object-cover rounded-4xl"
            />
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
