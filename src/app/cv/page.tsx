import styles from "./cv.module.css";

import education from "../data/education.json";
import work from "../data/work.json";
import Link from "next/link";

export default function CV() {
 return (
  <main className={styles.cv}>
   <h1>Work and education</h1>
   {renderWork()}
   {renderEducation()}
  </main>
 );
}

function renderWork() {
 return (
  <section className={styles.group}>
   <h2>Work</h2>
   <ul className={styles.employment}>
    {work &&
     work.map((job) => (
      <li className={styles.job}>
       <h3 className={styles.title}>
        {job.title} at <Link href={job.url} title={`Go to ${job.company}`} target="_blank" rel="noopener noreferrer" className={styles.company}>{job.company}</Link>
       </h3>
       <p className={styles.date}>From {job.date.start}{job.date.end && ` to ${job.date.end}`}.</p>
       <p className={styles.description}>{job.description}</p>
      </li>
     ))}
   </ul>
  </section>
 );
}

function renderEducation() {
 return (
  <section className={styles.group}>
   <h2>Education</h2>
   <ul className={styles.education}>
    {education &&
     education.map((school) => (
      <li className={styles.school}>
       <h3 className={styles.title}>{school.title}</h3>
       <p className={styles.schoolName}>Graduated from {school.school} in {school.date.end}.</p>
       <p className={styles.description}>{school.description}</p>
      </li>
     ))}
   </ul>
  </section>
 );
}