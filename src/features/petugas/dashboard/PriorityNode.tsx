"use client";

const metrics = [
    { v: "18", l: "kendaraan/jam" },
    { v: "47", l: "km/jam" },
    { v: "12", l: "Motor" },
    { v: "1", l: "Truk" },
    { v: "5", l: "Mobil" },
];

export default function PriorityNode() {
    return (
        <section className="bg-red-700 p-4">
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                    Node Prioritas
                </h3>
                <span className="text-[10px] font-medium text-white">
                    HIGH RISK
                </span>
            </div>

            <div className="mt-3">
                <div>
                    <h4 className="text-xs font-semibold text-white">
                        NODE-03 Tikungan Baron
                    </h4>
                    <p className="mt-0.5 text-xs text-gray-100">
                        Kecepatan tinggi terdeteksi di tikungan ini
                    </p>
                </div>

                <div className="my-3 grid grid-cols-5 divide-x divide-gray-100 border-y border-gray-100 py-3 text-center">
                    {metrics.map((item) => (
                        <div key={item.l} className="px-1">
                            <div className="text-sm font-bold text-white">{item.v}</div>
                            <div className="mt-0.5 text-[10px] text-gray-100">{item.l}</div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end">
                    <button
                        type="button"
                        className="text-xs font-medium text-blue-300 hover:text-blue-500 hover:underline"
                    >
                        Lihat Detail Node
                    </button>
                </div>
            </div>
        </section>
    );
}