"use client";

import { MOCK_ANNOUNCEMENTS } from "@/data/mockData";
import TabelPengumuman from "@/features/pengguna/pengumuman/tabelPengumuman";

export default function PengumumanUserPage() {
    return (
        <section className="space-y-4">
            <TabelPengumuman announcements={MOCK_ANNOUNCEMENTS} />
        </section>
    );
}