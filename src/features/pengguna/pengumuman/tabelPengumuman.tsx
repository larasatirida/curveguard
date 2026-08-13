import { PublicAnnouncement } from "./type";

export default function TabelPengumuman({ announcements }: { announcements: PublicAnnouncement[] }) {
    return (
        <div className="border border-gray-200 bg-white overflow-hidden">
            <div className="border-b border-gray-100 p-4">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Pengumuman Resmi
                </h2>
                <p className="text-[11px] text-gray-500 mt-0.5">
                    Informasi dan himbauan resmi terkait kondisi lalu lintas serta fasilitas jalan dari petugas.
                </p>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                    <thead className="border-b border-gray-200 bg-gray-50 text-[10px] font-bold uppercase tracking-wider text-gray-600">
                        <tr>
                            <th className="px-4 py-2.5">ID & Waktu</th>
                            <th className="px-4 py-2.5">Judul & Lokasi</th>
                            <th className="px-4 py-2.5">Isi Pengumuman</th>
                            <th className="px-4 py-2.5 text-right">Penerbit</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {announcements.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50/50">
                                <td className="px-4 py-3 align-top whitespace-nowrap">
                                    <div className="font-mono font-bold text-gray-900">{item.id}</div>
                                    <div className="text-[10px] text-gray-500 mt-0.5">{item.createdAt}</div>
                                </td>
                                <td className="px-4 py-3 align-top whitespace-nowrap">
                                    <div className="font-semibold text-gray-900">{item.title}</div>
                                    <div className="text-[11px] font-medium text-blue-600 mt-0.5">{item.nodeLocation}</div>
                                </td>
                                <td className="px-4 py-3 align-top max-w-md">
                                    <p className="text-gray-800 leading-relaxed">{item.description}</p>
                                </td>
                                <td className="px-4 py-3 align-top text-right whitespace-nowrap font-medium text-gray-700">
                                    {item.author}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}