import Main from "./components/Layout/Main/Main";
import Heading from "./components/Text/Heading/Heading";
import Paragraph from "./components/Text/Paragraph/Paragraph";
import { experience, projects } from "./data/cv";
import { checkURl } from "./utils/checkURL";
import { formatYear } from "./utils/formatters/formatDate";

import type { Experience, Project } from './models/cv.model'

export default function Home() {
  return (
    <Main maxWidth="md">
      <section>
        <Heading level="h2">Prosjekter</Heading>
        <ul>
          {projects.map((item) => (
            renderProject(item)
          ))}
        </ul>
      </section>
      <section>
        <Heading level="h2">Jobb</Heading>
        <ul>
          {experience.sort((a, b) => b.startDate.getDate() - a.startDate.getDate()).map((item) => (
            renderJob(item)
          ))}
        </ul>
      </section>
    </Main >
  )
}

function renderProject({ title, company, endDate, url, companyURL }: Project) {
  return (
    <li key={title}>
      <Paragraph>
        {endDate && formatYear(endDate) || 'Nå'}: {checkURl(title, url)} for {checkURl(company, companyURL)}
      </Paragraph>
    </li>)
}

function renderJob({ company, position, endDate, url }: Experience) {
  return (
    <li key={company}>
      <Paragraph>
        {endDate && formatYear(endDate) || 'Nå'}: {position} hos {checkURl(company, url)}
      </Paragraph>
    </li>
  )
}