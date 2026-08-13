import { ReportStatus } from "./type";

type ReportStatusBadgeProps = {
    status: ReportStatus;
};

export default function ReportStatusBadge({ status }: ReportStatusBadgeProps) {
    const getStyle = (s: ReportStatus) => {
        switch (s) {
            case "Menunggu":
                return "text-black";
            case "Diproses":
                return "text-yellow-700";
            case "Selesai":
                return "text-green";
            case "Ditolak":
                return "text-red";
        }
    };

    return (
        <span className={`text-[10px] font-semibold uppercase tracking-wider ${getStyle(status)}`}>
            {status}
        </span>
    );
}