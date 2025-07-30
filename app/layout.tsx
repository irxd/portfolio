import type { Metadata } from "next";
import { Geist } from "next/font/google";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Muhammad Irsyad - Full Stack Engineer",
  description: "Fullstack Engineer based in Indonesia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
