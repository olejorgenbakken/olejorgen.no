import Link from "next/link";
import { Repo } from "@/app/models/repo.model";
import Paragraph from "@/app/components/typography/Paragraph";
import RepoTopics from "./RepoTopics";
import RepoHeader from "./RepoHeader";
import RepoFooter from "./RepoFooter";

export const dynamic = "force-dynamic";
interface RepoCardProps {
  repo: Repo;
}

export default async function RepoCard({ repo }: RepoCardProps) {

  return (
    <li key={repo.name} className="p-6 sm:px-8 sm:py-6 h-max rounded-xl border border-zinc-200 dark:border-zinc-800">
      <RepoHeader repo={repo} />

      {repo.description && <Paragraph className="my-3"> {repo.description} </Paragraph>}

      {repo.topics && <RepoTopics topics={repo.topics} />}
      <RepoFooter {...repo.owner} />
    </li >
  )
}