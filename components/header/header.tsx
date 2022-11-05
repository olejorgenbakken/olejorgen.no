import Text from '../text/Text';
import Stack from '../stack/Stack';

export default function Header() {
 return (
  <Stack as='header' distribution='space-between' alignment='center' spacing={8}>
   <Text as="h1">Ole Jørgen</Text>
   <Text>Oslo, Norway</Text>
  </Stack>
 );
}