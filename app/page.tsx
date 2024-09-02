import type { Metadata } from 'next';
import Link from 'next/link';

import './page.css';
import { Heading } from './components/typography/Heading';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Må ha et sted å teste ting',
};

export default async function Home() {
  return (
    <main className="page-home">
      <header className="home-header">
        <Heading
          level="1"
          className="slide-down"
          hideCopyButton>
          Frontend-utvikler hos <Link href="https://fremtind.no">Fremtind</Link>
          .
        </Heading>
      </header>
    </main>
  );
}
