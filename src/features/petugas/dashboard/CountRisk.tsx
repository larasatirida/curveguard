"use client";

import { MOCK_NODE_METRICS, MOCK_REPORTS } from "@/data/mockData";

export default function CountRisk() {
    const totalNodes = MOCK_NODE_METRICS.length;
    const highRisk = MOCK_NODE_METRICS.filter((n) => n.status === "High").length;
    const medRisk = MOCK_NODE_METRICS.filter((n) => n.status === "Medium").length;
    const pendingReports = MOCK_REPORTS.filter((r) => r.status === "Menunggu").length;

    const summaryCards = [
        {
            title: "Risiko Tinggi",
            value: highRisk.toString(),
            note: `dari ${totalNodes} node`,
            bg: "bg-red-50 border-red-200",
            titleColor: "text-red-700",
        },
        {
            title: "Waspada",
            value: medRisk.toString(),
            note: `dari ${totalNodes} node`,
            bg: "bg-yellow-50 border-yellow-200",
            titleColor: "text-yellow-800",
        },
        {
            title: "Laporan Belum Ditangani",
            value: pendingReports.toString(),
            note: "Membutuhkan verifikasi",
            bg: "bg-red-50 border-red-200",
            titleColor: "text-red-700",
        },
        {
            title: "Total Node Aktif",
            value: totalNodes.toString(),
            note: "Semua node terhubung",
            bg: "bg-emerald-50 border-emerald-200",
            titleColor: "text-emerald-800",
        },
    ];

    return (
        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((card) => (
                <article key={card.title} className={`border p-4 ${card.bg}`}>
                    <h3 className={`text-xs font-bold uppercase tracking-wider ${card.titleColor}`}>
                        {card.title}
                    </h3>
                    <div className="mt-2 text-2xl font-bold text-black">{card.value}</div>
                    <p className="mt-1 text-xs text-gray-700">{card.note}</p>
                </article>
            ))}
        </section>
    );
}