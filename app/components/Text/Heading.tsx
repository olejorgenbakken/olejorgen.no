import React from "react";

interface HeadingProps {
 level: 1 | 2 | 3 | 4 | 5 | 6;
 children: React.ReactNode;
 className?: string;
}

export default function Heading({ level, children, className }: HeadingProps) {
 const Component = `h${level}` as keyof JSX.IntrinsicElements
 return <Component className={className}>{children}</Component>
}