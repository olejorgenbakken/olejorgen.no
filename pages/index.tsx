import Head from 'next/head'
import Inline from '../components/inline/Inline'
import Link from '../components/link/Link'
import List from '../components/list/List'
import Stack from '../components/stack/Stack'
import Tag from '../components/tag/Tag'
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
                <Stack direction='vertical' key={index}>
                  <Stack as='header' direction='vertical' spacing={2}>
                    <Stack direction='vertical' align='start' spacing={1}>
                      <Text muted uppercase fontSize='pSm'>{project.endDate}</Text>
                      <Text as='h3' fontWeight='medium' fontSize='h4' className='place'><Link href={project.url} target="_blank">{project.title}</Link></Text>
                    </Stack>
                  </Stack>
                  {project.summary && <Text>{project.summary}</Text>}
                  {project.highlights && <Stack as='ol' wrap='wrap' spacing={2}>
                    {project.highlights.slice().sort().map((highlight, index) => <li><Tag key={index}>{highlight}</Tag></li>)}
                  </Stack>}
                </Stack >))}
            </List>
          </Stack>
        </Stack>
      </main>
    </ >
  )
}
