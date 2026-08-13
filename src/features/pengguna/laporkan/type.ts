export type ReportStatus = "Menunggu" | "Diproses" | "Selesai" | "Ditolak";

export interface NodeOption {
    id: string;
    name: string;
}

export interface PublicReport {
    id: string;
    timestamp: string;
    reporterName: string;
    namaTikungan: string;
    lokasi: string;
    deskripsi: string;
    imageUrl?: string;
    status: ReportStatus;
}