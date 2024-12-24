import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono, Noto_Sans_Gujarati } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/Header'

import '@/app/globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})
const notoGujarati = Noto_Sans_Gujarati({
  subsets: ['gujarati'],
  variable: '--font-gujarati',
})

export const metadata: Metadata = {
  title: 'Ilm Majalis',
  description: 'Your platform for enlightening discussions and gatherings',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoGujarati.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
          <Header />
          <div style={{fontFamily: "var(--font-gujarati)"}} className="px-4 sm:px-6 lg:px-4 text-xl">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

