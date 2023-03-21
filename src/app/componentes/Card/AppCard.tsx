import cl from 'clsx';
import styles from "./AppCard.module.css";
import Link from 'next/link';

interface AppCardProps {
 name: string;
 description: string;
 url: string;
}

export default function AppCard({ name, description, url }: AppCardProps) {
 return (
  <li className={cl(styles.AppCard)}>
   <h3 className={cl(styles.name)}><Link href={url} title={`Get ${name} in the App Store`} target="_blank" rel="noopener noreferrer">{name}</Link></h3>
   <p className={cl(styles.description)}>{description}</p>
  </li >
 );
}