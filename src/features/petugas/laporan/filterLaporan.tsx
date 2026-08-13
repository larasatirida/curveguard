type ReportFilterTabsProps = {
    activeTab: string;
    onTabChange: (tab: string) => void;
    counts: Record<string, number>;
};

const TABS = ["Semua", "Menunggu", "Diproses", "Selesai", "Ditolak"];

export default function ReportFilterTabs({ activeTab, onTabChange, counts }: ReportFilterTabsProps) {
    return (
        <div className="mt-4 flex flex-wrap gap-1 border-t border-gray-100 pt-3">
            {TABS.map((tab) => (
                <button
                    key={tab}
                    type="button"
                    onClick={() => onTabChange(tab)}
                    className={`px-3 py-1 text-xs font-medium transition-colors ${
                        activeTab === tab
                            ? "bg-gray-900 text-white"
                            : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                    }`}
                >
                    {tab} ({counts[tab] || 0})
                </button>
            ))}
        </div>
    );
}