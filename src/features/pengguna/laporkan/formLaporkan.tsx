"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { MOCK_NODE_OPTIONS } from "@/data/mockData";
import { PublicReport } from "@/types";

export default function FormLaporkan({ onAddReport }: { onAddReport: (report: PublicReport) => void }) {
    const [reporterName, setReporterName] = useState("");
    const [selectedNodeId, setSelectedNodeId] = useState(MOCK_NODE_OPTIONS[0]?.id || "");
    const [deskripsi, setDeskripsi] = useState("");
    const [preview, setPreview] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState("");

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const matchedNode = MOCK_NODE_OPTIONS.find((n) => n.id === selectedNodeId);
        const nodeLabel = matchedNode ? `${matchedNode.id} - ${matchedNode.name}` : selectedNodeId;

        onAddReport({
            id: `REP-2026-${Math.floor(100 + Math.random() * 900)}`,
            timestamp: "Baru saja",
            reporterName: reporterName.trim() || "Anonim",
            namaTikungan: nodeLabel,
            lokasi: matchedNode ? matchedNode.name : "Tikungan Jalan",
            deskripsi,
            imageUrl: preview || undefined,
            status: "Menunggu",
            source: "Web Pengguna", // WAJIB DIISI agar sesuai tipe PublicReport
        });

        setSuccessMsg("Laporan Anda berhasil dikirim!");
        setReporterName("");
        setDeskripsi("");
        setPreview(null);
        setTimeout(() => setSuccessMsg(""), 4000);
    };

    return (
        <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 border-b border-gray-100 pb-2 mb-3">
                Upload Laporan Kerawanan
            </h2>

            {successMsg && (
                <div className="mb-3 bg-emerald-50 border border-emerald-200 p-2 text-xs text-emerald-800 font-medium">
                    {successMsg}
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">Nama Pelapor (Opsional)</label>
                        <input
                            type="text"
                            value={reporterName}
                            onChange={(e) => setReporterName(e.target.value)}
                            placeholder="Contoh: Budi Santoso"
                            className="w-full border border-gray-300 p-1.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold text-gray-700 mb-1">Nama Tikungan & Lokasi *</label>
                        <select
                            value={selectedNodeId}
                            onChange={(e) => setSelectedNodeId(e.target.value)}
                            className="w-full border border-gray-300 p-1.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                        >
                            {MOCK_NODE_OPTIONS.map((n) => (
                                <option key={n.id} value={n.id}>{n.id} - {n.name}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Deskripsi Laporan *</label>
                    <textarea
                        required
                        rows={3}
                        value={deskripsi}
                        onChange={(e) => setDeskripsi(e.target.value)}
                        placeholder="Tuliskan detail kondisi kerawanan jalan atau bahaya..."
                        className="w-full border border-gray-300 p-1.5 text-xs text-gray-900 focus:outline-none focus:border-blue-600"
                    />
                </div>

                <div>
                    <label className="block font-semibold text-gray-700 mb-1">Upload Foto Bukti (Opsional)</label>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="w-full border border-gray-300 p-1 text-xs text-gray-600" />
                </div>

                <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-2 hover:bg-blue-700 transition-colors">
                    Kirim Laporan
                </button>
            </form>
        </div>
    );
}