import { School } from "../cv.model";

export default function SchoolCard({ school }: { school: School }) {
 return (
  <li key={school.name} className="w-full flex flex-col">
   <header className="flex flex-col gap-4 mb-2">
    <h3 className="font-medium text-xl">{school.name}</h3>
   </header>
   <div className="sm:flex sm:flex-row sm:items-center gap-2 justify-between">
    <p className="text-lg font-medium mb-1">{school.degree}</p>
    <p className="text-sm opacity-75">{school.date_start.toLocaleDateString()} - {school.date_end ? school.date_end.toLocaleDateString() : "nå"}</p>
   </div>
  </li >
 )
}