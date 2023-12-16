interface TagProps {
 children: React.ReactNode;
 className?: string;
}

export default function Tag({ children, className }: TagProps) {
 return (
  <span className={`${className} inline-flex items-center gap-2 px-2 py-1 rounded-md text-sm tracking-wide border border-blue-900 `}>
   {children}
  </span>
 )
}