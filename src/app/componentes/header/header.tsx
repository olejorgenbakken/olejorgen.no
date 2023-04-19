import styles from "./header.module.css";

import Link from 'next/link';
import about from '../../data/about.json';

function Header() {
 return (
  <header className={styles.header}>
   <div className={styles.content}>
    <p><Link href="/" className={styles.name}>{about.name}</Link></p>
   </div>
  </header>
 );
}

export default Header;