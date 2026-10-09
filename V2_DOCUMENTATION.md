# Undangan Kaka V2 — Minang × Bali Cultural Fusion

## Ringkasan Project

**Undangan Kaka V2** adalah pengembangan modern dari project undangan digital asli, dengan konsep perpaduan adat Minangkabau (Diah Insani) dan adat Bali (Made Aryana Putra). V2 memadukan kemegahan budaya Minangkabau dengan karakter artistik Bali, dibangun sebagai Next.js 15 App Router landing page eksklusif.

### Lokasi Project
- **Sumber (V1):** `D:\laragon\www\Undangan_kaka`
- **V2:** `D:\laragon\www\undangan-kaka-v2`
- **Framework:** Next.js 15.5.25 (App Router)
- **Package Manager:** npm 10.7+
- **Runtime:** Node.js 20+

## Teknologi
- **React 19** + **Next.js 15** (App Router)
- **TypeScript** (strict mode)
- **Tailwind CSS 4** — desain sistem tema khusus
- **Framer Motion 12** — animasi premium dan parallax
- **Lucide React** — ikonografi
- **Next/Image** — optimasi gambar otomatis

## Fitur

### Yang Dipertahankan (dari V1)
- ✅ Opening Screen dengan transisi cover reveal
- ✅ Hero Section dengan nama pasangan & quote
- ✅ Couple Introduction (kartu pengantin bride & groom)
- ✅ Countdown Section (timer hitung mundur ke hari akad)
- ✅ Our Story / Cultural Journey (timeline kisah)
- ✅ Event Details (akad nikah + baralek gadang dengan peta & RSVP link)
- ✅ Gallery (grid editorial dengan lightbox modal)
- ✅ RSVP & Wishes (form konfirmasi kehadiran + ucapan doa)
- ✅ Gift Section (rekening tanda kasih)
- ✅ Closing Section (penutupan emosional)
- ✅ Floating Navigation (bottom dock navigasi responsif)
- ✅ Share Modal (generator link undangan + draft WhatsApp)

### Yang Diperbarui / Ditambahkan (V2)
- 🌸 **Desain Minang × Bali Fusion:**
  - Palet warna: Deep Maroon/Burgundy (Minang) + Antique Gold + Warm Ivory + Terracotta & Dark Brown (Bali)
  - Ornamen Minang: `RumahGadangSilhouette`, `MinangCorner`, `SuntiangIcon`, `PucuakRebuangDivider`
  - Ornamen Bali: `BaliGateSilhouette`, `BaliCorner`, `KambojaFlower`, `BaliFlowerDivider`
  - Komposisi: Minang sebagai fondasi, Bali sebagai aksen representatif
- ✨ **Framer Motion Integration:**
  - Parallax pada ornamen dekoratif (Hero, Story, Countdown, RSVP, Gallery)
  - Opening cover reveal (opacity, scale, controlled motion)
  - Hero reveal dengan staggered animation
  - Scroll-triggered reveal (whileInView) pada semua section
  - Staggered timeline cascade di StorySection
  - Gallery transitions dan hover effects
  - Micro-interactions pada tombol RSVP, FloatingNav, dan CTA
- 🎨 **SectionHeader tema dinamis:**
  - `culturalTheme="minang"` → divider Suntiang/Pucuak Rebuang
  - `culturalTheme="bali"` → divider Kamboja/Bali Flower
- 📱 **Responsivitas mobile-first:**
  - Layout fleksibel untuk ponsel kecil, tablet, desktop
  - Touch area yang aman
  - Safe area dan overflow yang diatur
  - Font sizing yang progresif
- ♿ **Aksesibilitas:**
  - `prefers-reduced-motion` media query mendisable parallax & animasi
  - Semantic HTML & ARIA labels
  - Kontras yang cukup untuk semua elemen

## Cara Menjalankan (Development)

```bash
cd /d/laragon/www/undangan-kaka-v2

# Install dependencies (jika belum)
npm ci

# Jalankan development server
npm run dev -- -p 3000

# Build produksi
npm run build

# Lint
npm run lint
```

Preview: `http://localhost:3000`

## Struktur Komponen

```
src/
├── app/
│   ├── layout.tsx          # Root layout (font, metadata, OG tags)
│   ├── globals.css         # Tema, desain sistem, animasi, aksesibilitas
│   └── page.tsx            # Halaman utama (menggabungkan semua section)
├── components/
│   ├── opening/            # Opening screen (cover reveal)
│   ├── hero/               # Hero section (nama pasangan, quote, tanggal)
│   ├── couple/             # Couple introduction (kartu bride & groom)
│   ├── countdown/          # Countdown timer ke hari akad
│   ├── details/            # Detail acara (akad + baralek, peta, RSVP)
│   ├── story/              # Timeline kisah pernikahan
│   ├── gallery/            # Galeri foto dengan lightbox modal
│   ├── rsvp/               # RSVP form + daftar ucapan/do'a
│   ├── gift/               # Rekening tanda kasih
│   ├── closing/            # Penutupan undangan
│   ├── navigation/         # Floating nav dock
│   ├── share/              # Share modal + floating button
│   └── ui/                 # Komponen reusable (Container, Button, SectionHeader, MinangOrnaments)
├── config/
│   └── weddingData.ts      # Data master (mempelai, acara, galeri, quotes)
├── hooks/
│   ├── useCountdown.ts     # Hook hitung mundur
│   └── useParallax.ts      # Hook parallax helper
├── lib/
│   └── utils.ts            # Utility (cn, formatDate)
└── styles/
    └── tailwind.css        # (legacy, jika ada)
```

## Konfigurasi Tailwind

Desain sistem berisi palet warna tema khusus:

| Semantic Name             | Warna Hex  | Asal Budaya |
|---------------------------|------------|-------------|
| `brand-maroon` / `minang-maroon-*` | `#2D070B` – `#6B171D` | Minangkabau |
| `minang-gold` / `minang-gold-light` | `#D4AF37` – `#E8CE75` | Antique Gold |
| `minang-cream` / `minang-cream` | `#FDFBF7` | Warm Ivory |
| `bali-terracotta` / `bali-terracotta-light` | `#E07A5F` – `#8A3B1A` | Bali Accent |
| `bali-dark-brown` | `#3E0B08` | Bali Accent |

Glass panel variants:
- `.glass-panel-maroon` — Minang theme (emas/maroon gelap)
- `.glass-panel-bali` — Bali theme (terracotta/merah gelap)

## Keterbatasan yang Masih Ada
1. **Foto pasangan:** V2 masih menggunakan placeholder stock foto (Unsplash) yang disengaja — bukan foto pasangan asli. Ini sengaja untuk penggunaan template yang mudah diganti.
2. **Musik:** Belum ada integrasi audio otomatis — membutuhkan interaksi pengguna pertama sesuai best practice.
3. **Backend RSVP:** RSVP & wishes disimpan di `localStorage` (client-only) — belum ada backend API untuk persistensi lintas device.
4. **Peta lokasi:** Menggunakan link Google Maps eksternal — belum ada integrasi embed peta kustom.
5. **Deploy:** V2 belum di-deploy ke production.

## Catatan Keamanan
- Tidak ada secret/API key di frontend
- Data undangan bersifat statis dari `weddingData.ts`
- Tidak ada koneksi backend eksternal
- LocalStorage bersifat client-side only, tidak aman untuk data sensitif