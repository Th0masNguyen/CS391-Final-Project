import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserProvider from "@/components/UserProvider";
import Header from "@/components/Header";
import GameEndDisplay from "@/components/GameEndDisplay";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FlickPic",
  description: "Guess movie names from still images",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`flex flex-col min-h-screen bg-[#171D1C] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
          <div className="flex flex-1 items-center justify-center w-screen">
              <UserProvider>
                  {children}
              </UserProvider>
          </div>
      </body>
    </html>
  );
}
