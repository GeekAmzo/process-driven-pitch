import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Driven Processes - Pitch",
  description:
    "Pitch deck and investor materials for Driven Processes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <footer className="border-t border-black/10 bg-white/70 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-[#6f675f]">
          © 2026 Amrish Seunarain of H44S (Pty) Ltd. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
