import BusinessCard from "@/app/cv/components/BusinessCard";
import { experience, education } from "@/app/cv/cv";
import SchoolCard from "./components/SchoolCard";

export default function CV() {
 return (
  <main className="flex flex-col max-w-7xl py-12 m-auto px-8 gap-20">
   <h1 className="sr-only">CV</h1>
   <div>
    <h2 className="mb-4 text-lg font-medium">Erfaring</h2>
    <ul className="grid grid-cols-1 flex-wrap items-center gap-16 md:grid-cols-2 md:gap-x-20">
     {experience.map((business) => (
      <BusinessCard business={business} key={business.name} />
     ))}
    </ul>
   </div>
   <div>
    <h2 className="mb-4 text-lg font-medium">Utdanning</h2>
    <ul className="flex flex-col flex-wrap items-center gap-16 sm:flex-row">
     {education.map((school) => (
      <SchoolCard school={school} key={school.name} />
     ))}
    </ul>
   </div>
  </main>
 )
}