import Heading from "@/app/components/typography/Heading";
import { GET } from "../../api/github/repo/route";
import RepoCard from "../components/RepoCard";

export default async function Repos() {
 const repos = await GET("olejorgenbakken", "updated");

 return (
  <section>
   <Heading level={2}>Repos</Heading>
   <ul className="flex flex-col gap-8">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

