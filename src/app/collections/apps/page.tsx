import styles from '../collections.module.css';
import { apps } from '../../../../data/collections/apps';
import Link from 'next/link';

export const metadata = {
 title: "App collection",
 description: "A collection of apps I always download when I get a new device.",
}

export default function Apps() {
 return (
  <>
   <header className={styles.header}>
    <h1 className={styles.title}>{metadata.title}</h1>
    <p className={styles.description}>{metadata.description}</p>
   </header>
   <div className={styles.collectionGroups}>
    {apps.sort((a, b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)).map((group) => (
     <div key={group.category} className={styles.collectionGroup}>
      <header>
       <h2 className={styles.title}>{group.category}</h2>
       {group.description && <p>{group.description}</p>}
      </header>
      <table className={styles.table}>
       <thead>
        <th className={styles.name}>Name</th>
        <th>Description</th>
       </thead>
       <tbody>
        {group.appList.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((app) => (
         <tr key={app.name}>
          <td className={styles.name}><Link href={app.url} title={app.name} target="_blank" rel="noopener noreferrer">{app.name}</Link></td>
          <td className={styles.description}>{app.description}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    ))}
   </div>
   <footer className={styles.footer}>
    <Link href="/collections" title="Go to collections">Go back to collections</Link>
   </footer>
  </>
 )
}