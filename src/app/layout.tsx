import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { weddingData } from "@/config/weddingData";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#6B171D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${weddingData.title} | ${weddingData.subTitleTradisi}`,
  description: `Kami bermaksud mengundang Anda untuk merayakan momen istimewa Baralek Gadang (Pernikahan Adat Minangkabau) ${weddingData.couple.bride.nickname} & ${weddingData.couple.groom.nickname}.`,
  openGraph: {
    title: `${weddingData.title} — ${weddingData.subTitleTradisi}`,
    description: `Undangan Resmi Baralek Gadang - ${weddingData.couple.bride.nickname} & ${weddingData.couple.groom.nickname}`,
    images: [
      {
        url:
          weddingData.gallery[0]?.url ||
          "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: weddingData.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: weddingData.title,
    description: `Undangan Resmi Baralek Gadang - ${weddingData.couple.bride.nickname} & ${weddingData.couple.groom.nickname}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${playfair.variable} ${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="font-sans bg-minang-cream text-minang-charcoal min-h-screen selection:bg-minang-maroon selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
