import cl from 'clsx';
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
  <li className={cl(styles.school)}>
   <h3 className={cl(styles.title)}>{title}</h3>
   <p className={cl(styles.description)}><span className={cl(styles.graduation)}>Graduated from <Link href={cta.url} title={`Go to ${cta.title}`} target="_blank" rel="noopener noreferrer">{school}</Link> in {date.end}.</span> {description}</p>
  </li>
 );
}

export default School;