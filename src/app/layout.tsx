
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Chat from './components/Chat'
import { cn } from '@/lib/utils'

import Header from './components/Header';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R-Think Software',
  description:
    'Welcome to R-Think Software, the leading edge in IT outsourcing.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
 
  return (
    <html lang='en'>
      <body style={{scrollBehavior: 'smooth'}} className={cn('bg-slate-300', inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
