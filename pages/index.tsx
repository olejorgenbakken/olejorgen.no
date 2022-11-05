import Head from 'next/head'
import { work, education, volunteering, projects, languages, links } from '../lib/cv';

import Text from '../components/text/Text';
import List from '../components/list/List';
import Stack from '../components/stack/Stack';

import Entry from '../components/entry/Entry';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>OJ, designer</title>
        <meta name="description" content="Ole Jørgen, or OJ, or whatever else you feel like. Designer, mostly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Stack as='main' spacing={16} padding={4} maxWidth="max-width" distribution="space-between">
        <Stack direction='column' spacing={12} maxWidth="mobile">
          <Stack direction='column'>
            <Text as='h2' fontSize='h5' fontWeight='medium'>Work</Text>
            <List spacing={16}>
              {work.map((job, index) => (
                <Entry place={job.company} role={job.role} summary={job.summary} startDate={job.startDate} endDate={job.endDate} url={job.url} highlights={job.highlights} key={index} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2' fontSize='h5' fontWeight='medium'>Volunteering</Text>
            <List spacing={16}>
              {volunteering.map((volunteer, index) => (
                <Entry place={volunteer.company} role={volunteer.role} startDate={volunteer.startDate} endDate={volunteer.endDate} key={index} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2' fontSize='h5' fontWeight='medium'>Education</Text>
            <List spacing={16}>
              {education.map((school, index) => (
                <Entry place={school.school} role={school.degree} startDate={school.startDate} endDate={school.endDate} url={school.url} key={index} />
              ))}
            </List>
          </Stack>
        </Stack>

        <aside>
          <Stack direction='column' spacing={4}>
            <Stack direction='column' spacing={2}>
              <Text as='h2' fontSize='h5' fontWeight='medium'>Languages</Text>
              <List>
                {languages.map((language, index) => (
                  <Stack as='ul' key={index} direction="column" spacing={2}>
                    <Text lineHeight='md' uppercase>{language.language}</Text>
                    <Text lineHeight='sm' marginBottom={4}>{language.fluency}</Text>
                  </Stack>
                ))}
              </List>
            </Stack>
            <Stack direction='column' spacing={0}>
              <Text as='h2' fontSize='h5' fontWeight='medium'>Links</Text>
              <List>
                {links.map((link, index) => (
                  <Text key={index}><a href={link.url}>{link.name}</a></Text>
                ))}
              </List>
            </Stack>
          </Stack>
        </aside>
      </Stack>
    </ >
  )
}
