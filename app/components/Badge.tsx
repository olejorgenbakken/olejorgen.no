import Link from "next/link";

interface BadgeProps {
 children: React.ReactNode;
 link?: string;
 size: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export default function Badge({ children, link, size = "xs" }: BadgeProps) {
 if (link) {
  return (
   <Link href={link} className={`badge inline-block px-2 py-0.5 text-${size} rounded-lg border border-zinc-300 dark:border-zinc-900`}>
    {children}
   </Link>
  )
 } else {
  return (
   <span className={`badge inline-block px-2 py-0.5 text-${size} rounded-lg border border-zinc-300 dark:border-zinc-700`}>
    {children}
   </span>
  )
 }

}