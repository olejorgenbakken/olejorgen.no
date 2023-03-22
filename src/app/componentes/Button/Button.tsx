import styles from "./Button.module.css";
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
 children: React.ReactNode;
 href: string;
 rel?: string;
 title?: string;
 target?: string;
}

export function Button({ children, href, rel, title, target }: ButtonProps) {
 return (
  <Link className={styles.button} href={href} title={title} target={target} rel={rel ? "noopener noreferrer" : ""}>{children}</Link>
 );
}

export default Button;
