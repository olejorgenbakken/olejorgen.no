import BusinessCard from "@/app/cv/components/ExperienceCard";
import { experience, education } from "@/app/api/cv/cv";
import SchoolCard from "./components/EducationCard";
import Heading from "../components/typography/Heading";
import Main from "../components/layout/Main";

export default function CV() {
 return (
  <Main>
   <Heading level={1}>CV</Heading>
   <Heading level={2}>Erfaring</Heading>
   <ul className="flex flex-col gap-16">
    {experience.map((entry) => (
     <BusinessCard experience={entry} key={entry.company.name} />
    ))}
   </ul>
   <Heading level={2}>Utdanning</Heading>
   <ul className="flex flex-col gap-16">
    {education.map((entry) => (
     <SchoolCard education={entry} key={entry.school.name} />
    ))}
   </ul>
  </Main>
 )
}