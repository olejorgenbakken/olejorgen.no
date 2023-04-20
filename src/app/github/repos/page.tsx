import { Octokit } from "octokit";
import styles from "../github.module.css";
import Link from "next/link";

async function getRepos() {
 const octokit = new Octokit({});
 const res = await octokit.request('GET /users/{username}/repos', {
  username: 'olejorgenbakken',
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  },
  sort: 'updated',
  direction: 'desc',
  type: 'all',
 })

 return res.data;
}

export default async function Repos() {
 const repos = await getRepos();

 return (
  <section>
   <h3>My repositories</h3>
   <ul className={styles.repos}>
    {repos.map((repo: any) => renderRepo(repo))}
   </ul>
  </section>
 );
}

function renderRepo(repo: any) {
 return (
  <li className={styles.repo} key={repo.name}>
   <p className={styles.title}><Link href={repo.html_url} title={repo.name} target="_blank" rel="noopener noreferrer" className={styles.company}>{repo.full_name}</Link></p>
   <p className={styles.created}>Created on {new Date(repo.created_at).toLocaleDateString()}. {repo.description && repo.description}</p>
  </li>
 )
}