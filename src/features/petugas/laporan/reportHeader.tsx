type ReportHeaderProps = {
    totalCount: number;
};

export default function ReportHeader({ totalCount }: ReportHeaderProps) {
    return (
        <div>
            <h1 className="text-sm font-bold uppercase tracking-wider text-gray-900">
                Laporan Masyarakat Masuk
            </h1>
            <p className="mt-0.5 text-xs text-gray-500">
                Total {totalCount} laporan masuk dari pengguna jalan
            </p>
        </div>
    );
}