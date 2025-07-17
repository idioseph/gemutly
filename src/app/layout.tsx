import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { playfairDisplay, inter } from "@/constants/Fonts";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gemutly - Connect with Local Chefs & Discover Amazing Food",
  description:
    "Join Gemutly to discover local chefs, book private dining experiences, and earn flexible income as a chef. Food, community, and flexible income for passionate chefs.",
  keywords:
    "private dining, local chefs, food community, chef platform, home dining, food experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
