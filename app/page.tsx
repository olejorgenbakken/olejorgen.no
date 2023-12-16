import Heading from './components/Text/Heading'
import Main from './components/Layout/Main'
import Paragraph from './components/Text/Paragraph'

import { experience, projects } from './data/cv'
import { formatYear } from './utils/formatDate'
import Button from './components/Button'

import { Buldings3Icon, PackageIcon, ClockIcon } from "@navikt/aksel-icons";

export default function Home() {
  return (
    <Main>
      <div>
        <header className='flex items-center gap-2 mb-4'>
          <PackageIcon fontSize="1.5rem" />
          <Heading level={2}>Prosjekter</Heading>
        </header>
        <div className='grid gap-4 md:grid-cols-2 md:gap-12'>
          {projects.map((item) => (
            <div key={item.title} className='border border-zinc-800 bg-zinc-950 rounded-xl p-6'>
              <Heading level={3} className='text-xl'>{item.title}</Heading>
              <div className='flex items-center gap-2 my-4 opacity-80'>
                <ClockIcon fontSize="1.5rem" aria-label='År' />
                <Paragraph>{item.endDate && formatYear(item.endDate) || 'Nå'}</Paragraph>
              </div>
              <div className='flex items-center gap-2 my-4 opacity-80'>
                <Buldings3Icon fontSize="1.5rem" aria-label='Selskap' />
                <Paragraph>{item.company}</Paragraph>
              </div>

              <footer className='flex flex-wrap gap-4 mt-8'>
                {item.url && <Button href={item.url} type='filled'>Se prosjektet</Button>}
                <Button href={item.companyURL} type='outlined'>Gå til {item.company}</Button>
              </footer>
            </div>
          ))}
        </div>
      </div>
      <div>
        <header className='flex items-center gap-2 mb-4'>
          <Buldings3Icon fontSize="1.5rem" />
          <Heading level={2}>Jobb</Heading>
        </header>
        {experience.sort((a, b) => b.startDate.getDate() - a.startDate.getDate()).map((item) => (
          <div key={item.company} className='mb-16'>
            <Heading level={3}>{item.position} hos {item.company}</Heading>
            <Paragraph className='opacity-75 my-4'>
              {formatYear(item.startDate)} - {item.endDate ? formatYear(item.endDate) : 'Nå'}
            </Paragraph>
            {item.url && <Button href={item.url}>Gå til {item.company}</Button>}
          </div>
        ))}
      </div>
    </Main >
  )
}
