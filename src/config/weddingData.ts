export interface CoupleProfile {
  fullName: string;
  nickname: string;
  titleTradisi?: string; // "Anak Daro" atau "Marapulai"
  father: string;
  mother: string;
  photo: string;
  instagram?: string;
  bio?: string;
}

export interface WeddingEvent {
  title: string;
  subtitle?: string;
  date: string; // "Sabtu, 28 November 2026"
  isoDate: string; // "2026-11-28"
  time: string; // "08:00 - 10:00 WIB"
  venue: string;
  address: string;
  mapsUrl: string;
  calendarLink?: string;
}

export interface StoryMilestone {
  year: string;
  title: string;
  description: string;
  photo?: string;
}

export interface GalleryPhoto {
  url: string;
  caption?: string;
  span?: "tall" | "wide" | "normal";
}

export interface BankGift {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  qrCodeUrl?: string;
}

export interface WeddingData {
  title: string;
  subTitleTradisi: string;
  couple: {
    groom: CoupleProfile;
    bride: CoupleProfile;
    hashtag: string;
  };
  countdownDate: string; // Target date ISO 8601 string: 28 November 2026
  quotes: {
    verse: string;
    source: string;
    petatahMinang?: string;
    meaning?: string;
  };
  events: {
    ceremony: WeddingEvent; // Akad Nikah
    reception: WeddingEvent; // Baralek Gadang (Resepsi)
  };
  stories: StoryMilestone[];
  gallery: GalleryPhoto[];
  gifts: BankGift[];
  audio: {
    url: string;
    title: string;
    artist: string;
    autoplayOnOpen: boolean;
  };
  socialLinks?: {
    instagram?: string;
    whatsappShareText?: string;
  };
}

export const weddingData: WeddingData = {
  title: "The Wedding of Diah & Made",
  subTitleTradisi: "Baralek Gadang — Pernikahan Adat Minangkabau",
  couple: {
    groom: {
      fullName: "I Made Aryana Putra.",
      nickname: "Made",
      titleTradisi: "Marapulai",
      father: "Bpk. I Wayan Suryawan",
      mother: "Ibu Ni Made Astuti",
      photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      instagram: "@aryanaputra",
      bio: "Putra pertama yang penuh dedikasi, berprinsip kokoh, dan berhati tulus.",
    },
    bride: {
      fullName: "Diah Insani.",
      nickname: "Diah",
      titleTradisi: "Anak Daro",
      father: "Alm. Bpk. Maraidijon.",
      mother: "Ibu Rina Mardiyah S.pd.",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      instagram: "@diahinsani",
      bio: "Putri tercinta yang anggun, berhati lembut, dan senantiasa membawa kehangatan di tengah keluarga.",
    },
    hashtag: "#DiahMadeBaralek",
  },
  countdownDate: "2026-11-28T08:00:00+07:00",
  quotes: {
    verse:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    source: "QS. Ar-Rum: 21",
    petatahMinang:
      "Anak dipangku kamanakan dibimbiang, urang kampuang dipatenggangkan. Samanih rancak bungo kambang, baitu cinto manjalin janji suci.",
    meaning:
      "Dengan restu orang tua dan keluarga besar, dua insan bersatu mengikat janji suci dalam bingkai adat yang luhur dan ridho Illahi.",
  },
  events: {
    ceremony: {
      title: "Akad Nikah",
      subtitle: "Prosesi Ijab Kabul & Janji Suci",
      date: "Sabtu, 28 November 2026",
      isoDate: "2026-11-28",
      time: "08:00 - 10:00 WIB",
      venue: "Rumah Mempelai Wanita",
      address: "Jalan Dayung III C No. 6 ",
      mapsUrl: "https://maps.app.goo.gl/vGJdqmPMKnoCSBZEA",
    },
    reception: {
      title: "Baralek Gadang (Resepsi)",
      subtitle: "Perayaan Adat & Jamuan Kasih Keluarga Besar",
      date: "Sabtu, 28 November 2026",
      isoDate: "2026-11-28",
      time: "11:00 - 16:00 WIB",
      venue: "Balai Gadang",
      address: "Jl. Balai Gadang Raya No. 12, Kebayoran Baru, Jakarta Selatan",
      mapsUrl: "https://maps.app.goo.gl/vGJdqmPMKnoCSBZEA",
    },
  },
  stories: [
    {
      year: "2020",
      title: "Mulo Basuo (Pertemuan Pertama)",
      description:
        "Sebuah perjumpaan tak terduga yang membuka ruang komunikasi penuh rasa saling menghargai dan menyatukan dua latar belakang yang saling melengkapi.",
      photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
    },
    {
      year: "2022",
      title: "Manjalin Janji (Membangun Komitmen)",
      description:
        "Berjalan beriringan dalam suka dan duka, belajar saling mengerti dan menaruh keyakinan bahwa takdir sedang menenun perjalanan kami berdua.",
      photo: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80",
    },
    {
      year: "2025",
      title: "Batimbang Tando (Hari Lamaran)",
      description:
        "Di hadapan keluarga besar dengan segenap adat dan kehormatan, cincin tanda kesungguhan disematkan sebagai ikrar menuju mahligai rumah tangga.",
      photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=600&q=80",
    },
    {
      year: "2026",
      title: "Baralek Gadang (Hari Bahagia)",
      description:
        "Dengan penuh rasa syukur dan doa restu niniak mamak serta kedua orang tua, kami melangkah bersama mengarungi samudera kehidupan.",
      photo: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
    },
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
      caption: "Janji Suci dalam Keanggunan Tradisi",
      span: "tall",
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
      caption: "Duo Hati Manjalin Cinto",
      span: "wide",
    },
    {
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
      caption: "Momen Penuh Kehangatan",
      span: "normal",
    },
    {
      url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80",
      caption: "Saliang Manuntun Manuju Ridho-Nya",
      span: "normal",
    },
    {
      url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80",
      caption: "Cahaya Emas di Hari Bahagia",
      span: "wide",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
      caption: "Langkah Abadi Berdua",
      span: "tall",
    },
  ],
  gifts: [
    {
      bankName: "Bank Central Asia (BCA)",
      accountNumber: "8801234567",
      accountHolder: "Diah Insani",
    },
    {
      bankName: "Bank Mandiri",
      accountNumber: "1370019283746",
      accountHolder: "I Made Aryana Putra",
    },
  ],
  audio: {
    url: "/audio/wedding-song.mp3",
    title: "Urang Minang Baralek Gadang",
    artist: "Randy Chow feat. Yeyen Zymra",
    autoplayOnOpen: true,
  },
  socialLinks: {
    whatsappShareText:
      "Assalamu'alaikum Wr. Wb. Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i untuk menghadiri Baralek Gadang (Pernikahan) kami: Diah Insani & I Made Aryana Putra.",
  },
};
