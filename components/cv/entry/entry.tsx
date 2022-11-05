
import Text from '../../Text/Text';
import Stack from '../../Stack/Stack';
import List from '../../List/List';
import Tag from '../../Tag/Tag';

interface WorkProps {
 place: string,
 role: string,
 startDate: string,
 endDate: string,
 url?: string,
 summary?: string,
 highlights?: string[],
}

function Entry({ place, role, startDate, endDate, url, summary, highlights }: WorkProps) {
 return (
  <Stack direction='column'>
   <Stack as='header' distribution="space-between">
    <Text as='h3'>{place}</Text>
    <Text muted uppercase lineHeight='sm'>{startDate} - {endDate}</Text>
   </Stack>
   <Text as='h4'>{role}</Text>
   {summary && <Text>{summary}</Text>}
   {highlights && <Stack as='ol' wrap='wrap'>
    {highlights.slice().sort().map((highlight, index) => <li><Tag key={index}>{highlight}</Tag></li>)}
   </Stack>}
  </Stack >
 );
}

export default Entry;