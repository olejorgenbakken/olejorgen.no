import React from 'react';
import styles from './tag.module.css';

export function Tag({ children }: {
 children: React.ReactNode
}) {
 return (
  <li className={styles.tag}>
   {children}
  </li>
 )
}