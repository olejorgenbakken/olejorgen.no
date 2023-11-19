import Link from "next/link"
import React from "react"

export default function GithubLayout({ children }: { children: React.ReactNode }) {
 return (
  <main className="flex flex-col gap-4 max-w-7xl px-8">
   <h1>GitHub</h1>
   <nav className="flex flex-row gap-4 flex-wrap">
    <Link href="/github/commits">Commits</Link>
    <Link href="/github/repos">Repos</Link>
   </nav>
   {children}
  </main>
 )
}

