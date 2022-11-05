import Tag from '../../Tag/Tag';

import styles from '../../../styles/components/cv/entry.module.css';
import Text from '../../Text/Text';
import Stack from '../../Stack/Stack';

interface WorkProps {
 place: string,
 title: string,
 startDate: string,
 endDate: string,
 url?: string,
 summary?: string,
 highlights?: string[],
}

function Entry({ place, title, startDate, endDate, url, summary, highlights }: WorkProps) {
 return (
  <Stack direction='column'>
   <Stack as='header' distribution="space-between">
    <Text as='h3'>{place}</Text>
    <Text muted uppercase lineHeight='sm'>{startDate} - {endDate}</Text>
   </Stack>
   {summary && <Text>{summary}</Text>}
   {highlights && <Stack wrap='wrap'>
    {highlights.map((highlight) => <Tag>{highlight}</Tag>)}
   </Stack>}
  </Stack >
 );
}

export default Entry;