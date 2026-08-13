import { NodeMetrics } from "./type";

type VehicleClassificationProps = {
    nodes: NodeMetrics[];
};

export default function VehicleClassification({ nodes }: VehicleClassificationProps) {
    const targetNode = nodes[0] || {
        nodeId: "NODE-03",
        classificationPct: { motorcycle: 67, car: 28, truck: 5 },
    };

    const { motorcycle, car, truck } = targetNode.classificationPct;

    return (
        <div className="border border-gray-200 bg-white p-4 space-y-3">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Klasifikasi Kendaraan
                </h2>
                <span className="font-mono text-[10px] text-gray-500">{targetNode.nodeId}</span>
            </div>

            <div className="space-y-2 text-xs">
                {/* Motor */}
                <div>
                    <div className="flex justify-between mb-0.5">
                        <span className="font-medium text-gray-700">Motor</span>
                        <span className="font-mono font-bold text-gray-900">{motorcycle}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100">
                        <div className="h-full bg-blue-600" style={{ width: `${motorcycle}%` }} />
                    </div>
                </div>

                {/* Mobil */}
                <div>
                    <div className="flex justify-between mb-0.5">
                        <span className="font-medium text-gray-700">Mobil</span>
                        <span className="font-mono font-bold text-gray-900">{car}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100">
                        <div className="h-full bg-emerald-600" style={{ width: `${car}%` }} />
                    </div>
                </div>

                {/* Truk */}
                <div>
                    <div className="flex justify-between mb-0.5">
                        <span className="font-medium text-gray-700">Truk</span>
                        <span className="font-mono font-bold text-gray-900">{truck}%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-100">
                        <div className="h-full bg-amber-600" style={{ width: `${truck}%` }} />
                    </div>
                </div>
            </div>
        </div>
    );
}