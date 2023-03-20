import cl from 'clsx';
import styles from "./CTA.module.css";
import React from 'react';
import Link from 'next/link';

interface CTAProps {
 children: React.ReactNode;
 href: string;
 rel?: string;
 title?: string;
 target?: string;
}

export function CTA({ children, href, rel, title, target }: CTAProps) {
 return (
  <Link className={cl(styles.cta)} href={href} title={title} target={target} rel={rel ? "noopener noreferrer" : ""}>{children}</Link>
 );
}

export default CTA;
