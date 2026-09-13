"use client";

import React, { useEffect, useRef, useState } from "react";
import { Disc3, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { weddingData } from "@/config/weddingData";
import { cn } from "@/lib/utils";

interface AudioPlayerProps {
  shouldPlay: boolean;
}

export function AudioPlayer({ shouldPlay }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current && !hasInteracted) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.log("Autoplay was prevented by browser policy:", err);
          setIsPlaying(false);
        });
    }
  }, [shouldPlay, hasInteracted]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => console.log("Audio play error:", err));
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={weddingData.audio.url}
        preload="metadata"
        loop
      />

      {/* Floating Control Button */}
      <div className="fixed bottom-[4.5rem] sm:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-2.5">
        {/* Tooltip badge for playing status */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full text-xs bg-minang-maroon-dark/95 text-minang-gold-light border border-minang-gold/40 backdrop-blur-md shadow-lg"
            >
              <Music className="w-3.5 h-3.5 text-minang-gold-light animate-pulse" />
              <span className="font-medium truncate max-w-[150px]">
                {weddingData.audio.title}
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="relative">
          {/* Subtle acoustic golden ripple rings when playing */}
          {isPlaying && (
            <>
              <motion.span
                className="absolute inset-0 rounded-full border border-minang-gold/40 pointer-events-none"
                animate={{ scale: [1, 1.45, 1.7], opacity: [0.6, 0.3, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-full border border-minang-gold/30 pointer-events-none"
                animate={{ scale: [1, 1.3, 1.5], opacity: [0.5, 0.2, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, delay: 0.8, ease: "easeOut" }}
              />
            </>
          )}

          <motion.button
            onClick={togglePlay}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            aria-label={isPlaying ? "Jeda Musik" : "Putar Musik"}
            className={cn(
              "relative w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300 shadow-xl cursor-pointer",
              isPlaying
                ? "bg-minang-maroon text-minang-gold-light border-2 border-minang-gold"
                : "bg-white text-minang-maroon border border-minang-gold hover:bg-minang-cream-soft"
            )}
          >
            {isPlaying ? (
              <Disc3 className="w-6 h-6 animate-spin-slow text-minang-gold-light" />
            ) : (
              <VolumeX className="w-5 h-5 text-minang-maroon" />
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}

