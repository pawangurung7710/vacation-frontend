import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vacation Nepal Trekking | Authentic Himalayan adventures led by local experts",
  description: "Experience the Himalayas with local Sherpa guides. Premium, safe, and responsible treks in Everest, Annapurna, and beyond.",
  keywords: ["Nepal trekking", "Everest Base Camp trek", "Annapurna Circuit trek", "local expert trek", "Himalayan adventures"],
  openGraph: {
    title: "Vacation Nepal Trekking",
    description: "Authentic Himalayan adventures led by local experts.",
    type: "website",
    locale: "en_US",
    siteName: "Vacation Nepal Trekking",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
