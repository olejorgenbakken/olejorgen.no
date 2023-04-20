import styles from "./frontpage.module.css";
import projects from './data/projects.json';
import Link from "next/link";

interface Link {
  url: string;
  title: string;
}

interface Project {
  title: string;
  description: string;
  link?: Link;
}

export default function Home() {
  return (
    <main className={styles.frontpage}>
      <h1 className="visuallyhidden">Ole Jørgen Bakken</h1>
      <section className={styles.projects}>
        <h2>Things I have worked on</h2>
        <ul>
          {projects.map((project) => renderProject(project))}
        </ul>
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