export default function TrafficCorrelation() {
    return (
        <div className="border border-gray-200 bg-white p-4 space-y-3">
            <div className="border-b border-gray-100 pb-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Formula &amp; Korelasi Risk Score
                </h2>
                <p className="text-[11px] text-gray-500 mt-0.5">
                    Metode kalkulasi otomatis Risk Score berdasarkan bobot indikator lalu lintas.
                </p>
            </div>

            {/* Penjelasan Sumber Risk Score */}
            <div className="border border-gray-200 bg-gray-50 p-3 text-xs space-y-2">
                <div className="font-semibold text-gray-900">Persamaan Kalkulasi Risk Score:</div>
                <div className="font-mono text-[11px] bg-white border border-gray-300 p-2 text-gray-800">
                    Risk Score = (0.45 × S<sub>norm</sub>) + (0.35 × V<sub>norm</sub>) + (0.20 × C<sub>norm</sub>)
                </div>
                <ul className="list-disc list-inside text-[11px] text-gray-600 space-y-0.5">
                    <li>
                        <span className="font-mono font-semibold text-gray-800">S (Kecepatan):</span> Rata-rata &amp; persen kendaraan melebihi threshold
                    </li>
                    <li>
                        <span className="font-mono font-semibold text-gray-800">V (Volume):</span> Kepadatan kendaraan terhadap kapasitas jalan
                    </li>
                    <li>
                        <span className="font-mono font-semibold text-gray-800">C (Klasifikasi):</span> Rasio komposisi kendaraan berat (Truk) vs Motor
                    </li>
                </ul>
            </div>

            {/* Matriks Korelasi */}
            <div className="overflow-x-auto text-xs">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200 text-[10px] font-bold uppercase text-gray-500">
                            <th className="py-1">Indikator</th>
                            <th className="py-1">LOW (0 - 40)</th>
                            <th className="py-1">MEDIUM (41 - 70)</th>
                            <th className="py-1">HIGH (71 - 100)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                        <tr>
                            <td className="py-1.5 font-sans font-semibold text-gray-700">Volume (V)</td>
                            <td className="py-1.5 text-gray-500">Rendah (&lt; 1.500/jam)</td>
                            <td className="py-1.5 text-amber-600">Sedang (1.500 - 3.000/jam)</td>
                            <td className="py-1.5 text-red-600">Tinggi (&gt; 3.000/jam)</td>
                        </tr>
                        <tr>
                            <td className="py-1.5 font-sans font-semibold text-gray-700">Kecepatan (S)</td>
                            <td className="py-1.5 text-gray-500">Normal (&lt; 40 km/jam)</td>
                            <td className="py-1.5 text-amber-600">Sedang (40 - 55 km/jam)</td>
                            <td className="py-1.5 text-red-600">Tinggi (&gt; 55 km/jam)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}