"use client";

import Image from "next/image";
import { useState } from "react";

type ReportImagePreviewProps = {
    imageUrl?: string;
};

export default function ReportImagePreview({ imageUrl }: ReportImagePreviewProps) {
    const [isOpen, setIsOpen] = useState(false);

    if (!imageUrl) {
        return <span className="text-[10px] text-gray-400 italic">Tanpa Foto</span>;
    }

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative h-9 w-12 overflow-hidden border border-gray-300 bg-gray-100 hover:opacity-80"
            >
                <Image
                    src={imageUrl}
                    alt="Bukti"
                    fill
                    unoptimized
                    className="object-cover"
                />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                    <div className="w-full max-w-md border border-gray-200 bg-white p-3">
                        <div className="flex justify-between items-center pb-2 mb-2 border-b border-gray-100">
                            <span className="text-xs font-bold uppercase text-gray-700">Foto Bukti Laporan</span>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-xs font-bold text-gray-500 hover:text-black"
                            >
                                [ TUTUP ]
                            </button>
                        </div>

                        <div className="relative h-80 w-full bg-gray-50 border border-gray-200">
                            <Image
                                src={imageUrl}
                                alt="Preview Bukti"
                                fill
                                unoptimized
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}