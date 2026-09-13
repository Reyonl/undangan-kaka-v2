# Website Undangan Pernikahan Personal (Bespoke & Editorial)

Website undangan pernikahan digital eksklusif dan personal yang dirancang khusus dengan gaya editorial majalah (*Vogue Wedding / Kinfolk*).

---

## ✨ Fitur Unggulan

1. **Dynamic Guest Name (`?to=...`)**:
   * Menyapa nama tamu secara personal di Opening Screen & Form RSVP.
   * Mendukung decoding otomatis untuk spasi, tanda koma, gelar akademik, dan karakter khusus:
     * `http://localhost:3000/?to=Reyon+Lau+Jiemin` $\rightarrow$ *"Reyon Lau Jiemin"*
     * `http://localhost:3000/?to=Dr.%20Andi%20Pratama%2C%20S.Kom.` $\rightarrow$ *"Dr. Andi Pratama, S.Kom."*
     * `http://localhost:3000/` $\rightarrow$ Fallback otomatis ke *"Tamu Undangan"*
2. **Single Source of Truth (`src/config/weddingData.ts`)**:
   * Seluruh informasi pernikahan (Nama mempelai pria/wanita, orang tua, tanggal acara akad & resepsi, lokasi Google Maps, milestone cerita cinta, galeri foto, no rekening tanda kasih, hingga musik latar) dapat diubah dalam satu file konfigurasi saja.
3. **Interactive Opening Screen (Cover)**:
   * Cover elegan dengan animasi buka (*smooth curtain transition*), memicu musik latar otomatis dan membuka scroll halaman.
4. **Floating Audio Controller**:
   * Pemutar musik latar romantis dengan indikator piringan hitam (*vinyl animation*) dan tombol toggle play/pause.
5. **Rangkaian Acara Lengkap**:
   * Detail Akad & Resepsi dengan tombol langsung ke *Google Maps* dan *Simpan Kalender (Google Calendar)*.
6. **Live Countdown Timer**:
   * Jam hitung mundur real-time (*Hari, Jam, Menit, Detik*) menuju hari H.
7. **Our Love Journey Timeline**:
   * Jejak perjalanan cinta pasangan dengan milestone tahun dan foto kenangan.
8. **Editorial Photo Gallery & Lightbox**:
   * Grid masonry dengan modal popup fullscreen, kontrol navigasi panah kiri/kanan, dan tombol close.
9. **RSVP & Digital Wishes Board**:
   * Form konfirmasi kehadiran interaktif (Nama, Hadir/Tidak, Jumlah Tamu) serta pesan doa restu yang tersimpan rapi di browser.
10. **Cashless Gift / Amplop Digital**:
    * Informasi nomor rekening / dompet digital dengan tombol *Salin No. Rekening* 1-klik yang interaktif.

---

## 🚀 Cara Menjalankan Proyek

### 1. Instalasi Dependensi
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Build untuk Production
```bash
npm run build
npm run start
```

---

## 📝 Cara Mengubah Data Pernikahan

Cukup buka file:
👉 `src/config/weddingData.ts`

Ubah nilai-nilai yang diinginkan:
* `couple.groom` & `couple.bride`: Nama lengkap, panggilan, nama orang tua, foto, instagram, bio.
* `events.ceremony` & `events.reception`: Tanggal, waktu, nama venue, alamat, link Google Maps.
* `countdownDate`: Tanggal target ISO 8601 (contoh: `"2026-10-24T08:00:00+07:00"`).
* `quotes`: Ayat suci atau kutipan romantis.
* `stories`: Milestone kisah perjalanan cinta.
* `gallery`: Daftar link foto galeri.
* `gifts`: Daftar nomor rekening bank atau e-wallet untuk amplop digital.
* `audio`: Tautan file musik MP3 latar.

---

## 📁 Struktur Direktori
```text
src/
├── app/
│   ├── layout.tsx         # Root Layout & Google Fonts
│   ├── page.tsx           # Halaman utama undangan
│   └── globals.css        # Token warna & styling kustom
├── components/
│   ├── opening/           # Opening Screen / Cover amplop
│   ├── hero/              # Hero Section
│   ├── couple/            # Profil Mempelai
│   ├── details/           # Akad & Resepsi
│   ├── countdown/         # Live Countdown Timer
│   ├── story/             # Love Journey Timeline
│   ├── gallery/           # Editorial Photo Gallery & Lightbox
│   ├── rsvp/              # Form RSVP & Papan Doa
│   ├── gift/              # Amplop Digital & Salin Rekening
│   ├── closing/           # Penutup & Ucapan Terima Kasih
│   ├── audio/             # Floating Music Player
│   └── ui/                # Button, Container, SectionHeader
├── config/
│   └── weddingData.ts     # Data terpusat undangan pernikahan
├── hooks/
│   ├── useGuestName.ts    # Hook pengambil nama tamu dari URL
│   └── useCountdown.ts    # Hook countdown timer real-time
└── lib/
    └── utils.ts           # Utility helper
```
