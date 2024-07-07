import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { GlobalHeader } from './components/global/GlobalHeader/GlobalHeader';

import './globals.css';

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
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
