import Link from "next/link";
import { Repo } from "../../api/github/repo/repo.model";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import Badge from "@/app/components/Badge";
import DefinitionList from "@/app/components/definitionList/DefinitionList";
import Image from "next/image";

interface RepoCardProps {
 repo: Repo;
}

const getStargarers = (repo: Repo) => {
 switch (repo.stargazers_count) {
  case 0:
   return null;
  case 1:
   return <Badge>{repo.stargazers_count} stjerne</Badge>;
  default:
   return <Badge>{repo.stargazers_count} stjerner</Badge>;
 }
}

const getOpenIssues = (repo: Repo) => {
 switch (repo.open_issues_count) {
  case 0:
   return null;
  case 1:
   return <Badge link={`${repo.html_url}/issues`}>{repo.open_issues_count} åpent issue</Badge>;
  default:
   return <Badge link={`${repo.html_url}/issues`}>{repo.open_issues_count} åpne issues</Badge>;
 }
}

const formatDate = (date: Date) => {
 return new Date(date).toLocaleDateString("nb-NO", { year: "numeric", month: "long", day: "numeric" })
}

export default function RepoCard({ repo }: RepoCardProps) {
 return (
  <li key={repo.name} className="p-8 border border-opacity-60 border-current-500 rounded-lg">
   <aside className="flex flex-col justify-between gap-x-8 mb-4 sm:flex-row sm:justify-between sm:items-center">
    <div className="flex flex-row gap-3 items-center">
     <Image src={repo.owner.avatar_url} alt={repo.owner.login} width={24} height={24} className="rounded-full" />
     <Paragraph size="base" muted>Opprettet av <Link href={repo.owner.html_url}>{repo.owner.login}</Link> den {formatDate(repo.created_at)} </Paragraph>
    </div>
    <div className="flex flex-row gap-4">
     {repo.language && <Badge link={`https://github.com/topics/${repo.language}`}>{repo.language}</Badge>}
     {getStargarers(repo)}
     {getOpenIssues(repo)}
     {repo.archived && <Badge>Arkivert</Badge>}
     {repo.disabled && <Badge>Deaktivert</Badge>}
     {repo.fork && <Badge>Fork</Badge>}
     {repo.private && <Badge>Privat</Badge>}
    </div>
   </aside>

   <header className="mb-4">
    <Heading level={3}><Link href={repo.html_url}>{repo.name}</Link></Heading>
   </header>

   <Paragraph size="xl">{repo.description ? repo.description : "Ingen beskrivelse"}</Paragraph>
  </li>
 )
}