import Head from 'next/head'
import Card from '../components/card/Card'
import Link from '../components/link/Link'
import List from '../components/list/List'
import Stack from '../components/stack/Stack'
import Tag from '../components/tag/Tag'
import Text from '../components/text/Text'
import { contact } from '../lib/about'
import { projects } from '../lib/cv'

import styles from '../styles/pages/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>{contact.name.first} {contact.name.last}</title>
        <meta name="description" content={`${contact.name.first} ${contact.name.last} is a ${contact.title}, mostly.`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as='main'>
        <List spacing={20} style="none" className={styles.projects}>
          {projects.map((project, index) => (
            <Card key={index} imageSrc={project.meta.image} imageAlt={`${project.company} logo`} className={styles.project}>
              <Stack direction='vertical' align='start' spacing={1}>
                <Text muted uppercase fontSize='pSm'>{project.endDate}</Text>
                <Text as='h2' fontWeight='medium' fontSize='h4' className='place'><Link href={project.url} target="_blank">{project.title}</Link></Text>
              </Stack>
              {project.summary && <Text>{project.summary}</Text>}
              {project.meta.tags && <Stack as='ol' wrap='wrap' spacing={2}>
                {project.meta.tags.slice().sort().map((tag, index) => <li><Tag key={index}>{tag}</Tag></li>)}
              </Stack>}
            </Card>
          ))}
        </List>
      </Stack>
    </ >
  )
}
