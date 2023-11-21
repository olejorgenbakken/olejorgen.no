import Education from "@/app/api/cv/models/education.model";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import formatDate from "@/app/util/formatDate";
import Link from "next/link";

export default function SchoolCard({ education }: { education: Education }) {
 return (
  <li key={education.field} className="w-full flex flex-col">
   <Heading level={3}>{education.degree} i {education.field} på <Link href={education.school.homepage_url}>{education.school.name}</Link></Heading>
   <Paragraph muted>{formatDate(education.date_start)} - {education.date_end ? formatDate(education.date_end) : "nå"}</Paragraph>
  </li >
 )
}