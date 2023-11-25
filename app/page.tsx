import Link from "next/link"
import Heading from "./components/typography/Heading"
import Main from "./components/layout/Main"
import Paragraph from "./components/typography/Paragraph"

export default function HomePage() {
  return (
    <Main>
      <Heading level={1}>Forside</Heading>
      <div>
        <Heading level={2} className="mb-4">Jeg har nettopp begynt på denne siden</Heading>
        <Paragraph className="mb-2"><Link href="/cv" prefetch={true}>CVen min</Link></Paragraph>
        <Paragraph><Link href="/github" prefetch={true}>Github</Link></Paragraph>
      </div>
    </Main>
  )
}
