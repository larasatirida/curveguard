import {
    NodeOption,
    PublicReport,
    Announcement,
    CurveNode,
    MapMarker,
    NodeMetrics,
    SystemInsight,
    TrendPoint,
} from "@/types";

// ==========================================
// 1. DROPDOWN OPTION TIKUNGAN (Form Laporkan)
// ==========================================
export const MOCK_NODE_OPTIONS: NodeOption[] = [
    { id: "NODE-01", name: "Tikungan Sitinjau Lauik" },
    { id: "NODE-02", name: "Tikungan Tarahan" },
    { id: "NODE-03", name: "Tikungan Lubuk Alung" },
];

// ==========================================
// 2. DATA PETA SISI PENGGUNA
// ==========================================
export const MOCK_CURVE_NODES: CurveNode[] = [
    {
        id: "NODE-01",
        name: "NODE-01",
        locationName: "Tikungan Sitinjau Lauik",
        riskStatus: "High",
        lastUpdated: "2 menit yang lalu",
        lat: -0.9485,
        lng: 100.4735,
    },
    {
        id: "NODE-02",
        name: "NODE-02",
        locationName: "Tikungan Tarahan",
        riskStatus: "Medium",
        lastUpdated: "5 menit yang lalu",
        lat: -5.5182,
        lng: 105.3412,
    },
    {
        id: "NODE-03",
        name: "NODE-03",
        locationName: "Tikungan Lubuk Alung",
        riskStatus: "Low",
        lastUpdated: "baru saja",
        lat: -0.6812,
        lng: 100.2854,
    },
];

// ==========================================
// 3. DATA MARKER PETA PETUGAS
// ==========================================
export const MOCK_MAP_MARKERS: MapMarker[] = [
    {
        id: "NODE-01",
        lat: -0.9485,
        lng: 100.4735,
        sub: "Tikungan Sitinjau Lauik",
        tone: "High",
        score: "92",
        riskLabel: "HIGH RISK",
        metrics: [
            { label: "Vol/Jam", value: "25 kdr" },
            { label: "Rata Kecepatan", value: "47 km/j" },
            { label: "Dominasi", value: "Motor (66%)" },
        ],
    },
    {
        id: "NODE-02",
        lat: -5.5182,
        lng: 105.3412,
        sub: "Tikungan Tarahan",
        tone: "Medium",
        score: "64",
        riskLabel: "MEDIUM RISK",
        metrics: [
            { label: "Vol/Jam", value: "14 kdr" },
            { label: "Rata Kecepatan", value: "35 km/j" },
            { label: "Dominasi", value: "Motor (57%)" },
        ],
    },
    {
        id: "NODE-03",
        lat: -0.6812,
        lng: 100.2854,
        sub: "Tikungan Lubuk Alung",
        tone: "Low",
        score: "38",
        riskLabel: "LOW RISK",
        metrics: [
            { label: "Vol/Jam", value: "8 kdr" },
            { label: "Rata Kecepatan", value: "28 km/j" },
            { label: "Dominasi", value: "Mobil (50%)" },
        ],
    },
];

// ==========================================
// 4. DATA LAPORAN (Pengguna & Petugas)
// ==========================================
export const MOCK_REPORTS: PublicReport[] = [
    {
        id: "REP-SOS-001",
        timestamp: "10 min lalu",
        reporterName: "Tiang Sensor #01",
        namaTikungan: "Tikungan Sitinjau Lauik",
        lokasi: "Panorama 1",
        deskripsi: "Sinyal MERAH ditekan! Indikasi darurat kritis harus segera ditangani.",
        status: "Menunggu",
        source: "Button Tiang",
        emergencyLevel: "Merah",
    },
    {
        id: "REP-SOS-002",
        timestamp: "25 min lalu",
        reporterName: "Tiang Sensor #02",
        namaTikungan: "Tikungan Tarahan",
        lokasi: "KM 12",
        deskripsi: "Sinyal KUNING ditekan! Informasi kondisi waspada.",
        status: "Diproses",
        source: "Button Tiang",
        emergencyLevel: "Kuning",
    },
    {
        id: "REP-USR-104",
        timestamp: "45 min lalu",
        reporterName: "Budi Santoso",
        namaTikungan: "Tikungan Lubuk Alung",
        lokasi: "Jl. Raya Lubuk Alung",
        deskripsi: "Pohon tumbang menutup separuh jalan arah utara.",
        imageUrl: "/images/sample-report.jpg",
        status: "Menunggu",
        source: "Web Pengguna",
    },
    {
        id: "REP-SOS-003",
        timestamp: "2 jam lalu",
        reporterName: "Tiang Sensor #01",
        namaTikungan: "Tikungan Sitinjau Lauik",
        lokasi: "Panorama 1",
        deskripsi: "Sinyal HIJAU ditekan! Informasi kondisi jalan.",
        status: "Selesai",
        source: "Button Tiang",
        emergencyLevel: "Hijau",
    },
];

// ==========================================
// 5. DATA PENGUMUMAN (Pengguna & Petugas)
// ==========================================
export const MOCK_ANNOUNCEMENTS: Announcement[] = [
    {
        id: "ANC-001",
        title: "Perbaikan Tiang Sensor & Penerangan Jalan",
        nodeLocation: "Tikungan Sitinjau Lauik (NODE-01)",
        description: "Petugas sedang melakukan pemeliharaan sensor dan perbaikan lampu penerangan. Harap berhati-hati saat melintas.",
        createdAt: "15 Agu 2026, 09:00 WIB",
        author: "Tim Dishub",
    },
    {
        id: "ANC-002",
        title: "Waspada Jalan Licin Akibat Hujan",
        nodeLocation: "Tikungan Tarahan (NODE-02)",
        description: "Hujan deras menyebabkan bahu jalan licin. Kurangi kecepatan kendaraan Anda.",
        createdAt: "14 Agu 2026, 16:30 WIB",
        author: "Petugas Posko",
    },
];

// ==========================================
// 6. DATA ANALISIS (Petugas)
// ==========================================
export const MOCK_NODE_METRICS: NodeMetrics[] = [
    {
        nodeId: "NODE-01",
        nodeName: "Tikungan Sitinjau Lauik",
        riskScore: 92,
        status: "High",
        totalVehicles: 1890,
        peakHour: "17:00 - 18:00",
        speedAvg: 47,
        speedMax: 78,
        speedThresholdExceededPct: 34,
        classificationPct: {
            motorcycle: 66,
            car: 28,
            truck: 6,
        },
    },
    {
        nodeId: "NODE-02",
        nodeName: "Tikungan Tarahan",
        riskScore: 64,
        status: "Medium",
        totalVehicles: 1120,
        peakHour: "12:00 - 13:00",
        speedAvg: 35,
        speedMax: 55,
        speedThresholdExceededPct: 15,
        classificationPct: {
            motorcycle: 57,
            car: 29,
            truck: 14,
        },
    },
    {
        nodeId: "NODE-03",
        nodeName: "Tikungan Lubuk Alung",
        riskScore: 38,
        status: "Low",
        totalVehicles: 750,
        peakHour: "08:00 - 09:00",
        speedAvg: 28,
        speedMax: 42,
        speedThresholdExceededPct: 4,
        classificationPct: {
            motorcycle: 50,
            car: 40,
            truck: 10,
        },
    },
];

export const MOCK_SYSTEM_INSIGHTS: SystemInsight[] = [
    {
        id: "INS-001",
        type: "warning",
        title: "Lonjakan Kecepatan Terdeteksi",
        message: "34% kendaraan melebihi batas kecepatan aman di Tikungan Sitinjau Lauik.",
        nodeId: "NODE-01",
        timestamp: "10 menit lalu",
    },
    {
        id: "INS-002",
        type: "info",
        title: "Peningkatan Volume Lalu Lintas",
        message: "Volume kendaraan meningkat di Tikungan Tarahan memasuki jam pulang kerja.",
        nodeId: "NODE-02",
        timestamp: "30 menit lalu",
    },
];

export const MOCK_TREND_POINTS: TrendPoint[] = [
    { timeLabel: "06:00", score: 30 },
    { timeLabel: "09:00", score: 45 },
    { timeLabel: "12:00", score: 60 },
    { timeLabel: "15:00", score: 75 },
    { timeLabel: "18:00", score: 92 },
    { timeLabel: "21:00", score: 50 },
];