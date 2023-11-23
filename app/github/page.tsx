import Heading from "../components/typography/Heading";
import { Repo } from "../models/repo.model";
import RepoCard from "./components/RepoCard";

export default async function Home() {
 const repos: Repo[] = await fetch(
  `https://api.github.com/users/olejorgenbakken/repos?sort=updated&direction=desc&per_page=100&page=1`
 ).then(res => res.json());

 return (
  <section className="w-full">
   <Heading level={2} className="mb-4">Repoer ({repos.length})</Heading>
   <ul className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

