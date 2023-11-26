interface TableHeaderCellProps {
 children: string | number | React.ReactNode;
 width?: "auto" | "10%" | "20%" | "30%" | "40%" | "50%" | "60%" | "70%" | "80%" | "90%" | "100%";
}

export default function TableHeaderCell({ children, width = "auto" }: TableHeaderCellProps) {
 return (
  <th className="p-4 text-left" style={{ width: width }}>
   {children}
  </th>
 )
}