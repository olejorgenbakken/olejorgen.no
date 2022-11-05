import Text from '../text/Text';
import Stack from '../stack/Stack';

import styles from '../../styles/components/header.module.css';

export default function Header() {
 return (
  <header className={styles.header}>
   <Stack direction='column' spacing={0} padding={4} maxWidth="max-width">
    <Text as='h1' fontWeight='medium' fontSize='pLg'>Ole Jørgen</Text>
    <Text>Oslo, Norway</Text>
   </Stack>
  </header>
 );
}