import styles from "./collections.module.css"

export const metadata = {
 title: {
  default: "Collections",
  template: "%s | Ole Jørgen Bakken",
 },
 description: 'Apps and websites I use on a daily basis.',
}

export default function CollectionLayout({ children }: {
 children: React.ReactNode,
}) {
 return (
  <main className={styles.CollectionLayout}>
   {children}
  </main>
 )
}
