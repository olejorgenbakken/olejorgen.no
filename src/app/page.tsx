import cl from 'clsx';

import { projects } from '../../data/projects'

import Project from './componentes/project/project'

import styles from './page.module.css'
import { education } from '../../data/education';
import School from './componentes/school/school';
import { employment } from '../../data/employment';
import Job from './componentes/job/job';

export default function Home() {
  return (
    <main className={cl(styles.frontPage)}>
      <div className={cl(styles.category, styles.projects)}>
        <h2 className={styles.categoryTitle}>Newest projects</h2>
        <ul>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </div>
      <div className={cl(styles.category, styles.employment)}>
        <h2 className={styles.categoryTitle}>Employment</h2>
        <ul>
          {employment.map((job) => (
            <Job key={job.title} {...job} />
          ))}
        </ul>
      </div>
      <div className={cl(styles.category, styles.education)}>
        <h2 className={styles.categoryTitle}>Education</h2>
        <ul>
          {education.map((school) => (
            <School key={school.title} {...school} />
          ))}
        </ul>
      </div>
    </main>
  )
}