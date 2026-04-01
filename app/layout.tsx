import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '800'],
})

export const metadata: Metadata = {
  title: {
    default: 'House of Code',
    template: '%s | House of Code',
  },
  description: 'Experience architects, powering the possible. Composable DXP specialists and award-winning digital enablement partner.',
  metadataBase: new URL('https://code-vibe-pink.vercel.app'),
  openGraph: {
    title: 'House of Code',
    description: 'Experience architects, powering the possible.',
    url: 'https://code-vibe-pink.vercel.app',
    siteName: 'House of Code',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        {children}
      </body>
    </html>
  )
}
