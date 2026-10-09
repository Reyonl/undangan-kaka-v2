"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { RumahGadangSilhouette, BaliGateSilhouette, SuntiangIcon, KambojaFlower } from "@/components/ui/MinangOrnaments";

export function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Parallax for decorative ornaments (subtle, disabled on mobile for performance)
  const { scrollYProgress } = useScroll();
  const parallaxYMinang = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const parallaxYBali = useTransform(scrollYProgress, [0, 1], [0, -15]);

  return (
    <footer className="py-20 sm:py-28 bg-minang-maroon-deep text-minang-cream relative overflow-hidden text-center">
      {/* Subtle radial glow — Minang gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-minang-gold/10 rounded-full blur-3xl pointer-events-none" />

      {/* Bali Gate Silhouette Background — subtle decorative element with parallax */}
      <motion.div
        className="absolute bottom-0 right-0 w-[260px] sm:w-[340px] text-bali-terracotta/[0.04] pointer-events-none opacity-35"
        style={{ y: parallaxYBali }}
      >
        <BaliGateSilhouette strokeColor="currentColor" />
      </motion.div>

      <Container size="md" className="relative z-10 flex flex-col items-center">
        {/* Siluet Atap Rumah Gadang (Minang) with parallax */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          whileInView={{ opacity: 0.85, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-52 sm:w-64 mb-8 text-minang-gold-light float-gentle"
          style={{ animationDelay: "0.5s", y: parallaxYMinang }}
        >
          <RumahGadangSilhouette strokeColor="#E8CE75" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl text-white font-light mb-3 tracking-tight leading-[1.05]">
            Tarimo Kasih
          </h2>

          <p className="text-xs uppercase tracking-[0.3em] text-minang-gold-light/85 font-medium mb-7">
            Ungkapan Syukur &amp; Doa Restu
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl mx-auto space-y-4 text-minang-cream/80 text-sm sm:text-base font-light leading-relaxed mb-10"
        >
          <p>
            Merupakan suatu kehormatan dan kebahagiaan yang tak terhingga bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i
            berkenan hadir dan memberikan doa restu kepada kedua mempelai.
          </p>
          <p className="italic font-serif text-minang-gold-light text-xs sm:text-sm">
            &ldquo;Kayu pulai di Koto Alam, batangnya luruih baurek tunggang. Kok tibo kami sambuik jo hati nan sanang, kok bajalan kami iriangkan jo doa nan kalam.&rdquo;
          </p>
        </motion.div>

        {/* Big Family Signature Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="border border-minang-gold/30 py-6 px-8 max-w-md w-full mb-10 bg-black/20 backdrop-blur-sm rounded-2xl shadow-xl shadow-black/30"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-minang-gold-light/80 mb-2 font-medium">
            Kami nan Mambari Imbauan
          </p>
          <p className="font-serif text-2xl sm:text-3xl text-white font-medium">
            {weddingData.couple.bride.nickname} &amp; {weddingData.couple.groom.nickname}
          </p>
          <p className="text-xs text-minang-cream/70 mt-1">
            Beserta Seluruh Keluarga Besar Kedua Mempelai
          </p>
        </motion.div>

        {/* Scroll To Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.55 }}
          aria-label="Kembali ke atas"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-minang-gold/50 text-minang-gold-light hover:bg-minang-gold hover:text-minang-charcoal text-xs font-semibold tracking-wider uppercase transition-colors duration-300 cursor-pointer shadow-md mb-12"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Kembali ke Atas</span>
        </motion.button>

        {/* Footer Credit — with kamboja flower */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-minang-cream/50 font-light">
          <span>Dibuat dengan segenap kasih untuk</span>
          <SuntiangIcon className="w-3.5 h-3.5 inline text-minang-gold" />
          <span>{weddingData.couple.bride.nickname} &amp; {weddingData.couple.groom.nickname}</span>
          <KambojaFlower className="w-4 h-4" />
        </div>
      </Container>
    </footer>
  );
}

