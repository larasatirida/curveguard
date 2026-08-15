import CountRisk from "@/features/petugas/dashboard/CountRisk";
import NodeMap from "@/features/petugas/dashboard/NodeMap";
import PriorityNode from "@/features/petugas/dashboard/PriorityNode";
import RecentReports from "@/features/petugas/dashboard/RecentReports";
import RecentEvents from "@/features/petugas/dashboard/RecentEvents";
import Chart from "@/features/petugas/dashboard/Chart";

export default function DashboardPetugasPage() {
    return (
        <div className="space-y-4">
            <section className="mt-2 grid gap-3 xl:grid-cols-[minmax(0,1.7fr)_minmax(390px,0.95fr)]">
                <div className="space-y-3">
                    <NodeMap />
                    <RecentReports />
                </div>

                <aside className="space-y-3">
                    <PriorityNode />
                    <CountRisk />
                    <RecentEvents />
                </aside>
            </section>

            <Chart />
        </div>
    );
}