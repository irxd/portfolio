import type { Metadata } from "next";
import SmoothScroll from "./components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Irsyad - Full Stack Engineer",
  description: "TODO: Add description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
