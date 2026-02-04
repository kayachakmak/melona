"use client";

import { useState, useRef, useCallback } from "react";
import type { CaseStudy } from "@/data/caseStudies";
import CaseStudyGrid from "./CaseStudyGrid";
import CaseStudySection from "./CaseStudySection";

interface CaseStudyViewProps {
  studies: CaseStudy[];
}

export default function CaseStudyView({ studies }: CaseStudyViewProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement>(null);

  const selectedStudy = studies.find((s) => s.id === selectedId);

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
    // Scroll to detail after state update
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }, []);

  const handleClose = useCallback(() => {
    setSelectedId(null);
  }, []);

  return (
    <>
      <CaseStudyGrid
        studies={studies}
        onSelect={handleSelect}
        selectedId={selectedId ?? undefined}
      />

      {selectedStudy && (
        <div ref={detailRef} className="scroll-mt-20">
          {/* Close bar */}
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={handleClose}
              className="inline-flex items-center gap-2 rounded-full border border-[#3D4A32]/15 px-4 py-2 text-sm text-[#3D4A32]/70 transition-colors hover:bg-[#3D4A32]/5 hover:text-[#3D4A32]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              Close
            </button>
          </div>

          <CaseStudySection study={selectedStudy} />
        </div>
      )}
    </>
  );
}
