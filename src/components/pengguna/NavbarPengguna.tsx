"use client";

import { memo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAVIGATION_ITEMS = [
    { label: "Peta", href: "/peta" },
    { label: "Laporkan", href: "/laporkan" },
    { label: "Pengumuman", href: "/pengumuman" },
] as const;

function NavbarPenggunaComponent() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
            <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-4 py-2.5">
                {/* Kolom 1 (Kiri): Brand Logo */}
                <div className="text-sm font-bold tracking-tight text-gray-900">
                    <Link href="/peta">
                        CURVE<span className="text-blue-600">GUARD</span>
                    </Link>
                </div>

                {/* Kolom 2 (Tengah): Navigasi Utama */}
                <nav className="flex items-center justify-center gap-1" aria-label="Navigasi Utama">
                    {NAVIGATION_ITEMS.map((item) => {
                        const isActive = pathname === item.href;

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

                {/* Kolom 3 (Kanan): Penyeimbang agar menu tetap persis di tengah */}
                <div />
            </div>
        </header>
    );
}

export default memo(NavbarPenggunaComponent);