"use client";

const recentReports = [
    { label: "NODE-03 - Tikungan Baron", text: "Kendaraan berhenti di bahu jalan", time: "5 menit lalu", tag: "Belum Diproses" },
    { label: "NODE-01 - Tikungan Cibeureum", text: "Jalan licin saat hujan", time: "18 menit lalu", tag: "Diproses" },
    { label: "NODE-05 - Tikungan Sukamaju", text: "Rambu tertutup pohon", time: "32 menit lalu", tag: "Selesai" },
];

const statusStyles: Record<string, string> = {
    "Belum Diproses": "text-red-700",
    "Diproses": "text-yellow-700",
    "Selesai": "text-green-700",
};

export default function RecentReports() {
    return (
        <section className="border border-gray-200 bg-white p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Laporan Terbaru dari Masyarakat
                </h3>
                <button 
                    type="button" 
                    className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                >
                    Lihat Semua
                </button>
            </div>

            <div className="divide-y divide-gray-300">
                {recentReports.map((item) => (
                    <div key={item.label} className="flex items-center justify-between gap-4 py-3 first:pt-3 last:pb-0">
                        <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                                <span className="truncate text-xs font-semibold text-gray-900">
                                    {item.label}
                                </span>
                                <span className={`inline-flex items-center text-[10px] font-medium ${statusStyles[item.tag]}`}>
                                    {item.tag}
                                </span>
                            </div>
                            <p className="mt-0.5 truncate text-xs text-gray-500">
                                {item.text}
                            </p>
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