import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import CaseStudyGrid from "@/components/sections/CaseStudyGrid";
import CaseStudySection from "@/components/sections/CaseStudySection";
import { caseStudies } from "@/data/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Melona Dent Clinic",
  description:
    "Explore real patient case studies from Melona Dent Clinic. See how we approach complex dental treatments including implant rehabilitation, smile rejuvenation, and full-mouth zirconia restorations.",
};

export default function CaseStudyPage() {
  return (
    <>
      <Header />
      <main className="bg-[#FAF9F6]">
        {/* Hero Section */}
        <section className="pt-28 pb-16 lg:pt-3 lg:pb-24">
          <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-2">
            <h1 className="font-serif text-4xl font-extralight tracking-tight text-[#3D4A32] sm:text-5xl lg:text-6xl">
              Case Studies
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[#3D4A32]/70 leading-relaxed lg:text-xl">
              Every smile has a story. Explore real patient journeys that
              showcase our approach to complex dental treatments — from initial
              consultation to final results.
            </p>
          </div>
        </section>

        {/* Case Study Grid */}
        <CaseStudyGrid studies={caseStudies} />

        {/* Case Study Sections */}
        {caseStudies.map((study, index) => (
          <div
            key={study.id}
            className={index % 2 === 1 ? "bg-[#F5F0E1]/50" : ""}
          >
            <CaseStudySection study={study} reversed={index % 2 === 1} />
          </div>
        ))}

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-[#3D4A32]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-light tracking-tight text-[#F5F0E1] sm:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-4 text-lg text-[#F5F0E1]/70 max-w-xl mx-auto">
              Book a free assessment to discuss your treatment options with our
              experienced dental team.
            </p>
            <Link
              href="/#assesment"
              className="mt-8 inline-block rounded-full bg-[#F5F0E1] px-8 py-3 text-sm font-medium text-[#3D4A32] transition-colors hover:bg-white"
            >
              Book Free Assessment
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
