import { Announcement } from "./type";

export const INITIAL_ANNOUNCEMENTS: Announcement[] = [
    {
        id: "ANN-2026-001",
        title: "Perbaikan Cermin Cembung & Penerangan Jalan",
        nodeLocation: "Tikungan Pagarsari (NODE-01)",
        description:
            "Petugas sedang melakukan penggantian unit cermin cembung dan perbaikan lampu PJU. Lalu lintas diberlakukan buka-tutup terbatas hingga pukul 16.00 WIB.",
        createdAt: "12 Ags 2026, 09:00",
        author: "Petugas",
    },
    {
        id: "ANN-2026-002",
        title: "Penutupan Sementara Jalur Kiri Tikungan Baron",
        nodeLocation: "Tikungan Baron (NODE-03)",
        description:
            "Pembersihan tumpahan oli dan material pasir pasca hujan deras. Pengendara diimbau menurunkan kecepatan.",
        createdAt: "11 Ags 2026, 14:30",
        author: "Petugas",
    },
];