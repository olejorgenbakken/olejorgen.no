import Link from "next/link";
import { Repo } from "@/app/api/github/models/repo.model";
import { Commit } from "@/app/api/github/models/commit.model";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import Image from "next/image";
import formatDate from "@/app/util/formatDate";
import { GET as getCommits } from "@/app/api/github/commits/route";

export const dynamic = "force-dynamic";
interface RepoCardProps {
  repo: Repo;
}

export default async function RepoCard({ repo }: RepoCardProps) {
  const commits = await getCommits(repo.owner.login, repo.name);
  const latestCommit: Commit = commits[0];

  return (
    <li key={repo.name} className="px-8 py-6  rounded-lg border  border-slate-300 dark:border-slate-700">
      <Heading level={3}><Link href={repo.html_url}>{repo.name}</Link></Heading>
      <Paragraph size="lg" className="gap-x-8 my-6">{repo.description ? repo.description : "Ingen beskrivelse"}</Paragraph>
      {repo.language && <Paragraph muted>{repo.language}</Paragraph>}

      <footer className="flex flex-row flex-wrap mt-8 pt-4 gap-8 border-t border-slate-300 dark:border-slate-700">
        <div className="flex flex-row gap-2 items-center">
          <Image src={repo.owner.avatar_url} alt={repo.owner.login} width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
          <Paragraph>Opprettet av <Link href={repo.owner.html_url}>{repo.owner.login}</Link> den {formatDate(repo.created_at)}</Paragraph>
        </div>

        {latestCommit?.author ?
          <div className="flex flex-row gap-2 items-center">
            <Image src={latestCommit.author.avatar_url} alt={latestCommit.author.login} width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
            <Paragraph>Oppdatert av <Link href={latestCommit.author.html_url}>{latestCommit.author.login}</Link> den {formatDate(latestCommit.commit.committer.date)} </Paragraph>
          </div>
          : <Paragraph>Ingen oppdateringer siden publisering</Paragraph>
        }
      </footer>

    </li >
  )
}