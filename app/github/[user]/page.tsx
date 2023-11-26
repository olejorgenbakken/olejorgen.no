import { Octokit } from "octokit";
import { Repo } from "../../models/repo.model";
import RepoList from "../components/RepoList";
import Heading from "@/app/components/typography/Heading";


export default async function GithubPage() {
 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 const data = await octokit.request('GET /user/repos', {
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 });

 const repos: Repo[] = data.data;
 const status = data.status;

 if (status !== 200) {
  return (
   <>
    <Heading level={1}>Repoer</Heading>
    <p>Det skjedde en feil</p>
   </>
  )
 }

 return (
  <>
   <Heading level={1}>Repoer</Heading>
   <RepoList repos={repos} />
  </>
 )
}

