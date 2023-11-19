import Link from "next/link";
import { about } from "../lib/about";

export default function Header() {
 return (
  <header className="flex flex-col gap-4 justify-between p-8 max-w-7xl mx-auto sm:flex-row sm:items-center">
   <p className="text-2xl font-semibold"><Link href="/" className=" border-none p-0">Ole Jørgen</Link></p>
   <p className="text-lg">{about.title}</p>
  </header>
 )
}