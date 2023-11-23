import Link from "next/link";
import { Repo } from "@/app/models/repo.model";
import { Commit } from "@/app/models/commit.model";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import Image from "next/image";
import formatDate from "@/app/util/formatDate";
import Badge from "@/app/components/Badge";

export const dynamic = "force-dynamic";
interface RepoCardProps {
  repo: Repo;
}

export default async function RepoCard({ repo }: RepoCardProps) {

  return (
    <li key={repo.name} className="px-8 py-6 rounded-xl border border-zinc-200 dark:border-zinc-800">
      <Heading level={3} className="text-lg"><Link href={repo.html_url}>{repo.name}</Link></Heading>
      <Paragraph className="my-3">{repo.description ? repo.description : "Ingen beskrivelse"}</Paragraph>

      <footer className="flex flex-row justify-between mt-8 pt-6 gap-8 border-t border-zinc-100 dark:border-zinc-900">
        <div className="flex flex-row gap-2 items-center">
          <Image src={repo.owner.avatar_url} alt={repo.owner.login} width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
          <Paragraph muted size="sm">Opprettet av <Link href={repo.owner.html_url}>{repo.owner.login}</Link> den {formatDate(repo.created_at)}</Paragraph>
        </div>
        {repo.language && <Badge size="sm">{repo.language}</Badge>}
      </footer>

    </li >
  )
}