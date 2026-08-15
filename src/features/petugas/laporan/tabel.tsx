import { PublicReport, ReportStatus } from "@/types";
import ReportTableRow from "./rowTable";

type ReportTableProps = {
    reports: PublicReport[];
    onStatusUpdate: (id: string, newStatus: ReportStatus) => void;
};

export default function ReportTable({ reports, onStatusUpdate }: ReportTableProps) {
    return (
        <div className="border border-gray-200 bg-white overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
                <thead>
                    <tr className="border-b border-gray-200 bg-gray-50 text-[11px] font-bold uppercase tracking-wider text-gray-600">
                        <th className="px-4 py-2.5">ID / Waktu</th>
                        <th className="px-4 py-2.5">Sumber & Level</th>
                        <th className="px-4 py-2.5">Pelapor</th>
                        <th className="px-4 py-2.5">Lokasi Tikungan</th>
                        <th className="px-4 py-2.5">Isi Laporan</th>
                        <th className="px-4 py-2.5">Foto</th>
                        <th className="px-4 py-2.5">Status</th>
                        <th className="px-4 py-2.5 text-right">Aksi Petugas</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-gray-900">
                    {reports.length === 0 ? (
                        <tr>
                            <td colSpan={8} className="px-4 py-8 text-center text-gray-400">
                                Tidak ada laporan yang sesuai.
                            </td>
                        </tr>
                    ) : (
                        reports.map((report) => (
                            <ReportTableRow
                                key={report.id}
                                report={report}
                                onStatusUpdate={onStatusUpdate}
                            />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}