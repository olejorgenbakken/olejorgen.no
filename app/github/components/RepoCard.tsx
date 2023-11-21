import Link from "next/link";
import { Repo } from "@/app/api/github/repo/repo.model";
import { Commit } from "@/app/api/github/commit/commit.model";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import Badge from "@/app/components/Badge";
import Image from "next/image";

export const dynamic = "force-dynamic";
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

const getLatestCommit = async (owner: string, repo: string) => {
  const commit = (await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`).then(res => res.json()))[0] as Commit;
  if (commit) {
    return commit;
  } else {
    return null;
  }
}

export default async function RepoCard({ repo }: RepoCardProps) {

  const latestCommit = await getLatestCommit(repo.owner.login, repo.name);

  return (
    <li key={repo.name}>
      <aside className="flex flex-col justify-between mb-4 gap-x-8 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex flex-row gap-3 items-center">
          <Image src={repo.owner.avatar_url} alt={repo.owner.login} width={24} height={24} className="rounded-full" />
          <Paragraph size="base" muted><Link href={repo.owner.html_url}>Opprettet av {repo.owner.login}</Link> den {formatDate(repo.created_at)} </Paragraph>
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

      <header className="mb-4 gap-x-8">
        <Heading level={3}><Link href={repo.html_url}>{repo.name}</Link></Heading>
      </header>

      <Paragraph size="xl" className="mb-6 gap-x-8">{repo.description ? repo.description : "Ingen beskrivelse"}</Paragraph>
      {latestCommit?.author &&
        <footer className="flex flex-row p-3 gap-2 rounded-md bg-slate-100 border border-slate-300 dark:bg-slate-800 dark:border-slate-600">
          <Image src={latestCommit.author.avatar_url} alt={latestCommit.author.login} width={16} height={16} className="rounded-sm" />
          <Paragraph size="sm"><Link href={latestCommit.author.html_url}>Siste commit av {latestCommit.author.login}</Link> den {formatDate(latestCommit.commit.committer.date)} </Paragraph>

        </footer>
      }
    </li>
  )
}