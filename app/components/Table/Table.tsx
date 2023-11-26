import TableBody from "./TableBody";
import TableRow from "./TableRow";
import TableHeaderCell from "./TableHeaderCell";
import TableBodyCell from "./TableData";
import TableHeader from "./TableHead";
interface TableProps {
 children?: React.ReactNode;
 caption?: string;
}

export default function Table({ children, caption }: TableProps) {
 return (
  <table className="w-full border border-zinc-200 dark:border-zinc-800">
   {caption && <caption className="sr-only">A table example with a caption</caption>}
   {children}
  </table>
 )
}

Table.Row = TableRow;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Body = TableBody;
Table.Cell = TableBodyCell;