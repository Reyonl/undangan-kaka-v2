"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SuntiangIcon, MinangCorner } from "@/components/ui/MinangOrnaments";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function CoupleSection() {
  const { groom, bride } = weddingData.couple;

  return (
    <section id="couple" className="py-24 sm:py-32 bg-minang-maroon-dark bg-songket-dark relative">
      <Container size="lg">
        <SectionHeader
          subtitle="Pasangan Mempelai"
          title="Anak Daro & Marapulai"
          description="Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan. Dengan memohon rahmat dan ridho-Nya, kami mengumumkan pernikahan kami:"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-stretch relative max-w-5xl mx-auto">
          {/* Connecting & Badge in Center (Desktop) */}
          <motion.div
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 rounded-full bg-minang-maroon-deep border-2 border-minang-gold shadow-2xl items-center justify-center"
          >
            <span className="font-display italic text-3xl text-minang-gold-light font-light">
              &
            </span>
          </motion.div>

          {/* Bride Card */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl hover:border-minang-gold/70 transition-all duration-500 group"
          >
            <MinangCorner position="top-left" color="#E8CE75" className="absolute top-4 left-4" />
            <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />

            {/* Photo with Arch Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-t-full rounded-b-2xl overflow-hidden mb-6 shadow-xl border-2 border-minang-gold/50 bg-minang-maroon-deep"
            >
              <Image
                src={bride.photo}
                alt={bride.fullName}
                fill
                className="object-cover object-center filter saturate-[0.93] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 text-minang-gold-light border border-minang-gold/40 text-xs font-semibold tracking-[0.22em] uppercase mb-2 shadow-sm">
              <SuntiangIcon className="w-4 h-3.5" />
              <span>{bride.titleTradisi || "Anak Daro"}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white font-light tracking-tight mb-3 leading-snug">
              {bride.fullName}
            </h3>

            {bride.bio && (
              <p className="text-xs sm:text-sm text-minang-cream/75 max-w-xs mb-4 italic font-light leading-relaxed">
                &ldquo;{bride.bio}&rdquo;
              </p>
            )}

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="origin-center w-24 h-px bg-gradient-to-r from-transparent via-minang-gold/50 to-transparent mb-4"
            />

            <p className="text-xs sm:text-sm text-minang-cream/85 leading-loose mb-4 font-light">
              Putri tercinta dari
              <br />
              <strong className="text-white font-semibold">{bride.father}</strong>
              <br />&amp; <strong className="text-white font-semibold">{bride.mother}</strong>
            </p>

            {bride.instagram && (
              <a
                href={`https://instagram.com/${bride.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-minang-gold-light/80 hover:text-white hover:-translate-y-0.5 font-medium transition-all duration-200 border border-minang-gold/30 rounded-full px-3 py-1 hover:bg-minang-gold/10"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{bride.instagram}</span>
              </a>
            )}
          </motion.div>

          {/* Groom Card */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col items-center text-center p-8 sm:p-10 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl hover:border-minang-gold/70 transition-all duration-500 group"
          >
            <MinangCorner position="top-left" color="#E8CE75" className="absolute top-4 left-4" />
            <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />

            {/* Photo with Arch Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-48 h-64 sm:w-56 sm:h-72 rounded-t-full rounded-b-2xl overflow-hidden mb-6 shadow-xl border-2 border-minang-gold/50 bg-minang-maroon-deep"
            >
              <Image
                src={groom.photo}
                alt={groom.fullName}
                fill
                className="object-cover object-center filter saturate-[0.93] contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>

            {/* Cultural Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-black/40 text-minang-gold-light border border-minang-gold/40 text-xs font-semibold tracking-[0.22em] uppercase mb-2 shadow-sm">
              <span>{groom.titleTradisi || "Marapulai"}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl text-white font-light tracking-tight mb-3 leading-snug">
              {groom.fullName}
            </h3>

            {groom.bio && (
              <p className="text-xs sm:text-sm text-minang-cream/75 max-w-xs mb-4 italic font-light leading-relaxed">
                &ldquo;{groom.bio}&rdquo;
              </p>
            )}

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="origin-center w-24 h-px bg-gradient-to-r from-transparent via-minang-gold/50 to-transparent mb-4"
            />

            <p className="text-xs sm:text-sm text-minang-cream/85 leading-loose mb-4 font-light">
              Putra tercinta dari
              <br />
              <strong className="text-white font-semibold">{groom.father}</strong>
              <br />&amp; <strong className="text-white font-semibold">{groom.mother}</strong>
            </p>

            {groom.instagram && (
              <a
                href={`https://instagram.com/${groom.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-minang-gold-light/80 hover:text-white hover:-translate-y-0.5 font-medium transition-all duration-200 border border-minang-gold/30 rounded-full px-3 py-1 hover:bg-minang-gold/10"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{groom.instagram}</span>
              </a>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
