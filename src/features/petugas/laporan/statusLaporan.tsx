import { ReportStatus } from "@/types";

type ReportStatusBadgeProps = {
    status: ReportStatus;
};

export default function ReportStatusBadge({ status }: ReportStatusBadgeProps) {
    const getStyle = (s: ReportStatus) => {
        switch (s) {
            case "Menunggu":
                return "text-amber-700 bg-amber-50 border-amber-200";
            case "Diproses":
                return "text-blue-700 bg-blue-50 border-blue-200";
            case "Selesai":
                return "text-emerald-700 bg-emerald-50 border-emerald-200";
            case "Ditolak":
                return "text-red-700 bg-red-50 border-red-200";
            default:
                return "text-gray-700 bg-gray-50 border-gray-200";
        }
    };

    return (
        <span className={`inline-block border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${getStyle(status)}`}>
            {status}
        </span>
    );
}