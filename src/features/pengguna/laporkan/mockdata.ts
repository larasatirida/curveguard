import { PublicReport, NodeOption } from "./type";

export const AVAILABLE_NODES: NodeOption[] = [
    { id: "NODE-01", name: "Tikungan Pagarsari" },
    { id: "NODE-02", name: "Tikungan Cibeureum" },
    { id: "NODE-03", name: "Tikungan Baron" },
    { id: "NODE-04", name: "Tikungan Sukamaju" },
];

export const INITIAL_REPORTS: PublicReport[] = [
    {
        id: "REP-2026-001",
        timestamp: "11 Ags 2026, 10:15",
        reporterName: "Budi Santoso",
        namaTikungan: "NODE-03",
        lokasi: "Tikungan Baron",
        deskripsi: "Ada tumpahan oli di lajur kiri dekat cermin cembung, sangat licin untuk pengendara motor.",
        imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Foto+Oli+Jalan",
        status: "Menunggu",
    },
    {
        id: "REP-2026-002",
        timestamp: "11 Ags 2026, 08:40",
        reporterName: "Rian (Warga)",
        namaTikungan: "NODE-02",
        lokasi: "Tikungan Cibeureum",
        deskripsi: "Cermin cembung tertutup dahan pohon yang rimbun, jarak pandang dari arah bawah terhalang.",
        imageUrl: "https://placehold.co/400x300/e2e8f0/1e293b?text=Cermin+Tertutup",
        status: "Diproses",
    },
    {
        id: "REP-2026-003",
        timestamp: "10 Ags 2026, 21:05",
        reporterName: "Anonim",
        namaTikungan: "NODE-01",
        lokasi: "Tikungan Pagarsari",
        deskripsi: "Lampu penerangan jalan (PJU) mati total, tikungan sangat gelap di malam hari.",
        status: "Selesai",
    },
    {
        id: "REP-2026-004",
        timestamp: "10 Ags 2026, 16:20",
        reporterName: "Siti Rahma",
        namaTikungan: "NODE-04",
        lokasi: "Tikungan Sukamaju",
        deskripsi: "Pedagang kaki lima berjualan terlalu memakan bahu jalan di tikungan.",
        status: "Ditolak",
    },
];