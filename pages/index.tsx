import Head from 'next/head'
import { work, education, volunteering, projects, languages, links } from '../lib/cv';

import Text from '../components/text/Text';
import List from '../components/list/List';
import Stack from '../components/stack/Stack';

import Entry from '../components/cv/entry/Entry';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>OJ, designer</title>
        <meta name="description" content="Ole Jørgen, or OJ, or whatever else you feel like. Designer, mostly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <Stack direction='column' spacing={10}>
          <Stack direction='column'>
            <Text as='h2'>Work</Text>
            <List>
              {work.map((job, index) => (
                <Entry place={job.company} role={job.role} summary={job.summary} startDate={job.startDate} endDate={job.endDate} url={job.url} highlights={job.highlights} key={index} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2'>Volunteering</Text>
            <List>
              {volunteering.map((volunteer, index) => (
                <Entry place={volunteer.organization} role={volunteer.role} startDate={volunteer.startDate} endDate={volunteer.endDate} summary={volunteer.summary} highlights={volunteer.highlights} key={index} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2'>Education</Text>
            <List>
              {education.map((school, index) => (
                <Entry place={school.school} role={school.area} startDate={school.startDate} endDate={school.endDate} summary={school.summary} url={school.url} highlights={school.courses} key={index} />
              ))}
            </List>
          </Stack>
        </Stack>

        <aside>
          <Stack direction='column' spacing={10}>
            <Stack direction='column'>
              <Text as='h2'>Languages</Text>
              <List>
                {languages.map((language, index) => (
                  <Text key={index}>{language.language} - {language.fluency}</Text>
                ))}
              </List>
            </Stack>
            <Stack direction='column'>
              <Text as='h2'>Links</Text>
              <List>
                {links.map((link, index) => (
                  <Text key={index}><a href={link.url}>{link.name}</a></Text>
                ))}
              </List>
            </Stack>
          </Stack>
        </aside>

      </main>
    </ >
  )
}
