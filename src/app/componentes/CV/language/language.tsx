import cl from 'clsx';
import styles from "./language.module.css";

interface LanguageProps {
 name: string;
 level: string;
}

function Language({ name, level }: LanguageProps) {
 return (
  <li className={cl(styles.language)}>
   <h3 className={cl(styles.title)}>{name}</h3>
   <p className={cl(styles.level)}>{level}</p>
  </li>
 );
}

export default Language;