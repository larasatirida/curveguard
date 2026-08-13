import { TrendPoint } from "./type";

type RiskTrendChartProps = {
    data: TrendPoint[];
    nodeLabel: string;
};

export default function RiskTrendChart({ data, nodeLabel }: RiskTrendChartProps) {
    if (!data || data.length === 0) return null;

    const width = 500;
    const height = 150;
    const padding = 20;

    // Menghitung koordinat titik SVG
    const points = data.map((item, index) => {
        const x = padding + (index / (data.length - 1)) * (width - padding * 2);
        const y = height - padding - (item.score / 100) * (height - padding * 2);
        return { x, y, score: item.score, label: item.timeLabel };
    });

    const svgPath = points.reduce(
        (acc, point, index) =>
            index === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`,
        ""
    );

    return (
        <div className="border border-gray-200 bg-white p-4">
            <div className="flex justify-between items-center pb-2 mb-3 border-b border-gray-100">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Tren Risiko Terhadap Waktu
                </h2>
                <span className="text-[10px] font-mono text-gray-500">Filter: {nodeLabel}</span>
            </div>

            {/* SVG Chart Line */}
            <div className="w-full overflow-x-auto">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-40 text-gray-900">
                    {/* Grid lines */}
                    {[25, 50, 75, 100].map((level) => {
                        const y = height - padding - (level / 100) * (height - padding * 2);
                        return (
                            <line
                                key={level}
                                x1={padding}
                                y1={y}
                                x2={width - padding}
                                y2={y}
                                stroke="#f1f5f9"
                                strokeDasharray="3 3"
                            />
                        );
                    })}

                    {/* Polyline Path */}
                    <path d={svgPath} fill="none" stroke="#0f172a" strokeWidth="2" />

                    {/* Dots */}
                    {points.map((p, i) => (
                        <g key={i}>
                            <circle cx={p.x} cy={p.y} r="3" fill="#0f172a" />
                            <text
                                x={p.x}
                                y={p.y - 8}
                                textAnchor="middle"
                                className="text-[9px] font-mono fill-gray-700 font-bold"
                            >
                                {p.score}
                            </text>
                            <text
                                x={p.x}
                                y={height - 2}
                                textAnchor="middle"
                                className="text-[9px] font-mono fill-gray-400"
                            >
                                {p.label}
                            </text>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
}