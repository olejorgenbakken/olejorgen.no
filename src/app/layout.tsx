import Header from './componentes/header/header'
import './globals.css'

export const metadata = {
  title: 'Ole Jørgen - UX Designer',
  description: 'UX Designer',
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
      </body>
    </html>
  )
}
