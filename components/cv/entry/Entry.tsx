

import Stack from '../../stack/Stack';
import Tag from '../../tag/Tag';
import Text from '../../text/Text';

interface WorkProps {
 place: string,
 role: string,
 startDate: string,
 endDate: string,
 url?: string,
 summary?: string,
 highlights?: string[],
}

export default function Entry({ place, role, startDate, endDate, url, summary, highlights }: WorkProps) {
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