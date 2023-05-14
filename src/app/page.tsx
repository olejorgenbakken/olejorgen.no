import RelativeTime from '@yaireo/relative-time'

import styles from "./frontpage.module.css";
import Link from 'next/link';

import { Octokit } from "@octokit/core";

const octokit = new Octokit({});
const username = 'olejorgenbakken';
const apiVersion = '2022-11-28';

async function getUserInfo() {
  const res = await octokit.request('GET /users/{username}', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': apiVersion
    },
    sort: 'updated',
    direction: 'desc',
    type: 'all',
  })

  return res.data;
}

async function getSocials() {
  const res = await octokit.request('GET /users/{username}/social_accounts', {
    username: username,
    headers: {
      'X-GitHub-Api-Version': apiVersion
    }
  })

  return res.data;
}

export default async function Home() {
  const user = await getUserInfo();
  const socials = await getSocials();

  return (
    <main className={styles.frontpage}>
      <header className={styles.header}>
        <h1 className={styles.heading}>{user.name}</h1>
        {user.bio && <p className={styles.work}>{user.bio} – {user.location && `${user.location}`}</p>}
      </header>
      <ul className={styles.links}>
        {socials.map((social: any) => (
          <li key={social.id} className={styles.link}>
            <Link href={social.url} title={social.provider}>{social.provider}</Link>
          </li>
        ))}
      </ul>

    </main >
  )
}