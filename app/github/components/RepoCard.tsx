import Link from "next/link";
import { Repo } from "../repos/repo.model";

interface RepoCardProps {
 repo: Repo;
}

export default function RepoCard({ repo }: RepoCardProps) {
 return (
  <li key={repo.name}>
   <h3><Link href={repo.html_url}>{repo.name}</Link></h3>
   {repo.description ? <p className="mt-2">{repo.description}</p> : <p className="mt-2 opacity-75 italic">Ingen beskrivelse</p>}
  </li>
 )
}