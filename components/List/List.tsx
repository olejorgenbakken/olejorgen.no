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
}

function List({ children, style = "none" }: ListProps) {
 return (
  <ul
   style={{
    listStyleType: style === "bullet" ? "disc" : style === "number" ? "decimal" : "none",
    paddingLeft: style === "bullet" ? "var(--spacing-4)" : style === "number" ? "var(--spacing-4)" : "var(--spacing-0)",
   }}
   className={styles.list}
  >
   {React.Children.map(children, (child) => (
    <ListItem>{child}</ListItem>
   ))}
  </ul>
 );
}

export default List;