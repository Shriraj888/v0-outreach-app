import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Toaster } from 'sonner'
import './globals.css'
import { LenisProvider } from '@/components/lenis-provider'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: 'Outreach - Cold Emails That Actually Get Replies',
  description: 'Your unfair advantage in the inbox. Generate 3 unique cold email styles with AI.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased text-foreground`}>
        <LenisProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" />
          <Analytics />
        </LenisProvider>
      </body>
    </html>
  )
}
