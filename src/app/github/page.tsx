import { Octokit } from "octokit";
import styles from "./github.module.css";
import Link from "next/link";

async function getUserInfo() {
 const octokit = new Octokit({});
 const res = await octokit.request('GET /users/{username}', {
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

export default async function Github() {
 const user = await getUserInfo();

 return (
  <section className={styles.overview}>
   <h3>Overview</h3>
   <div className={styles.group}>
    {renderDetail('Created', new Date(user.created_at).toLocaleDateString())}
    {renderDetail('Updated', new Date(user.updated_at).toLocaleDateString())}
   </div>
   <div className={styles.group}>
    {renderDetail('Followers', user.followers)}
    {renderDetail('Following', user.following)}
   </div>
   <div className={styles.group}>
    {renderDetail('Public repos', user.public_repos)}
    {renderDetail('Public gists', user.public_gists)}
   </div>
  </section>
 );
}

function renderDetail(title: string, value: string) {
 if (!value) return null;
 return (
  <div className={styles.info}>
   <p className={styles.infoValue}><span className={styles.infoTitle}>{title}</span>: {value}</p>
  </div>
 )
}