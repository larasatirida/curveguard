import { NodeMetrics, SystemInsight, TrendPoint } from "./type";

export const MOCK_NODES: NodeMetrics[] = [
    {
        nodeId: "NODE-03",
        nodeName: "Tikungan Baron",
        riskScore: 84,
        status: "High",
        totalVehicles: 3420,
        peakHour: "07.00 - 08.00",
        speedAvg: 58,
        speedMax: 87,
        speedThresholdExceededPct: 34,
        classificationPct: { motorcycle: 67, car: 28, truck: 5 },
    },
    {
        nodeId: "NODE-01",
        nodeName: "Tikungan Pagarsari",
        riskScore: 62,
        status: "Medium",
        totalVehicles: 2890,
        peakHour: "16.00 - 17.00",
        speedAvg: 48,
        speedMax: 72,
        speedThresholdExceededPct: 18,
        classificationPct: { motorcycle: 55, car: 35, truck: 10 },
    },
    {
        nodeId: "NODE-02",
        nodeName: "Tikungan Cibeureum",
        riskScore: 45,
        status: "Medium",
        totalVehicles: 1950,
        peakHour: "12.00 - 13.00",
        speedAvg: 42,
        speedMax: 65,
        speedThresholdExceededPct: 12,
        classificationPct: { motorcycle: 60, car: 30, truck: 10 },
    },
    {
        nodeId: "NODE-04",
        nodeName: "Tikungan Sukamaju",
        riskScore: 22,
        status: "Low",
        totalVehicles: 1240,
        peakHour: "17.00 - 18.00",
        speedAvg: 35,
        speedMax: 55,
        speedThresholdExceededPct: 5,
        classificationPct: { motorcycle: 70, car: 25, truck: 5 },
    },
];

export const MOCK_INSIGHTS: SystemInsight[] = [
    {
        id: "INS-01",
        type: "warning",
        title: "Lonjakan Risiko Kecepatan",
        message:
            "NODE-03 mengalami peningkatan rata-rata kecepatan sebesar 18% dalam 2 jam terakhir, disertai peningkatan volume kendaraan sebesar 24%.",
        nodeId: "NODE-03",
        timestamp: "10 menit yang lalu",
    },
    {
        id: "INS-02",
        type: "info",
        title: "Tingkat Risiko Tertinggi",
        message:
            "NODE-03 secara konsisten memegang tingkat risiko tertinggi (High Risk) dalam rentang 24 jam terakhir.",
        nodeId: "NODE-03",
        timestamp: "1 jam yang lalu",
    },
];

export const MOCK_TREND_DATA: Record<string, TrendPoint[]> = {
    "NODE-ALL": [
        { timeLabel: "08:00", score: 40 },
        { timeLabel: "10:00", score: 52 },
        { timeLabel: "12:00", score: 68 },
        { timeLabel: "14:00", score: 84 },
        { timeLabel: "16:00", score: 76 },
        { timeLabel: "18:00", score: 58 },
    ],
    "NODE-03": [
        { timeLabel: "08:00", score: 50 },
        { timeLabel: "10:00", score: 65 },
        { timeLabel: "12:00", score: 78 },
        { timeLabel: "14:00", score: 92 },
        { timeLabel: "16:00", score: 84 },
        { timeLabel: "18:00", score: 70 },
    ],
};