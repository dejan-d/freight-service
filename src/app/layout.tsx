import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'


const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GlobalFreight Logistics',
  description: 'Comprehensive freight forwarding solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning >
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}