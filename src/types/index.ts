//SHARED & ENUM TYPES
export type RiskStatus = "Low" | "Medium" | "High";
export type RiskTone = RiskStatus;

export type ReportStatus = "Menunggu" | "Diproses" | "Selesai" | "Ditolak";
export type ReportSource = "Web Pengguna" | "Button Tiang";
export type EmergencyLevel = "Hijau" | "Kuning" | "Merah";


//FITUR LAPORAN (Pengguna & Petugas)
export interface NodeOption {
    id: string;
    name: string;
}

// Gabungan PublicReport untuk sisi Pengguna & Petugas
export interface PublicReport {
    id: string;
    timestamp: string;
    reporterName: string;
    namaTikungan: string;
    lokasi?: string;                // Opsional (untuk kompatibilitas)
    deskripsi: string;
    imageUrl?: string;
    status: ReportStatus;
    source: ReportSource;         
    emergencyLevel?: EmergencyLevel;
}

//FITUR PENGUMUMAN (Pengguna & Petugas)
export interface Announcement {
    id: string;
    title: string;
    nodeLocation: string;
    description: string;
    createdAt: string;
    author: string;
}

// Alias agar kodingan sisi pengguna tidak error jika meng-import PublicAnnouncement
export type PublicAnnouncement = Announcement;

// FITUR PETA & DASHBOARD PETUGAS
export interface CurveNode {
    id: string;
    name: string;
    locationName: string;
    riskStatus: RiskStatus;
    lastUpdated: string;
    lat: number;
    lng: number;
}

export interface NodeMetric {
    label: string;
    value: string;
}

export interface MapMarker {
    id: string;
    lat: number;
    lng: number;
    sub: string;
    tone: RiskTone;
    score: string;
    riskLabel: string;
    metrics: NodeMetric[];
}

export interface LeafletMapProps {
    mapMarkers: MapMarker[];
    centerPosition: [number, number];
}

// FITUR ANALISIS (Petugas)
export interface NodeMetrics {
    nodeId: string;
    nodeName: string;
    riskScore: number;
    status: RiskStatus;
    totalVehicles: number;
    peakHour: string;
    speedAvg: number;
    speedMax: number;
    speedThresholdExceededPct: number;
    classificationPct: {
        motorcycle: number;
        car: number;
        truck: number;
    };
}

export interface SystemInsight {
    id: string;
    type: "warning" | "info";
    title: string;
    message: string;
    nodeId?: string;
    timestamp: string;
}

export interface TrendPoint {
    timeLabel: string;
    score: number;
}