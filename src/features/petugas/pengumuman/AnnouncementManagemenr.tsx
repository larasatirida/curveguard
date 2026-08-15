"use client";

import { useState } from "react";
import { MOCK_ANNOUNCEMENTS } from "@/data/mockData";
import { Announcement } from "@/types";
import AnnouncementForm from "./formPengumuman";
import AnnouncementList from "./listPengumuman";

export default function AnnouncementManagement() {
    const [announcements, setAnnouncements] = useState<Announcement[]>(MOCK_ANNOUNCEMENTS);

    const handleAddAnnouncement = (newAnnouncement: Announcement) => {
        setAnnouncements((prev) => [newAnnouncement, ...prev]);
    };

    const handleDeleteAnnouncement = (id: string) => {
        setAnnouncements((prev) => prev.filter((item) => item.id !== id));
    };

    return (
        <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-1">
                <AnnouncementForm onAddAnnouncement={handleAddAnnouncement} />
            </div>
            <div className="lg:col-span-2">
                <AnnouncementList
                    announcements={announcements}
                    onDeleteAnnouncement={handleDeleteAnnouncement}
                />
            </div>
        </div>
    );
}