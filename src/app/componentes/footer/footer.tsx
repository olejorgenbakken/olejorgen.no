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
      {about.social.map((medium) => (
       <Social key={medium.name} {...medium} />
      ))}
     </ul>
    </div>

    <div className={cl(styles.category, styles.socialMedia)}>
     <h2 className={styles.categoryTitle}>Portfolio</h2>
     <ul>
      {about.portfolio.map((entry) => (
       <Social key={entry.name} {...entry} />
      ))}
     </ul>
    </div>
   </div>
  </footer>
 );
}

export default Footer;