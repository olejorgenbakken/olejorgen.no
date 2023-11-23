import Link from "next/link";

interface BadgeProps {
 children: React.ReactNode;
 link?: string;
 size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
 color?: "zinc" | "red" | "orange" | "amber" | "emerald" | "teal" | "cyan" | "sky" | "indigo" | "violet" | "fuchsia" | "rose";
}

export default function Badge({ children, link, size = "xs", color = "zinc" }: BadgeProps) {
 if (link) {
  return (
   <Link href={link} className={`badge inline-flex max-h-min min-w-max max-w-min px-2 py-0.5 text-${size} rounded-md border border-${color}-300 dark:border-${color}-900`}>
    {children}
   </Link>
  )
 } else {
  return (
   <span className={`badge inline-flex h-max min-w-max w-max px-2 py-0.5 text-${size} rounded-md border border-${color}-300 dark:border-${color}-700`}>
    {children}
   </span>
  )
 }

}