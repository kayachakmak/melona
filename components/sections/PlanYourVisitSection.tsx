"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Free Assessment",
    description:
      "Upload your photos or X-rays and receive a personalized treatment plan with pricing and estimated duration of stay.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop",
    alt: "Person uploading dental photos for assessment",
  },
  {
    number: "02",
    title: "Online Consultation",
    description:
      "Schedule a video consultation with Dt. Melek or a patient coordinator who speaks your language.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1470&auto=format&fit=crop",
    alt: "Online video consultation with dentist",
  },
  {
    number: "03",
    title: "Book & Travel",
    description:
      "Once you're ready to proceed, book your appointment and arrange your travel to (AYT Airport) Antalya, Turkey.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1474&auto=format&fit=crop",
    alt: "Airplane travel to Turkey",
  },
  {
    number: "04",
    title: "Your Treatment",
    description:
      "Arrive at the airport and we'll take care of the rest!",
    image:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1474&auto=format&fit=crop",
    alt: "Happy patient after dental treatment",
  },
];

export default function PlanYourVisitSection() {
  return (
    <section id="plan-your-visit" className="py-24 lg:py-32 bg-[#faf4d4]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl font-light tracking-tight text-[#3D4A32] sm:text-5xl">
            Plan Your Visit
          </h2>
          <p className="mt-4 text-lg text-[#3D4A32]/70 max-w-2xl mx-auto">
            Your journey to a perfect smile starts here. We make it simple for international patients.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.15,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Step number overlay */}
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#3D4A32] text-white font-serif text-sm">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="font-serif text-xl font-light text-[#3D4A32] mb-2">
                  {step.title}
                </h3>
                <p className="text-[#3D4A32]/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#free-consultation"
            className="inline-flex items-center justify-center rounded-full bg-[#3D4A32] px-8 py-3 text-sm font-medium tracking-wider text-white uppercase transition-all hover:bg-[#3D4A32]/90 focus:outline-none focus:ring-2 focus:ring-[#3D4A32] focus:ring-offset-2"
          >
            Get Your Free Assessment
          </a>
        </motion.div>
      </div>
    </section>
  );
}
