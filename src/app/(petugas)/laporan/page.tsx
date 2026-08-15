"use client";

import { useState } from "react";
import { MOCK_REPORTS } from "@/data/mockData";
import { PublicReport, ReportStatus } from "@/types";
import ReportHeader from "@/features/petugas/laporan/reportHeader";
import ReportFilterTabs from "@/features/petugas/laporan/filterLaporan";
import ReportTable from "@/features/petugas/laporan/tabel";

export default function LaporanPage() {
    const [reports, setReports] = useState<PublicReport[]>(MOCK_REPORTS);
    const [filterStatus, setFilterStatus] = useState<string>("Semua");

    const handleStatusUpdate = (reportId: string, newStatus: ReportStatus) => {
        setReports((prev) =>
            prev.map((item) => (item.id === reportId ? { ...item, status: newStatus } : item))
        );
    };

    const filteredReports = reports.filter((report) => {
        const matchesStatus = filterStatus === "Semua" || report.status === filterStatus;
        return matchesStatus;
    });

    const statusCounts = {
        Semua: reports.length,
        Menunggu: reports.filter((r) => r.status === "Menunggu").length,
        Diproses: reports.filter((r) => r.status === "Diproses").length,
        Selesai: reports.filter((r) => r.status === "Selesai").length,
        Ditolak: reports.filter((r) => r.status === "Ditolak").length,
    };

    return (
        <section className="space-y-4">
            <div className="border border-gray-200 bg-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <ReportHeader totalCount={reports.length} />
                </div>
                <ReportFilterTabs
                    activeTab={filterStatus}
                    onTabChange={setFilterStatus}
                    counts={statusCounts}
                />
            </div>

            <ReportTable reports={filteredReports} onStatusUpdate={handleStatusUpdate} />
        </section>
    );
}