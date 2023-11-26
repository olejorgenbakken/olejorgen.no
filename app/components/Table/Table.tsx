import TableHead from "./TableHead";
import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableHeaderCell from "./TableHeaderCell";
import TableBodyCell from "./TableBodyCell";
interface TableProps {
 children?: React.ReactNode;
}

export default function Table({ children }: TableProps) {
 return (
  <table className="w-full border border-zinc-600">
   {children}
  </table>
 )
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.HeaderCell = TableHeaderCell;
Table.Cell = TableBodyCell;