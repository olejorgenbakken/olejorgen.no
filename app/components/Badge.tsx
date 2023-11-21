import Link from "next/link";

interface BadgeProps {
 children: React.ReactNode;
 link?: string;
 size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export default function Badge({ children, link, size = "xs" }: BadgeProps) {
 if (link) {
  return (
   <Link href={link} className={`badge inline-block px-2 py-1 text-${size} font-bold rounded-md border bg-amber-200 text-amber-950 border-amber-400 dark:bg-amber-200 dark:text-amber-950 dark:border-orange-600`}>
    {children}
   </Link>
  )
 } else {
  return (
   <span className={`badge inline-block px-2 py-1 text-${size} font-bold rounded-md border bg-amber-200 text-amber-950 border-amber-400 dark:bg-amber-200 dark:text-amber-950 dark:border-orange-600`}>
    {children}
   </span>
  )
 }

}