"use client";

import { MOCK_NODE_METRICS, MOCK_TREND_POINTS } from "@/data/mockData";

export default function Chart() {
    // Peringkat Node berdasarkan Risk Score
    const nodeRanking = [...MOCK_NODE_METRICS]
        .sort((a, b) => b.riskScore - a.riskScore)
        .slice(0, 5);

    // Total Volume & Klasifikasi Kendaraan
    const totalVehicles = MOCK_NODE_METRICS.reduce((acc, curr) => acc + curr.totalVehicles, 0);
    const avgMotorcycle = Math.round(MOCK_NODE_METRICS.reduce((acc, curr) => acc + curr.classificationPct.motorcycle, 0) / MOCK_NODE_METRICS.length);
    const avgCar = Math.round(MOCK_NODE_METRICS.reduce((acc, curr) => acc + curr.classificationPct.car, 0) / MOCK_NODE_METRICS.length);
    const avgTruck = Math.round(MOCK_NODE_METRICS.reduce((acc, curr) => acc + curr.classificationPct.truck, 0) / MOCK_NODE_METRICS.length);

    // Rata-rata Kecepatan Gabungan
    const globalAvgSpeed = Math.round(MOCK_NODE_METRICS.reduce((acc, curr) => acc + curr.speedAvg, 0) / MOCK_NODE_METRICS.length);

    return (
        <section className="grid gap-4 mt-3 md:grid-cols-2 xl:grid-cols-4">
            {/* Node Paling Berisiko */}
            <section className="border border-gray-200 bg-white p-4">
                <div className="pb-3 border-b border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        Node Paling Berisiko
                    </h3>
                </div>
                
                <div className="mt-3 space-y-2.5">
                    {nodeRanking.map((item, index) => (
                        <div key={item.nodeId} className="flex items-center gap-2">
                            <span className="w-3 text-[10px] font-medium text-gray-400">
                                {index + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2 text-xs">
                                    <span className="truncate text-gray-900 font-medium">{item.nodeId} - {item.nodeName}</span>
                                    <span className="text-gray-500 font-bold">{item.riskScore}%</span>
                                </div>
                                <div className="mt-1 h-1.5 w-full bg-gray-100">
                                    <div 
                                        className={`h-1.5 ${item.status === 'High' ? 'bg-red-600' : item.status === 'Medium' ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                                        style={{ width: `${item.riskScore}%` }} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Tren Risiko */}
            <section className="border border-gray-200 bg-white p-4 flex flex-col justify-between">
                <div>
                    <div className="pb-3 border-b border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Tren Risiko Terbaru
                        </h3>
                    </div>
                    <div className="mt-4 h-32 w-full flex items-end justify-between gap-1 pt-4">
                        {MOCK_TREND_POINTS.map((point) => (
                            <div key={point.timeLabel} className="flex-1 flex flex-col items-center gap-1 h-full justify-end">
                                <span className="text-[9px] font-mono text-gray-600 font-bold">{point.score}</span>
                                <div 
                                    className="w-full bg-slate-800" 
                                    style={{ height: `${point.score}%` }}
                                />
                                <span className="text-[9px] font-mono text-gray-400">{point.timeLabel}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Distribusi Kendaraan */}
            <section className="border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        Distribusi Kendaraan
                    </h3>
                    <span className="text-[10px] text-gray-400">Rata-rata</span>
                </div>

                <div className="my-3 flex justify-center">
                    <div className="relative h-24 w-24 rounded-full bg-blue-600 flex items-center justify-center">
                        <div className="h-16 w-16 rounded-full bg-white flex flex-col items-center justify-center">
                            <span className="text-sm font-bold text-gray-900">{totalVehicles.toLocaleString("id-ID")}</span>
                            <span className="text-[8px] text-gray-400">Total</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-blue-600" /> Motor
                        </span>
                        <span className="font-medium text-gray-900">{avgMotorcycle}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-emerald-600" /> Mobil
                        </span>
                        <span className="font-medium text-gray-900">{avgCar}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-amber-600" /> Truk
                        </span>
                        <span className="font-medium text-gray-900">{avgTruck}%</span>
                    </div>
                </div>
            </section>

            {/* Rata-Rata Kecepatan */}
            <section className="border border-gray-200 bg-white p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Rata-Rata Kecepatan
                        </h3>
                    </div>

                    <div className="my-5 flex justify-center">
                        <div className="text-center">
                            <span className="text-3xl font-bold font-mono text-gray-900">{globalAvgSpeed}</span>
                            <span className="text-xs text-gray-500 ml-1">km/jam</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">
                        Batas Aman: 40 km/jam
                    </span>
                </div>
            </section>
        </section>
    );
}