import styles from "./collections.module.css"
import CTA from "../componentes/Button/Button"
import Card from "../componentes/Card/Card"

export const metadata = {
 title: 'Collections',
 description: 'Apps and websites I use on a daily basis.',
}

export default function Collections() {
 return (
  <>
   <header className={styles.header}>
    <h1 className={styles.title}>{metadata.title}</h1>
    <p className={styles.description}>{metadata.description}</p>
   </header>
   <div className={styles.collectionList}>
    <Card className={styles.collection}>
     <header>
      <h2>App collection</h2>
      <p className={styles.description}>Apps I use on a daily basis.</p>
     </header>
     <CTA href={"/collections/apps"}>See apps</CTA>
    </Card>
    <Card className={styles.collection}>
     <header>
      <h2>Website collection</h2>
      <p className={styles.description}>Websites I use as inspiration for my work.</p>
     </header>
     <CTA href={"/collections/websites"}>See websites</CTA>
    </Card>
   </div>
  </>
 )
}