"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const router = useRouter();

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        setErrorMsg("");

        // Simulasi validasi kredensial petugas (Ganti sesuai kredensial demo Anda)
        if (email === "petugas@dishub.go.id" && password === "admin123") {
            // Set Cookie berlaku 2 jam (7200 detik)
            const maxAge = 60 * 120;
            document.cookie = `petugas_token=authenticated_token_xyz; path=/; max-age=${maxAge}; SameSite=Lax`;

            router.push("/dashboard");
            router.refresh();
        } else {
            setErrorMsg("Email atau password petugas tidak terdaftar.");
        }
    };

    return (
        <main className="min-h-screen overflow-hidden bg-[#d9d9d9] px-4 py-10 text-white sm:px-6 lg:px-8">
            <div className="relative flex min-h-[calc(100vh-5rem)] items-center justify-center">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_38%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.14),transparent_32%)]" />

                <section className="relative w-full max-w-[340px] rounded-[22px] bg-[#18395f] px-8 py-10 shadow-[0_24px_70px_rgba(18,37,61,0.22)] ring-1 ring-white/5 sm:px-9">
                    <div className="flex flex-col items-center text-center">
                        <h1 className="text-[26px] font-bold leading-none tracking-tight text-white">
                            Curve<span className="text-[#2f7cff]">Guard</span>
                        </h1>
                        <p className="mt-2 text-[13px] leading-tight text-white/85">Sistem Monitoring Blind Curve</p>
                        <span className="mt-2 inline-flex items-center rounded-full bg-[#2f7cff] px-3 py-1 text-[10px] font-medium leading-none text-white shadow-[0_6px_18px_rgba(47,124,255,0.35)]">
                            Portal Petugas Dishub
                        </span>
                    </div>

                    {errorMsg && (
                        <div className="mt-4 rounded-md border border-red-400/30 bg-red-500/20 p-2 text-center text-[11px] font-medium text-red-200">
                            {errorMsg}
                        </div>
                    )}

                    <form className="mt-6 space-y-4" onSubmit={handleLogin}>
                        <label className="block">
                            <span className="mb-1.5 block text-[13px] font-medium text-white/92">Email</span>
                            <input
                                name="email"
                                type="email"
                                required
                                autoComplete="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="h-8 w-full rounded-md border-0 bg-[#e4e4e4] px-3 text-sm text-slate-900 outline-none ring-1 ring-black/5 placeholder:text-slate-400 focus:ring-2 focus:ring-[#2f7cff]"
                                placeholder="petugas@dishub.go.id"
                            />
                        </label>

                        <label className="block">
                            <span className="mb-1.5 block text-[13px] font-medium text-white/92">Password</span>
                            <input
                                name="password"
                                type="password"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="h-8 w-full rounded-md border-0 bg-[#e4e4e4] px-3 text-sm text-slate-900 outline-none ring-1 ring-black/5 placeholder:text-slate-400 focus:ring-2 focus:ring-[#2f7cff]"
                                placeholder="••••••••"
                            />
                        </label>

                        <button
                            type="submit"
                            className="mt-2 h-9 w-full rounded-md border border-[#2f7cff] bg-transparent text-sm font-medium text-white transition-colors hover:bg-[#2f7cff]/20 focus:outline-none focus:ring-2 focus:ring-[#2f7cff] focus:ring-offset-2 focus:ring-offset-[#18395f]"
                        >
                            Masuk
                        </button>
                    </form>
                </section>
            </div>
        </main>
    );
}