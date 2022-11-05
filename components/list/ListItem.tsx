interface ListItemProps {
 children: React.ReactNode;
 /**
  * List item spacing
  * @default 4
  * @type number
  */
 spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
}

function ListItem({ children, spacing = 4 }: ListItemProps) {
 return (
  <li
   style={{
    marginBottom: `var(--spacing-${spacing})`,
   }}
  >
   {children}
  </li>
 );
}

export default ListItem;