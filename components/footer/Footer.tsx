import Stack from "../stack/Stack";
import Text from "../text/Text";

import styles from "../../styles/components/footer.module.css";
import Link from "../link/Link";
import { contact, socials } from "../../lib/about";

export default function Footer() {
 return (
  <footer className={styles.footer}>
   <Stack className={styles.content} direction="vertical">
    <Stack as='ul' className={styles.socials}>
     {socials.map((social, index) => (
      <li key={index} id={social.name.toLowerCase()} ><Text fontWeight='medium'><Link href={social.url} target="_blank">{social.name}</Link></Text></li>
     ))}
    </Stack>

    <Text muted fontSize='pSm' className={styles.copy}>&copy; {new Date().getFullYear()} {contact.name.first} {contact.name.last}, {contact.title}</Text>
   </Stack>
  </footer>
 );
}