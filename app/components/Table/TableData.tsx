interface TableDataProps {
 children: string | number | React.ReactNode;
 width?: number;
 align?: "left" | "center" | "right";
 className?: string;
}

export default function TableData({ children, width, align = "left", className }: TableDataProps) {
 return (
  <td className={`p-4 text-${align} ${className}}`} style={{ width: width ? `${width}%` : "auto" }}>
   {children}
  </td>
 )
}