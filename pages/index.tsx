import Head from 'next/head'
import Card from '../components/card/Card'
import Link from '../components/link/Link'
import List from '../components/list/List'
import Stack from '../components/stack/Stack'
import Tag from '../components/tag/Tag'
import Text from '../components/text/Text'
import { projects } from '../lib/cv'

import styles from '../styles/pages/index.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>OJ, designer</title>
        <meta name="description" content="Ole Jørgen, or OJ, or whatever else you feel like. Designer, mostly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Stack direction='vertical' spacing={12}>
          <Stack direction='vertical' spacing={2}>
            <Text as='h2' fontSize='h5' fontWeight='medium'>Projects</Text>
            <List spacing={20} style="none" className={styles.projects}>
              {projects.map((project, index) => (
                <Card key={index} imageSrc={project.meta.image} imageAlt={`${project.company} logo`} className={styles.project}>
                  <Stack direction='vertical' align='start' spacing={1}>
                    <Text muted uppercase fontSize='pSm'>{project.endDate}</Text>
                    <Text as='h3' fontWeight='medium' fontSize='h4' className='place'><Link href={project.url} target="_blank">{project.title}</Link></Text>
                  </Stack>
                  {project.summary && <Text>{project.summary}</Text>}
                  {project.meta.tags && <Stack as='ol' wrap='wrap' spacing={2}>
                    {project.meta.tags.slice().sort().map((tag, index) => <li><Tag key={index}>{tag}</Tag></li>)}
                  </Stack>}
                </Card>
              ))}
            </List>
          </Stack>
        </Stack>
      </main>
    </ >
  )
}
