"use client";

import React, { useState, useEffect } from "react";
import { Share2, X, Copy, Check, Send } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Button } from "@/components/ui/Button";
import { SuntiangIcon, KambojaFlower } from "@/components/ui/MinangOrnaments";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ShareModal({ isOpen, onClose }: ShareModalProps) {
  const [guestName, setGuestName] = useState("");
  const [origin, setOrigin] = useState("");
  const [template, setTemplate] = useState<"formal" | "casual">("formal");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setOrigin(window.location.origin);
    }
  }, []);

  if (!isOpen) return null;

  const encodedGuestParam = encodeURIComponent(guestName.trim());
  const generatedLink = guestName.trim()
    ? `${origin}/?to=${encodedGuestParam}`
    : origin;

  const { groom, bride } = weddingData.couple;
  const { ceremony, reception } = weddingData.events;

  const formalMessage = `Kepada Yth.
Bapak/Ibu/Dunsanak/Saudara/i: *${guestName.trim() || "Tamu Undangan"}*

Assalamu'alaikum Warahmatullahi Wabarakatuh,

Bismillahirrohmanirrohim. Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Dunsanak/Saudara/i untuk menghadiri acara Baralek Gadang (Pernikahan Adat Minangkabau) kami:

*${bride.fullName}*
(Putri Bpk. ${bride.father} & Ibu ${bride.mother})
&
*${groom.fullName}*
(Putra Bpk. ${groom.father} & Ibu ${groom.mother})

Yang insya Allah akan diselenggarakan pada:
🗓 Hari/Tanggal: ${ceremony.date}
⏰ Waktu: ${ceremony.time} (Akad) | ${reception.time} (Baralek Gadang)
📍 Lokasi: ${reception.venue}

Untuk informasi lengkap mengenai detail acara & konfirmasi kehadiran, silakan buka tautan undangan digital resmi berikut:
👉 ${generatedLink}

Merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Dunsanak berkenan hadir dan memberikan doa restu.

Wassalamu'alaikum Warahmatullahi Wabarakatuh.

Kami nan mambari imbauan,
*${bride.nickname} & ${groom.nickname}*
(Beserta Seluruh Keluarga Besar)`;

  const casualMessage = `Halo *${guestName.trim() || "Teman-teman"}*! ✨

Kabar bahagia dari kami berdua! Dengan penuh sukacita kami mengundang kamu untuk hadir di perayaan pernikahan kami:

*${bride.nickname} & ${groom.nickname}* 💍
(${weddingData.subTitleTradisi})

🗓 ${ceremony.date}
📍 ${reception.venue}

Buka undangan digital resmi untuk info lengkap & RSVP:
👉 ${generatedLink}

Sampai jumpa di hari bahagia kami ya! Terima kasih banyak atas doa dan dukungannya.

Salam hangat,
*${bride.nickname} & ${groom.nickname}*`;

  const finalMessage = template === "formal" ? formalMessage : casualMessage;

  const handleCopy = () => {
    navigator.clipboard.writeText(finalMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsapp = () => {
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(finalMessage)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full mx-2 sm:mx-0 rounded-3xl p-5 sm:p-8 shadow-2xl glass-panel-maroon border border-minang-gold/50 max-h-[90vh] overflow-y-auto text-minang-cream"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Tutup"
          className="absolute top-5 right-5 text-minang-gold-light hover:text-white p-1.5 rounded-full hover:bg-black/30 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header — Minang × Bali fusion */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-2 text-minang-gold-light">
            <SuntiangIcon className="w-5 h-4" />
            <span className="text-xs uppercase tracking-widest font-semibold">
              Invitation Link Generator
            </span>
          </div>
          <KambojaFlower className="w-5 h-5 text-bali-terracotta-light/50" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-2">
          Buat Undangan Tamu
        </h3>
        <p className="text-xs sm:text-sm text-minang-cream/80 mb-6 leading-relaxed font-light">
          Ketik nama tamu di bawah untuk menghasilkan link undangan personal dan draf pesan WhatsApp resmi siap kirim.
        </p>

        {/* Input Guest Name */}
        <div className="mb-4">
          <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
            Nama Tamu
          </label>
          <input
            type="text"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            placeholder="Contoh: Reyon Lau Jiemin / Bpk. Rahmat & Keluarga"
            className="w-full px-4 py-3 rounded-xl border border-minang-gold/40 bg-black/40 text-white text-sm focus:outline-none focus:ring-2 focus:ring-minang-gold"
          />
        </div>

        {/* Template Style Selector */}
        <div className="mb-5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
            Gaya Bahasa Pesan
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setTemplate("formal")}
              className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                template === "formal"
                  ? "bg-gold-gradient text-minang-charcoal font-semibold border-minang-gold-light"
                  : "bg-black/30 text-minang-cream/80 border-minang-gold/30 hover:border-minang-gold"
              }`}
            >
              Formal (Keluarga/Niniak Mamak)
            </button>
            <button
              type="button"
              onClick={() => setTemplate("casual")}
              className={`py-2 px-3 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                template === "casual"
                  ? "bg-gold-gradient text-minang-charcoal font-semibold border-minang-gold-light"
                  : "bg-black/30 text-minang-cream/80 border-minang-gold/30 hover:border-minang-gold"
              }`}
            >
              Santai (Teman / Sahabat)
            </button>
          </div>
        </div>

        {/* Message Preview Box */}
        <div className="mb-6">
          <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
            Preview Pesan WhatsApp
          </label>
          <div className="p-4 rounded-xl bg-black/40 border border-minang-gold/40 text-xs text-minang-cream font-mono whitespace-pre-line max-h-48 overflow-y-auto leading-relaxed shadow-inner">
            {finalMessage}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            size="md"
            onClick={handleCopy}
            className="flex-1 text-xs text-minang-gold-light border-minang-gold/60 hover:bg-minang-gold hover:text-minang-charcoal"
            icon={copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          >
            {copied ? "Tersalin ke Clipboard!" : "Salin Pesan"}
          </Button>

          <Button
            variant="gold"
            size="md"
            onClick={handleSendWhatsapp}
            className="flex-1 text-xs font-semibold"
            icon={<Send className="w-4 h-4" />}
          >
            Kirim via WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

export function ShareFloatingButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Bagikan Undangan"
      className="fixed bottom-[4.5rem] sm:bottom-6 left-4 sm:left-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full glass-panel-maroon text-minang-gold-light border border-minang-gold/60 shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer backdrop-blur-xl text-xs font-semibold tracking-wider uppercase group"
    >
      <Share2 className="w-4 h-4 text-minang-gold-light group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Bagikan Undangan</span>
    </button>
  );
}
