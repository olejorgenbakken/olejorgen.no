'use client';
import { usePathname } from 'next/navigation';
import styles from "./header.module.css";
import Link from 'next/link';

export default function Header() {
 const pathname = usePathname();

 return (
  <header className={styles.header}>
   <nav className={styles.content}>
    <ul>
     <li><Link href="/" className={pathname === '/' ? styles.active : ''} title="Go to frontpage">Home</Link></li>
     <li><Link href="/cv" className={pathname.includes('/cv') ? styles.active : ''} title="Go to CV">CV</Link></li>
     <li><Link href="/github" className={pathname.includes('/github') ? styles.active : ''} title="Go to Github">Github</Link></li>
    </ul>
   </nav>
  </header>
 );
}