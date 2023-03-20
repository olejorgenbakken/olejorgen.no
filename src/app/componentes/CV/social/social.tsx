import cl from 'clsx';
import styles from "./social.module.css";

interface SocialProps {
 name: string;
 url: string;
}

function Social({ name, url }: SocialProps) {
 return (
  <li className={cl(styles.social)}>
   <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
  </li>
 );
}

export default Social;