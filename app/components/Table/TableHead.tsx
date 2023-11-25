interface TableHeadProps {
 children: React.ReactNode;
}

export default function TableHead({ children }: TableHeadProps) {
 return (
  <th className="px-2">
   {children}
  </th>
 )
}