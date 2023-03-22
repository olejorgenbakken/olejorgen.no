import styles from "../collections.module.css";
import { websites } from '../../../../data/collections/websites';
import Link from 'next/link';

export const metadata = {
 title: "Website collection",
 description: "A collection of websites I always visit. Kinda like a bookmark collection.",
}

export default function Websites() {
 return (
  <>
   <header className={styles.header}>
    <h1 className={styles.title}>{metadata.title}</h1>
    <p className={styles.description}>{metadata.description}</p>
   </header>
   <div className={styles.collectionGroups}>
    {websites.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map((group) => (
     <div key={group.category} className={styles.collectionGroup}>
      <header>
       <h2 className={styles.title}>{group.category}</h2>
       {group.description && <p>{group.description}</p>}
      </header>
      <ul>
       {group.websiteList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((website) => (
        <li key={website.name}>
         <Link href={website.url} title={website.name} target="_blank" rel="noopener noreferrer">{website.name}</Link>
         <p>{website.description}</p>
        </li>
       ))}
      </ul>
     </div>
    ))}
   </div>
  </>
 )
}