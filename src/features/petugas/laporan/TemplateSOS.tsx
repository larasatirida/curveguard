import { EmergencyLevel } from "@/types";

export const SOS_TEMPLATES: Record<EmergencyLevel, string> = {
    Merah: "Sinyal MERAH ditekan! Indikasi darurat kritis harus segera ditangani.",
    Kuning: "Sinyal KUNING ditekan! Informasi kondisi waspada.",
    Hijau: "Sinyal HIJAU ditekan! Informasi kondisi jalan.",
};

export function getSosDescription(level: EmergencyLevel): string {
    return SOS_TEMPLATES[level] || "Sinyal SOS ditekan dari tiang sensor.";
}