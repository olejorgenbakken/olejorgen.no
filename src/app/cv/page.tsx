import styles from "./cv.module.css";

import education from '../data/education.json';
import work from '../data/work.json';
import School from '../componentes/CV/school/school';
import Job from '../componentes/CV/job/job';

export default function CV() {
 return (
  <main className={styles.cv}>
   <h1>Work and education</h1>
   <section className={styles.group}>
    <h2>Work</h2>
    <ul className={styles.employment}>
     {work.map((job) => (
      <Job key={job.title} {...job} />
     ))}
    </ul>
   </section>
   <section className={styles.group}>
    <h2>Education</h2>
    <ul className={styles.education}>
     {education.map((school) => (
      <School key={school.title} {...school} />
     ))}
    </ul>
   </section>
  </main>
 )
}