import styles from "./frontpage.module.css";
import projects from './data/projects.json';
import Project from './componentes/project/project'

export default function Home() {
  return (
    <main className={styles.frontpage}>
      <h1 className="visuallyhidden">Ole Jørgen Bakken</h1>
      <section className={styles.projects}>
        <h2>Things I have worked on</h2>
        <ul>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </section>
    </main>
  )
}