import cl from 'clsx';
import styles from "./job.module.css";
import Link from 'next/link';

interface JobProps {
 title: string;
 company: string;
 description: string;
 date: {
  start: string;
  end?: string;
 };
 url: string;
}

function Job({ title, company, description, date, url }: JobProps) {
 return (
  <li className={cl(styles.job)}>
   <h3 className={styles.title}>{title} <span className={cl(styles.company)}>at <Link href={url} title={`Go to ${company}`} target="_blank" rel="noopener noreferrer">{company}</Link></span></h3>
   <p className={cl(styles.description)}><span className={cl(styles.dates)}>From {date.start}{date.end && ` to ${date.end}`}.</span> {description}</p>
   {/* <p className={cl(styles.link)}><Link href={url} title={`Go to ${company}`} target="_blank" rel="noopener noreferrer">Visit {company}</Link></p> */}
  </li>
 );
}

export default Job;