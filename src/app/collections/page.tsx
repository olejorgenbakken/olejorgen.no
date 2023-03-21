import cl from "clsx"
import styles from "./page.module.css"
import CTA from "../componentes/Buttons/CTA/CTA"

export const metadata = {
 title: "Collections",
 description: "A collection of apps and websites I frequent.",
}

export default function Collections() {
 return (
  <main className={cl(styles.collectionPage)}>
   <header>
    <h1>{metadata.title}</h1>
    <p>{metadata.description}</p>
   </header>
   <div className={cl(styles.collections)}>
    <div className={cl(styles.collection)}>
     <h2>App collection</h2>
     <CTA href={"/collections/apps"}>See apps</CTA>
    </div>
    <div className={cl(styles.collection)}>
     <h2>Website collection</h2>
     <CTA href={"/collections/websites"}>See websites</CTA>
    </div>

   </div>

  </main>
 )
}