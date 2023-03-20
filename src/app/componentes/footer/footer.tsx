import cl from 'clsx';
import styles from "./footer.module.css";
import { about } from '../../../../data/about';
import Social from '../social/social';

function Footer() {
 return (
  <footer className={cl(styles.footer)}>
   <div className={cl(styles.footerContent)}>
    <div className={cl(styles.category, styles.socialMedia)}>
     <h2 className={styles.categoryTitle}>Social media</h2>
     <ul>
      {about.social.map((social) => (
       <Social key={social.name} {...social} />
      ))}
     </ul>
    </div>
   </div>
  </footer>
 );
}

export default Footer;