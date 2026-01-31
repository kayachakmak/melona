"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

interface CaseStudyGridProps {
  studies: CaseStudy[];
}

function CaseStudyCard({
  study,
  index,
}: {
  study: CaseStudy;
  index: number;
}) {
  const hasImage = study.beforeImage || study.afterImage;
  const displayImage = study.afterImage || study.beforeImage;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`#${study.id}`} className="group block">
        {/* Photo area */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#3D4A32]/5">
          {hasImage ? (
            <Image
              src={displayImage!}
              alt={study.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center border-2 border-dashed border-[#3D4A32]/15 rounded-xl transition-colors group-hover:border-[#3D4A32]/30">
              <svg
                className="h-10 w-10 text-[#3D4A32]/20 transition-colors group-hover:text-[#3D4A32]/35"
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
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block rounded-full bg-[#3D4A32]/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {study.category}
            </span>
          </div>
        </div>

        {/* Title + tags */}
        <div className="mt-4">
          <h3 className="font-serif text-lg font-light text-[#3D4A32] transition-colors group-hover:text-[#3D4A32]/70 line-clamp-2">
            {study.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {study.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-[#3D4A32]/5 px-2.5 py-0.5 text-xs text-[#3D4A32]/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CaseStudyGrid({ studies }: CaseStudyGridProps) {
  // Featured first, then the rest — single continuous grid
  const sorted = [
    ...studies.filter((s) => s.featured),
    ...studies.filter((s) => !s.featured),
  ];

  return (
    <section className="pb-24 lg:pb-32">
      <div className="mx-auto max-w-9xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
