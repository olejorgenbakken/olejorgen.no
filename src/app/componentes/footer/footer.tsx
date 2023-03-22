import styles from "./footer.module.css";
import { about } from '../../../../data/about';
import Link from "next/link";

function Footer() {
 return (
  <footer className={styles.footer}>
   <ul className={styles.content}>
    <li className={styles.category}>
     <h2 className={styles.categoryTitle}>Portfolio</h2>
     <ul>
      {about.portfolio.map((site) => (
       <li key={site.name}>
        <Link href={site.url} title={site.name} target="_blank" rel="noopener noreferrer">{site.name}</Link>
       </li>
      ))}
     </ul>
    </li>

    <li className={styles.group}>
     <h2 className={styles.categoryTitle}>Social media</h2>
     <ul>
      {about.social.map((site) => (
       <li key={site.name}>
        <Link href={site.url} title={site.name} target="_blank" rel="noopener noreferrer">{site.name}</Link>
       </li>
      ))}
     </ul>
    </li>

    <li className={styles.group}>
     <h2 className={styles.categoryTitle}>Collections</h2>
     <ul>
      <li><Link href="/collections/apps" title="Go to apps">Apps</Link></li>
      <li><Link href="/collections/websites" title="Go to websites">Websites</Link></li>
     </ul>
    </li>

   </ul>
  </footer >
 );
}

export default Footer;