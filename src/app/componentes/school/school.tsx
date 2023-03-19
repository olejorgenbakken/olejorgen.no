import cl from 'clsx';
import styles from "./school.module.css";

interface SchoolProps {
 school: string;
 title: string;
 description: string;
}

function School({ school, title, description }: SchoolProps) {
 return (
  <li className={cl(styles.school)}>
   <h3 className={cl(styles.title)}>{title} at {school}</h3>
   <p className={cl(styles.description)}>{description}</p>
  </li>
 );
}

export default School;