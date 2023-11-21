import Heading from "@/app/components/typography/Heading";
import { GET as getRepo } from "../../api/github/repo/route";
import RepoCard from "../components/RepoCard";

export default async function Repos() {
 const repos = await getRepo("olejorgenbakken", "updated");

 return (
  <section>
   <Heading level={2}>Repos</Heading>
   <ul className="flex flex-col gap-16">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

