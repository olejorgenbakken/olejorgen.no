import Link from "next/link";
import { about } from "../lib/about";

export default function Footer() {
 return (
  <footer className="flex flex-col gap-4 p-8">
   <h2>Links</h2>
   <ul className="flex flex-col gap-4">
    <li><Link href="/cv">CV</Link></li>
    <li><Link href="/projects">Prosjekter</Link></li>
   </ul>
  </footer>
 )
}