import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: 'Francisco Ladron de Guevara | Industrial & Management Engineer',
  description: 'Industrial and Management Engineering student pursuing a double degree between the National University of Córdoba and Politecnico di Torino. Oriented toward management, strategy, and leadership.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {/* Analytics de Vercel para ver visitas rápidas */}
        <Analytics />
        {/* Google Analytics con tu ID de medición */}
        <GoogleAnalytics gaId="G-1272FEJ82M" /> 
      </body>
    </html>
  )
}
