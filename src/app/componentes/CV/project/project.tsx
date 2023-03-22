import styles from "./project.module.css";
import CTA from '../../Button/Button';

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
  <li className={styles.project}>
   <div className={styles.info}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}><span className="clear">Worked on for {company}.</span> {description}</p>
   </div>
   {cta && <CTA title={`Go to ${cta.title}`} href={cta.url} target="_blank" rel="noopener noreferrer">{cta.text}</CTA>}
  </li >
 );
}

export default Project;
