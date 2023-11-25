import { Octokit } from "octokit";
import Heading from "../components/typography/Heading";
import { Repo } from "../models/repo.model";
import RepoCard from "./components/repoList/RepoCard";


export default async function GithubPage({ params }: { params: { github: string } }) {
 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 const repos: Repo[] = await octokit.request('GET /user/repos', {
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 }).then(res => res.data);

 return (
  <section>
   <Heading level={2} className="mb-4">Repoer ({repos.length})</Heading>
   <ul className="grid grid-cols-1 gap-4 md:gap-12 md:grid-cols-2">
    {repos.map(repo =>
     <RepoCard repo={repo} key={repo.name} />
    )}
   </ul>
  </section>
 )
}

