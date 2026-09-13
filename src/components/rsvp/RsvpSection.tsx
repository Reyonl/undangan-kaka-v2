"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, MessageSquareHeart, Users, Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MinangCorner } from "@/components/ui/MinangOrnaments";

interface WishItem {
  id: string;
  name: string;
  attendance: "hadir" | "tidak_hadir";
  guestCount: number;
  message: string;
  createdAt: string;
}

const INITIAL_WISHES: WishItem[] = [
  {
    id: "1",
    name: "Reyon Lau Jiemin",
    attendance: "hadir",
    guestCount: 2,
    message: "Selamat Baralek Gadang untuk Diah & Made! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah. Bahagia dan langgeng selalu!",
    createdAt: "Baru saja",
  },
  {
    id: "2",
    name: "Keluarga Besar H. Syahrul (Padang)",
    attendance: "hadir",
    guestCount: 3,
    message: "Barakallahu lakuma wa baraka 'alaikuma wa jama'a bainakuma fi khair. Lancar dan berkah acaranyo sampai hari H!",
    createdAt: "1 jam yang lalu",
  },
  {
    id: "3",
    name: "Rina Maharani & Suami",
    attendance: "hadir",
    guestCount: 2,
    message: "Selamat ya Diah cantik dan Made! Sangat bahagia mendengar kabar pernikahan adat Minang kalian. Sampai jumpa di pelaminan!",
    createdAt: "3 jam yang lalu",
  },
];

interface RsvpSectionProps {
  defaultGuestName: string;
}

export function RsvpSection({ defaultGuestName }: RsvpSectionProps) {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState<"hadir" | "tidak_hadir">("hadir");
  const [guestCount, setGuestCount] = useState("1");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState<WishItem[]>(INITIAL_WISHES);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (defaultGuestName && defaultGuestName !== "Tamu Undangan") {
      setName(defaultGuestName);
    }

    const savedWishes = localStorage.getItem("wedding_wishes_diah_made");
    if (savedWishes) {
      try {
        setWishes(JSON.parse(savedWishes));
      } catch (e) {
        console.error("Error reading saved wishes:", e);
      }
    }
  }, [defaultGuestName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newWish: WishItem = {
        id: Date.now().toString(),
        name: name.trim(),
        attendance,
        guestCount: attendance === "hadir" ? parseInt(guestCount, 10) : 0,
        message: message.trim(),
        createdAt: "Baru saja",
      };

      const updated = [newWish, ...wishes];
      setWishes(updated);
      try {
        localStorage.setItem("wedding_wishes_diah_aryana", JSON.stringify(updated));
      } catch (err) {
        console.error("Failed to save to local storage:", err);
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setMessage("");
    }, 600);
  };

  return (
    <section id="rsvp" className="py-20 sm:py-28 bg-minang-maroon-dark bg-songket-dark relative text-minang-cream">
      <Container size="lg">
        <SectionHeader
          subtitle="Konfirmasi & Doa Restu"
          title="RSVP & Ucapan Doa"
          description="Kehadiran dan doa restu niniak mamak, dunsanak, serta handai tolan merupakan suatu kehormatan dan kebahagiaan terbesar bagi kami sekeluarga."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Form Column (Maroon Glass with Motion) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6 p-8 sm:p-10 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl"
          >
            <MinangCorner position="top-left" color="#E8CE75" className="absolute top-4 left-4" />
            <MinangCorner position="top-right" color="#E8CE75" className="absolute top-4 right-4" />

            <h3 className="font-serif text-2xl text-white font-medium mb-2">
              Konfirmasi Kehadiran
            </h3>
            <p className="text-xs sm:text-sm text-minang-cream/75 mb-6 font-light">
              Mohon konfirmasikan kehadiran Anda untuk membantu kami mempersiapkan jamuan terbaik.
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-black/40 border border-minang-gold/50 text-center animate-fade-in shadow-inner">
                <CheckCircle2 className="w-12 h-12 text-minang-gold-light mx-auto mb-3" />
                <h4 className="font-serif text-xl text-white font-medium mb-1">
                  Tarimo Kasih Banyak!
                </h4>
                <p className="text-xs sm:text-sm text-minang-cream/80 mb-4 font-light">
                  Konfirmasi kehadiran dan ucapan doa restu Anda telah tersimpan dengan baik.
                </p>
                <Button
                  variant="gold"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                >
                  Kirim Pesan Lainnya
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Guest Name Input */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Contoh: Reyon Lau Jiemin"
                    className="w-full px-4 py-3 rounded-xl border border-minang-gold/40 bg-black/40 text-white text-sm focus:outline-none focus:ring-2 focus:ring-minang-gold transition-all"
                  />
                </div>

                {/* Attendance Options */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-2">
                    Konfirmasi Kehadiran
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setAttendance("hadir")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        attendance === "hadir"
                          ? "bg-gold-gradient text-minang-charcoal font-semibold border-minang-gold-light shadow-md"
                          : "border-minang-gold/40 bg-black/30 text-minang-cream/80 hover:border-minang-gold hover:text-white"
                      }`}
                    >
                      <Check className="w-4 h-4" />
                      <span>Ya, Insya Allah Hadir</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttendance("tidak_hadir")}
                      className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        attendance === "tidak_hadir"
                          ? "bg-gold-gradient text-minang-charcoal font-semibold border-minang-gold-light shadow-md"
                          : "border-minang-gold/40 bg-black/30 text-minang-cream/80 hover:border-minang-gold hover:text-white"
                      }`}
                    >
                      <X className="w-4 h-4" />
                      <span>Maaf, Belum Bisa</span>
                    </button>
                  </div>
                </div>

                {/* Guest Count Selection */}
                {attendance === "hadir" && (
                  <div className="animate-fade-in">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
                      Jumlah Tamu
                    </label>
                    <div className="relative">
                      <select
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-minang-gold/40 bg-black/40 text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-minang-gold transition-all cursor-pointer"
                      >
                        <option value="1" className="bg-minang-maroon-deep text-white">1 Orang</option>
                        <option value="2" className="bg-minang-maroon-deep text-white">2 Orang</option>
                        <option value="3" className="bg-minang-maroon-deep text-white">3 Orang</option>
                        <option value="4" className="bg-minang-maroon-deep text-white">4 Orang</option>
                      </select>
                      <Users className="w-4 h-4 text-minang-gold-light absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                )}

                {/* Message / Prayer Textarea */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-minang-gold-light mb-1.5">
                    Ucapan &amp; Doa Restu
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tuliskan ucapan dan doa restu Anda untuk Diah &amp; Made..."
                    className="w-full px-4 py-3 rounded-xl border border-minang-gold/40 bg-black/40 text-white text-sm focus:outline-none focus:ring-2 focus:ring-minang-gold transition-all resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  className="w-full font-semibold cursor-pointer"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  {isSubmitting ? "Mengirimkan..." : "Kirim Konfirmasi & Doa Restu"}
                </Button>
              </form>
            )}
          </motion.div>

          {/* Wishes List Board Column (Maroon Glass with Motion) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col h-full p-8 sm:p-10 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-minang-gold/30">
              <div className="flex items-center gap-2 text-minang-gold-light">
                <MessageSquareHeart className="w-5 h-5 text-minang-gold-light" />
                <h3 className="font-serif text-2xl font-medium text-white">Doa Restu</h3>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-black/40 text-minang-gold-light border border-minang-gold/40">
                {wishes.length} Pesan
              </span>
            </div>

            {/* Scrollable List */}
            <div className="flex-1 space-y-4 max-h-[280px] sm:max-h-[480px] overflow-y-auto pr-2">
              {wishes.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-2xl bg-black/35 border border-minang-gold/30 hover:border-minang-gold/60 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-serif font-medium text-white text-sm sm:text-base">
                      {item.name}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-md ${
                        item.attendance === "hadir"
                          ? "bg-emerald-950/70 text-emerald-300 border border-emerald-500/40"
                          : "bg-amber-950/70 text-amber-300 border border-amber-500/40"
                      }`}
                    >
                      {item.attendance === "hadir"
                        ? `Hadir (${item.guestCount || 1})`
                        : "Berhalangan"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-minang-cream/85 leading-relaxed font-light">
                    {item.message}
                  </p>
                  <span className="block text-[10px] text-minang-gold-light/70 mt-2 text-right">
                    {item.createdAt}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
