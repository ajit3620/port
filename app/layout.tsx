import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientWrapper from './components/ClientWrapper'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ajit Bhandarkar',
  description: 'Professional portfolio showcasing my work in software engineering, cloud solutions, and full-stack development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper className="bg-gray-100 dark:bg-[#0F1624] text-gray-900 dark:text-white">
          {children}
        </ClientWrapper>
      </body>
    </html>
  )
} 