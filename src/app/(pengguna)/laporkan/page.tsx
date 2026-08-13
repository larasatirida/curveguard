"use client";

import { useState } from "react";
import { INITIAL_REPORTS } from "@/features/pengguna/laporkan/mockdata";
import { PublicReport } from "@/features/pengguna/laporkan/type";
import FormLaporkan from "@/features/pengguna/laporkan/formLaporkan";
import DaftarLaporanPengguna from "@/features/pengguna/laporkan/daftarLaporan";

export default function LaporkanPage() {
    const [reports, setReports] = useState<PublicReport[]>(INITIAL_REPORTS);

    const handleAddReport = (newReport: PublicReport) => {
        setReports((prev) => [newReport, ...prev]);
    };

    return (
        <section className="space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
                {/* Form Upload Laporan (7 Kolom) */}
                <div className="lg:col-span-7">
                    <FormLaporkan onAddReport={handleAddReport} />
                </div>

                {/* Daftar Laporan Terkini (5 Kolom) */}
                <div className="lg:col-span-5">
                    <DaftarLaporanPengguna reports={reports} />
                </div>
            </div>
        </section>
    );
}