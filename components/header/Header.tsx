import Text from '../text/Text';
import Stack from '../stack/Stack';
import Link from '../link/Link';

import styles from '../../styles/components/header.module.css';

export default function Header() {
 return (
  <Stack justify='between' className={styles.header}>
   <div>
    <Text as='h1' fontWeight='medium' fontSize='pLg'><Link href={"/"} className="name">Ole Jørgen</Link></Text>
    <Text>Oslo, Norway</Text>
   </div>
   <nav>
    <Stack as='ul'>
     <Text><Link href={"/cv"}>CV</Link></Text>
    </Stack>
   </nav>
  </Stack>
 );
}