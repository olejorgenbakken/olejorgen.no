import React from "react";

import styles from "./Paragraph.module.css";

interface ParagraphProps {
    muted?: boolean;
    children: React.ReactNode;
    className?: string;
}

export default function Paragraph({ muted, children, className }: ParagraphProps) {
    return <p className={`${styles.paragraph} ${muted ? styles.muted : ""} ${className}`}>{children}</p>;
}