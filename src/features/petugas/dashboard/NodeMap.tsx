"use client";

import dynamic from "next/dynamic";
import type { LeafletMapProps, MapMarker } from "./LeafletMap";

const mapMarkers: MapMarker[] = [
    {
        id: "NODE-01",
        lat: -6.8912,
        lng: 107.5921,
        sub: "Tikungan Pagarsari",
        tone: "low",
        score: "42 / 100",
        riskLabel: "Rendah",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "28 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "11" },
            { label: "Kondisi Jalan", value: "Normal" },
        ],
    },
    {
        id: "NODE-02",
        lat: -6.9015,
        lng: 107.6123,
        sub: "Tikungan Cibeureum",
        tone: "medium",
        score: "65 / 100",
        riskLabel: "Medium",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "39 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "14" },
            { label: "Kondisi Jalan", value: "Licin" },
        ],
    },
    {
        id: "NODE-03",
        lat: -6.9150,
        lng: 107.6280,
        sub: "Tikungan Baron",
        tone: "high",
        score: "87 / 100",
        riskLabel: "Tinggi",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "47 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "18" },
            { label: "Kondisi Jalan", value: "2 arah berlawanan" },
        ],
    },
    {
        id: "NODE-04",
        lat: -6.9210,
        lng: 107.6410,
        sub: "Tikungan Sukamaju",
        tone: "low",
        score: "38 / 100",
        riskLabel: "Rendah",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "25 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "8" },
            { label: "Kondisi Jalan", value: "Normal" },
        ],
    },
];

const LeafletMap = dynamic<LeafletMapProps>(
    () => import("./LeafletMap").then((mod) => mod.default),
    {
        ssr: false,
        loading: () => (
            <div className="h-80 w-full bg-gray-50 flex items-center justify-center text-xs text-gray-400">
                Memuat Peta...
            </div>
        ),
    }
);

export default function NodeMap() {
    return (
        <section className="border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Peta Risiko Node
                </h2>
            </div>

            <div className="mt-3 h-80 w-full border border-gray-200 relative z-0">
                <LeafletMap
                    mapMarkers={mapMarkers}
                    centerPosition={[-6.9015, 107.6123]}
                />
            </div>
        </section>
    );
}