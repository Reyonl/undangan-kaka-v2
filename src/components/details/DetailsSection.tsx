"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ExternalLink, CalendarPlus } from "lucide-react";
import { weddingData, WeddingEvent } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MinangCorner } from "@/components/ui/MinangOrnaments";

function generateGoogleCalendarUrl(event: WeddingEvent) {
  const title = encodeURIComponent(`${event.title} - Diah & Made`);
  const details = encodeURIComponent(
    `Baralek Gadang (Pernikahan Adat Minangkabau) Diah Insani & I Made Made Putra di ${event.venue}.\nAlamat: ${event.address}`
  );
  const location = encodeURIComponent(`${event.venue}, ${event.address}`);
  const start = "20261128T010000Z";
  const end = "20261128T090000Z";

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${details}&location=${location}`;
}

export function DetailsSection() {
  const { ceremony, reception } = weddingData.events;

  return (
    <section id="details" className="py-20 sm:py-28 bg-songket-dark relative text-minang-cream">
      <Container size="lg">
        <SectionHeader
          subtitle="Rangkaian Acara"
          title="Jadwal & Lokasi Acara"
          description="Dengan memohon doa dan restu niniak mamak, sanak famili, serta handai tolan, kami mengundang kehadiran Bapak/Ibu/Saudara/i pada:"
        />

        {/* Single unified card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-2xl mx-auto p-8 sm:p-10 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl hover:border-minang-gold transition-all duration-300"
        >
          <MinangCorner position="top-left" color="#E8CE75" className="absolute top-4 left-4" />
          <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />

          {/* ── AKAD NIKAH ── */}
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-black/40 text-minang-gold-light border border-minang-gold/40">
              Akad Nikah
            </span>
            <span className="text-minang-gold-light text-xs font-mono font-semibold">01</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
            {ceremony.title}
          </h3>
          {ceremony.subtitle && (
            <p className="text-xs text-minang-cream/75 italic font-light mb-5">
              {ceremony.subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Date */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center shrink-0 text-minang-gold-light border border-minang-gold/40">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-minang-gold-light/80 font-medium">Hari & Tanggal</p>
                <p className="text-sm font-semibold text-white">{ceremony.date}</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center shrink-0 text-minang-gold-light border border-minang-gold/40">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-minang-gold-light/80 font-medium">Waktu</p>
                <p className="text-sm font-semibold text-white">{ceremony.time}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-minang-gold/25" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-4 bg-[#3E0B10] text-minang-gold/60 text-lg leading-none">✦</span>
            </div>
          </div>

          {/* ── BARALEK GADANG ── */}
          <div className="flex items-center justify-between mb-5">
            <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-minang-gold/25 text-minang-gold-light border border-minang-gold/50">
              Baralek Gadang
            </span>
            <span className="text-minang-gold-light text-xs font-mono font-semibold">02</span>
          </div>

          <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium mb-1">
            {reception.title}
          </h3>
          {reception.subtitle && (
            <p className="text-xs text-minang-cream/75 italic font-light mb-5">
              {reception.subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            {/* Date */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center shrink-0 text-minang-gold-light border border-minang-gold/40">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-minang-gold-light/80 font-medium">Hari & Tanggal</p>
                <p className="text-sm font-semibold text-white">{reception.date}</p>
              </div>
            </div>
            {/* Time */}
            <div className="flex items-start gap-3 flex-1">
              <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center shrink-0 text-minang-gold-light border border-minang-gold/40">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-minang-gold-light/80 font-medium">Waktu</p>
                <p className="text-sm font-semibold text-white">{reception.time}</p>
              </div>
            </div>
          </div>

          {/* ── Shared Venue ── */}
          <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-black/30 border border-minang-gold/20 mb-8">
            <div className="w-9 h-9 rounded-full bg-black/40 flex items-center justify-center shrink-0 text-minang-gold-light border border-minang-gold/40">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-minang-gold-light/80 font-medium mb-0.5">
                Tempat & Alamat
              </p>
              <p className="text-sm sm:text-base font-semibold text-minang-gold-light">
                {ceremony.venue}
              </p>
              <p className="text-xs sm:text-sm text-minang-cream/80 mt-1 leading-relaxed font-light">
                {ceremony.address}
              </p>
            </div>
          </div>

          {/* ── Actions ── */}
          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-minang-gold/30">
            <a
              href={ceremony.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="gold"
                size="sm"
                className="w-full text-xs font-semibold"
                icon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Petunjuk Lokasi (Maps)
              </Button>
            </a>
            <a
              href={generateGoogleCalendarUrl(ceremony)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs text-minang-gold-light border-minang-gold/60 hover:bg-minang-gold hover:text-minang-charcoal"
                icon={<CalendarPlus className="w-3.5 h-3.5" />}
              >
                Simpan Kalender
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
