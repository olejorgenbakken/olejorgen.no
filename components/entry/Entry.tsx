import Link from '../link/Link';
import Inline from '../inline/Inline';
import Stack from '../stack/Stack';
import Tag from '../tag/Tag';
import Text from '../text/Text';


interface WorkProps {
 place: string,
 role: string,
 startDate: string,
 endDate: string,
 url: string,
 summary?: string,
 highlights?: string[],
}

export default function Entry({ place, role, startDate, endDate, url, summary, highlights }: WorkProps) {
 return (
  <Stack direction='vertical'>
   <Stack as='header' direction='vertical' spacing={2}>
    <Stack justify='between' align='center'>
     <Text muted as='h3' fontWeight='medium' fontSize='h6' className='place'><Link href={url} target="_blank">{place}</Link></Text>
     <Inline>
      <Text muted uppercase lineHeight='sm' fontSize='pSm'>{startDate}</Text>
      {endDate != startDate && <Text muted uppercase lineHeight='sm' fontSize='pSm'>&nbsp;– {endDate}</Text>}
     </Inline>

    </Stack>
    <Text as='h4' fontWeight='medium' fontSize='h5' lineHeight='sm'>{role}</Text>
   </Stack>
   {summary && <Text>{summary}</Text>}
   {highlights && <Stack as='ol' wrap='wrap' spacing={2}>
    {highlights.slice().sort().map((highlight, index) => <li><Tag key={index}>{highlight}</Tag></li>)}
   </Stack>}
  </Stack >
 );
}