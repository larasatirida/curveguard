import { SystemInsight } from "@/types";

type SystemInsightsProps = {
    insights: SystemInsight[];
};

export default function SystemInsights({ insights }: SystemInsightsProps) {
    return (
        <div className="space-y-2">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                Temuan Sistem &amp; Insight Otomatis
            </h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {insights.map((item) => (
                    <div
                        key={item.id}
                        className={`border p-3 ${
                            item.type === "warning"
                                ? "border-amber-300 bg-amber-50/60"
                                : "border-blue-300 bg-blue-50/60"
                        }`}
                    >
                        <div className="flex items-center justify-between pb-1">
                            <span className="text-xs font-bold text-gray-900">
                                {item.title}
                            </span>
                            <span className="text-[10px] text-gray-500">{item.timestamp}</span>
                        </div>
                        <p className="text-xs leading-relaxed text-gray-800">{item.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}