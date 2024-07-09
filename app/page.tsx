import { getRepos } from './features/Github/functions';
import { RepositoryCard } from './features/Github/components/RepositoryCard';
import Link from 'next/link';

import './page.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ole Jørgen Bakken',
  description: 'Må ha et sted å teste ting',
};

export default async function Home() {
  const twoYearsAgo = new Date().getTime() - 1000 * 60 * 60 * 24 * 365 * 2;
  const reposUpdatedLastTwoYears = (await getRepos('updated'))
    .filter((repo) => new Date(repo.updated_at).getTime() > twoYearsAgo)
    .slice(0, 4);

  return (
    <main className="page-home">
      <header>
        <p className="huge slide-down">
          Frontend-utvikler hos <Link href="https://fremtind.no">Fremtind</Link>
          . Tidligere produkt&shy;designer hos{' '}
          <Link href="https://www.detsombetyrnoe.no">NAV</Link>.
        </p>
      </header>
      {reposUpdatedLastTwoYears && (
        <section className="repos">
          <h2 className="h3">Siste jeg har jobbet med</h2>

          <ul className="repos-list no-style">
            {reposUpdatedLastTwoYears.map((newestRepo) => (
              <li key={newestRepo.name}>
                <RepositoryCard repository={newestRepo} />
              </li>
            ))}
          </ul>

          <Link
            className="cta"
            href="https://github.com/olejorgenbakken">
            Gå til GitHub
          </Link>
        </section>
      )}
    </main>
  );
}
