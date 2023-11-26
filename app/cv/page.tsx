import BusinessCard from "@/app/cv/components/ExperienceCard";
import { experience, education } from "@/app/api/cv/cv";
import SchoolCard from "./components/EducationCard";
import Heading from "../components/typography/Heading";
import Main from "../components/layout/Main";

export default function CV() {
 return (
  <>
   <div>
    <Heading level={2}>Erfaring</Heading>
    <ul className="flex flex-col gap-16 mt-8">
     {experience.map((entry) => (
      <BusinessCard experience={entry} key={entry.company.name} />
     ))}
    </ul>
   </div>
   <div>
    <Heading level={2}>Utdanning</Heading>
    <ul className="flex flex-col gap-16 mt-8">
     {education.map((entry) => (
      <SchoolCard education={entry} key={entry.school.name} />
     ))}
    </ul>
   </div>
  </>
 )
}