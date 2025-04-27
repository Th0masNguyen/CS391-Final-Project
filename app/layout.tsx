import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import UserProvider from "@/components/UserProvider";
import NavBar from "@/components/Header"
import Header from "@/components/Header";

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
         className={`bg-[#171D1C] ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <Header />
          <div className="flex items-center justify-center w-screen pt-4">
          <UserProvider>
              {children}
          </UserProvider>
          </div>
      </body>
    </html>
  );
}
