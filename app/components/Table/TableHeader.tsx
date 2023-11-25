interface TableHeaderProps {
 children: React.ReactNode;
}

export default function TableHeader({ children }: TableHeaderProps) {
 return (
  <thead className="px-2">
   {children}
  </thead>
 )
}