"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, CreditCard } from "lucide-react";
import { weddingData } from "@/config/weddingData";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { MinangCorner } from "@/components/ui/MinangOrnaments";

export function GiftSection() {
  const gifts = weddingData.gifts;
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (accountNumber: string, index: number) => {
    navigator.clipboard.writeText(accountNumber);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2500);
  };

  if (!gifts || gifts.length === 0) return null;

  return (
    <section id="gift" className="py-20 sm:py-28 bg-songket-dark relative text-minang-cream">
      <Container size="md">
        <SectionHeader
          subtitle="Tanda Kasih"
          title="Kado & Tanda Kasih"
          description="Doa restu Anda merupakan karunia terindah bagi kami. Namun jika Anda bermaksud memberikan tanda kasih, kami menyediakannya melalui rekening berikut:"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {gifts.map((gift, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-6 sm:p-8 rounded-3xl glass-panel-maroon border border-minang-gold/45 shadow-2xl flex flex-col justify-between hover:border-minang-gold transition-all duration-300 group"
            >
              <MinangCorner position="top-left" color="#E8CE75" className="absolute top-3 left-3" />
              <MinangCorner position="top-right" color="#E8CE75" className="absolute top-3 right-3" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-minang-gold-light border border-minang-gold/40 shadow-sm">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-xs text-minang-gold-light tracking-wider uppercase">
                    {gift.bankName}
                  </span>
                </div>

                <p className="text-xs text-minang-cream/70 uppercase tracking-wider mb-1">
                  Nomor Rekening
                </p>
                <p className="font-mono text-base sm:text-lg font-semibold text-white tracking-wider mb-2 break-all">
                  {gift.accountNumber}
                </p>
                <p className="text-xs sm:text-sm text-minang-cream/90 font-medium">
                  a.n. <strong className="text-minang-gold-light">{gift.accountHolder}</strong>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-minang-gold/30">
                <Button
                  variant={copiedIndex === index ? "gold" : "outline"}
                  size="sm"
                  onClick={() => copyToClipboard(gift.accountNumber, index)}
                  className={`w-full text-xs font-semibold cursor-pointer ${
                    copiedIndex === index
                      ? ""
                      : "text-minang-gold-light border-minang-gold/60 hover:bg-minang-gold hover:text-minang-charcoal"
                  }`}
                  icon={
                    copiedIndex === index ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )
                  }
                >
                  {copiedIndex === index ? "Tersalin ke Clipboard!" : "Salin No. Rekening"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
