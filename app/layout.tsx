// path: app/layout.tsx
import Footer from '@/components/main/Footer'
import Navbar from '@/components/main/Navbar'
import StarsCanvas from '@/components/main/StarBackground'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'This is my next.js, tailwind, framer-motion, three.js portfolio site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#040016]`}>
        <StarsCanvas />
        <Navbar />
        <div className='z-[55]'>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
