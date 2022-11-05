import Text from '../Text/Text';
import styles from '../../styles/components/header.module.css';
import Stack from '../Stack/Stack';

export const Header = () => {
 return (
  <Stack as='header' distribution='space-between' alignment='center' spacing={8}>
   <Text as="h1">Ole Jørgen</Text>
   <Text>Oslo, Norway</Text>
  </Stack>
 );
}

export default Header;