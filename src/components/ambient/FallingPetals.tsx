"use client";

import React, { useMemo } from "react";

interface Petal {
  id: number;
  left: number; // percentage 0 - 100
  size: number; // px 12 - 24
  duration: number; // seconds 8 - 18
  delay: number; // seconds 0 - 10
  swayDuration: number; // seconds 3 - 6
  opacity: number; // 0.3 - 0.7
  rotate: number; // deg
  colorVariant: "gold" | "amber" | "maroon";
}

export function FallingPetals() {
  const petals: Petal[] = useMemo(() => {
    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: Math.random() * 96 + 2,
      size: Math.random() * 12 + 10,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 8,
      swayDuration: Math.random() * 3 + 3,
      opacity: Math.random() * 0.35 + 0.3,
      rotate: Math.random() * 360,
      colorVariant: i % 3 === 0 ? "maroon" : i % 2 === 0 ? "gold" : "amber",
    }));
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 overflow-hidden"
    >
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        @keyframes sway {
          0%, 100% {
            transform: translateX(-15px) rotate(-10deg);
          }
          50% {
            transform: translateX(15px) rotate(15deg);
          }
        }
      `}</style>

      {petals.map((petal) => {
        const bgGradient =
          petal.colorVariant === "maroon"
            ? "linear-gradient(135deg, #A82C35 0%, #6B171D 50%, #4E0E13 100%)"
            : petal.colorVariant === "gold"
            ? "linear-gradient(135deg, #E8CE75 0%, #D4AF37 50%, #C5A880 100%)"
            : "linear-gradient(135deg, #DFC8A4 0%, #C5A880 50%, #A88850 100%)";

        return (
          <div
            key={petal.id}
            style={{
              position: "absolute",
              left: `${petal.left}%`,
              top: "-5%",
              width: `${petal.size}px`,
              height: `${petal.size * 1.4}px`,
              opacity: petal.opacity,
              animation: `fall ${petal.duration}s linear infinite`,
              animationDelay: `${petal.delay}s`,
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50% 0 50% 50%",
                background: bgGradient,
                transform: `rotate(${petal.rotate}deg)`,
                animation: `sway ${petal.swayDuration}s ease-in-out infinite`,
                boxShadow: "0 2px 6px rgba(107, 23, 29, 0.2)",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
