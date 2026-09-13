"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export function GallerySection() {
  const gallery = weddingData.gallery;
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActivePhotoIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setActivePhotoIndex(null);
    document.body.style.overflow = "auto";
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex + 1) % gallery.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((activePhotoIndex - 1 + gallery.length) % gallery.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-songket-dark relative text-minang-cream">
      <Container size="lg">
        <SectionHeader
          subtitle="Galeri Kenangan"
          title="Potret Momen Bahagia"
          description="Rangkaian potret kebersamaan yang merekam perjalanan cinta dan kehangatan kami berdua."
        />

        {/* Editorial Masonry Grid with Staggered Cascade Entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {gallery.map((photo, index) => {
            const isTall = photo.span === "tall";
            const isWide = photo.span === "wide";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => openLightbox(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-minang-maroon-deep cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 border border-minang-gold/40 hover:border-minang-gold",
                  isTall ? "h-96 sm:h-[480px] lg:row-span-2" : "h-72 sm:h-80",
                  isWide ? "sm:col-span-2" : ""
                )}
              >
                <Image
                  src={photo.url}
                  alt={photo.caption || `Gallery photo ${index + 1}`}
                  fill
                  className="object-cover object-center filter saturate-[0.95] group-hover:scale-105 group-hover:filter-none transition-all duration-700 ease-out"
                />

                {/* Hover Overlay with Maroon & Gold Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-minang-maroon-deep/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center justify-between">
                    <p className="font-serif italic text-sm text-minang-gold-light">
                      {photo.caption || `${weddingData.couple.bride.nickname} & ${weddingData.couple.groom.nickname}`}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-black/40 border border-minang-gold/50 backdrop-blur-xs flex items-center justify-center text-minang-gold-light">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activePhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              aria-label="Tutup Foto"
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-minang-maroon text-minang-gold-light flex items-center justify-center transition-colors cursor-pointer border border-minang-gold/50 shadow-xl"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={showPrev}
              aria-label="Foto Sebelumnya"
              className="absolute left-4 sm:left-8 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-minang-maroon text-minang-gold-light flex items-center justify-center transition-colors cursor-pointer border border-minang-gold/50 shadow-xl"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={showNext}
              aria-label="Foto Berikutnya"
              className="absolute right-4 sm:right-8 z-50 w-12 h-12 rounded-full bg-black/60 hover:bg-minang-maroon text-minang-gold-light flex items-center justify-center transition-colors cursor-pointer border border-minang-gold/50 shadow-xl"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Modal Image Display */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] w-full h-[65vh] sm:h-[75vh] flex flex-col items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={gallery[activePhotoIndex].url}
                  alt={gallery[activePhotoIndex].caption || "Wedding photo"}
                  fill
                  className="object-contain"
                />
              </div>
              {gallery[activePhotoIndex].caption && (
                <p className="text-center font-serif text-sm sm:text-base text-minang-gold-light mt-4 italic">
                  {gallery[activePhotoIndex].caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
