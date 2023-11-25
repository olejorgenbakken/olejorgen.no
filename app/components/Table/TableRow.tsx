interface TableRowProps {
 children: React.ReactNode;
}

export default function TableRow({ children }: TableRowProps) {
 return (
  <tr className="px-2">
   {children}
  </tr>
 )
}