import Heading from "@/app/components/typography/Heading";
import { School } from "../../api/cv/cv.model";
import Paragraph from "@/app/components/typography/Paragraph";

export default function SchoolCard({ school }: { school: School }) {
 return (
  <li key={school.name} className="w-full flex flex-col">
   <Heading level={3}>{school.name}</Heading>
   <div className="sm:flex sm:flex-row sm:items-center gap-2 justify-between">
    <Paragraph>{school.degree}</Paragraph>
    <Paragraph muted>{school.date_start.toLocaleDateString("nb-NO")} - {school.date_end ? school.date_end.toLocaleDateString("nb-NO") : "nå"}</Paragraph>
   </div>
  </li >
 )
}