import Link from "next/link";

interface BadgeProps {
 children: React.ReactNode;
 link?: string;
}

export default function Badge({ children, link }: BadgeProps) {
 if (link) {
  return (
   <Link href={link} className={`badge inline-block px-3 py-1 text-sm font-bold rounded-full border bg-amber-200 text-amber-950 border-amber-400 dark:bg-amber-200 dark:text-amber-950 dark:border-orange-600`}>
    {children}
   </Link>
  )
 } else {
  return (
   <span className={`badge inline-block px-3 py-1 text-sm font-bold rounded-full border bg-amber-200 text-amber-950 border-amber-400 dark:bg-amber-200 dark:text-amber-950 dark:border-orange-600`}>
    {children}
   </span>
  )
 }

}