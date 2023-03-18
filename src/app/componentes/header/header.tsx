import cl from 'clsx';
import styles from "./header.module.css";
import Link from 'next/link';

function Header() {
 return (
  <header className={cl(styles.header)}>
   <div className={cl(styles.headerContent)}>
    <h1><Link href="/">Ole Jørgen Bakken</Link></h1>
    <p>UX Designer</p>
   </div>
  </header>
 );
}

export default Header;