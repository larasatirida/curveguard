"use client";

const nodeRanking = [
    { label: "NODE-03 - Baron", value: 92, color: "bg-red-600" },
    { label: "NODE-07 - Cihareup", value: 78, color: "bg-orange-500" },
    { label: "NODE-02 - Cibeureum", value: 64, color: "bg-amber-500" },
    { label: "NODE-05 - Kalibaru", value: 52, color: "bg-emerald-500" },
    { label: "NODE-01 - Pagarsari", value: 38, color: "bg-blue-600" },
];

const trendTicks = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];

export default function Chart() {
    return (
        <section className="grid gap-4 mt-3 md:grid-cols-2 xl:grid-cols-4">
  
            <section className="border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        Node Paling Berisiko
                    </h3>
                    <button 
                        type="button" 
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        Lihat Semua
                    </button>
                </div>
                
                <div className="mt-3 space-y-2.5">
                    {nodeRanking.map((item, index) => (
                        <div key={item.label} className="flex items-center gap-2">
                            <span className="w-3 text-[10px] font-medium text-gray-400">
                                {index + 1}
                            </span>
                            <div className="min-w-0 flex-1">
                                <div className="flex items-center justify-between gap-2 text-xs">
                                    <span className="truncate text-gray-900 font-medium">{item.label}</span>
                                    <span className="text-gray-500 font-medium">{item.value}%</span>
                                </div>
                                <div className="mt-1 h-1.5 w-full bg-gray-100">
                                    <div 
                                        className={`h-1.5 ${item.color}`} 
                                        style={{ width: `${item.value}%` }} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border border-gray-200 bg-white p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Tren Risiko
                        </h3>
                    </div>
                    <div className="mt-4 h-32 w-full">
                        <svg viewBox="0 0 220 110" className="h-full w-full" fill="none" aria-hidden="true">
                            <path 
                                d="M8 88 42 75 74 58 106 50 138 43 170 34 212 24" 
                                stroke="#dc2626" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                            />
                        </svg>
                    </div>
                </div>
                <div className="mt-2 flex justify-between text-[10px] text-gray-400 border-t border-gray-100 pt-2">
                    {trendTicks.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>
            </section>

            <section className="border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                        Distribusi Kendaraan
                    </h3>
                    <span className="text-[10px] text-gray-400">24 Jam</span>
                </div>

                <div className="my-3 flex justify-center">
                    <div className="relative h-28 w-28 rounded-full bg-[conic-gradient(#2563eb_0_39%,#16a34a_39%_66%,#ea580c_66%_79%,#9333ea_79%_100%)]">
                        <div className="absolute inset-3 rounded-full bg-white" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-base font-bold text-gray-900">3.245</span>
                            <span className="text-[9px] text-gray-400">Total</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-1 border-t border-gray-100 pt-2 text-xs text-gray-600">
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-blue-600" /> Motor
                        </span>
                        <span className="font-medium text-gray-900">1.276 (39%)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-green-600" /> Mobil
                        </span>
                        <span className="font-medium text-gray-900">875 (27%)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-orange-600" /> Truk
                        </span>
                        <span className="font-medium text-gray-900">425 (13%)</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="flex items-center gap-1.5">
                            <span className="h-2 w-2 bg-purple-600" /> Bus
                        </span>
                        <span className="font-medium text-gray-900">673 (21%)</span>
                    </div>
                </div>
            </section>

            <section className="border border-gray-200 bg-white p-4 flex flex-col justify-between">
                <div>
                    <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                            Rata-Rata Kecepatan
                        </h3>
                        <span className="text-[10px] text-gray-400">24 Jam</span>
                    </div>

                    <div className="my-3 flex justify-center">
                        <div className="relative h-28 w-28">
                            <div className="absolute inset-0 rounded-full bg-[conic-gradient(#16a34a_0_48%,#d97706_48%_76%,#dc2626_76%_100%)]" />
                            <div className="absolute inset-3 rounded-full bg-white" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                <span className="text-xl font-bold text-gray-900">43</span>
                                <span className="text-[10px] text-gray-500">km/jam</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-100 pt-2 flex items-center justify-between">
                    <span className="text-[10px] text-gray-400">
                        Batas Aman: 30 km/jam
                    </span>
                    <button 
                        type="button" 
                        className="text-xs font-medium text-blue-600 hover:text-blue-700 hover:underline"
                    >
                        Detail
                    </button>
                </div>
            </section>
        </section>
    );
}