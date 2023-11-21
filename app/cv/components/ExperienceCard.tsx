import Heading from "@/app/components/typography/Heading";
import Link from "next/link";
import Paragraph from "@/app/components/typography/Paragraph";
import Experience, { Company } from "@/app/api/cv/models/experience.model";
import formatDate from "@/app/util/formatDate";

export default function BusinessCard({ experience }: { experience: Experience }) {
 return (
  <li key={experience.company.name} className="w-full flex flex-col">
   <Heading level={3}>{experience.field} hos <Link href={experience.company.homepage_url}>{experience.company.name}</Link></Heading>
   <Paragraph muted>{formatDate(experience.date_start)} - {experience.date_end ? formatDate(experience.date_end) : "nå"}</Paragraph>
   <Paragraph className="my-2">{experience.description}</Paragraph>
  </li>
 )
}