import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })
import { AppProvider } from '@/hooks/useVideo'

export const metadata: Metadata = {
  title: 'SparkVibe | marketing de resultado!',
  description: 'A nossa meta é bater a sua!'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
