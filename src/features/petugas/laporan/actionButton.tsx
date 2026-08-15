import { ReportStatus } from "@/types";

type ReportActionButtonProps = {
    reportId: string;
    currentStatus: ReportStatus;
    onStatusUpdate: (id: string, newStatus: ReportStatus) => void;
};

export default function ReportActionButton({
    reportId,
    currentStatus,
    onStatusUpdate,
}: ReportActionButtonProps) {
    return (
        <div className="flex items-center justify-end gap-1">
            <button
                type="button"
                onClick={() => onStatusUpdate(reportId, "Diproses")}
                disabled={currentStatus === "Diproses"}
                className="border border-gray-300 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 hover:bg-yellow-50 hover:text-yellow-700 hover:border-yellow-300 disabled:opacity-40"
            >
                Diproses
            </button>
            <button
                type="button"
                onClick={() => onStatusUpdate(reportId, "Selesai")}
                disabled={currentStatus === "Selesai"}
                className="border border-gray-300 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-300 disabled:opacity-40"
            >
                Selesai
            </button>
            <button
                type="button"
                onClick={() => onStatusUpdate(reportId, "Ditolak")}
                disabled={currentStatus === "Ditolak"}
                className="border border-gray-300 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 hover:border-red-300 disabled:opacity-40"
            >
                Tolak
            </button>
        </div>
    );
}