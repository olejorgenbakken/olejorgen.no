import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col gap-4 max-w-7xl px-8">
      <h1 className="sr-only">Forside</h1>
      <p>Nettopp begynt på denne siden, det eneste av interesse er <Link href="/cv" prefetch={true}>CVen min</Link> <span lang="en"> I guess</span>. Se <Link href="/github">Github her</Link>.</p>
    </main>
  )
}
