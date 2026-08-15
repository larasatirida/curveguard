"use client";

import { useState } from "react";
import { MOCK_CURVE_NODES} from "@/data/mockData";
import { CurveNode } from "@/types";
import NodeMap from "@/features/pengguna/peta/nodemap";
import NodeDetailPanel from "@/features/pengguna/peta/NodeDetailPanel";

export default function PetaPenggunaPage() {
    const [selectedNode, setSelectedNode] = useState<CurveNode | null>(MOCK_CURVE_NODES[0] || null);

    return (
        <div className="space-y-4">
            <NodeMap nodes={MOCK_CURVE_NODES} onSelectNode={setSelectedNode} />
            <NodeDetailPanel node={selectedNode} />
        </div>
    );
}