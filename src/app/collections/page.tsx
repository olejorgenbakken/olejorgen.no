import cl from "clsx"
import styles from "./page.module.css"
import Link from "next/link"

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
   <ul>
    <li>
     <Link href={"/collections/apps"}>Apps</Link>
    </li>
    <li>
     <Link href={"/collections/websites"}>Websites</Link>
    </li>
   </ul>
  </main>
 )
}