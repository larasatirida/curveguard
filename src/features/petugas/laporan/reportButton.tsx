import { ReportSource, EmergencyLevel } from "@/types";

type ReportSourceBadgeProps = {
    source: ReportSource;
    level?: EmergencyLevel;
};

export default function ReportSourceBadge({ source, level }: ReportSourceBadgeProps) {
    if (source === "Web Pengguna") {
        return (
            <span className="inline-flex items-center gap-1 rounded border border-gray-200 bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-gray-600">
                Pengguna
            </span>
        );
    }

    // Tampilan khusus Tombol Tiang (SOS) berdasarkan warna
    const getLevelStyle = () => {
        switch (level) {
            case "Merah":
                // Berkedip (animate-pulse) untuk darurat kritis
                return "bg-red-600 text-white border-red-700 animate-pulse font-bold";
            case "Kuning":
                return "bg-yellow-100 text-yellow-800 border-amber-300 font-semibold";
            case "Hijau":
                return "bg-green-100 text-green-800 border-green-300 font-semibold";
            default:
                return "bg-blue-100 text-blue-800 border-blue-300";
        }
    };

    const getLabel = () => {
        switch (level) {
            case "Merah":
                return "TIANG (DARURAT KRITIS)";
            case "Kuning":
                return "TIANG (WASPADA)";
            case "Hijau":
                return "TIANG (INFO KONDISI)";
            default:
                return "TIANG (SOS)";
        }
    };

    return (
        <span className={`inline-flex items-center rounded border px-2 py-0.5 text-[10px] tracking-tight ${getLevelStyle()}`}>
            {getLabel()}
        </span>
    );
}