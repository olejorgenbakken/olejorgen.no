'use client';

import { usePathname } from 'next/navigation'
import Link from "next/link"
import React from "react"
import Heading from "../components/typography/Heading"
import Main from "../components/layout/Main"

export default function GithubLayout({ children }: { children: React.ReactNode }) {
 const pathname = usePathname()

 const navLinks = [
  { name: "Hjem", href: "/github" },
  { name: "Repos", href: "/github/repos" },
 ]

 return (
  <Main>
   <Heading level={1}>GitHub</Heading>
   <section className="flex flex-col">
    <nav className="flex flex-row gap-2">
     {navLinks.map((link) => {
      const isActive = pathname.split("/")?.[2] === link.href.split("/")?.[2]

      return (
       <Link
        className={`border-2 py-1 px-4 rounded-full transition-colors border-slate-600 
        hover:bg-slate-600 hover:text-white hover:dark:bg-slate-200 hover:dark:text-black dark:border-slate-200
        ${isActive ? ' bg-slate-600 dark:bg-slate-200 text-white dark:text-black' : 'bg-transparent'}`}
        href={link.href}
        key={link.name}
       >
        {link.name}
       </Link>
      )
     })}
    </nav>
    {children}
   </section>
  </Main>
 )
}

