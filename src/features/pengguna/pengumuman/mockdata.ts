import { PublicAnnouncement } from "./type";

export const MOCK_ANNOUNCEMENTS: PublicAnnouncement[] = [
    {
        id: "ANN-2026-001",
        title: "Pemeliharaan Sensor Warning Light",
        nodeLocation: "NODE-01 (Tikungan Pagarsari)",
        description: "Sedang dilakukan perbaikan dan kalibrasi sensor pada NODE-01. Pengendara dihimbau tetap berhati-hati saat melintas.",
        createdAt: "12 Ags 2026, 14:00",
        author: "Petugas Dishub",
    },
    {
        id: "ANN-2026-002",
        title: "Himbauan Waspada Cuaca Hujan & Jalan Licin",
        nodeLocation: "Semua Tikungan",
        description: "Intensitas hujan tinggi di kawasan jalur tikungan Cibeureum dan Baron. Kurangi kecepatan dan jaga jarak aman.",
        createdAt: "10 Ags 2026, 09:30",
        author: "Admin Sistem",
    },
    {
        id: "ANN-2026-003",
        title: "Pemasangan Cermin Cembung Baru",
        nodeLocation: "NODE-03 (Tikungan Baron)",
        description: "Telah selesai dilakukan instalasi cermin cembung tambahan di NODE-03 untuk memperluas jarak pandang pengendara.",
        createdAt: "08 Ags 2026, 16:15",
        author: "Petugas Dishub",
    },
];