"use client";

import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { RumahGadangSilhouette, BaliGateSilhouette, SuntiangIcon } from "@/components/ui/MinangOrnaments";

const heroVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const heroPhoto = {
  hidden: { opacity: 0, scale: 0.9, y: 16 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

export function HeroSection() {
  const scrollToCouple = () => {
    document.getElementById("couple")?.scrollIntoView({ behavior: "smooth" });
  };

  // Subtle parallax for decorative ornaments (disabled on mobile for performance)
  const { scrollYProgress } = useScroll();
  const parallaxYRumahGadang = useTransform(scrollYProgress, [0, 1], [0, -15]);
  const parallaxYBaliGate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  return (
    <section className="relative min-h-[92vh] md:min-h-screen flex items-center justify-center pt-16 pb-24 overflow-hidden bg-songket-dark text-minang-cream">
      {/* Background RumahGadang silhouette — Minang (left, subtle) with parallax */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.07, x: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[580px] text-minang-gold pointer-events-none z-0"
        style={{ y: parallaxYRumahGadang }}
      >
        <RumahGadangSilhouette strokeColor="currentColor" />
      </motion.div>

      {/* Background Bali Gate silhouette — Bali (right, subtle) with parallax */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.05, x: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-1/2 right-0 w-[300px] sm:w-[420px] text-bali-terracotta pointer-events-none z-0 opacity-60"
        style={{ y: parallaxYBaliGate }}
      >
        <BaliGateSilhouette strokeColor="currentColor" />
      </motion.div>
      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[520px] h-[320px] bg-minang-maroon-light/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-minang-gold/[0.04] rounded-full blur-3xl pointer-events-none float-gentle" style={{ animationDelay: "2s" }} />

      <Container size="md" className="relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* Cultural fusion tagline — Minang & Bali */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-minang-gold/50 bg-black/40 text-minang-gold-light text-xs font-semibold tracking-[0.28em] uppercase mb-8 shadow-md backdrop-blur-md"
          >
            <SuntiangIcon className="w-4 h-4 text-minang-gold-light" />
            <span className="hidden sm:inline">Minangkabau</span>
            <span className="text-bali-terracotta-light">•</span>
            <span className="hidden sm:inline">Bali</span>
            <span className="sm:hidden">Minang × Bali</span>
            <SuntiangIcon className="w-4 h-4 text-bali-terracotta-light" />
          </motion.div>

          {/* Editorial Photo Frame */}
          <motion.div
            variants={heroPhoto}
            className="relative w-52 h-72 sm:w-64 sm:h-80 md:w-72 md:h-96 mb-10 group"
          >
            {/* Decorative Gold Offset Frame */}
            <div className="absolute -inset-2 sm:-inset-3 border-2 border-minang-gold/55 rounded-2xl sm:rounded-3xl transition-all duration-700 ease-out group-hover:scale-[1.02] group-hover:border-minang-gold/80 pointer-events-none shadow-lg" />

            {/* Image */}
            <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl bg-minang-maroon-deep border border-minang-gold/40">
              <Image
                src={
                  weddingData.gallery[0]?.url ||
                  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80"
                }
                alt={`${weddingData.couple.bride.nickname} & ${weddingData.couple.groom.nickname}`}
                fill
                priority
                className="object-cover object-center filter saturate-[0.92] contrast-[1.06] transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-minang-maroon-deep/65 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Couple Names — main hero headline */}
          <motion.h1
            variants={heroItem}
            className="font-serif text-5xl sm:text-6xl md:text-7xl text-white font-normal tracking-tight mb-2 leading-[1.05]"
          >
            {weddingData.couple.bride.nickname}{" "}
            <span className="font-display italic text-minang-gold-light font-light">&</span>{" "}
            {weddingData.couple.groom.nickname}
          </motion.h1>

          {/* Full Names */}
          <motion.p
            variants={heroItem}
            className="font-serif italic text-sm sm:text-base text-minang-gold-light/85 mb-7 font-light break-words text-center max-w-sm leading-relaxed"
          >
            {weddingData.couple.bride.fullName} &amp; {weddingData.couple.groom.fullName}
          </motion.p>

          {/* Date Badge */}
          <motion.div
            variants={heroItem}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-black/40 text-minang-gold-light text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase mb-10 shadow-md border border-minang-gold/50 backdrop-blur-md"
          >
            <span className="w-1 h-1 rounded-full bg-minang-gold" />
            <span>{weddingData.events.ceremony.date}</span>
            <span className="w-1 h-1 rounded-full bg-minang-gold" />
          </motion.div>

          {/* Romantic Minang Quote Card */}
          <motion.div
            variants={heroItem}
            className="max-w-xl mx-auto px-4 sm:px-7 py-6 rounded-3xl glass-panel-maroon border border-minang-gold/40 shadow-xl text-center mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-minang-gold to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-minang-gold/30 to-transparent" />

            {weddingData.quotes.petatahMinang && (
              <p className="font-display italic text-sm sm:text-base text-minang-gold-light font-normal leading-relaxed mb-3">
                <TypewriterEffect text={`"${weddingData.quotes.petatahMinang}"`} speed={35} delay={800} />
              </p>
            )}
            <p className="font-serif text-xs sm:text-sm text-minang-cream/85 leading-relaxed mb-2 font-light">
              <TypewriterEffect text={`"${weddingData.quotes.verse}"`} speed={30} delay={2500} />
            </p>
            <span className="text-[11px] font-semibold text-minang-gold-light tracking-[0.2em] uppercase">
              — {weddingData.quotes.source} —
            </span>
          </motion.div>

          {/* Scroll Down Indicator — elegant pulse */}
          <motion.button
            variants={heroItem}
            onClick={scrollToCouple}
            aria-label="Scroll ke bawah"
            whileHover={{ y: 3 }}
            transition={{ duration: 0.2 }}
            className="inline-flex flex-col items-center gap-2.5 text-minang-gold-light/70 hover:text-minang-gold transition-colors duration-300 group cursor-pointer"
          >
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-minang-gold-light/80">
              Jelajahi Undangan
            </span>
            <div className="relative w-8 h-8 rounded-full border border-minang-gold/50 group-hover:border-minang-gold flex items-center justify-center bg-black/25 transition-all duration-300 group-hover:bg-minang-gold/10">
              <ChevronDown className="w-4 h-4" />
              {/* Subtle pulse ring */}
              <span className="absolute inset-0 rounded-full border border-minang-gold/30 animate-ping" style={{ animationDuration: "2.5s" }} />
            </div>
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
