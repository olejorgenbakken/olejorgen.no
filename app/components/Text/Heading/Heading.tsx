import React from "react";

import styles from "./Heading.module.css";

interface HeadingProps {
    level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    children: React.ReactNode;
    className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
    const HeadingTag = level;
    return <HeadingTag className={`${styles.heading} ${className}`}>{children}</HeadingTag>;
}