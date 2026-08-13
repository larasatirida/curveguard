import { MOCK_ANNOUNCEMENTS } from "@/features/pengguna/pengumuman/mockdata";
import AnnouncementTable from "@/features/pengguna/pengumuman/tabelPengumuman";

export default function PengumumanPage() {
    return (
        <section className="space-y-4">
            <AnnouncementTable announcements={MOCK_ANNOUNCEMENTS} />
        </section>
    );
}