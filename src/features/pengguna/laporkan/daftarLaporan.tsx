import { PublicReport } from "@/types";

export default function DaftarLaporanPengguna({ reports }: { reports: PublicReport[] }) {
    const badgeMap: Record<string, string> = {
        Menunggu: "text-amber-700 bg-amber-50 border-amber-200",
        Diproses: "text-blue-700 bg-blue-50 border-blue-200",
        Selesai: "text-emerald-700 bg-emerald-50 border-emerald-200",
        Ditolak: "text-red-700 bg-red-50 border-red-200",
    };

    return (
        <div className="border border-gray-200 bg-white p-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2 mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">Daftar Laporan Terkini</h2>
                <span className="bg-gray-100 px-2 py-0.5 text-[10px] font-mono font-bold text-gray-700">
                    Total: {reports.length}
                </span>
            </div>

            {reports.length === 0 ? (
                <div className="p-8 text-center text-xs text-gray-400 border border-dashed border-gray-200">
                    Belum ada laporan masuk dari pengguna.
                </div>
            ) : (
                <div className="space-y-3">
                    {reports.map((item) => (
                        <div key={item.id} className="border border-gray-200 p-3 text-xs space-y-1.5">
                            <div className="flex justify-between items-center border-b border-gray-100 pb-1">
                                <span className="font-mono font-bold text-gray-600">
                                    {item.id} • <span className="font-normal text-gray-400">{item.timestamp}</span>
                                </span>
                                <span className={`text-[10px] font-semibold px-2 py-0.5 border ${badgeMap[item.status] || "text-gray-600"}`}>
                                    {item.status}
                                </span>
                            </div>
                            <div>
                                <span className="font-mono font-bold text-blue-600">{item.namaTikungan}</span>
                                {item.lokasi && <span className="font-semibold text-gray-800"> — {item.lokasi}</span>}
                            </div>
                            <p className="bg-slate-50 p-2 border border-gray-100 text-gray-700">{item.deskripsi}</p>
                            {item.imageUrl && (
                                <a href={item.imageUrl} target="_blank" rel="noreferrer" className="inline-block text-[11px] text-blue-600 hover:underline">
                                    Lihat Foto Lampiran
                                </a>
                            )}
                            <div className="text-[10px] text-gray-400 pt-1 border-t border-gray-100">
                                Pelapor: <strong className="text-gray-600">{item.reporterName}</strong>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}