"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, Sparkles } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Button } from "@/components/ui/Button";
import { RumahGadangSilhouette, BaliGateSilhouette, MinangCorner, BaliCorner, SuntiangIcon } from "@/components/ui/MinangOrnaments";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

interface OpeningScreenProps {
  isOpen: boolean;
  guestName: string;
  onOpen: () => void;
}

export function OpeningScreen({ isOpen, guestName, onOpen }: OpeningScreenProps) {
  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.section
          key="opening-curtain"
          initial={{ opacity: 1, y: 0 }}
          exit={{
            opacity: 0,
            y: "-100%",
            transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-minang-maroon-deep"
        >
          {/* Background Image — Ken Burns slow drift */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <Image
              src={
                weddingData.gallery[0]?.url ||
                "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85"
              }
              alt="Wedding Cover"
              fill
              priority
              className="object-cover object-center filter brightness-[0.35] contrast-110 saturate-70 ken-burns"
            />
            {/* Multi-layer Deep Maroon Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-minang-maroon-deep/90 via-minang-maroon-dark/80 to-minang-maroon-deep/95" />
            {/* Radial center glow for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,rgba(107,23,29,0.4)_0%,transparent_70%)]" />
          </div>

          {/* Ambient floating gold orbs */}\
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-minang-gold/5 rounded-full blur-3xl pointer-events-none float-gentle" style={{ animationDelay: "0s" }} />\
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-bali-terracotta/10 rounded-full blur-3xl pointer-events-none float-gentle" style={{ animationDelay: "3.5s" }} />

          {/* Decorative Traditional Border Frame */}
          <div className="absolute inset-3 sm:inset-6 border border-minang-gold/30 pointer-events-none z-10 flex flex-col justify-between p-3 sm:p-5">
            {/* Top Corners */}
            <div className="flex justify-between items-start">
              <MinangCorner position="top-left" color="#E8CE75" />
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex items-center gap-1.5 text-minang-gold-light text-[10px] sm:text-xs tracking-[0.3em] uppercase pt-1 font-medium"
              >
                <SuntiangIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Baralek Gadang — Minangkabau &amp; Bali</span>
              </motion.div>
              <MinangCorner position="top-right" color="#E8CE75" />
            </div>

            {/* Bottom Corners: Minang left, Bali right */}
            <div className="flex justify-between items-end">
              <MinangCorner position="bottom-left" color="#E8CE75" />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
                className="flex items-center gap-2 text-minang-gold-light/70 text-[10px] sm:text-xs tracking-[0.25em] uppercase pb-1 font-medium"
              >
                <span>{weddingData.events.ceremony.date.split(",")[1]?.trim()}</span>
                <span>&bull;</span>
                <span>{weddingData.couple.hashtag}</span>
              </motion.div>
              <BaliCorner position="bottom-right" color="#E07A5F" />
            </div>
          </div>

          {/* Content Card — with subtle outer glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20 max-w-lg w-full mx-4 text-center text-minang-cream flex flex-col items-center py-8 sm:py-10 px-6 sm:px-10 rounded-3xl glass-panel-maroon shadow-2xl border border-minang-gold/50"
            style={{ boxShadow: "0 0 0 1px rgba(212,175,55,0.15), 0 0 60px -10px rgba(212,175,55,0.15), 0 25px 60px -20px rgba(0,0,0,0.7)" }}
          >
            {/* Rumah Gadang Silhouette (Minang) */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 1.3, delay: 0.15, ease: "easeOut" }}
              className="w-44 sm:w-56 mb-4 text-minang-gold-light float-gentle"
              style={{ animationDelay: "1s" }}
            >
              <RumahGadangSilhouette strokeColor="#E8CE75" />
            </motion.div>

            {/* Bali Gate Silhouette accent */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 0.7, y: 0 }}
              transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
              className="w-32 sm:w-44 mb-2 text-bali-terracotta-light float-gentle"
              style={{ animationDelay: "1.2s" }}
            >
              <BaliGateSilhouette strokeColor="#E07A5F" />
            </motion.div>

            {/* Subtitle Badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-minang-gold/40 bg-black/35 text-minang-gold-light text-[11px] sm:text-xs tracking-[0.3em] uppercase font-medium mb-3 shadow-sm"
            >
              <Sparkles className="w-3 h-3" />
              <span>The Wedding Of</span>
              <Sparkles className="w-3 h-3" />
            </motion.div>

            {/* Couple Names */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl font-normal tracking-tight text-white mb-1.5 leading-tight"
            >
              {weddingData.couple.bride.nickname}{" "}
              <span className="font-display italic text-minang-gold-light font-light">&</span>{" "}
              {weddingData.couple.groom.nickname}
            </motion.h1>

            {/* Subtitle Tradisi */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="text-[11px] sm:text-xs tracking-[0.22em] uppercase text-minang-gold-light/80 font-medium mb-5"
            >
              {weddingData.subTitleTradisi}
            </motion.p>

            {/* Animated Gold Divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.75 }}
              className="w-24 h-px bg-gradient-to-r from-transparent via-minang-gold to-transparent mb-5"
            />

            {/* Guest Greeting Box */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.85, ease: "easeOut" }}
              className="w-full bg-black/45 backdrop-blur-md border border-minang-gold/30 rounded-2xl py-4 px-5 mb-7 shadow-inner"
            >
              <p className="text-[11px] sm:text-xs text-minang-gold-light/80 tracking-[0.2em] uppercase mb-2 font-medium h-[18px]">
                <TypewriterEffect text="Kepada Yth. Bapak/Ibu/Saudara/i:" speed={40} delay={1400} />
              </p>
              <p className="font-display text-2xl sm:text-3xl text-white font-light italic capitalize tracking-wide break-words leading-snug min-h-[36px] sm:min-h-[44px]">
                <TypewriterEffect text={guestName} speed={55} delay={2800} />
              </p>
              <p className="text-[11px] text-minang-cream/60 mt-1.5 font-light">
                di Tempat
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                onClick={onOpen}
                variant="gold"
                size="lg"
                icon={<MailOpen className="w-4 h-4 text-minang-charcoal" />}
                className="shadow-2xl ring-2 ring-minang-gold/40 hover:ring-minang-gold-light transition-all duration-200 text-xs sm:text-sm font-semibold tracking-widest uppercase cursor-pointer"
              >
                Buka Undangan
              </Button>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
