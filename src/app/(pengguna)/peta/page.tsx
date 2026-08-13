"use client";

import dynamic from "next/dynamic";
import { MOCK_USER_NODES } from "@/features/pengguna/peta/mockdata";

// Import NodeMap secara dinamis (disable SSR) untuk keamanan Leaflet
const NodeMap = dynamic(
    () => import("@/features/pengguna/peta/nodemap"),
    {
        ssr: false,
        loading: () => (
            <div className="flex h-[520px] w-full items-center justify-center border border-gray-200 bg-slate-50 text-xs font-semibold text-gray-500">
                Memuat Peta...
            </div>
        ),
    }
);

export default function PetaPenggunaPage() {
    const totalNodes = MOCK_USER_NODES.length;
    const highRiskCount = MOCK_USER_NODES.filter((n) => n.riskStatus === "High").length;
    const mediumRiskCount = MOCK_USER_NODES.filter((n) => n.riskStatus === "Medium").length;
    const lowRiskCount = MOCK_USER_NODES.filter((n) => n.riskStatus === "Low").length;

    return (
        <section className="space-y-4">
            {/* Header Informasi */}
            <div className="border border-gray-200 bg-white p-4">
                <h1 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Peta Pemantauan Tikungan
                </h1>
                <p className="text-[11px] text-gray-500 mt-0.5">
                    Arahkan kursor ke titik node pada peta untuk melihat detail lokasi dan status risiko terkini.
                </p>
            </div>

            {/* Ringkasan Status Risiko */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="border border-gray-200 bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Total Node
                    </div>
                    <div className="mt-1 font-mono text-xl font-bold text-gray-900">
                        {totalNodes}
                    </div>
                </div>

                <div className="border border-gray-200 bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Risiko Tinggi
                    </div>
                    <div className="mt-1 font-mono text-xl font-bold text-red-600">
                        {highRiskCount}
                    </div>
                </div>

                <div className="border border-gray-200 bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Risiko Sedang
                    </div>
                    <div className="mt-1 font-mono text-xl font-bold text-amber-600">
                        {mediumRiskCount}
                    </div>
                </div>

                <div className="border border-gray-200 bg-white p-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                        Risiko Rendah
                    </div>
                    <div className="mt-1 font-mono text-xl font-bold text-emerald-600">
                        {lowRiskCount}
                    </div>
                </div>
            </div>

            {/* Visualisasi Peta Leaflet / OpenStreetMap */}
            <NodeMap nodes={MOCK_USER_NODES} />
        </section>
    );
}