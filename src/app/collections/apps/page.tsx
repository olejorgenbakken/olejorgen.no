import dynamic from 'next/dynamic';
import cl from 'clsx';
import styles from "./page.module.css";

import { apps } from '../../../../data/collections/apps';
import AppCard from '@/app/componentes/Card/AppCard';

export const metadata = {
 title: "App collection",
}

export default function Apps() {
 return (
  <main className={styles.appPage}>
   <header className={styles.title}>
    <h1>App collection</h1>
    <p>A collection of apps I always download when I get a new device.</p>
   </header>
   <div className={styles.apps}>
    {apps.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map((group) => (
     <div key={group.category} className={cl(styles.category)}>
      <header>
       <h2 className={cl(styles.categoryTitle)}>{group.category}</h2>
       {group.description && <p className={cl(styles.description)}>{group.description}</p>}
      </header>
      <ul className={cl(styles.appList)}>
       {group.appList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((app) => (
        <AppCard {...app} key={app.name} />
       ))}
      </ul>
     </div>
    ))}
   </div>
  </main >
 )
}