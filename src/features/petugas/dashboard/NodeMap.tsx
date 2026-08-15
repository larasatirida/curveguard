"use client";

import dynamic from "next/dynamic";
import type { LeafletMapProps } from "@/types";
import { MOCK_MAP_MARKERS } from "@/data/mockData";

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
                    mapMarkers={MOCK_MAP_MARKERS}
                    centerPosition={[-0.9485, 100.4735]}
                />
            </div>
        </section>
    );
}