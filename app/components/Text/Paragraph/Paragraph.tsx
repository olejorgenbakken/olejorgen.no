import React from "react";

import styles from "./Paragraph.module.css";

interface ParagraphProps {
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({ children, className }: ParagraphProps) {
    return <p className={`${styles.paragraph} ${className}`}>{children}</p>;
}