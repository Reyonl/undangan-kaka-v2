"use client";

import React, { useState, Suspense } from "react";
import { useGuestName } from "@/hooks/useGuestName";
import { OpeningScreen } from "@/components/opening/OpeningScreen";
import { HeroSection } from "@/components/hero/HeroSection";
import { CoupleSection } from "@/components/couple/CoupleSection";
import { DetailsSection } from "@/components/details/DetailsSection";
import { CountdownSection } from "@/components/countdown/CountdownSection";
import { StorySection } from "@/components/story/StorySection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { RsvpSection } from "@/components/rsvp/RsvpSection";
import { GiftSection } from "@/components/gift/GiftSection";
import { ClosingSection } from "@/components/closing/ClosingSection";
import { AudioPlayer } from "@/components/audio/AudioPlayer";
import { FloatingNav } from "@/components/navigation/FloatingNav";
import { FallingPetals } from "@/components/ambient/FallingPetals";
import { ShareModal, ShareFloatingButton } from "@/components/share/ShareModal";

function WeddingMain() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldPlayAudio, setShouldPlayAudio] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const guestName = useGuestName("Tamu Undangan");

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setShouldPlayAudio(true);
    // Smooth scroll to top of main content
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen">
      {/* 1. Opening Cover Overlay */}
      <OpeningScreen
        isOpen={isOpen}
        guestName={guestName}
        onOpen={handleOpenInvitation}
      />

      {/* 2. Floating Atmospheric Falling Petals */}
      {isOpen && <FallingPetals />}

      {/* 3. Floating Bottom Navigation Dock */}
      <FloatingNav isVisible={isOpen} />

      {/* 4. Floating Audio Player (Bottom Right) */}
      <AudioPlayer shouldPlay={shouldPlayAudio} />

      {/* 5. Floating Share Button (Bottom Left) */}
      {isOpen && (
        <ShareFloatingButton onClick={() => setIsShareModalOpen(true)} />
      )}

      {/* 6. Share & Link Generator Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      {/* 7. Main Invitation Content */}
      <div
        className={`transition-opacity duration-1000 ${
          isOpen ? "opacity-100" : "opacity-0 h-screen overflow-hidden"
        }`}
      >
        <div id="hero">
          <HeroSection />
        </div>
        <CoupleSection />
        <DetailsSection />
        <CountdownSection />
        <StorySection />
        <GallerySection />
        <RsvpSection defaultGuestName={guestName} />
        <GiftSection />
        <ClosingSection />
      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-wedding-ivory flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-wedding-gold border-t-transparent animate-spin" />
        </div>
      }
    >
      <WeddingMain />
    </Suspense>
  );
}
