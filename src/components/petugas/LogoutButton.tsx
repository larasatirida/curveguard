"use client";

import { useRouter } from "next/navigation";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        // Hapus cookie dengan mengatur max-age ke 0
        document.cookie = "petugas_token=; path=/; max-age=0;";
        router.push("/login");
        router.refresh();
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-700 hover:bg-red-100 transition-colors"
        >
            Keluar
        </button>
    );
}