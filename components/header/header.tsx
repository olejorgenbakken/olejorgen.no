import styles from '../../styles/components/header.module.css';

function Header() {
 return (
  <header className={styles.header}>
   <h1>Ole Jørgen</h1>
   <p>Oslo, Norway</p>
  </header>
 );
}

export default Header;