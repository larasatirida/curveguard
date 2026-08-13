"use client";

const recentEvents = [
    { label: "Tikungan Baron Kecepatan tinggi terdeteksi", time: "2 menit lalu", tone: "high" },
    { label: "Tikungan Cibeureum Kepadatan meningkat", time: "10 menit lalu", tone: "medium" },
    { label: "Tikungan Sukamaju Kondisi normal", time: "20 menit lalu", tone: "low" },
];

const toneStyles: Record<string, string> = {
    high: "text-red-700",
    medium: "text-yellow-700",
    low: "text-green-700",
};

const toneLabels: Record<string, string> = {
    high: "HIGH",
    medium: "MEDIUM",
    low: "LOW",
};

export default function RecentEvents() {
    return (
        <section className="h-60 border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Kejadian Terbaru
                </h3>
                <button 
                    type="button" 
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                >
                    Lihat Semua
                </button>
            </div>

            <div className="divide-y divide-gray-300">
                {recentEvents.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 py-3 first:pt-3 last:pb-0">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="truncate text-xs font-semibold text-gray-900">
                                    {item.label}
                                </span>
                                <span className={`inline-flex items-center text-[10px] font-medium ${toneStyles[item.tone]}`}>
                                    {toneLabels[item.tone]}
                                </span>
                            </div>
                        </div>

                        <div className="shrink-0 text-[11px] text-gray-400">
                            {item.time}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}