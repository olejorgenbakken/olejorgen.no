import type { Metadata } from 'next';
import Link from 'next/link';

import './page.css';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Må ha et sted å teste ting',
};

export default async function Home() {
  return (
    <main className="page-home">
      <header className="home-header">
        <h1 className="slide-down">
          Frontend-utvikler hos <Link href="https://fremtind.no">Fremtind</Link>
          .
        </h1>
      </header>
    </main>
  );
}
