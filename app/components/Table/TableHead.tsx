import TableRow from "./TableRow";

interface TableHeadProps {
 children?: React.ReactNode;
}

export default function TableHead({ children }: TableHeadProps) {
 return (
  <thead>
   <TableRow>
    {children}
   </TableRow>
  </thead>
 )
}