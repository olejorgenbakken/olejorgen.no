import Badge from "@/app/components/Badge";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import { Repo } from "@/app/models/repo.model";
import Link from "next/link";

interface RepoHeaderProps {
 repo: Repo;
}

export default function RepoHeader({ repo }: RepoHeaderProps) {
 return (
  <header className="flex flex-row gap-x-12 justify-between">
   <Heading level={3} className="text-lg"><Link href={repo.html_url}>{repo.name}</Link></Heading>
   {repo.language && <Badge size="sm" link={`https://github.com/topics/${repo.language}`}>{repo.language}</Badge>}
  </header>
 )
}