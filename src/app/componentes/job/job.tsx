import cl from 'clsx';
import styles from "./job.module.css";
import Link from 'next/link';

interface JobProps {
 title: string;
 company: string;
 date: {
  start: string;
  end?: string;
 };
 url: string;
}

function Job({ title, company, date, url }: JobProps) {
 return (
  <li className={cl(styles.job)}>
   <h3 className={styles.title}>{title} <span className={cl(styles.company)}>at {company}</span></h3>
   <p className={cl(styles.dates)}>From {date.start} to {date.end || 'Present'}</p>
   <p><Link href={url} title={`Go to ${company}`} target="_blank" rel="noopener noreferrer">View website</Link></p>
  </li>
 );
}

export default Job;