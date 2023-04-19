import styles from "./job.module.css";
import Link from 'next/link';

interface JobProps {
 title: string;
 company: string;
 description?: string;
 date: {
  start: string;
  end?: string;
 };
 url: string;
}

function Job({ title, company, description, date, url }: JobProps) {
 return (
  <li className={styles.job}>
   <h3 className={styles.title}>{title} at <Link href={url} title={`Go to ${company}`} target="_blank" rel="noopener noreferrer" className={styles.company}>{company}</Link></h3>
   <p className={styles.date}>From {date.start}{date.end && ` to ${date.end}`}.</p>
   <p className={styles.description}>{description}</p>
  </li>
 );
}

export default Job;