import type { Metadata } from 'next';
import Link from 'next/link';
import {
  useRepositories,
  RepositoryList,
} from './features/Github/Repositories';

import './page.css';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Må ha et sted å teste ting',
};

export default async function Home() {
  const twoYearsAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 2;
  const reposUpdatedLastTwoYears = (await useRepositories('updated'))
    .filter((repo) => new Date(repo.updated_at).getTime() > twoYearsAgo)
    .slice(0, 6);

  return (
    <main className="page-home">
      <header className="home-header">
        <p className="huge slide-down">
          Frontend-utvikler hos <Link href="https://fremtind.no">Fremtind</Link>
          . Tidligere produkt&shy;designer hos{' '}
          <Link href="https://www.detsombetyrnoe.no">NAV</Link>.
        </p>
      </header>
      {reposUpdatedLastTwoYears && (
        <section className="repos">
          <h2 className="h3 title">Siste jeg har jobbet med</h2>
          <RepositoryList repositories={reposUpdatedLastTwoYears} />
          <Link
            className="cta github-link"
            href="https://github.com/olejorgenbakken">
            Gå til GitHub
          </Link>
        </section>
      )}
    </main>
  );
}
