import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Assuming you have a global CSS file

import Providers from '@/components/Providers'
import TopAnnouncementBar from '@/components/TopAnnouncementBar'
import MainHeader from '@/components/MainHeader'
import CategoryNavBar from '@/components/CategoryNavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ekta Krishi Kendra',
  description: "India's trusted source for quality agricultural products.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <header>
              <TopAnnouncementBar />
              <MainHeader />
              <CategoryNavBar />
            </header>
            <main className="flex-grow">{children}</main>
            <footer className="bg-foreground text-background py-8">
              <div className="container mx-auto px-4 text-center">
                <p className="text-sm opacity-80">
                  © 2025 Ekta Krishi Kendra Keolari. All rights reserved.
                </p>
                <p className="text-sm opacity-80 mt-2">
                  📞 Call to order: 8602074069
                </p>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  )
}
