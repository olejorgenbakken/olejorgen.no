import Text from '../text/Text';
import Stack from '../stack/Stack';
import Link from '../link/Link';

import styles from '../../styles/components/header.module.css';
import { contact } from '../../lib/about';

export default function Header() {
 return (
  <Stack as='header' justify='between' align='start' className={styles.header}>
   <div>
    <Text fontWeight='bold' fontSize='pMd' uppercase><Link href={"/"} className="name">{contact.name.first}</Link></Text>
   </div>
   <nav>
    <Stack as='ul'>
     <li><Text fontWeight='medium'><Link href={"/cv"}>CV</Link></Text></li>
    </Stack>
   </nav>
  </Stack>
 );
}