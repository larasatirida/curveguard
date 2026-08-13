import { PublicReport } from "./type";

export default function DaftarLaporanPengguna({ reports }: { reports: PublicReport[] }) {
    const badgeMap = {
        Menunggu: "text-yellow-700",
        Diproses: "text-blue-700",
        Selesai: "text-green-700",
        Ditolak: "text-red-700",
    };

    return (
        <div className="border border-gray-200 bg-white p-4">
            <div className="flex justify-between items-center border-b pb-2 mb-3">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">Daftar Laporan Terkini</h2>
                <span className="bg-gray-100 px-2 py-0.5 text-[10px] font-mono font-bold">Total: {reports.length}</span>
            </div>

            <div className="space-y-3">
                {reports.map((item) => (
                    <div key={item.id} className="border border-gray-200 p-3 text-xs space-y-1.5">
                        <div className="flex justify-between items-center border-b pb-1">
                            <span className="font-mono font-bold text-gray-600">{item.id} • <span className="font-normal text-gray-400">{item.timestamp}</span></span>
                            <span className={`text-[10px] font-bold ${badgeMap[item.status]}`}>{item.status}</span>
                        </div>
                        <div>
                            <span className="font-mono font-bold text-blue-600">{item.namaTikungan}</span>
                            <span className="font-semibold text-gray-800"> — {item.lokasi}</span>
                        </div>
                        <p className="bg-slate-50 p-2 border border-gray-100 text-gray-700">{item.deskripsi}</p>
                        {item.imageUrl && (
                            <a href={item.imageUrl} target="_blank" rel="noreferrer" className="text-[11px] text-blue-600 hover:underline">
                                Lihat Foto Lampiran
                            </a>
                        )}
                        <div className="text-[10px] text-gray-400 pt-1 border-t">
                            Pelapor: <strong className="text-gray-600">{item.reporterName}</strong>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}