import styles from "./page.module.css"
import Link from "next/link"

export const metadata = {
 title: "Collections",
}

export default function Collections() {
 return (
  <main className={styles.collections}>
   <h1>Collections</h1>
   <ul>
    <li>
     <Link href={"/collections/apps"}>Apps</Link>
    </li>
   </ul>
  </main>
 )
}