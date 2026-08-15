import { Announcement } from "@/types";

type ItemPengumumanProps = {
    announcement: Announcement;
    onDelete?: (id: string) => void;
};

export default function ItemPengumuman({ announcement, onDelete }: ItemPengumumanProps) {
    return (
        <div className="border border-gray-200 bg-white p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <span className="font-mono text-[11px] font-bold text-gray-500">
                        {announcement.id}
                    </span>
                    <h3 className="mt-1 text-sm font-bold text-gray-900">
                        {announcement.title}
                    </h3>
                </div>

                <div className="text-right text-[11px] text-gray-500">
                    <div>{announcement.createdAt}</div>
                    <div className="text-[10px] text-gray-400">Oleh: {announcement.author}</div>
                </div>
            </div>

            <div className="mt-2 text-xs font-semibold text-gray-700">
                Lokasi: <span className="font-normal text-gray-600">{announcement.nodeLocation}</span>
            </div>

            <p className="mt-2 text-xs text-gray-800 leading-relaxed border-t border-gray-100 pt-2">
                {announcement.description}
            </p>

            {onDelete && (
                <div className="mt-3 flex justify-end border-t border-gray-100 pt-2">
                    <button
                        type="button"
                        onClick={() => onDelete(announcement.id)}
                        className="text-[11px] text-red-600 hover:underline font-medium"
                    >
                        Hapus Pengumuman
                    </button>
                </div>
            )}
        </div>
    );
}