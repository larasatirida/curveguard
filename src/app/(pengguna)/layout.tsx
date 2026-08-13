import NavbarPengguna from "@/components/pengguna/NavbarPengguna";

export default function PenggunaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f8fbff_0%,#f3f6fb_46%,#eef2f7_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-3 py-2 sm:px-4 lg:px-5">
        <NavbarPengguna/>
        {children}
      </div>
    </main>
  );
}