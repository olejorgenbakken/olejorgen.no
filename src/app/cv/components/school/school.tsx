import styles from "./school.module.css";
import Link from 'next/link';

interface SchoolProps {
 school: string;
 title: string;
 description: string;
 date: {
  start: string;
  end: string;
 },
 link: {
  url: string;
  text: string;
  title: string;
 };
}

function School({ school, title, description, date, link }: SchoolProps) {
 return (
  <li className={styles.school}>
   <h3 className={styles.title}>{title}</h3>
   <p className={styles.schoolName}>Graduated from <Link href={link.url} title={link.title} target="_blank" rel="noopener noreferrer">{school}</Link> in {date.end}.</p>
   <p className={styles.description}>{description}</p>
  </li>
 );
}

export default School;