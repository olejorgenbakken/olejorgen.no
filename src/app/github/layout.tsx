import Link from "next/link";
import styles from "./github.module.css";

import { Octokit } from "octokit";

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

export default async function GitHubLayout({
 children,
}: {
 children: React.ReactNode,
}) {

 const user = await getUserInfo();

 return (
  <main className={styles.github}>
   <h1>GitHub information</h1>
   <div className={styles.header}>
    <img src={user.avatar_url} alt="" className={styles.avatar} width={120} height={120} />
    <div className={styles.info}>
     <p className={styles.name}>{user.name}</p>
     <p className={styles.username}><Link href={user.html_url} title={user.name} target="_blank" rel="noopener noreferrer" className={styles.company}>{user.login}</Link></p>
     {user.company && user.location && <p className={styles.work}>Working {user.company} in {user.location}</p>}
    </div>
   </div>
   <ul className={styles.tabs}>
    <li className={styles.tab}><Link href="/github" title="Go to overview">Overview</Link></li>
    <li className={styles.tab}><Link href="/github/repos" title="Go to repos">Repos</Link></li>
    <li className={styles.tab}><Link href="/github/starred" title="Go to starred">Starred</Link></li>
   </ul>
   {children}
  </main>
 );
}