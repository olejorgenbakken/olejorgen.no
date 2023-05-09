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
}

export default function RootLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
