"use client";

type FilterSectionProps = {
    selectedNode: string;
    onSelectNode: (nodeId: string) => void;
    nodeList: { id: string; name: string }[];
};

export default function FilterSection({
    selectedNode,
    onSelectNode,
    nodeList,
}: FilterSectionProps) {
    return (
        <div className="border border-gray-200 bg-white p-3">
            <div className="flex items-center gap-3">
                <label htmlFor="node-select" className="text-xs font-semibold text-gray-700">
                    Pilih Node / Tikungan:
                </label>
                <select
                    id="node-select"
                    value={selectedNode}
                    onChange={(e) => onSelectNode(e.target.value)}
                    className="border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-900 focus:border-gray-900 focus:outline-none"
                >
                    <option value="ALL">Semua Node</option>
                    {nodeList.map((node) => (
                        <option key={node.id} value={node.id}>
                            {node.id} - {node.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}