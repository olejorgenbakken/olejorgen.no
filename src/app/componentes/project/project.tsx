import cl from 'clsx';
import styles from "./project.module.css";
import Link from 'next/link';

interface ProjectProps {
 company: string;
 title: string;
 description: string;
 cta?: {
  url: string;
  text: string;
  title: string;
 },
}

function Project({ company, title, description, cta }: ProjectProps) {
 return (
  <li className={cl(styles.project)}>
   <h3 className={styles.title}>{title} <span className={cl(styles.company)}>for {company}</span></h3>
   <p className={styles.description}>{description}</p>
   {cta && <p className={cl(styles.link)}><Link title={`Go to ${cta.title}`} href={cta.url}>{cta.text}</Link></p>}
  </li >
 );
}

export default Project;
