import Badge from "@/app/components/Badge";
import { Repo } from "@/app/models/repo.model";

interface RepoTopicsProps {
 topics: Repo["topics"];
}

export default function RepoTopics({ topics }: RepoTopicsProps) {
 return (
  <ul className="flex flex-row flex-wrap gap-2 mt-8">
   {topics!.map(topic => <li key={topic}><Badge size="sm" link={`https://github.com/topics/${topic}`}>{topic}</Badge></li>)}
  </ul>
 )
}