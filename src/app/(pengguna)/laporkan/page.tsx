"use client";

import { useState } from "react";
import { MOCK_REPORTS } from "@/data/mockData";
import { PublicReport } from "@/types";
import FormLaporkan from "@/features/pengguna/laporkan/formLaporkan";
import DaftarLaporanPengguna from "@/features/pengguna/laporkan/daftarLaporan";

export default function LaporkanPage() {
    const [reports, setReports] = useState<PublicReport[]>(MOCK_REPORTS);

    const handleAddReport = (newReport: PublicReport) => {
        setReports((prev) => [newReport, ...prev]);
    };

    return (
        <div className="grid gap-4 lg:grid-cols-2">
            <div>
                <FormLaporkan onAddReport={handleAddReport} />
            </div>
            <div>
                <DaftarLaporanPengguna reports={reports} />
            </div>
        </div>
    );
}