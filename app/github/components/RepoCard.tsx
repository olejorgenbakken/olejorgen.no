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
      return `${repo.stargazers_count} stjerne`
    default:
      return `${repo.stargazers_count} stjerner`;
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

  console.log(repo)

  const latestCommit = await getLatestCommit(repo.owner.login, repo.name);

  return (
    <li key={repo.name} className="px-8 py-6  rounded-lg border bg-slate-50 border-slate-200 dark:bg-slate-950 dark:border-slate-800">
      <Heading level={3}><Link href={repo.html_url}>{repo.name}</Link></Heading>


      <Paragraph size="lg" className="gap-x-8">{repo.description ? repo.description : "Ingen beskrivelse"}</Paragraph>

      <div className="flex flex-row flex-wrap mt-8 gap-4">
        {repo.language && <Paragraph size="xs" muted>{repo.language}</Paragraph>}
        {repo.size && <Paragraph size="xs" muted>{(repo.size / 1000).toFixed(2)} MB</Paragraph>}
        {repo.has_issues && <Paragraph size="xs" muted>{repo.open_issues_count} issues</Paragraph>}
      </div>

      <footer className="flex flex-row flex-wrap mt-8 pt-8 gap-8 border-t border-slate-700">
        <div className="flex flex-row gap-2 items-center">
          <Image src={repo.owner.avatar_url} alt={repo.owner.login} width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
          <Paragraph size="xs">Opprettet av <Link href={repo.owner.html_url}>{repo.owner.login}</Link> den {formatDate(repo.created_at)}</Paragraph>
        </div>

        {latestCommit?.author ?
          <div className="flex flex-row gap-2 items-center">
            <Image src={latestCommit.author.avatar_url} alt={latestCommit.author.login} width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
            <Paragraph size="xs">Oppdatert av <Link href={latestCommit.author.html_url}>{latestCommit.author.login}</Link> den {formatDate(latestCommit.commit.committer.date)} </Paragraph>
          </div>
          : <Paragraph size="xs">Ingen oppdateringer siden publisering</Paragraph>
        }
      </footer>

    </li>
  )
}