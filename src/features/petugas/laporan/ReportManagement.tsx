"use client";

import { useState } from "react";
import { MOCK_REPORTS } from "@/data/mockData";
import { PublicReport, ReportStatus } from "@/types";
import ReportHeader from "./reportHeader";
import ReportFilterTabs from "./filterLaporan";
import ReportTable from "./tabel";

export default function ReportManagement() {
    const [reports, setReports] = useState<PublicReport[]>(MOCK_REPORTS);
    const [activeTab, setActiveTab] = useState<string>("Semua");

    const handleStatusUpdate = (id: string, newStatus: ReportStatus) => {
        setReports((prev) =>
            prev.map((report) => (report.id === id ? { ...report, status: newStatus } : report))
        );
    };

    const counts: Record<string, number> = {
        Semua: reports.length,
        Menunggu: reports.filter((r) => r.status === "Menunggu").length,
        Diproses: reports.filter((r) => r.status === "Diproses").length,
        Selesai: reports.filter((r) => r.status === "Selesai").length,
        Ditolak: reports.filter((r) => r.status === "Ditolak").length,
    };

    const filteredReports =
        activeTab === "Semua"
            ? reports
            : reports.filter((r) => r.status === activeTab);

    return (
        <div className="space-y-4">
            <div className="border border-gray-200 bg-white p-4">
                <ReportHeader totalCount={reports.length} />
                <ReportFilterTabs
                    activeTab={activeTab}
                    onTabChange={setActiveTab}
                    counts={counts}
                />
            </div>
            <ReportTable reports={filteredReports} onStatusUpdate={handleStatusUpdate} />
        </div>
    );
}