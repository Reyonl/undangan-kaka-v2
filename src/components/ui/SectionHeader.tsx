"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { PucuakRebuangDivider } from "@/components/ui/MinangOrnaments";
import { TypewriterEffect } from "./TypewriterEffect";

interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left" | "right";
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1, opacity: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export function SectionHeader({
  subtitle,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const alignment = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={cn("flex flex-col mb-12 sm:mb-16", alignment[align], className)}
    >
      {subtitle && (
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.35em] uppercase mb-3 text-minang-gold-light"
        >
          <span className="w-5 h-px bg-minang-gold/50" />
          {subtitle}
          <span className="w-5 h-px bg-minang-gold/50" />
        </motion.span>
      )}

      <motion.h2
        variants={itemVariants}
        className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-white font-light"
      >
        <TypewriterEffect text={title} speed={40} delay={200} />
      </motion.h2>

      <motion.div variants={dividerVariants} className="origin-center my-4">
        <PucuakRebuangDivider dark={true} />
      </motion.div>

      {description && (
        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base max-w-xl font-light leading-relaxed text-minang-cream/75 mt-1"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
