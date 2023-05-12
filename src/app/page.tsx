import RelativeTime from '@yaireo/relative-time'

import styles from "./frontpage.module.css";
import Link from 'next/link';

import { Octokit } from "@octokit/core";
import { Tag } from "./components/tag/tag";
import { Card } from "./components/card/card";

const relativeTime = new RelativeTime({ locale: 'no' });

var units = {
  year: 24 * 60 * 60 * 1000 * 365,
  month: 24 * 60 * 60 * 1000 * 365 / 12,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000
};

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

async function getRepos() {
  const res = await octokit.request('GET /users/{username}/repos', {
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
  const repos = await getRepos();
  const socials = await getSocials();

  return (
    <main className={styles.frontpage}>
      <h1 className={styles.heading}>{user.name}</h1>
      {user.company && <p className={styles.work}>{user.bio} {user.location && `i ${user.location}`}.</p>}
      <h2>Det siste jeg har jobbet på</h2>
      <ul className={styles.repos}>
        {repos.filter((repo: any) => repo.fork === false).map((repo: any) => (
          <li key={repo.id} className={styles.repo}>
            <Card heading={{ level: 3, text: repo.name }} subheading={`Sist oppdatert ${relativeTime.from(new Date(repo.updated_at))}.`}>

              {repo.description && <p lang='en'>{repo.description}</p>}
              {repo.topics && <ul className={styles.tags}>{repo.topics.map((tag: string) => <Tag key={tag}>{tag}</Tag>)}{repo.language && <Tag>{repo.language.toLowerCase()}</Tag>}</ul>}
            </Card>
          </li>
        ))}
      </ul>
      <h2>Andre steder å finne meg</h2>
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