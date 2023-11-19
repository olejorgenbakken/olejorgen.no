import { GET } from "./api/route";
import RepoCard from "../components/RepoCard";

export default async function Repos() {
 const repos = await GET("olejorgenbakken");

 return (
  <section>
   <h2>Repos</h2>
   <ul className="flex flex-col gap-8">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

