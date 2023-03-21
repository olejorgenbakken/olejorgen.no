import cl from 'clsx';
import styles from "./project.module.css";
import Link from 'next/link';
import CTA from '../../Buttons/CTA/CTA';

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
   <h3 className={styles.title}>{title}</h3>
   <p className={styles.description}><span className={cl(styles.company)}>Worked on for {company}.</span> {description}</p>
   {cta && <CTA title={`Go to ${cta.title}`} href={cta.url} target="_blank" rel="noopener noreferrer">{cta.text}</CTA>}
  </li >
 );
}

export default Project;
