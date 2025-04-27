/**
 * Default layout.tsx file, worked on by Eytan Mobilio
 * and Colton Connolly.
 */
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import UserProvider from "@/components/UserProvider";
import Header from "@/components/Header";

// poppins font from google
const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "600", "700"],
});

// site metadata
export const metadata: Metadata = {
  title: "FlickPic",
  description: "Guess movie names from still images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className={`flex flex-col min-h-screen bg-[#171D1C] ${poppins.variable} antialiased`}
      >
        {/* Render the Header on every page, and wrap the rest of the site content in the user providing component */}
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
