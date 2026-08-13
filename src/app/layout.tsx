import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CurveGuard",
  description: "Active Blind-Curve Safety & Incident Intelligence System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="antialiased">
        {}
        {children}
      </body>
    </html>
  );
}