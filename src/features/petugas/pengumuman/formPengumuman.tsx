"use client";

import { useState, FormEvent } from "react";
import { Announcement } from "./type";

type FormPengumumanProps = {
    onAddAnnouncement: (newAnnouncement: Announcement) => void;
};

export default function AnnouncementForm({ onAddAnnouncement }: FormPengumumanProps) {
    const [title, setTitle] = useState("");
    const [nodeLocation, setNodeLocation] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!title.trim() || !nodeLocation.trim() || !description.trim()) {
            return;
        }

        const now = new Date();
        const formattedDate = now.toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "short",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });

        const newEntry: Announcement = {
            id: `ANN-${now.getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
            title: title.trim(),
            nodeLocation: nodeLocation.trim(),
            description: description.trim(),
            createdAt: formattedDate,
            author: "Petugas",
        };

        onAddAnnouncement(newEntry);

        setTitle("");
        setNodeLocation("");
        setDescription("");
    };

    return (
        <div className="border border-gray-200 bg-white p-4">
            <div className="border-b border-gray-100 pb-2 mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Buat Pengumuman Baru
                </h2>
                <p className="text-[11px] text-gray-500 mt-0.5">
                    Pengumuman ini akan dipublikasikan ke laman petugas dan laman pengguna publik.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                {/* 1. Judul Pengumuman */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Judul Pengumuman <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Contoh: Perbaikan Bahu Jalan Tikungan Baron"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                </div>

                {/* 2. Lokasi Tikungan / Node */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Lokasi Tikungan / Node <span className="text-red-600">*</span>
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Contoh: Tikungan Cibeureum (NODE-02)"
                        value={nodeLocation}
                        onChange={(e) => setNodeLocation(e.target.value)}
                        className="w-full border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                </div>

                {/* 3. Isi Deskripsi */}
                <div>
                    <label className="block font-semibold text-gray-700 mb-1">
                        Isi Pengumuman & Detail Instruksi <span className="text-red-600">*</span>
                    </label>
                    <textarea
                        required
                        rows={3}
                        placeholder="Tuliskan detail kondisi jalan, penutupan, atau arahan untuk pengguna jalan..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full border border-gray-300 bg-white p-2 text-xs text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                </div>

                {/* Tombol Submit */}
                <div className="pt-1 text-right">
                    <button
                        type="submit"
                        className="border border-gray-900 bg-gray-900 px-4 py-1.5 text-xs font-medium text-white hover:bg-black transition-colors"
                    >
                        Publikasikan
                    </button>
                </div>
            </form>
        </div>
    );
}