import cl from 'clsx';

import { projects } from '../../data/projects'

import Project from './componentes/project/project'

import styles from './page.module.css'

export default function Home() {
  return (
    <main>
      <div className={cl(styles.projects)}>
        <h2>Projects</h2>
        <ul>
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </main>
  )
}