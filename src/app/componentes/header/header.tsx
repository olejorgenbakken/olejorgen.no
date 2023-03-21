import cl from 'clsx';
import styles from "./Header.module.css";

import Link from 'next/link';
import { about } from '../../../../data/about';

function Header() {
 return (
  <header className={cl(styles.header)}>
   <div className={cl(styles.headerContent)}>
    <h1><Link href="/">{about.name}</Link></h1>
    <p>{about.title} in {about.location}</p>
   </div>
  </header>
 );
}

export default Header;