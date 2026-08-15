"use client";

import { MOCK_REPORTS } from "@/data/mockData";

const statusStyles: Record<string, string> = {
    "Menunggu": "text-red-700",
    "Diproses": "text-yellow-700",
    "Selesai": "text-green-700",
};

export default function RecentReports() {
    const recentReports = MOCK_REPORTS.slice(0, 3);

    return (
        <section className="border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Laporan Terbaru dari Masyarakat
                </h3>
            </div>

            <div className="divide-y divide-gray-200">
                {recentReports.map((item) => (
                    <div key={item.id} className="flex items-center justify-between gap-4 py-3 first:pt-3 last:pb-0">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="truncate text-xs font-semibold text-gray-900">
                                    {item.namaTikungan}
                                </span>
                                <span className={`inline-flex items-center text-[10px] font-bold ${statusStyles[item.status] || "text-gray-600"}`}>
                                    {item.status}
                                </span>
                            </div>
                            <p className="mt-0.5 truncate text-xs text-gray-500">
                                {item.deskripsi}
                            </p>
                        </div>

                        <div className="shrink-0 text-[11px] text-gray-400">
                            {item.timestamp}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}