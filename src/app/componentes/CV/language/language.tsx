import styles from "./language.module.css";

interface LanguageProps {
 name: string;
 level: string;
}

function Language({ name, level }: LanguageProps) {
 return (
  <li className={styles.language}>
   <h3 className={styles.title}>{name}</h3>
   <p className={styles.level}>{level}</p>
  </li>
 );
}

export default Language;