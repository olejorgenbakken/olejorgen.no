import cl from 'clsx';

import { projects } from '../../data/projects'

import Project from './componentes/project/project'

import styles from './page.module.css'
import { education } from '../../data/education';
import School from './componentes/school/school';

export default function Home() {
  return (
    <main>
      <div className={cl(styles.category, styles.projects)}>
        <h2 className={styles.categoryTitle}>Projects</h2>
        <ul>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
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