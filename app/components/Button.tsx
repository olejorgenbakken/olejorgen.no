import Link from "next/link";

interface ButtonProps {
 children: React.ReactNode;
 href: string;
 type?: 'filled' | 'outlined' | 'ghost';
 className?: string;
 icon?: React.ReactNode;
}

export default function Button({ children, href, type = "outlined", className, icon }: ButtonProps) {

 const types = {
  filled: "bg-blue-800 hover:bg-blue-600",
  outlined: "border border-blue-800 hover:bg-blue-800",
  ghost: "bg-transparent hover:text-white hover:bg-blue-800",
 }

 return (
  <Link
   href={href}
   className={`${className} inline-flex items-center text-center gap-2 px-4 py-2 rounded-full text-md font-medium transition-all ${types[type]}`}
  >
   {icon && <span aria-hidden className=" text-xl">{icon}</span>}
   {children}
  </Link >
 )
}