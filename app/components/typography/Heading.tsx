import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  children: React.ReactNode;
}

export default function Heading({ className, level, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1 className={`text-4xl font-bold ${className ? className : null}`}>{children}</h1>
    case 2:
      return <h2 className={`text-3xl font-bold ${className ? className : null}`}>{children}</h2>
    case 3:
      return <h3 className={`text-2xl font-bold ${className ? className : null}`}>{children}</h3>
    case 4:
      return <h4 className={`text-xl font-bold ${className ? className : null}`}>{children}</h4>
    case 5:
      return <h5 className={`text-lg font-bold ${className ? className : null}`}>{children}</h5>
    case 6:
      return <h6 className={`text-base font-bold ${className ? className : null}`}>{children}</h6>
    default:
      return <h1 className={`text-4xl font-bold ${className ? className : null}`}>{children}</h1>
  }
}