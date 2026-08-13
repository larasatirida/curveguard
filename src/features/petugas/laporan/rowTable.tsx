import { PublicReport, ReportStatus } from "./type";
import ReportStatusBadge from "./statusLaporan";
import ReportImagePreview from "./imageView";
import ReportActionButton from "./actionButton";

type ReportTableRowProps = {
    report: PublicReport;
    onStatusUpdate: (id: string, newStatus: ReportStatus) => void;
};

export default function ReportTableRow({ report, onStatusUpdate }: ReportTableRowProps) {
    return (
        <tr className="hover:bg-gray-50/50">
            <td className="px-4 py-3 align-top whitespace-nowrap">
                <div className="font-mono font-bold text-gray-900">{report.id}</div>
                <div className="text-[10px] text-gray-500 mt-0.5">{report.timestamp}</div>
            </td>
            <td className="px-4 py-3 align-top whitespace-nowrap font-medium text-gray-900">
                {report.reporterName}
            </td>
            <td className="px-4 py-3 align-top whitespace-nowrap">
                <div className="font-semibold text-gray-900">{report.namaTikungan}</div>
                <div className="text-gray-500">{report.lokasi}</div>
            </td>
            <td className="px-4 py-3 align-top max-w-xs">
                <p className="text-gray-800 leading-relaxed">{report.deskripsi}</p>
            </td>
            <td className="px-4 py-3 align-top whitespace-nowrap">
                <ReportImagePreview imageUrl={report.imageUrl} />
            </td>
            <td className="px-4 py-3 align-top whitespace-nowrap">
                <ReportStatusBadge status={report.status} />
            </td>
            <td className="px-4 py-3 align-top text-right whitespace-nowrap">
                <ReportActionButton
                    reportId={report.id}
                    currentStatus={report.status}
                    onStatusUpdate={onStatusUpdate}
                />
            </td>
        </tr>
    );
}