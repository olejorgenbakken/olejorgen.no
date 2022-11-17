import Head from 'next/head'
import { work, education, volunteering, languages } from '../lib/cv';

import Text from '../components/text/Text';
import List from '../components/list/List';
import Stack from '../components/stack/Stack';
import styles from '../styles/pages/cv.module.css';
import Link from '../components/link/Link';
import Inline from '../components/inline/Inline';
import Tag from '../components/tag/Tag';
import { contact } from '../lib/about';

export default function Home() {
 return (
  <>
   <Head>
    <title>CV | {contact.name.first} {contact.name.last}</title>
    <meta name="description" content="My CV on the internet. What a concept." />
   </Head>
   <main className={styles.cv}>
    <Stack direction='vertical' spacing={20} className={styles.entries}>
     <Stack direction='vertical' spacing={12}>
      <Text as='h2' fontSize='h5'>Work</Text>
      <List spacing={16} style="none">
       {work.map((job, index) => (
        <Stack direction='vertical' key={index} className={styles.entry}>
         <Stack as='header' direction='vertical' spacing={2}>
          <Stack justify='between' align='center' spacing={6}>
           <Text muted as='h3' fontSize='h6' className='place'><Link href={job.meta.url} target="_blank">{job.company}</Link></Text>
           <Inline>
            <Text muted uppercase lineHeight='sm' fontSize='pSm'>{job.startDate}</Text>
            {job.endDate != job.startDate && <Text muted uppercase lineHeight='sm' fontSize='pSm'>&nbsp;– {job.endDate}</Text>}
           </Inline>

          </Stack>
          <Text as='h4' fontWeight='medium' fontSize='h5' lineHeight='sm'>{job.role}</Text>
         </Stack>
         {job.summary && <Text>{job.summary}</Text>}
         {job.meta && job.meta.tags && <Stack as='ol' wrap='wrap' spacing={2}>
          {job.meta.tags.slice().sort().map((tag, index) => <li><Tag key={index}>{tag}</Tag></li>)}
         </Stack>}
        </Stack >
       ))}
      </List>
     </Stack>
     <Stack direction='vertical' spacing={12}>
      <Text as='h2' fontSize='h5'>Volunteering</Text>
      <List spacing={16} style="none">
       {volunteering.map((volunteer, index) => (
        <Stack direction='vertical' key={index} className={styles.entry}>
         <Stack as='header' direction='vertical' spacing={2}>
          <Stack justify='between' align='center' spacing={6}>
           <Text muted as='h3' fontSize='h6' className='place'><Link href={volunteer.meta.url} target="_blank">{volunteer.company}</Link></Text>
           <Inline>
            <Text muted uppercase lineHeight='sm' fontSize='pSm'>{volunteer.startDate}</Text>
            {volunteer.endDate != volunteer.startDate && <Text muted uppercase lineHeight='sm' fontSize='pSm'>&nbsp;– {volunteer.endDate}</Text>}
           </Inline>
          </Stack>
          <Text as='h4' fontWeight='medium' fontSize='h5' lineHeight='sm'>{volunteer.role}</Text>
         </Stack>
        </Stack >
       ))}
      </List>
     </Stack>
     <Stack direction='vertical' spacing={12}>
      <Text as='h2' fontSize='h5'>Education</Text>
      <List spacing={16} style="none">
       {education.map((school, index) => (
        <Stack direction='vertical' key={index} className={styles.entry}>
         <Stack as='header' direction='vertical' spacing={2}>
          <Stack justify='between' align='center' spacing={6}>
           <Text muted as='h3' fontSize='h6' className='place'><Link href={school.meta.url} target="_blank">{school.school}</Link></Text>
           <Inline>
            <Text muted uppercase lineHeight='sm' fontSize='pSm'>{school.startDate}</Text>
            {school.endDate != school.startDate && <Text muted uppercase lineHeight='sm' fontSize='pSm'>&nbsp;– {school.endDate}</Text>}
           </Inline>
          </Stack>
          <Text as='h4' fontWeight='medium' fontSize='h5' lineHeight='sm'>{school.degree}</Text>
         </Stack>
        </Stack >
       ))}
      </List>
     </Stack>
    </Stack>

    <Stack as='aside' direction='vertical' className={styles.sidebar} spacing={12}>
     <Stack direction='vertical' spacing={4}>
      <Text as='h2' fontSize='h5'>Languages</Text>
      <List style="none">
       {languages.map((language, index) => (
        <Stack key={index} direction="vertical" spacing={1}>
         <Text lineHeight='md' uppercase>{language.language}</Text>
         <Text lineHeight='sm' marginBottom={4}>{language.fluency}</Text>
        </Stack>
       ))}
      </List>
     </Stack>
    </Stack>
   </main>
  </ >
 )
}
