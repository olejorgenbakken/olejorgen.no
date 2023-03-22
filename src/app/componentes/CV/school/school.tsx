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
 cta: {
  url: string;
  text: string;
  title: string;
 };
}

function School({ school, title, description, date, cta }: SchoolProps) {
 return (
  <li className={styles.school}>
   <h3 className={styles.title}>{title}</h3>
   <p className={styles.description}><span className="clear">Graduated from <Link href={cta.url} title={`Go to ${cta.title}`} target="_blank" rel="noopener noreferrer">{school}</Link> in {date.end}.</span> {description}</p>
  </li>
 );
}

export default School;