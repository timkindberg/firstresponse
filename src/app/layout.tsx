import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutClient from "./layout-client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'First Response Tree Service - Professional Tree Care in Cincinnati, OH',
  description:
    'Expert tree removal, pruning, and emergency services in Cincinnati. Owned by local firefighters. Free estimates, 24/7 availability, fully insured.',
  keywords:
    'tree service Cincinnati, tree removal Hamilton OH, emergency tree service, stump grinding, tree pruning Cincinnati, firefighter owned tree service',
  authors: [{ name: 'First Response Tree Service' }],
  openGraph: {
    title: 'First Response Tree Service - Professional Tree Care in Cincinnati, OH',
    description:
      'Expert tree removal, pruning, and emergency services in Cincinnati. Owned by local firefighters. Free estimates, 24/7 availability, fully insured.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <LayoutClient>
          {children}
        </LayoutClient>
      </body>
    </html>
  );
}
