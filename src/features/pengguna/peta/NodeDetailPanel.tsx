import { CurveNode } from "./type";

type NodeDetailPanelProps = {
    node: CurveNode;
};

export default function NodeDetailPanel({ node }: NodeDetailPanelProps) {
    const getStatusStyle = (status: CurveNode["riskStatus"]) => {
        switch (status) {
            case "High":
                return "text-red-600 border-red-200 bg-red-50";
            case "Medium":
                return "text-amber-600 border-amber-200 bg-amber-50";
            case "Low":
                return "text-emerald-600 border-emerald-200 bg-emerald-50";
        }
    };

    return (
        <div className="border border-gray-200 bg-white p-4 space-y-3">
            <div className="flex items-start justify-between border-b border-gray-100 pb-3">
                <div>
                    <span className="font-mono text-xs font-bold text-gray-500">{node.id}</span>
                    <h2 className="text-sm font-bold text-gray-900">{node.locationName}</h2>
                    <span className="text-[10px] text-gray-400">Pembaruan: {node.lastUpdated}</span>
                </div>
                <div
                    className={`border px-2.5 py-1 text-xs font-bold uppercase ${getStatusStyle(
                        node.riskStatus
                    )}`}
                >
                    {node.riskStatus} Risk
                </div>
            </div>

            <div className="border border-gray-100 bg-gray-50/60 p-2.5 text-xs text-gray-700">
                <span className="font-semibold text-gray-900 block mb-0.5">Himbauan Pengendara:</span>
                {node.riskStatus === "High" && (
                    <p className="text-gray-700">
                        Potensi kerawanan tinggi. Harap kurangi kecepatan sebelum memasuki tikungan dan gunakan klakson/lampu penanda.
                    </p>
                )}
                {node.riskStatus === "Medium" && (
                    <p className="text-gray-700">
                        Lalu lintas terpantau sedang. Tetap waspada terhadap kendaraan dari arah berlawanan.
                    </p>
                )}
                {node.riskStatus === "Low" && (
                    <p className="text-gray-700">
                        Kondisi lintasan dalam batas aman.
                    </p>
                )}
            </div>
        </div>
    );
}