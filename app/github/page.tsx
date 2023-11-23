import Heading from "../components/typography/Heading";
import { GET as getRepo } from "../api/github/repo/route";
import { Repo } from "../api/github/models/repo.model";
import RepoCard from "./components/RepoCard";

export default async function Home() {
 const repos: Repo[] = await getRepo("olejorgenbakken");

 return (
  <section className="w-full">
   <Heading level={2} className="mb-4">Repoer ({repos.length})</Heading>
   <ul className="grid grid-cols-1 gap-12 md:grid-cols-2">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

