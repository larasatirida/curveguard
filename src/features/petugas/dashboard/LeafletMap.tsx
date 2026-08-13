"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export interface NodeMetric {
    label: string;
    value: string;
}

export interface MapMarker {
    id: string;
    lat: number;
    lng: number;
    sub: string;
    tone: string;
    score: string;
    riskLabel: string;
    metrics: NodeMetric[];
}

export interface LeafletMapProps {
    mapMarkers: MapMarker[];
    centerPosition: [number, number];
}

const toneTextStyles: Record<string, string> = {
    high: "text-red-700",
    medium: "text-yellow-700",
    low: "text-green-700",
};

const createCustomMarkerIcon = (label: string, sub: string, tone: string) => {
    return L.divIcon({
        className: "custom-leaflet-marker",
        html: `
            <div class="border border-gray-200 bg-white px-2 py-1 shadow-sm font-sans" style="white-space: nowrap;">
                <div class="text-xs font-bold text-gray-900">${label}</div>
                <div class="text-[10px] font-medium ${toneTextStyles[tone] || "text-gray-700"}">${sub}</div>
            </div>
        `,
        iconSize: [100, 36],
        iconAnchor: [50, 18],
    });
};

export default function LeafletMap({ mapMarkers, centerPosition }: LeafletMapProps) {
    return (
        <MapContainer center={centerPosition} zoom={13} scrollWheelZoom={false} className="h-full w-full">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {mapMarkers.map((marker: MapMarker) => (
                <Marker
                    key={marker.id}
                    position={[marker.lat, marker.lng]}
                    icon={createCustomMarkerIcon(marker.id, marker.sub, marker.tone)}
                >
                    {/* Tooltip otomatis aktif saat kursor di-hover di atas marker */}
                    <Tooltip 
                        direction="top" 
                        offset={[0, -20]} 
                        opacity={1}
                        className="bg-transparent border-0 shadow-none p-0"
                    >
                        <div className="w-56 border border-gray-200 bg-white p-3 shadow-md text-left font-sans">
                            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                                <div>
                                    <div className="text-xs font-bold text-gray-900">{marker.id}</div>
                                    <div className="text-[10px] text-gray-500">{marker.sub}</div>
                                </div>
                                <span className={`text-[10px] font-medium ${toneTextStyles[marker.tone] || "text-gray-700"}`}>
                                    {marker.riskLabel}
                                </span>
                            </div>

                            <div className="mt-2 flex items-baseline justify-between">
                                <span className="text-[10px] text-gray-400">Risk Score</span>
                                <span className="text-base font-bold text-gray-900">{marker.score}</span>
                            </div>

                            <div className="mt-2 space-y-1 border-t border-gray-100 pt-2 text-[11px] text-gray-600">
                                {marker.metrics.map((metric) => (
                                    <div key={metric.label} className="flex items-center justify-between gap-2">
                                        <span className="text-gray-500">{metric.label}</span>
                                        <span className="font-medium text-gray-900">{metric.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Tooltip>
                </Marker>
            ))}
        </MapContainer>
    );
}