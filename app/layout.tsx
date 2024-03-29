import type { Metadata } from 'next'
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Designer and developer from Norway',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="no">
      <body >
        <Header />
        {children}
        <Footer />
      </body>
      <Analytics />
      <SpeedInsights />
    </html>
  )
}
