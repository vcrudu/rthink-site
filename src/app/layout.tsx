import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Chat from './components/Chat'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'R-Think Software',
  description:
    'Welcome to R-Think Software, the leading edge in IT outsourcing.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={cn('bg-sky-200', inter.className)}>

        <Chat />
        {children}
      </body>
    </html>
  )
}
