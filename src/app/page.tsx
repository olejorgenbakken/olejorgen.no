import styles from "./frontpage.module.css";
import projects from './data/projects.json';
import Link from "next/link";
import { Octokit } from "octokit";

interface Link {
  url: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  link?: Link;
}

async function getGithubData() {
  const octokit = new Octokit({});
  const res = await octokit.request("GET /users/{username}", {
    username: "olejorgenbakken",
  });

  return res.data;
}

export default async function Home() {
  const github = await getGithubData();

  return (
    <main className={styles.frontpage}>
      <h1 className="visuallyhidden">Ole Jørgen Bakken</h1>
      {github && <section className={styles.about}>
        <h2 className={styles.title}>About me</h2>
        <p>My name is {github.name}. I work as an interaction designer working {github.company} in {github.location}.</p>
      </section>}

      <section className={styles.projects}>
        <h2>Things I have worked on</h2>
        <ul>
          {projects.map((project) => renderProject(project))}
        </ul>
      </section>

      <section className={styles.social}>
        <h2>Socials</h2>
        {github && <p>Find me on <Link href={github.html_url} title="Github profile" target="_blank" rel="noopener noreferrer">Github</Link>.</p>}
      </section>
    </main>
  )
}

function renderProject(project: Project) {
  const { title, description, link } = project
  return (
    <li className={styles.project}>
      <h3 className={styles.title}>{link ? <Link href={link.url} title={link.title} target="_blank" rel="noopener noreferrer" className={styles.company}>{title}</Link> : title}</h3>
      <p className={styles.description}>{description}</p>
    </li >
  )
}