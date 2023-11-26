import Main from "@/app/components/layout/Main";
import { Repo } from "@/app/models/repo.model";
import { Octokit } from "octokit";

export default async function RepoPage({ params }: { params: { user: string, repo: string } }) {

 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 console.log(`GET /repos/${params.user}/${params.repo}`);

 const repo: Repo = await octokit.request(`GET /repos/${params.user}/${params.repo}`, {
  owner: params.user,
  repo: params.repo,
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 }).then(res => res.data);

 if (!repo) {
  return <div>404</div>
 }

 return (
  <Main>
   <h1>{repo.name}</h1>
   <p>{repo.description}</p>
   <p>{repo.language}</p>
   <p>{repo.topics}</p>
   <p>{repo.owner.login}</p>
  </Main>
 )
}
