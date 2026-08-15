import { NodeMetrics } from "@/types";

type RiskSummaryCardsProps = {
    nodes: NodeMetrics[];
};

export default function RiskSummaryCards({ nodes }: RiskSummaryCardsProps) {
    const totalNodes = nodes.length;
    const highRisk = nodes.filter((n) => n.status === "High").length;
    const medRisk = nodes.filter((n) => n.status === "Medium").length;
    const lowRisk = nodes.filter((n) => n.status === "Low").length;

    return (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {/* Total Node */}
            <div className="border border-gray-200 bg-white p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Total Node
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-gray-900">{totalNodes}</div>
            </div>

            {/* Risiko Tinggi */}
            <div className="border border-gray-200 bg-white p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Risiko Tinggi
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-red-600">{highRisk}</div>
            </div>

            {/* Risiko Sedang */}
            <div className="border border-gray-200 bg-white p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Risiko Sedang
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-amber-600">{medRisk}</div>
            </div>

            {/* Risiko Rendah */}
            <div className="border border-gray-200 bg-white p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                    Risiko Rendah
                </div>
                <div className="mt-1 font-mono text-xl font-bold text-emerald-600">{lowRisk}</div>
            </div>
        </div>
    );
}