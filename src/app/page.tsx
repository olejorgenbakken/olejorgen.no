import styles from "./frontpage.module.css";

import education from '../../data/education.json';
import employment from '../../data/employment.json';
import languages from '../../data/languages.json';
import projects from '../../data/projects.json';

import Project from './componentes/CV/project/project'
import School from './componentes/CV/school/school';
import Job from './componentes/CV/job/job';
import Language from './componentes/CV/language/language';

export default function Home() {
  return (
    <main className={styles.frontPage}>
      <h1 className="visuallyhidden">Ole Jørgen Bakken</h1>
      <section className={styles.cv}>
        <div className={styles.group}>
          <h2>Newest projects</h2>
          <ul className={styles.projects}>
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </ul>
        </div>
        <div className={styles.group}>
          <h2>Employment</h2>
          <ul className={styles.employment}>
            {employment.map((job) => (
              <Job key={job.title} {...job} />
            ))}
          </ul>
        </div>
        <div className={styles.group}>
          <h2>Education</h2>
          <ul className={styles.education}>
            {education.map((school) => (
              <School key={school.title} {...school} />
            ))}
          </ul>
        </div>
        <div className={styles.group}>
          <h2>Languages</h2>
          <ul className={styles.languages}>
            {languages.map((language) => (
              <Language key={language.name} {...language} />
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}