import { education } from "@/app/api/cv/cv";

import Heading from "@/app/components/typography/Heading";
import SchoolCard from "../components/EducationCard";

export default function EducationPage() {
 return (
  <>
   <Heading level={2} className=" sr-only">Erfaring</Heading>
   <ul className="flex flex-col gap-16 mt-8">
    {education.map((entry) => (
     <SchoolCard education={entry} key={entry.school.name} />
    ))}
   </ul>
  </>
 )
}