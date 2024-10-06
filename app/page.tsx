import type { Metadata } from 'next';
import Link from 'next/link';

import './page.css';
import { Heading } from './components/typography/Heading';
import { Logo } from './components/Logo';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Må ha et sted å teste ting',
};

export default async function Home() {
  return (
    <main className="page-home">
      <Logo />
      <header className="home-header">
        <Heading
          level="1"
          className="slide-down"
          hideCopyButton>
          Frontend-utvikler hos <Link href="https://fremtind.no">Fremtind</Link>
          .
        </Heading>
      </header>
      <nav className="navigation">
        <ul className="no-style external-links">
          <li>
            <Link href="https://twitter.com/olejorgenbakken">Twitter</Link>
          </li>
          <li>
            <Link href="https://github.com/olejorgenbakken">GitHub</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/olejorgenbakken">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
