import BusinessCard from "@/app/cv/components/BusinessCard";
import { experience, education } from "@/app/api/cv/cv";
import SchoolCard from "./components/SchoolCard";
import Heading from "../components/typography/Heading";
import Main from "../components/layout/Main";

export default function CV() {
 return (
  <Main>
   <Heading level={1}>CV</Heading>
   <Heading level={2}>Erfaring</Heading>
   <ul className="grid grid-cols-1 items-center gap-16">
    {experience.map((business) => (
     <BusinessCard business={business} key={business.name} />
    ))}
   </ul>
   <Heading level={2}>Utdanning</Heading>
   <ul className="flex flex-col items-center gap-16">
    {education.map((school) => (
     <SchoolCard school={school} key={school.name} />
    ))}
   </ul>
  </Main>
 )
}