"use client";

import { MOCK_NODE_METRICS } from "@/data/mockData";

export default function PriorityNode() {
    // Ambil node dengan risk score tertinggi
    const priorityNode = [...MOCK_NODE_METRICS].sort((a, b) => b.riskScore - a.riskScore)[0];

    if (!priorityNode) return null;

    const metrics = [
        { v: `${priorityNode.totalVehicles}`, l: "kendaraan/jam" },
        { v: `${priorityNode.speedAvg}`, l: "km/jam" },
        { v: `${priorityNode.classificationPct.motorcycle}%`, l: "Motor" },
        { v: `${priorityNode.classificationPct.car}%`, l: "Mobil" },
        { v: `${priorityNode.classificationPct.truck}%`, l: "Truk" },
    ];

    return (
        <section className="bg-red-700 p-4">
            <div className="flex items-center justify-between pb-3 border-b border-red-600">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Node Prioritas
                </h3>
                <span className="text-[10px] font-bold text-white bg-red-900 px-2 py-0.5 rounded">
                    {priorityNode.status} RISK ({priorityNode.riskScore}/100)
                </span>
            </div>

            <div className="mt-3">
                <div>
                    <h4 className="text-xs font-semibold text-white">
                        {priorityNode.nodeId} - {priorityNode.nodeName}
                    </h4>
                    <p className="mt-0.5 text-xs text-red-100">
                        {priorityNode.speedThresholdExceededPct}% kendaraan melebihi batas kecepatan
                    </p>
                </div>

                <div className="my-3 grid grid-cols-5 divide-x divide-red-600 border-y border-red-600 py-3 text-center">
                    {metrics.map((item) => (
                        <div key={item.l} className="px-1">
                            <div className="text-sm font-bold text-white">{item.v}</div>
                            <div className="mt-0.5 text-[10px] text-red-100">{item.l}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}