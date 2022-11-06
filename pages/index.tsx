import Head from 'next/head'
import Entry from '../components/entry/Entry'
import List from '../components/list/List'
import Stack from '../components/stack/Stack'
import Text from '../components/text/Text'
import { projects } from '../lib/cv'

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
          <Stack direction='vertical'>
            <Text as='h2' fontSize='h5' fontWeight='medium'>Projects</Text>
            <List spacing={16} style="none">
              {projects.map((project, index) => (
                <Entry place={project.title} role={project.role} summary={project.summary} startDate={project.startDate} endDate={project.endDate} url={project.url} highlights={project.highlights} key={index} />
              ))}
            </List>
          </Stack>
        </Stack>
      </main>
    </ >
  )
}
