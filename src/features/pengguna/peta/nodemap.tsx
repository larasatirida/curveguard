"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";
import { CurveNode } from "./type";

type NodeMapProps = {
    nodes: CurveNode[];
};

export default function NodeMap({ nodes }: NodeMapProps) {
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstanceRef = useRef<LeafletMap | null>(null);

    useEffect(() => {
        if (!mapRef.current) return;

        import("leaflet").then((L) => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
            }

            // Titik tengah peta mencakup area semua node
            const map = L.map(mapRef.current!).setView([-6.898, 107.628], 13);
            mapInstanceRef.current = map;

            // Tile Layer OpenStreetMap
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
            }).addTo(map);

            // Tambahkan Marker untuk setiap Node
            nodes.forEach((node) => {
                const getStatusColor = (status: CurveNode["riskStatus"]) => {
                    switch (status) {
                        case "High":
                            return "#dc2626";
                        case "Medium":
                            return "#f59e0b";
                        case "Low":
                            return "#059669";
                    }
                };

                const getStatusLabel = (status: CurveNode["riskStatus"]) => {
                    switch (status) {
                        case "High":
                            return "Risiko Tinggi";
                        case "Medium":
                            return "Risiko Sedang";
                        case "Low":
                            return "Risiko Rendah";
                    }
                };

                const getHimbauanText = (status: CurveNode["riskStatus"]) => {
                    switch (status) {
                        case "High":
                            return "Potensi kerawanan tinggi. Harap kurangi kecepatan sebelum memasuki tikungan dan gunakan klakson/lampu penanda.";
                        case "Medium":
                            return "Lalu lintas terpantau sedang. Tetap waspada terhadap kendaraan dari arah berlawanan.";
                        case "Low":
                            return "Kondisi lintasan dalam batas aman.";
                    }
                };

                const color = getStatusColor(node.riskStatus);
                const statusLabel = getStatusLabel(node.riskStatus);
                const himbauan = getHimbauanText(node.riskStatus);

                // Custom DivIcon dengan gaya Badge Node
                const customIcon = L.divIcon({
                    className: "custom-leaflet-marker",
                    html: `
                        <div style="
                            background-color: ${color};
                            color: white;
                            font-family: monospace;
                            font-weight: bold;
                            font-size: 11px;
                            padding: 3px 8px;
                            border-radius: 4px;
                            border: 2px solid #0f172a;
                            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
                            white-space: nowrap;
                            text-align: center;
                        ">
                            ${node.id}
                        </div>
                    `,
                    iconSize: [60, 26],
                    iconAnchor: [30, 13],
                });

                const marker = L.marker([node.lat, node.lng], { icon: customIcon }).addTo(map);

                // Tooltip melayang dengan penataan teks rapi agar tidak meluap keluar
                const tooltipContent = `
                    <div style="
                        font-family: sans-serif;
                        font-size: 12px;
                        line-height: 1.4;
                        color: #0f172a;
                        padding: 2px;
                        width: 220px;
                        white-space: normal;
                        word-break: break-word;
                        overflow-wrap: break-word;
                        box-sizing: border-box;
                    ">
                        <div style="font-family: monospace; font-weight: bold; color: #475569; font-size: 11px;">${node.id}</div>
                        <div style="font-weight: bold; font-size: 13px;">${node.locationName}</div>
                        <div style="font-weight: 600; color: ${color}; margin-top: 2px;">${statusLabel}</div>
                        <div style="font-size: 10px; color: #64748b; margin-top: 2px;">diupdate ${node.lastUpdated}</div>
                        <div style="margin-top: 6px; padding-top: 6px; border-top: 1px solid #e2e8f0; font-size: 11px; color: #334155;">
                            <strong>Himbauan Pengendara:</strong><br/>${himbauan}
                        </div>
                    </div>
                `;

                marker.bindTooltip(tooltipContent, {
                    direction: "top",
                    offset: [0, -10],
                    opacity: 0.98,
                });
            });
        });

        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove();
                mapInstanceRef.current = null;
            }
        };
    }, [nodes]);

    return (
        <div className="relative h-[520px] w-full border border-gray-200 overflow-hidden bg-slate-100">
            <div ref={mapRef} className="h-full w-full z-0" />

            {/* Keterangan / Legend Status */}
            <div className="absolute bottom-4 left-4 z-[1000] border border-gray-200 bg-white/95 p-3 text-[11px] text-gray-800 space-y-1.5 rounded shadow-md backdrop-blur-sm">
                <div className="font-bold text-gray-600 uppercase tracking-wider text-[10px] mb-1">
                    Status Risiko Tikungan
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-600" />
                    <span className="font-medium">Risiko Tinggi</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
                    <span className="font-medium">Risiko Sedang</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                    <span className="font-medium">Risiko Rendah</span>
                </div>
            </div>
        </div>
    );
}