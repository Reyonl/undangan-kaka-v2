"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { MinangCorner } from "@/components/ui/MinangOrnaments";

export function StorySection() {
  const stories = weddingData.stories;

  return (
    <section id="story" className="py-20 sm:py-28 bg-minang-maroon-dark bg-songket-dark relative text-minang-cream">
      <Container size="md">
        <SectionHeader
          subtitle="Kisah Kami"
          title="Perjalanan Menuju Hari Bahagia"
          description="Kisah dua jalan yang dipertemukan, belajar saling mengerti, dan melangkah bersama menuju mahligai rumah tangga."
        />

        <div className="relative border-l-2 border-minang-gold/35 ml-5 sm:ml-28 md:ml-36 space-y-10 sm:space-y-14">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.9, delay: index * 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-7 sm:pl-10 group"
            >
              {/* Timeline Dot — with pulse-ring glow */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.18 + 0.2 }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-minang-gold border-4 border-minang-maroon-deep shadow-lg group-hover:scale-125 transition-transform duration-300 pulse-ring"
              />

              {/* Year Label */}
              <div className="sm:absolute sm:-left-28 md:-left-36 sm:top-0 sm:text-right mb-3 sm:mb-0 pr-0 sm:pr-4">
                <span className="font-display text-lg sm:text-2xl md:text-3xl font-light text-minang-gold-light tracking-tight">
                  {story.year}
                </span>
              </div>

              {/* Story Content Card */}
              <div className="relative p-5 sm:p-7 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl hover:border-minang-gold/70 transition-all duration-500 overflow-hidden">
                {/* Top glow accent */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-minang-gold/40 to-transparent" />
                <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />

                <div className="flex items-center gap-2 text-minang-gold-light mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-minang-gold-light shrink-0" />
                  <h4 className="font-serif text-lg sm:text-xl md:text-2xl text-white font-medium leading-snug">
                    {story.title}
                  </h4>
                </div>

                <p className="text-sm sm:text-base text-minang-cream/80 font-light leading-relaxed mb-4">
                  {story.description}
                </p>

                {story.photo && (
                  <div className="relative w-full h-44 sm:h-60 rounded-2xl overflow-hidden shadow-inner mt-4 bg-minang-maroon-deep border border-minang-gold/30">
                    <Image
                      src={story.photo}
                      alt={story.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
