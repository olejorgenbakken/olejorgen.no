import Link from "next/link"
import React from "react"
import Heading from "../components/typography/Heading"
import Main from "../components/layout/Main"
import Image from "next/image"
import { User } from "../api/github/models/user.model"
import { GET as getUser } from "../api/github/user/route"
import Paragraph from "../components/typography/Paragraph"
import formatDate from "../util/formatDate"
import Breaker from "../components/layout/Breaker"

export default async function GithubLayout({ children }: { children: React.ReactNode }) {
 const user: User = await getUser("olejorgenbakken");

 return (
  <Main>
   <Heading level={1}>GitHub</Heading>
   <header className="flex flex-row items-center w-full gap-8">
    <Image src={user.avatar_url} alt={user.name} width={128} height={128} className="rounded-full h-28 w-28 aspect-square" />
    <div className="flex flex-col">
     <Heading level={2}>{user.name} <span className="text-base font-normal"><Link href={user.html_url}>github.com/{user.login}</Link></span></Heading>
     <Paragraph className="mt-1 mb-2">{user.bio}</Paragraph>
     <Paragraph muted size="sm">{user.location}</Paragraph>
    </div>
   </header>
   <div>
    <Heading level={2}>Stats</Heading>
    <Paragraph className="mt-4 mb-8">
     Jeg følger <Link href={`${user.html_url}?tab=following`}>{user.following} brukere</Link>, har <Link href={`${user.html_url}?tab=followers`}>{user.followers} følgere</Link>, , og eier <Link href="/github/repos">{user.public_repos} repos</Link>.
    </Paragraph>
    <Paragraph size="sm">Lagde konto på GitHub {formatDate(user.created_at)}, med siste aktivitet {formatDate(user.updated_at)}.</Paragraph>
   </div>
   {children}
  </Main>
 )
}

