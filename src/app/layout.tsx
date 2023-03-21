import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'

import './globals.css'

export const metadata = {
  title: {
    default: 'Ole Jørgen Bakken',
    template: '%s | Ole Jørgen Bakken',
  },
  description: 'UX Designer',
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
