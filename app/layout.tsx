import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GlobalHeader } from './components/global';

import './globals.css';
import { GlobalFooter } from './components/global/GlobalFooter/GlobalFooter';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Utvikler hos Fremtind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
