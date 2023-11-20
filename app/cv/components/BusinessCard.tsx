import Heading from "@/app/components/typography/Heading";
import { Business } from "../../api/cv/cv.model";
import Link from "next/link";
import Paragraph from "@/app/components/typography/Paragraph";

export default function BusinessCard({ business }: { business: Business }) {
 return (
  <li key={business.name} className="w-full flex flex-col">
   <Heading level={3}>{business.name}</Heading>
   <div className="sm:flex sm:flex-row sm:items-center gap-2 justify-between">
    <Paragraph>{business.job_title}</Paragraph>
    <Paragraph muted>{business.date_start.toLocaleDateString("nb-NO")} - {business.date_end ? business.date_end.toLocaleDateString("nb-NO") : "nå"}</Paragraph>
   </div>
   <Paragraph>{business.job_description}</Paragraph>
   <Paragraph><Link href={business.url}>{business.url}</Link></Paragraph>
  </li>
 )
}