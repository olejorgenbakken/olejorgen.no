import Head from 'next/head'
import Header from '../components/Header/Header'
import { work, education, volunteering, projects, languages, links } from '../lib/cv';
import Entry from '../components/cv/Entry/Entry';

import styles from '../styles/pages/index.module.css';
import Text from '../components/Text/Text';
import List from '../components/List/List';
import Stack from '../components/Stack/Stack';

export default function Home() {
  return (
    <div>
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
              {work.map((job) => (
                <Entry place={job.company} title={job.position} summary={job.summary} startDate={job.startDate} endDate={job.endDate} url={job.url} highlights={job.highlights} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2'>Volunteering</Text>
            <List>
              {volunteering.map((volunteer) => (
                <Entry place={volunteer.organization} title={volunteer.position} startDate={volunteer.startDate} endDate={volunteer.endDate} summary={volunteer.summary} highlights={volunteer.highlights} />
              ))}
            </List>
          </Stack>
          <Stack direction='column'>
            <Text as='h2'>Education</Text>
            <List>
              {education.map((school) => (
                <Entry place={school.school} title={school.area} startDate={school.startDate} endDate={school.endDate} summary={school.summary} url={school.url} highlights={school.courses} />
              ))}
            </List>
          </Stack>
        </Stack>

        <aside>
          <Stack direction='column' spacing={10}>
            <Stack direction='column'>
              <Text as='h2'>Languages</Text>
              <List>
                {languages.map((language) => (
                  <Text>{language.language} - {language.fluency}</Text>
                ))}
              </List>
            </Stack>
            <Stack direction='column'>
              <Text as='h2'>Links</Text>
              <List>
                {links.map((link) => (
                  <Text><a href={link.url}>{link.name}</a></Text>
                ))}
              </List>
            </Stack>
          </Stack>
        </aside>

      </main>
    </div >
  )
}
