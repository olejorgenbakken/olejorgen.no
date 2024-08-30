import Link from 'next/link';

export default async function NotFound() {
  return (
    <main>
      <h1>404</h1>
      <p>
        Gå til <Link href="/blog">bloggen</Link>, eller{' '}
        <Link href={'/'}>forsiden</Link>.
      </p>
    </main>
  );
}
