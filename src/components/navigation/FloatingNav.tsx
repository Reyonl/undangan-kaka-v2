"use client";

import React, { useEffect, useState } from "react";
import { Home, Heart, Calendar, BookOpen, Image as ImageIcon, MessageSquare, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "hero", label: "Home", icon: <Home className="w-4 h-4" /> },
  { id: "couple", label: "Mempelai", icon: <Heart className="w-4 h-4" /> },
  { id: "details", label: "Acara", icon: <Calendar className="w-4 h-4" /> },
  { id: "story", label: "Kisah", icon: <BookOpen className="w-4 h-4" /> },
  { id: "gallery", label: "Galeri", icon: <ImageIcon className="w-4 h-4" /> },
  { id: "rsvp", label: "RSVP", icon: <MessageSquare className="w-4 h-4" /> },
  { id: "gift", label: "Kado", icon: <Gift className="w-4 h-4" /> },
];

export function FloatingNav({ isVisible }: { isVisible: boolean }) {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <nav
      aria-label="Bottom Navigation Dock"
      className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-[96vw] sm:max-w-fit"
    >
      <div className="flex items-center gap-0.5 sm:gap-1.5 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-full glass-panel-maroon shadow-2xl border border-minang-gold/50 backdrop-blur-xl">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              aria-label={item.label}
              className={cn(
                "relative flex items-center justify-center min-w-[40px] min-h-[40px] sm:min-w-0 sm:min-h-0 p-2 sm:px-3 sm:py-1.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-gold-gradient text-minang-charcoal font-semibold shadow-lg scale-105"
                  : "text-minang-cream/80 hover:text-minang-gold-light hover:bg-black/30"
              )}
            >
              <span className="shrink-0">{item.icon}</span>
              <span
                className={cn(
                  "hidden md:inline-block ml-1.5 text-[11px] uppercase tracking-wider",
                  isActive ? "font-semibold" : "font-normal"
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
