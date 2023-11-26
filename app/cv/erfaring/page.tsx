import { experience } from "@/app/api/cv/cv";

import BusinessCard from "@/app/cv/components/ExperienceCard";
import Heading from "@/app/components/typography/Heading";
import Main from "@/app/components/layout/Main";

export default function ExperiencePage() {
 return (
  <>
   <Heading level={2} className=" sr-only">Erfaring</Heading>
   <ul className="flex flex-col gap-16 mt-8">
    {experience.map((entry) => (
     <BusinessCard experience={entry} key={entry.company.name} />
    ))}
   </ul>
  </>
 )
}