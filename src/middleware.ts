import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get("petugas_token")?.value;
    const { pathname } = request.nextUrl;

    // Rute yang khusus hanya boleh diakses oleh Petugas (wajib login)
    const protectedRoutes = ["/dashboard", "/analisis", "/petugas"];
    const isProtectedRoute = protectedRoutes.some((route) => pathname.startsWith(route));

    // 1. Jika belum login dan mencoba akses rute petugas, lempar ke /login
    if (isProtectedRoute && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    // 2. Jika sudah login dan membuka /login, lempar langsung ke /dashboard
    if (pathname === "/login" && token) {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/analisis/:path*", "/petugas/:path*", "/login"],
};