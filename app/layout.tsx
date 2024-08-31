import type { Metadata } from 'next';
import { GlobalFooter, GlobalHeader } from './components/global';

import './styles/globals.css';

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
    <html lang="nb-no">
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
