interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
 children?: React.ReactNode;
}

export default function TableRow({ children }: TableRowProps) {
 return (
  <tr className="border-b border-zinc-200 dark:border-zinc-800">
   {children}
  </tr>
 )
}