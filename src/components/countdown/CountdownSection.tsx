"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hourglass } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { useCountdown } from "@/hooks/useCountdown";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RumahGadangSilhouette, BaliGateSilhouette, MinangCorner, BaliCorner } from "@/components/ui/MinangOrnaments";

interface TimeUnitProps {
  value: number;
  label: string;
}

function TimeUnit({ value, label }: TimeUnitProps) {
  const formattedValue = String(Math.max(0, value)).padStart(2, "0");

  return (
    <div className="relative flex flex-col items-center justify-center p-3 sm:p-5 md:p-6 rounded-2xl bg-black/40 border border-minang-gold/50 backdrop-blur-md shadow-2xl min-w-0 flex-1 overflow-hidden group hover:border-minang-gold/70 transition-colors duration-300">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-minang-gold/40 to-transparent" />
      <div className="h-9 sm:h-12 md:h-14 flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={formattedValue}
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="font-display text-3xl sm:text-5xl font-light text-minang-gold-light tracking-tight block"
          >
            {formattedValue}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-minang-cream/75 font-medium mt-1.5 text-center">
        {label}
      </span>
    </div>
  );
}

export function CountdownSection() {
  const { days, hours, minutes, seconds, isExpired, isMounted } = useCountdown(
    weddingData.countdownDate
  );

  return (
    <section className="py-20 sm:py-28 bg-minang-maroon-deep bg-songket-dark text-minang-cream relative overflow-hidden">
      {/* Background Siluet Rumah Gadang & Bali Gate */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] text-minang-gold/[0.07] pointer-events-none">
        <RumahGadangSilhouette strokeColor="currentColor" />
      </div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] text-bali-terracotta/[0.05] pointer-events-none opacity-60">
        <BaliGateSilhouette strokeColor="currentColor" />
      </div>

      <Container size="md" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-minang-gold/50 bg-black/40 text-minang-gold-light text-xs font-semibold tracking-[0.25em] uppercase mb-4 backdrop-blur-md shadow-md"
        >
          <Hourglass className="w-3.5 h-3.5 text-minang-gold-light animate-pulse" />
          <span>Menuju Hari Baralek Gadang</span>
        </motion.div>

        <SectionHeader
          title="Menanti Hari Bahagia"
          subtitle="28 NOVEMBER 2026"
          description="Setiap detik yang berdetak membawa kami semakin dekat ke awal ikatan suci pernikahan."
        />

        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-xl mx-auto p-4 sm:p-6 glass-panel-maroon rounded-3xl border border-minang-gold/45 shadow-2xl"
          >
            <MinangCorner position="top-left" color="#E8CE75" className="absolute top-3 left-3" />
            <BaliCorner position="top-right" color="#E07A5F" className="absolute top-3 right-3" />
            <MinangCorner position="bottom-left" color="#E8CE75" className="absolute bottom-3 left-3" />
            <BaliCorner position="bottom-right" color="#E07A5F" className="absolute bottom-3 right-3" />

            {/* Target Date Headline */}
            <p className="font-serif text-lg sm:text-xl text-minang-gold-light mb-6 tracking-wider uppercase font-medium">
              28 November 2026
            </p>

            {isExpired ? (
              <div className="p-8 rounded-2xl bg-black/40 border border-minang-gold/50 backdrop-blur-md">
                <p className="font-serif text-2xl sm:text-3xl text-minang-gold-light">
                  Alhamdulillah, Hari Bahagia Telah Tiba!
                </p>
                <p className="text-sm text-minang-cream/90 mt-2">
                  Terima kasih atas seluruh doa restu sanak famili yang tercurah untuk kami.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 py-2">
                <TimeUnit value={days} label="Hari" />
                <TimeUnit value={hours} label="Jam" />
                <TimeUnit value={minutes} label="Menit" />
                <TimeUnit value={seconds} label="Detik" />
              </div>
            )}
          </motion.div>
        )}
      </Container>
    </section>
  );
}
