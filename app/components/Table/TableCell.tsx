interface TableCellProps {
 children: React.ReactNode;
}

export default function TableCell({ children }: TableCellProps) {
 return (
  <td className="p-2 whitespace-nowrap text-ellipsis overflow-hidden">
   {children}
  </td>
 )
}