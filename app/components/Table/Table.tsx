import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

interface TableProps {
 rows: any[][];
 columns?: string[];
}

export default function Table({ rows, columns }: TableProps) {
 return (
  <table className="w-full table-fixed text-left">
   <colgroup>
    <col className=" w-64" />
    <col className="w-xs" />
   </colgroup>
   {columns &&
    <TableHeader>
     <TableRow>
      {columns.map((column, i) => (
       <TableHead key={i}>
        {column}
       </TableHead>
      ))}
     </TableRow>
    </TableHeader>
   }
   <tbody className="w-full">
    {rows.map((columns, i) => (
     <TableRow key={i}>
      {columns.map((column, i) => (
       <TableCell key={i}>
        {column}
       </TableCell>
      ))}
     </TableRow>
    ))}
   </tbody>
  </table>
 )
}