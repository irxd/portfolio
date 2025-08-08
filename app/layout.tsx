import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import Footer from './components/section/Footer'
import Header from './components/section/Header'
import SmoothScroll from './components/ui/SmoothScroll'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Muhammad Irsyad - Software Engineer',
  description: 'Software Engineer based in Indonesia',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
