import cl from 'clsx';
import styles from "./project.module.css";
import Link from 'next/link';
import Tag from '../tag/tag';

interface ProjectProps {
 company: string;
 title: string;
 description: string;
 date: {
  start: string;
  end?: string;
 },
}

function Project({ company, title, description, date }: ProjectProps) {
 return (
  <li className={cl(styles.project)}>
   <h3 className={styles.title}>{title} <span className={cl(styles.company)}>for {company}</span></h3>
   <p className={styles.description}>{description}</p>
   <p className={cl(styles.dates)}>From {date.start} to {date.end || 'Present'}</p>
  </li>
 );
}

export default Project;
