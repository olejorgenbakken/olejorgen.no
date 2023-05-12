import React, { forwardRef } from 'react';
import styles from './card.module.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
 children: React.ReactNode,
 heading: {
  text: string,
  level: 1 | 2 | 3 | 4 | 5 | 6
 },
 subheading?: string
}

export function Card({ children, heading, subheading, ...props }: CardProps) {
 const Heading = `h${heading.level}` as keyof JSX.IntrinsicElements;

 return (
  <div className={styles.card} {...props}>
   <Heading className={styles.heading}>{heading.text}</Heading>
   {subheading && <p className={styles.subheading}>{subheading}</p>}
   <div className={styles.content}>
    {children}
   </div>
  </div>
 )
}