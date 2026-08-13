export type RiskStatus = "Low" | "Medium" | "High";

export interface CurveNode {
    id: string;
    name: string;
    locationName: string;
    riskStatus: RiskStatus;
    lastUpdated: string;
    lat: number;
    lng: number;
}