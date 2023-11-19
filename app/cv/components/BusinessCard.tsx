import { Business } from "../cv.model";
import Link from "next/link";

export default function BusinessCard({ business }: { business: Business }) {
 return (
  <li key={business.name} className="w-full flex flex-col">
   <header className="flex flex-col gap-4 mb-5">
    <h3 className="font-medium text-xl">{business.name}</h3>
   </header>
   <div className="sm:flex sm:flex-row sm:items-center gap-2 justify-between">
    <p className="text-lg font-medium mb-1">{business.job_title}</p>
    <p className="text-sm opacity-75">{business.date_start.toLocaleDateString()} - {business.date_end ? business.date_end.toLocaleDateString() : "nå"}</p>
   </div>
   <p className="text-lg mt-2">{business.job_description}</p>
   <p className="text-md mt-4"><Link href={business.url}>{business.url}</Link></p>
  </li>
 )
}