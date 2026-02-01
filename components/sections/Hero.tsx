"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#FAF9F6]">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col justify-between min-h-screen py-8 px-5 sm:py-10 sm:px-10 lg:py-0 lg:pl-[3%] lg:pr-2 order-1"
        >
          {/* Top Content */}
          <div className="pt-4 sm:pt-8 lg:pt-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="font-serif font-extralight text-[#3D4A32] leading-[1.1] text-[clamp(2rem,4.5vw,3.5rem)]"
            >
              Boutique Dental
              <br className="hidden lg:block" />
              {" "}Clinic in the heart of
              <br className="hidden lg:block" />
              {" "}Antalya
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              className="mt-4 sm:mt-5 lg:max-w-xl text-[#3D4A32] text-base leading-relaxed"
            >
          Experience dental care designed exclusively for you. From your very first consultation to the final result, Dt. Melek personally oversees every detail of your journey. We believe in a gentle, one-to-one approach where your comfort is our priority and your smile is crafted with dedicated, hands-on artistry in the heart of Antalya.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              className="mt-6 sm:mt-8"
            >
              <Link
                href="#assesment"
                className="inline-flex items-center justify-center rounded-full bg-[#3D4A32] px-5 py-2.5 text-xs font-medium tracking-wider text-white uppercase transition-all hover:bg-[#3d4d3d] focus:outline-none focus:ring-2 focus:ring-[#3D4A32] focus:ring-offset-2"
              >
                Get a Free Assessment
              </Link>
            </motion.div>
          </div>

          {/* Brand Name - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
            className="pb-0"
          >
            <div className="font-serif text-[#3D4A32] text-[clamp(2.5rem,14vw,8rem)] leading-[0.85] tracking-tight font-extralight text-center whitespace-nowrap">
              <span>Melona Dent</span>
              <span className="block whitespace-normal">Clinic</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[40vh] sm:h-[50vh] lg:h-auto order-2"
        >
          <Image
            src="https://omp.dentist/media/pages/home/7cfc7f84bc-1707221487/omp-banner-1200x-q80.webp"
            alt="Welcoming smile at Melona Dent Clinic"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
