"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import LightboxModal from "./LightboxModal";

interface PhotoGalleryProps {
  images: string[];
}

function GalleryImage({
  src,
  index,
  onOpen,
  className,
}: {
  src: string;
  index: number;
  onOpen: (i: number) => void;
  className?: string;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      viewport={{ once: true }}
      onClick={() => onOpen(index)}
      className={`group relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3D4A32]/30 focus:ring-offset-2 ${className ?? ""}`}
    >
      <Image
        src={src}
        alt={`Clinic photo ${index + 1}`}
        fill
        sizes="(max-width: 640px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/10" />
    </motion.button>
  );
}

/*
 * Row patterns (repeating cycle):
 *   A — portrait left  + 2 landscape right  (3 images)
 *   B — 2 landscape side-by-side            (2 images)
 *   C — 2 landscape left + portrait right   (3 images)
 */
const ROW_SIZES = [3, 2, 3]; // A, B, C

export default function PhotoGallery({ images }: PhotoGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (i: number) => {
    setCurrentIndex(i);
    setIsLightboxOpen(true);
  };
  const closeLightbox = () => setIsLightboxOpen(false);
  const goToPrevious = () =>
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  const goToNext = () =>
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));

  // Chunk images into rows following the A-B-C cycle
  const rows: { type: "A" | "B" | "C"; imgs: { src: string; idx: number }[] }[] = [];
  let cursor = 0;
  let patternIdx = 0;
  while (cursor < images.length) {
    const size = ROW_SIZES[patternIdx % ROW_SIZES.length];
    const slice = images.slice(cursor, cursor + size).map((src, i) => ({
      src,
      idx: cursor + i,
    }));
    const type = (["A", "B", "C"] as const)[patternIdx % 3];
    rows.push({ type, imgs: slice });
    cursor += slice.length;
    patternIdx++;
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        {rows.map((row, ri) => {
          if (row.type === "A" && row.imgs.length >= 3) {
            // Portrait left + 2 landscape right
            return (
              <div key={ri} className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <GalleryImage
                  src={row.imgs[0].src}
                  index={row.imgs[0].idx}
                  onOpen={openLightbox}
                  className="aspect-[3/4]"
                />
                <div className="flex flex-col gap-2">
                  <GalleryImage
                    src={row.imgs[1].src}
                    index={row.imgs[1].idx}
                    onOpen={openLightbox}
                    className="aspect-[4/3]"
                  />
                  <GalleryImage
                    src={row.imgs[2].src}
                    index={row.imgs[2].idx}
                    onOpen={openLightbox}
                    className="aspect-[4/3]"
                  />
                </div>
              </div>
            );
          }

          if (row.type === "B" && row.imgs.length >= 2) {
            // 2 landscape side-by-side
            return (
              <div key={ri} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                <GalleryImage
                  src={row.imgs[0].src}
                  index={row.imgs[0].idx}
                  onOpen={openLightbox}
                  className="aspect-[4/3]"
                />
                <GalleryImage
                  src={row.imgs[1].src}
                  index={row.imgs[1].idx}
                  onOpen={openLightbox}
                  className="aspect-[4/3]"
                />
              </div>
            );
          }

          if (row.type === "C" && row.imgs.length >= 3) {
            // 2 landscape left + portrait right
            return (
              <div key={ri} className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <GalleryImage
                    src={row.imgs[0].src}
                    index={row.imgs[0].idx}
                    onOpen={openLightbox}
                    className="aspect-[4/3]"
                  />
                  <GalleryImage
                    src={row.imgs[1].src}
                    index={row.imgs[1].idx}
                    onOpen={openLightbox}
                    className="aspect-[4/3]"
                  />
                </div>
                <GalleryImage
                  src={row.imgs[2].src}
                  index={row.imgs[2].idx}
                  onOpen={openLightbox}
                  className="aspect-[3/4]"
                />
              </div>
            );
          }

          // Fallback: any leftover images in a simple row
          return (
            <div key={ri} className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {row.imgs.map((img) => (
                <GalleryImage
                  key={img.idx}
                  src={img.src}
                  index={img.idx}
                  onOpen={openLightbox}
                  className="aspect-[4/3]"
                />
              ))}
            </div>
          );
        })}
      </div>

      <LightboxModal
        isOpen={isLightboxOpen}
        onClose={closeLightbox}
        images={images}
        currentIndex={currentIndex}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </>
  );
}
