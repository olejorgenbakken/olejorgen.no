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
    <Card
     title="App collection"
     description="Apps I use on a daily basis"
     url={{ href: "/collections/apps", text: "See apps" }}
     image={{ src: "/images/apps.jpg", alt: "", width: 800, height: 600, position: "center" }}
    />
    <Card
     title="Website collection"
     description="Websites I use as inspiration for my work"
     url={{ href: "/collections/websites", text: "See websites" }}
     image={{ src: "/images/websites.jpg", alt: "", width: 800, height: 600, position: "bottom" }}
    />
   </div >
  </>
 )
}