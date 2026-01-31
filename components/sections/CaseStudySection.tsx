"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudySectionProps {
  study: CaseStudy;
  reversed?: boolean;
}

export default function CaseStudySection({
  study,
  reversed,
}: CaseStudySectionProps) {
  return (
    <section id={study.id} className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header — category, title, tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <span className="inline-block rounded-full bg-[#3D4A32]/10 px-3 py-1 text-xs font-medium tracking-wide text-[#3D4A32]/70 mb-4">
            {study.category}
          </span>
          <h2 className="font-serif text-3xl font-light tracking-tight text-[#3D4A32] sm:text-4xl lg:text-5xl">
            {study.title}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full border border-[#3D4A32]/15 px-3 py-0.5 text-xs text-[#3D4A32]/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Patient story + profile */}
        <div
          className={`grid gap-12 lg:grid-cols-3 lg:gap-16 items-start ${reversed ? "lg:direction-rtl" : ""}`}
        >
          {/* Presentation narrative — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className={`lg:col-span-2 ${reversed ? "lg:order-2" : ""}`}
          >
            <h3 className="font-serif text-xl font-light text-[#3D4A32] mb-4">
              The Story
            </h3>
            <p className="text-[#3D4A32]/80 leading-relaxed text-lg">
              {study.presentation}
            </p>

            {/* Main concerns */}
            {study.mainConcerns.length > 0 && (
              <div className="mt-10">
                <h3 className="font-serif text-xl font-light text-[#3D4A32] mb-4">
                  Main Concerns
                </h3>
                <ul className="space-y-2.5">
                  {study.mainConcerns.map((concern, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-[#3D4A32]/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#3D4A32]/40" />
                      {concern}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Patient profile sidebar — 1 col */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`${reversed ? "lg:order-1" : ""}`}
          >
            {study.patientProfile && (
              <div className="rounded-2xl bg-[#3D4A32]/5 p-6 lg:p-8">
                <h4 className="font-serif text-lg font-light text-[#3D4A32] mb-5">
                  Patient Profile
                </h4>
                <dl className="space-y-4">
                  {study.patientProfile.age && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-[#3D4A32]/40">
                        Age
                      </dt>
                      <dd className="mt-1 text-[#3D4A32]/80">
                        {study.patientProfile.age}
                      </dd>
                    </div>
                  )}
                  {study.patientProfile.residence && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-[#3D4A32]/40">
                        Residence
                      </dt>
                      <dd className="mt-1 text-[#3D4A32]/80">
                        {study.patientProfile.residence}
                      </dd>
                    </div>
                  )}
                  {study.patientProfile.occupation && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-[#3D4A32]/40">
                        Occupation
                      </dt>
                      <dd className="mt-1 text-[#3D4A32]/80">
                        {study.patientProfile.occupation}
                      </dd>
                    </div>
                  )}
                  {study.patientProfile.mainConcern && (
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wider text-[#3D4A32]/40">
                        Primary Concern
                      </dt>
                      <dd className="mt-1 text-[#3D4A32]/80 italic">
                        &ldquo;{study.patientProfile.mainConcern}&rdquo;
                      </dd>
                    </div>
                  )}
                </dl>
              </div>
            )}

            {/* Treatment goals in sidebar when profile exists */}
            {study.patientProfile && study.treatmentGoals.length > 0 && (
              <div className="mt-6 rounded-2xl border border-[#3D4A32]/10 p-6 lg:p-8">
                <h4 className="font-serif text-lg font-light text-[#3D4A32] mb-4">
                  Treatment Goals
                </h4>
                <ul className="space-y-2.5">
                  {study.treatmentGoals.map((goal, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-[#3D4A32]/70"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#3D4A32]/40"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Treatment goals — full width (when no patient profile) */}
        {!study.patientProfile && study.treatmentGoals.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-12"
          >
            <h3 className="font-serif text-xl font-light text-[#3D4A32] mb-5">
              Treatment Goals
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {study.treatmentGoals.map((goal, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-[#3D4A32]/10 p-4"
                >
                  <svg
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#3D4A32]/40"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  <span className="text-sm text-[#3D4A32]/70">{goal}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Before / After images */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#3D4A32]/40">
                Before
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#3D4A32]/5">
                {study.beforeImage ? (
                  <Image
                    src={study.beforeImage}
                    alt={`${study.title} — before treatment`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <svg
                      className="h-10 w-10 text-[#3D4A32]/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-xs text-[#3D4A32]/30">Photo</p>
                  </div>
                )}
              </div>
            </div>
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-widest text-[#3D4A32]/40">
                After
              </p>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#3D4A32]/5">
                {study.afterImage ? (
                  <Image
                    src={study.afterImage}
                    alt={`${study.title} — after treatment`}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center">
                    <svg
                      className="h-10 w-10 text-[#3D4A32]/20"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-2 text-xs text-[#3D4A32]/30">Photo</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Treatment Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl font-light text-[#3D4A32] mb-4">
            Treatment Approach
          </h3>
          <p className="text-[#3D4A32]/70 leading-relaxed mb-8 max-w-3xl">
            {study.treatmentApproach.description}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {study.treatmentApproach.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#3D4A32]/10 text-xs font-medium text-[#3D4A32]/60">
                  {i + 1}
                </span>
                <p className="text-[#3D4A32]/80 pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl font-light text-[#3D4A32] mb-6">
            Results
          </h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {study.outcome.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 text-[#3D4A32]/80"
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#5B8A72]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Clinical Perspective — full width callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 rounded-2xl bg-[#3D4A32] p-8 lg:p-12"
        >
          <h3 className="font-serif text-xl font-light text-[#F5F0E1] mb-4">
            Clinical Perspective
          </h3>
          <p className="text-[#F5F0E1]/80 leading-relaxed text-lg">
            {study.clinicalPerspective}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
