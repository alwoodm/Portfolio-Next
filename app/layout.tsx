import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'

const Header = dynamic(() => import('./components/Header'), { ssr: false })
const Footer = dynamic(() => import('./components/Footer'), { ssr: false })

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'alwood - portfolio',
  description: 'Obecnie uczę się programowania oraz rozwijam swoje umiejętności techniczne w zakresie IT i elektroniki.',
  keywords: ['software developer', 'portfolio', 'web development', 'IT', 'elektronika'],
  authors: [{ name: 'alwood' }],
  openGraph: {
    title: 'alwood - portfolio',
    description: 'Obecnie uczę się programowania oraz rozwijam swoje umiejętności techniczne w zakresie IT i elektroniki.',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <Header />
        <main id="main" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}