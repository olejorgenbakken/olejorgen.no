import Head from 'next/head'
import { work, education, volunteering } from '../lib/cv';

import Text from '../components/text/Text';
import List from '../components/list/List';
import Stack from '../components/stack/Stack';
import styles from '../styles/pages/cv.module.css';
import Link from '../components/link/Link';
import Tag from '../components/tag/Tag';
import { contact } from '../lib/about';

export default function Home() {
 return (
  <>
   <Head>
    <title>CV | {contact.name.first} {contact.name.last}</title>
    <meta name="description" content="My CV on the internet. What a concept." />
   </Head>
   <Stack as="main" direction='vertical' spacing={20} className={styles.cv}>
    <Stack direction='vertical' spacing={8}>
     <Text as='h2' fontSize='h5' fontWeight='medium'>Work</Text>
     <List spacing={16} style="none">
      {work.map((job, index) => (
       <Stack direction='vertical' key={index} className={styles.entry}>
        <Text muted uppercase lineHeight='sm' fontSize='pSm'>{job.start.getMonth()}.{job.start.getFullYear()} {job.end && `- ${job.end.getMonth()}.${job.end.getFullYear()}`}</Text>
        <Text fontSize='pLg'>{job.role} at <Link href={job.meta.url} target="_blank">{job.company}</Link></Text>
        {job.summary && <Text>{job.summary}</Text>}
        {job.meta && job.meta.tags && <Stack as='ol' wrap='wrap' spacing={2}>
         {job.meta.tags.slice().sort().map((tag, index) => <li><Tag key={index}>{tag}</Tag></li>)}
        </Stack>}
       </Stack >
      ))}
     </List>
    </Stack>
    <Stack direction='vertical' spacing={8}>
     <Text as='h2' fontSize='h5' fontWeight='medium'>Education</Text>
     <List spacing={12} style="none">
      {education.map((school, index) => (
       <Stack direction='vertical' spacing={2} key={index} className={styles.entry}>
        <Text muted uppercase lineHeight='sm' fontSize='pSm'>{school.start} {school.end && `- ${school.end}`}</Text>
        <Text>{school.degree} at <Link href={school.url} target="_blank">{school.school}</Link></Text>
       </Stack >
      ))}
     </List>
    </Stack>
    <Stack direction='vertical' spacing={8}>
     <Text as='h2' fontSize='h5' fontWeight='medium'>Volunteering</Text>
     <List spacing={8} style="none">
      {volunteering.map((volunteer, index) => (
       <Stack direction='vertical' spacing={2} key={index} className={styles.entry}>
        <Text muted uppercase lineHeight='sm' fontSize='pSm'>{volunteer.year}</Text>
        <Text>{volunteer.role} at <Link href={volunteer.url} target="_blank">{volunteer.company}</Link></Text>
       </Stack >
      ))}
     </List>
    </Stack>

   </Stack>
  </ >
 )
}
