import type { Metadata } from "next";
import { Geist, Azeret_Mono as GeistMono } from 'next/font/google';
import "./globals.css";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = GeistMono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

