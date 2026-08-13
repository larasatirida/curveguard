import { MapMarker } from "./type";

export const mapMarkers: MapMarker[] = [
    {
        id: "NODE-01",
        lat: -0.9485,
        lng: 100.4735,
        sub: "Tikungan Sitinjau Lauik",
        tone: "high",
        score: "88 / 100",
        riskLabel: "Tinggi",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "32 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "24" },
            { label: "Kondisi Jalan", value: "Tanjakan / Blind Curve" },
        ],
    },
    {
        id: "NODE-02",
        lat: -5.5182,
        lng: 105.3412,
        sub: "Tikungan Tarahan",
        tone: "medium",
        score: "62 / 100",
        riskLabel: "Medium",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "45 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "19" },
            { label: "Kondisi Jalan", value: "S-Curve Bergelombang" },
        ],
    },
    {
        id: "NODE-03",
        lat: -0.6812,
        lng: 100.2854,
        sub: "Tikungan Lubuk Alung",
        tone: "low",
        score: "35 / 100",
        riskLabel: "Rendah",
        metrics: [
            { label: "Rata-rata Kecepatan", value: "28 km/jam" },
            { label: "Kendaraan Terdeteksi", value: "10" },
            { label: "Kondisi Jalan", value: "Normal" },
        ],
    },
];