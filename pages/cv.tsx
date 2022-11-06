import Head from 'next/head'
import { work, education, volunteering, languages, links } from '../lib/cv';

import Text from '../components/text/Text';
import List from '../components/list/List';
import Stack from '../components/stack/Stack';

import Entry from '../components/entry/Entry';

import styles from '../styles/pages/cv.module.css';
import Link from '../components/link/Link';

export default function Home() {
 return (
  <>
   <Head>
    <title>CV | OJ, designer</title>
    <meta name="description" content="My CV on the internet. What a concept." />
   </Head>
   <main className={styles.cv}>
    <Stack direction='vertical' spacing={12}>
     <Stack direction='vertical'>
      <Text as='h2' fontSize='h5' fontWeight='medium'>Work</Text>
      <List spacing={16} style="none">
       {work.map((job, index) => (
        <Entry place={job.company} role={job.role} summary={job.summary} startDate={job.startDate} endDate={job.endDate} url={job.url} highlights={job.highlights} key={index} />
       ))}
      </List>
     </Stack>
     <Stack direction='vertical'>
      <Text as='h2' fontSize='h5' fontWeight='medium'>Volunteering</Text>
      <List spacing={16} style="none">
       {volunteering.map((volunteer, index) => (
        <Entry place={volunteer.company} role={volunteer.role} startDate={volunteer.startDate} endDate={volunteer.endDate} url={volunteer.url} key={index} />
       ))}
      </List>
     </Stack>
     <Stack direction='vertical'>
      <Text as='h2' fontSize='h5' fontWeight='medium'>Education</Text>
      <List spacing={16} style="none">
       {education.map((school, index) => (
        <Entry place={school.school} role={school.degree} startDate={school.startDate} endDate={school.endDate} url={school.url} key={index} />
       ))}
      </List>
     </Stack>
    </Stack>

    <Stack as='aside' className={styles.sidebar}>
     <Stack direction='vertical' spacing={4}>
      <Stack direction='vertical' spacing={2}>
       <Text as='h2' fontSize='h5' fontWeight='medium'>Languages</Text>
       <List style="none">
        {languages.map((language, index) => (
         <Stack key={index} direction="vertical" spacing={1}>
          <Text lineHeight='md' fontWeight='medium' uppercase>{language.language}</Text>
          <Text lineHeight='sm' marginBottom={4}>{language.fluency}</Text>
         </Stack>
        ))}
       </List>
      </Stack>
      <Stack direction='vertical' spacing={0}>
       <Text as='h2' fontSize='h5' fontWeight='medium'>Links</Text>
       <List style="none">
        {links.map((link, index) => (
         <Text key={index}><Link href={link.url} target="_blank">{link.name}</Link></Text>
        ))}
       </List>
      </Stack>
     </Stack>
    </Stack>
   </main>
  </ >
 )
}
