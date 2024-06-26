import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Sidebar  from "@/components/sidebar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clone of GPT Nexus",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar/>
          {children}
        </div>
      </body>
    </html>
  );
}
