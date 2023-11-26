interface TableHeaderCellProps {
 children: string | number | React.ReactNode;
 width?: number;
 align?: "left" | "center" | "right";
 className?: string;
}

export default function TableHeaderCell({ children, width, align = "left", className }: TableHeaderCellProps) {
 return (
  <th className={`p-4 text-${align} ${className}`} style={{ width: width ? `${width}%` : "auto" }}>
   {children}
  </th>
 )
}