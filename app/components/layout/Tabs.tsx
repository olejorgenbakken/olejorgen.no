'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

interface TabsProps {
 linkList: {
  name: string;
  href: string;
 }[]
}

export default function Tabs({ linkList }: TabsProps) {
 const pathname = usePathname()

 return (
  <nav>
   <ul className="flex flex-row gap-4">
    {linkList.map((link, index) => (
     <li key={index}>
      <Link href={link.href} className={`tab rounded-full px-4 py-2 border border-zinc-300 ${pathname === link.href ? " bg-slate-200" : ""}`}>{link.name}</Link>
     </li>
    ))}
   </ul>
  </nav>
 )
}