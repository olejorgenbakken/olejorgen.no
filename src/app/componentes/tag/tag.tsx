import cl from 'clsx';
import styles from "./tag.module.css";
import React from 'react';

interface TagProps {
 children: React.ReactNode,
 style?: React.CSSProperties
}

function Tag({ children, style }: TagProps) {
 return (
  <li className={cl(styles.tag)} style={style}>
   {children}
  </li>
 );
}

export default Tag;