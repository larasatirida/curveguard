import { NodeMetrics } from "./type";

type NodeRankingTableProps = {
    nodes: NodeMetrics[];
};

export default function NodeRankingTable({ nodes }: NodeRankingTableProps) {
    const sortedNodes = [...nodes].sort((a, b) => b.riskScore - a.riskScore);

    const getStatusTextColor = (status: NodeMetrics["status"]) => {
        switch (status) {
            case "High":
                return "text-red-600 font-bold";
            case "Medium":
                return "text-amber-600 font-bold";
            case "Low":
                return "text-emerald-600 font-bold";
        }
    };

    return (
        <div className="border border-gray-200 bg-white p-4">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-3">
                Peringkat Risiko Node
            </h2>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                    <thead>
                        <tr className="border-b border-gray-200 bg-gray-50 text-[10px] font-bold uppercase text-gray-600">
                            <th className="px-3 py-2">Peringkat</th>
                            <th className="px-3 py-2">Node</th>
                            <th className="px-3 py-2">Risk Score</th>
                            <th className="px-3 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {sortedNodes.map((node, index) => (
                            <tr key={node.nodeId} className="hover:bg-gray-50/50">
                                <td className="px-3 py-2.5 font-mono font-bold text-gray-500">
                                    #{index + 1}
                                </td>
                                <td className="px-3 py-2.5">
                                    <div className="font-bold text-gray-900">{node.nodeId}</div>
                                    <div className="text-[10px] text-gray-500">{node.nodeName}</div>
                                </td>
                                <td className="px-3 py-2.5 font-mono text-sm font-bold text-gray-900">
                                    {node.riskScore}
                                    <span className="text-[10px] text-gray-400 font-normal">/100</span>
                                </td>
                                <td className="px-3 py-2.5">
                                    <span className={`text-xs uppercase ${getStatusTextColor(node.status)}`}>
                                        {node.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}