import React from "react";

import styles from '../../styles/components/list.module.css';
import ListItem from "./ListItem";

interface ListProps {
 children: React.ReactNode;
 /**
  * List style 
  * @default 'none'
  * @style 'bullet' | 'number' | 'none'
  */
 style?: "bullet" | "number" | "none";
 /** 
  * List spacing
  * @default 4
  * @type number
  */
 spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16;
}

function List({ children, style = "none", spacing = 4 }: ListProps) {
 return (
  <ul
   style={{
    listStyleType: style === "bullet" ? "disc" : style === "number" ? "decimal" : "none",
    paddingLeft: style === "bullet" ? "var(--spacing-4)" : style === "number" ? "var(--spacing-4)" : "var(--spacing-0)",
   }}
   className={styles.list}
  >
   {React.Children.map(children, (child) => (
    <ListItem spacing={spacing}>{child}</ListItem>
   ))}
  </ul>
 );
}

export default List;