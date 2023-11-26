interface TableBodyCellProps {
 children: string | number | React.ReactNode;
 width?: "auto" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
}

export default function TableBodyCell({ children, width = "auto" }: TableBodyCellProps) {
 return (
  <td className="px-1 py-4 text-left" style={{ width: width }}>
   {children}
  </td>
 )
}