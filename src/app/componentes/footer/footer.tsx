import styles from "./footer.module.css";
import about from '../../data/about.json';
import Link from "next/link";

export default function Footer() {
 return (
  <footer className={styles.footer}>
   <div className={styles.content}>
    <p className={styles.tagline}>{about.name}. {about.title} in {about.location}. <Link href="/cv" title="Go to my CV">Work and education</Link></p>
   </div>
  </footer>
 );
}