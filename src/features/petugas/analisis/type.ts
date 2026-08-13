export interface NodeMetrics {
    nodeId: string;
    nodeName: string;
    riskScore: number;
    status: "Low" | "Medium" | "High";
    totalVehicles: number;
    peakHour: string;
    speedAvg: number;
    speedMax: number;
    speedThresholdExceededPct: number;
    classificationPct: {
        motorcycle: number;
        car: number;
        truck: number;
    };
}

export interface SystemInsight {
    id: string;
    type: "warning" | "info";
    title: string;
    message: string;
    nodeId?: string;
    timestamp: string;
}

export interface TrendPoint {
    timeLabel: string;
    score: number;
}