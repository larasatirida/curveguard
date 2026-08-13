"use client";

import { useState } from "react";
import {
    MOCK_NODES,
    MOCK_INSIGHTS,
    MOCK_TREND_DATA,
} from "@/features/petugas/analisis/mockdata";

import FilterSection from "@/features/petugas/analisis/FilterSection";
import SystemInsights from "@/features/petugas/analisis/SystemInsights";
import RiskSummaryCards from "@/features/petugas/analisis/RiskSummaryCards";
import NodeRankingTable from "@/features/petugas/analisis/NodeRankingTable";
import RiskTrendChart from "@/features/petugas/analisis/RiskTrendChart";
import VolumeAnalysis from "@/features/petugas/analisis/VolumeAnalysis";
import VehicleClassification from "@/features/petugas/analisis/VehicleClassification";
import SpeedAnalysis from "@/features/petugas/analisis/SpeedAnalysis";

export default function AnalisisPage() {
    const [selectedNode, setSelectedNode] = useState<string>("ALL");

    const nodeList = MOCK_NODES.map((n) => ({ id: n.nodeId, name: n.nodeName }));

    const filteredTrendData =
        selectedNode === "ALL"
            ? MOCK_TREND_DATA["NODE-ALL"]
            : MOCK_TREND_DATA[selectedNode] || MOCK_TREND_DATA["NODE-ALL"];

    return (
        <section className="space-y-4">
            {/* Filter Node */}
            <FilterSection
                selectedNode={selectedNode}
                onSelectNode={setSelectedNode}
                nodeList={nodeList}
            />

            {/* Temuan Sistem / Insight Otomatis */}
            <SystemInsights insights={MOCK_INSIGHTS} />

            {/* Ringkasan Risiko */}
            <RiskSummaryCards nodes={MOCK_NODES} />

            {/* Grid Ranking & Tren Risiko */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <NodeRankingTable nodes={MOCK_NODES} />
                <RiskTrendChart
                    data={filteredTrendData}
                    nodeLabel={selectedNode === "ALL" ? "Semua Node" : selectedNode}
                />
            </div>

            {/* Grid Volume, Klasifikasi, Kecepatan */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <VolumeAnalysis nodes={MOCK_NODES} />
                <VehicleClassification nodes={MOCK_NODES} />
                <SpeedAnalysis nodes={MOCK_NODES} />
            </div>
        </section>
    );
}