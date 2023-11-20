import Link from "next/link"
import Heading from "./components/typography/Heading"

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Heading level={1}>Forside</Heading>
      <p>Nettopp begynt på denne siden, det eneste av interesse er <Link href="/cv" prefetch={true}>CVen min</Link> <span lang="en"> I guess</span>. Se <Link href="/github">Github her</Link>.</p>
    </main>
  )
}
