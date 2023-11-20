import Link from "next/link";
import Paragraph from "../typography/Paragraph";

interface HeaderProps {
 title: string;
}

export default function Header({ title }: HeaderProps) {
 return (
  <header className="flex flex-col gap-4 justify-between py-8 max-w-7xl mx-auto sm:flex-row sm:items-center">
   <Paragraph><Link href="/">{title}</Link></Paragraph>
  </header>
 )
}