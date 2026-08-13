"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAVIGATION_ITEMS = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Laporan", href: "/laporan" },
    { label: "Pengumuman", href: "/pengumuman" },
    { label: "Analisis", href: "/analisis" },
] as const;

function NavbarPetugasComponent() {
    const pathname = usePathname();
    const router = useRouter();

    // Data petugas (simulasi data terotentikasi dari database pemerintah)
    const officerName = "Ahmad Subagja";

    const handleLogout = () => {
        // Hapus cookie sesi
        document.cookie = "petugas_token=; path=/; max-age=0;";
        router.push("/login");
        router.refresh();
    };

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5">
                {/* Brand */}
                <Link href="/dashboard" className="text-sm font-bold tracking-tight text-gray-900">
                    CURVE<span className="text-blue-600">GUARD</span>
                </Link>

                {/* Navigation */}
                <nav className="flex items-center gap-1" aria-label="Navigasi Petugas">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = pathname.startsWith(item.href);

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                aria-current={isActive ? "page" : undefined}
                                className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                                    isActive
                                        ? "bg-gray-100 font-semibold text-gray-900"
                                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Profile Petugas & Tombol Logout */}
                <div className="flex items-center gap-3">
                    <div className="text-right leading-tight">
                        <span className="text-xs font-semibold text-gray-900">
                            {officerName}{" "}
                        </span>
                    </div>

                    <button
                        type="button"
                        onClick={handleLogout}
                        className="border border-red-200 bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-700 hover:bg-red-100 hover:border-red-300 transition-colors"
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </header>
    );
}

export default memo(NavbarPetugasComponent);