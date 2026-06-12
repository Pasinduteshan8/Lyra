import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lyra – Powering Everyday Utility",
  description:
    "A versatile token built for payments, staking, and access to a new digital economy.",
  keywords: ["Lyra", "crypto", "token", "payments", "staking", "DeFi"],
  openGraph: {
    title: "Lyra – Powering Everyday Utility",
    description: "A versatile token built for payments, staking, and access to a new digital economy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
