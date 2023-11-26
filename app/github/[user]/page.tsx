import { Octokit } from "octokit";
import { Repo } from "../../models/repo.model";
import RepoList from "../components/RepoList";
import Heading from "@/app/components/typography/Heading";


export default async function GithubPage() {
 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 const repos: Repo[] = await octokit.request('GET /user/repos', {
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 }).then(res => res.data);

 return (
  <>
   <Heading level={1}>Repoer</Heading>
   <RepoList repos={repos} />
  </>
 )
}

