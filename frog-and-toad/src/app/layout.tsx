import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import SearchModal from "@/components/layout/SearchModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frog & Toad | Curated Gifts for Curious People",
  description:
    "A Providence original since 2009. Weird, wonderful, and always one-of-a-kind. Shop curated gifts, stationery, home goods, clothing, and Rhode Island treasures.",
  keywords: [
    "gift shop",
    "Providence",
    "Rhode Island",
    "curated gifts",
    "stationery",
    "home goods",
    "unique gifts",
    "Frog and Toad",
  ],
  openGraph: {
    title: "Frog & Toad | Curated Gifts for Curious People",
    description:
      "A Providence original since 2009. Weird, wonderful, and always one-of-a-kind.",
    type: "website",
    locale: "en_US",
    siteName: "Frog & Toad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchModal />
      </body>
    </html>
  );
}
