import { NodeMetrics } from "@/types";

type VolumeAnalysisProps = {
    nodes: NodeMetrics[];
};

export default function VolumeAnalysis({ nodes }: VolumeAnalysisProps) {
    const totalVolume = nodes.reduce((acc, curr) => acc + curr.totalVehicles, 0);
    const peakHour = nodes.length > 0 ? nodes[0].peakHour : "-";

    return (
        <div className="border border-gray-200 bg-white p-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                Analisis Volume Kendaraan
            </h2>

            <div className="grid grid-cols-2 gap-2 border-b border-gray-100 pb-3">
                <div>
                    <span className="text-[10px] text-gray-500">Total Kendaraan Pas</span>
                    <div className="text-base font-bold font-mono text-gray-900">
                        {totalVolume.toLocaleString("id-ID")}
                    </div>
                </div>
                <div>
                    <span className="text-[10px] text-gray-500">Peak Hour</span>
                    <div className="text-xs font-bold font-mono text-gray-900">{peakHour}</div>
                </div>
            </div>

            <div className="space-y-2">
                <span className="text-[10px] font-semibold text-gray-600 uppercase">
                    Perbandingan Volume Antar-Node
                </span>
                {nodes.map((node) => {
                    const pct = Math.round((node.totalVehicles / (totalVolume || 1)) * 100);
                    return (
                        <div key={node.nodeId} className="text-xs">
                            <div className="flex justify-between text-[11px] mb-0.5">
                                <span className="font-semibold text-gray-800">{node.nodeId}</span>
                                <span className="font-mono text-gray-600">
                                    {node.totalVehicles} ({pct}%)
                                </span>
                            </div>
                            <div className="h-2 w-full bg-gray-100">
                                <div
                                    className="h-full bg-gray-800"
                                    style={{ width: `${pct}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}