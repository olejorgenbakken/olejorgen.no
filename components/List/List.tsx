import React from "react";
import ListItem from "./ListItem";

import styles from '../../styles/components/list.module.css';

interface ListProps {
 children: React.ReactNode;
 /**
  * List type
  * @default 'none'
  * @type 'bullet' | 'number' | 'none'
  */
 type?: "bullet" | "number" | "none";
}

function List({ children, type = "none" }: ListProps) {
 return (
  <ul
   style={{
    listStyleType: type === "bullet" ? "disc" : type === "number" ? "decimal" : "none",
    paddingLeft: type === "bullet" ? "var(--spacing-4)" : type === "number" ? "var(--spacing-4)" : "var(--spacing-0)",
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