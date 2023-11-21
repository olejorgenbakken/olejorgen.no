import Link from "next/link";

export interface TabItemProps {
 href: string;
 children: React.ReactNode;
}

export default function TabItem({ children, href }: TabItemProps) {
 return (
  <Link href={href} className="text-base max-w-max py-1 px-4 rounded-full transition-colors border-2 border-blue-300 bg-transparent hover:bg-blue-50 dark:border-slate-600 dark:hover:bg-slate-800">{children}</Link>
 )
}