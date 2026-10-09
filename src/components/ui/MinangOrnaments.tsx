"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Siluet Atap Gonjong Rumah Gadang Khas Minangkabau (Animated Draw & Glow)
 */
export function RumahGadangSilhouette({
  className,
  strokeColor = "currentColor",
  fill = "none",
  animate = true,
}: {
  className?: string;
  strokeColor?: string;
  fill?: string;
  animate?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 300 90"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? { opacity: 0, scale: 0.96 } : undefined}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn("w-full max-w-[280px] h-auto pointer-events-none", className)}
    >
      {/* 5-Peak Curved Gonjong Roofline */}
      <motion.path
        d="M10 80 C 40 75, 45 40, 50 15 C 55 45, 75 70, 100 75 C 120 70, 125 35, 130 8 C 135 35, 145 60, 150 72 C 155 60, 165 35, 170 8 C 175 35, 180 70, 200 75 C 225 70, 245 45, 250 15 C 255 40, 260 75, 290 80"
        stroke={strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {/* Lower roof beam / Anjuang */}
      <motion.path
        d="M25 82 L 275 82"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        initial={animate ? { scaleX: 0, opacity: 0 } : undefined}
        whileInView={animate ? { scaleX: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      />
      {/* Ridge Finials */}
      <circle cx="50" cy="15" r="1.5" fill={strokeColor} />
      <circle cx="130" cy="8" r="2" fill={strokeColor} />
      <circle cx="170" cy="8" r="2" fill={strokeColor} />
      <circle cx="250" cy="15" r="1.5" fill={strokeColor} />
    </motion.svg>
  );
}

/**
 * Divider Pucuak Rebuang & Kaluak Paku (Motif Songket Minangkabau dengan Animasi Melebar Halus)
 */
export function PucuakRebuangDivider({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  const goldColor = dark ? "#E8CE75" : "#C5A880";
  const maroonColor = dark ? "#D4AF37" : "#6B171D";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8 }}
      className={cn("flex items-center justify-center gap-3 my-4 w-full overflow-hidden", className)}
    >
      {/* Left Wing Line (Animasi melebar dari tengah) */}
      <motion.span
        initial={{ scaleX: 0, originX: 1, opacity: 0 }}
        whileInView={{ scaleX: 1, originX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-[1px] flex-1 max-w-[70px] sm:max-w-[100px]",
          dark ? "bg-gradient-to-r from-transparent to-minang-gold/80" : "bg-gradient-to-r from-transparent to-minang-maroon/50"
        )}
      />

      {/* Center Motif (Pucuak Rebuang Diamond) */}
      <motion.svg
        viewBox="0 0 60 20"
        className="w-12 h-4 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
      >
        {/* Left Mini Triangle */}
        <polygon points="12,10 6,16 6,4" fill={goldColor} opacity="0.8" />
        {/* Center Main Diamond */}
        <polygon points="30,2 38,10 30,18 22,10" fill={maroonColor} />
        <polygon points="30,5 35,10 30,15 25,10" fill={goldColor} />
        {/* Right Mini Triangle */}
        <polygon points="48,10 54,4 54,16" fill={goldColor} opacity="0.8" />
      </motion.svg>

      {/* Right Wing Line (Animasi melebar dari tengah) */}
      <motion.span
        initial={{ scaleX: 0, originX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, originX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-[1px] flex-1 max-w-[70px] sm:max-w-[100px]",
          dark ? "bg-gradient-to-l from-transparent to-minang-gold/80" : "bg-gradient-to-l from-transparent to-minang-maroon/50"
        )}
      />
    </motion.div>
  );
}

/**
 * Ornamen Sudut (Corner Motif Ukiran Minang dengan Animasi Meluncur Masuk)
 */
export function MinangCorner({
  position,
  className,
  color = "#E8CE75",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  color?: string;
}) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  // Offset gerak awal sesuai sudut
  const initialOffset = {
    "top-left": { x: -8, y: -8 },
    "top-right": { x: 8, y: -8 },
    "bottom-right": { x: 8, y: 8 },
    "bottom-left": { x: -8, y: 8 },
  }[position];

  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("w-7 h-7 sm:w-8 sm:h-8 pointer-events-none", rotation, className)}
    >
      {/* Outer L-bracket */}
      <path d="M2 38 L 2 2 L 38 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Inner decorative swirl / Kaluak motif */}
      <path d="M6 22 C 6 10, 10 6, 22 6" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.5" fill={color} />
      <polygon points="2,2 8,2 2,8" fill={color} opacity="0.8" />
    </motion.svg>
  );
}

/**
 * Suntiang Icon Minimalis Emas
 */
export function SuntiangIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-6 h-5 inline-block text-minang-gold", className)}
    >
      {/* Base Arc */}
      <path d="M8 30 C 14 26, 34 26, 40 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Tiers of Suntiang Flower Spikes */}
      <path d="M12 26 C 14 18, 16 12, 24 6 C 32 12, 34 18, 36 26" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 26 C 18 19, 24 14, 32 26" stroke="currentColor" strokeWidth="1" strokeDasharray="1 2" />
      {/* Top Center Crest */}
      <circle cx="24" cy="4" r="1.5" fill="currentColor" />
      <circle cx="16" cy="11" r="1" fill="currentColor" />
      <circle cx="32" cy="11" r="1" fill="currentColor" />
      <circle cx="10" cy="18" r="1" fill="currentColor" />
      <circle cx="38" cy="18" r="1" fill="currentColor" />
    </svg>
  );
}

/**
 * Bali Corner Ornament — prada-style decorative bracket (Bali ukiran motif)
 * Mirrors MinangCorner but with Bali terracotta styling and prada elements
 */
export function BaliCorner({
  position,
  className,
  color = "#E07A5F",
}: {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  color?: string;
}) {
  const rotation = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  }[position];

  const initialOffset = {
    "top-left": { x: -8, y: -8 },
    "top-right": { x: 8, y: -8 },
    "bottom-right": { x: 8, y: 8 },
    "bottom-left": { x: -8, y: 8 },
  }[position];

  return (
    <motion.svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("w-7 h-7 sm:w-8 sm:h-8 pointer-events-none", rotation, className)}
    >
      {/* Outer L-bracket with prada styling */}
      <path d="M2 38 L 2 2 L 38 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Inner decorative swirl — Bali prada motif */}
      <path d="M6 22 C 6 14, 12 8, 22 8 C 26 8, 30 10, 32 14" stroke={color} strokeWidth="1" strokeLinecap="round" />
      <circle cx="9" cy="9" r="1.5" fill={color} />
      <path d="M8 8 L 14 8 L 8 14 L 8 8 Z" fill={color} opacity="0.8" />
    </motion.svg>
  );
}

/**
 * Silhouette Gapura Bali (Balinese Gate) — animated draw & glow
 * Mirrors RumahGadangSilhouette but with Bali architectural style
 */
export function BaliGateSilhouette({
  className,
  strokeColor = "currentColor",
  animate = true,
}: {
  className?: string;
  strokeColor?: string;
  animate?: boolean;
}) {
  return (
    <motion.svg
      viewBox="0 0 300 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={animate ? { opacity: 0, scale: 0.96 } : undefined}
      whileInView={animate ? { opacity: 1, scale: 1 } : undefined}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn("w-full max-w-[280px] h-auto pointer-events-none", className)}
    >
      {/* Bali multi-tier gate profile (3 tiered roofs with wavy edges / taliwang) */}
      <motion.path
        d="M30 82 C 40 75, 50 60, 60 40 C 70 20, 100 12, 150 12 C 200 12, 230 20, 240 40 C 250 60, 260 75, 270 82"
        stroke={strokeColor}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0, opacity: 0 } : undefined}
        whileInView={animate ? { pathLength: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
      />
      {/* Lower gate base line */}
      <motion.path
        d="M40 82 L 260 82"
        stroke={strokeColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        initial={animate ? { scaleX: 0, opacity: 0 } : undefined}
        whileInView={animate ? { scaleX: 1, opacity: 1 } : undefined}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
      />
      {/* Gate towers / kori gates */}
      <circle cx="60" cy="40" r="2.5" fill={strokeColor} />
      <circle cx="240" cy="40" r="2.5" fill={strokeColor} />
      {/* Center spire */}
      <polygon points="145,8 150,18 155,8" fill={strokeColor} opacity="0.8" />
    </motion.svg>
  );
}

/**
 * Kamboja Flower (Frangipani) — Balinese flower ornament
 */
export function KambojaFlower({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-4 h-4 text-bali-terracotta inline-block", className)}
    >
      <path d="M24 12 C 27 12, 30 13, 32 16 C 34 19, 34 22, 32 25 C 30 28, 27 30, 24 30 C 21 30, 18 28, 16 25 C 14 22, 14 19, 16 16 C 18 13, 21 12, 24 12 Z" fill="currentColor" />
      <path d="M24 14 C 26 14, 28 15, 29 17 C 30 19, 29 21, 28 22 C 27 23, 25 24, 24 24 C 23 24, 21 23, 20 22 C 19 21, 18 19, 19 17 C 20 15, 22 14, 24 14 Z" fill="currentColor" opacity="0.7" />
      <circle cx="24" cy="19" r="1.5" fill="#8A3B1A" />
      <path d="M24 8 C 26 8, 28 9, 28 11 C 28 12, 27 13, 26 14 C 25 15, 23 16, 22 16 C 21 16, 19 15, 18 14 C 17 13, 16 12, 16 11 C 16 9, 18 8, 20 8 C 22 8, 24 8, 24 8 Z" fill="currentColor" opacity="0.5" />
      <path d="M24 32 C 26 30, 29 28, 30 26 C 31 24, 30 22, 28 22 C 26 22, 23 24, 21 26 C 20 28, 20 30, 22 32 C 24 34, 24 34, 24 34 Z" fill="currentColor" opacity="0.8" transform="rotate(180 24 28)" />
      <path d="M18 20 C 16 21, 14 23, 13 25 C 12 27, 13 29, 15 30 C 17 31, 20 31, 22 30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <path d="M30 20 C 32 21, 34 23, 35 25 C 36 27, 35 29, 33 30 C 31 31, 28 31, 26 30" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

/**
 * Bali Flower Divider — frangipani/kamboja divider
 */
export function BaliFlowerDivider({ dark = false }: { dark?: boolean }) {
  const color = dark ? "#E8CE75" : "#C5A880";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.8 }}
      className="flex items-center justify-center gap-3 my-4 w-full overflow-hidden"
    >
      <motion.span
        initial={{ scaleX: 0, originX: 1, opacity: 0 }}
        whileInView={{ scaleX: 1, originX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-[1px] flex-1 max-w-[70px] sm:max-w-[100px]",
          dark ? "bg-gradient-to-r from-transparent to-bali-terracotta/80" : "bg-gradient-to-r from-transparent to-bali-terracotta/50"
        )}
      />
      <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="flex items-center gap-1.5"
      >
        <KambojaFlower className="w-4 h-4" />
        <KambojaFlower className="w-5 h-5" />
        <KambojaFlower className="w-4 h-4" />
      </motion.div>
      <motion.span
        initial={{ scaleX: 0, originX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, originX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "h-[1px] flex-1 max-w-[70px] sm:max-w-[100px]",
          dark ? "bg-gradient-to-l from-transparent to-bali-terracotta/80" : "bg-gradient-to-l from-transparent to-bali-terracotta/50"
        )}
      />
    </motion.div>
  );
}

/**
 * Songket Pattern — subtle background texture
 */
export function SongketPattern({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("absolute inset-0 w-full h-full pointer-events-none opacity-[0.04]", className)}
    >
      <defs>
        <pattern id="songket" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M0 20 L20 0 L40 20 L20 40 Z" stroke="#E8CE75" strokeWidth="0.8" fill="none" />
          <path d="M20 0 L20 40 M0 20 L40 20" stroke="#E8CE75" strokeWidth="0.5" opacity="0.6" />
        </pattern>
      </defs>
      <rect width="200" height="200" fill="url(#songket)" />
    </svg>
  );
}

/**
 * Balinese Star — decorative star motif
 */
export function BalineseStar({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-3 h-3 text-bali-terracotta", className)}
    >
      <path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z" fill="currentColor" />
    </svg>
  );
}
