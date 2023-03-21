import cl from 'clsx';
import styles from "./page.module.css";

import AppCard from '@/app/componentes/Card/AppCard';
import { websites } from '../../../../data/collections/websites';

export const metadata = {
 title: "Website collection",
 description: "A collection of websites I always visit. Kinda like a bookmark collection.",
}

export default function Websites() {
 return (
  <main className={styles.websitePage}>
   <header className={styles.title}>
    <h1>{metadata.title}</h1>
    <p>{metadata.description}</p>
   </header>
   <div className={styles.websites}>
    {websites.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map((group) => (
     <div key={group.category} className={cl(styles.category)}>
      <header>
       <h2 className={cl(styles.categoryTitle)}>{group.category}</h2>
       {group.description && <p className={cl(styles.description)}>{group.description}</p>}
      </header>
      <ul className={cl(styles.websiteList)}>
       {group.websiteList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((website) => (
        <AppCard {...website} key={website.name} />
       ))}
      </ul>
     </div>
    ))}
   </div>
  </main >
 )
}