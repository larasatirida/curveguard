export type RiskTone = "low" | "medium" | "high";

export interface NodeMetric {
    label: string;
    value: string;
}

export interface MapMarker {
    id: string;
    lat: number;
    lng: number;
    sub: string;
    tone: RiskTone;
    score: string;
    riskLabel: string;
    metrics: NodeMetric[];
}

export interface LeafletMapProps {
    mapMarkers: MapMarker[];
    centerPosition: [number, number];
}