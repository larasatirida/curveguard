import { NodeMetrics } from "@/types";

type SpeedAnalysisProps = {
    nodes: NodeMetrics[];
};

export default function SpeedAnalysis({ nodes }: SpeedAnalysisProps) {
    const avgSpeed = Math.round(
        nodes.reduce((acc, curr) => acc + curr.speedAvg, 0) / (nodes.length || 1)
    );
    const maxSpeed = Math.max(...nodes.map((n) => n.speedMax));

    return (
        <div className="border border-gray-200 bg-white p-4 space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                Analisis Kecepatan
            </h2>

            <div className="grid grid-cols-2 gap-3 border-b border-gray-100 pb-3">
                <div className="border-r border-gray-100 pr-2">
                    <span className="text-[10px] text-gray-500">Rata-rata Kecepatan</span>
                    <div className="text-base font-bold font-mono text-gray-900">
                        {avgSpeed} <span className="text-xs font-normal text-gray-500">km/jam</span>
                    </div>
                </div>

                <div>
                    <span className="text-[10px] text-gray-500">Kecepatan Maksimum</span>
                    <div className="text-base font-bold font-mono text-red-600">
                        {maxSpeed} <span className="text-xs font-normal text-gray-500">km/jam</span>
                    </div>
                </div>
            </div>

            <div className="space-y-1">
                <span className="text-[10px] font-semibold text-gray-600">
                    Pelanggaran Threshold Kecepatan (&gt; 50 km/jam)
                </span>
                {nodes.map((node) => (
                    <div key={node.nodeId} className="flex items-center justify-between text-xs">
                        <span className="text-gray-700">{node.nodeId}</span>
                        <span className="font-mono font-bold text-gray-900">
                            {node.speedThresholdExceededPct}% Kendaraan
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}