import Stack from '../stack/Stack';
import Tag from '../tag/Tag';
import Text from '../text/Text';


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
   <Stack as='header' direction='column' spacing={2}>
    <Stack distribution='space-between'>
     <Text muted as='h3' fontWeight='medium' fontSize='h6'>{place}</Text>
     <Text muted uppercase lineHeight='sm' fontSize='pSm'>{startDate} - {endDate}</Text>
    </Stack>
    <Text as='h4' fontWeight='medium' fontSize='h5' lineHeight='sm'>{role}</Text>
   </Stack>
   {summary && <Text>{summary}</Text>}
   {highlights && <Stack as='ol' wrap='wrap'>
    {highlights.slice().sort().map((highlight, index) => <li><Tag key={index}>{highlight}</Tag></li>)}
   </Stack>}
  </Stack >
 );
}