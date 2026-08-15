import { Announcement } from "@/types";
import ItemPengumuman from "./itemPengumuman";

type ListPengumumanProps = {
    announcements: Announcement[];
    onDeleteAnnouncement?: (id: string) => void;
};

export default function AnnouncementList({
    announcements,
    onDeleteAnnouncement,
}: ListPengumumanProps) {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between px-1">
                <h2 className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Riwayat Pengumuman Aktif ({announcements.length})
                </h2>
            </div>

            {announcements.length === 0 ? (
                <div className="border border-gray-200 bg-white p-8 text-center text-xs text-gray-400">
                    Belum ada pengumuman yang diterbitkan.
                </div>
            ) : (
                announcements.map((item) => (
                    <ItemPengumuman
                        key={item.id}
                        announcement={item}
                        onDelete={onDeleteAnnouncement}
                    />
                ))
            )}
        </div>
    );
}