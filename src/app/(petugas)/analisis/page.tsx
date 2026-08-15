"use client";

import { useState } from "react";
import {
    MOCK_NODE_METRICS,
    MOCK_SYSTEM_INSIGHTS,
    MOCK_TREND_POINTS,
} from "@/data/mockData";

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

    // Daftar node untuk filter dropdown dari MOCK_NODE_METRICS
    const nodeList = MOCK_NODE_METRICS.map((n) => ({
        id: n.nodeId,
        name: n.nodeName,
    }));

    // Filter array NodeMetrics berdasarkan node yang dipilih
    const filteredNodes =
        selectedNode === "ALL"
            ? MOCK_NODE_METRICS
            : MOCK_NODE_METRICS.filter((n) => n.nodeId === selectedNode);

    // Ambil label node yang sedang dipilih untuk grafik
    const selectedNodeObj = MOCK_NODE_METRICS.find((n) => n.nodeId === selectedNode);
    const nodeLabel = selectedNode === "ALL" ? "Semua Node" : selectedNodeObj?.nodeName || selectedNode;

    return (
        <section className="space-y-4">
            {/* Filter Node */}
            <FilterSection
                selectedNode={selectedNode}
                onSelectNode={setSelectedNode}
                nodeList={nodeList}
            />

            {/* Temuan Sistem / Insight Otomatis */}
            <SystemInsights insights={MOCK_SYSTEM_INSIGHTS} />

            {/* Ringkasan Risiko */}
            <RiskSummaryCards nodes={filteredNodes} />

            {/* Grid Ranking & Tren Risiko */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <NodeRankingTable nodes={MOCK_NODE_METRICS} />
                <RiskTrendChart
                    data={MOCK_TREND_POINTS}
                    nodeLabel={nodeLabel}
                />
            </div>

            {/* Grid Volume, Klasifikasi, Kecepatan */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <VolumeAnalysis nodes={filteredNodes} />
                <VehicleClassification nodes={filteredNodes} />
                <SpeedAnalysis nodes={filteredNodes} />
            </div>
        </section>
    );
}