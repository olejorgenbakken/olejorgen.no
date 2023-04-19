import Link from "next/link";
import styles from "./project.module.css";

interface ProjectProps {
 title: string;
 description: string;
 link?: {
  url: string;
  text: string;
  title: string;
 },
}

function Project({ title, description, link }: ProjectProps) {
 return (
  <li className={styles.project}>
   <h3 className={styles.title}>{link ? <Link href={link.url} title={link.title} target="_blank" rel="noopener noreferrer" className={styles.company}>{title}</Link> : title}</h3>
   <p className={styles.description}>{description}</p>
  </li >
 );
}

export default Project;
