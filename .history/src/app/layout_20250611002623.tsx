'use client';

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getContent } from "@/lib/content";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

const content = getContent();

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  keywords: content.seo.keywords,
  authors: [{ name: content.company.name }],
  openGraph: {
    title: content.seo.title,
    description: content.seo.description,
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {!isAdminRoute && <Navigation />}
        <main className="min-h-screen">
          {children}
        </main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
