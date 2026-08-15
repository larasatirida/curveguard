"use client";

import { useState } from "react";
import { MOCK_ANNOUNCEMENTS } from "@/data/mockData";
import { Announcement } from "@/types";
import AnnouncementForm from "@/features/petugas/pengumuman/formPengumuman";
import AnnouncementList from "@/features/petugas/pengumuman/listPengumuman";

export default function PengumumanPage() {
    const [announcements, setAnnouncements] = useState<Announcement[]>(MOCK_ANNOUNCEMENTS);

    const handleAddAnnouncement = (newEntry: Announcement) => {
        setAnnouncements((prev) => [newEntry, ...prev]);
    };

    const handleDeleteAnnouncement = (id: string) => {
        setAnnouncements((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <section className="space-y-4">
            <AnnouncementForm onAddAnnouncement={handleAddAnnouncement} />
            <AnnouncementList
                announcements={announcements}
                onDeleteAnnouncement={handleDeleteAnnouncement}
            />
        </section>
    );
}