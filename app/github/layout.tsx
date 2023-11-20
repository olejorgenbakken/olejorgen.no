import Link from "next/link"
import React from "react"
import Heading from "../components/typography/Heading"
import Main from "../components/layout/Main"

export default function GithubLayout({ children }: { children: React.ReactNode }) {
 return (
  <Main>
   <Heading level={1}>GitHub</Heading>
   <nav className="flex flex-row gap-4 flex-wrap">
    <Link href="/github/commits">Commits</Link>
    <Link href="/github/repos">Repos</Link>
   </nav>
   {children}
  </Main>
 )
}

