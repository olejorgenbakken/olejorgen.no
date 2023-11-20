import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
}

export default function Heading({ level, children }: HeadingProps) {
  switch (level) {
    case 1:
      return <h1 className="text-4xl font-semibold mt-8 mb-2">{children}</h1>;
    case 2:
      return <h2 className="text-2xl font-semibold mt-12 mb-2">{children}</h2>;
    case 3:
      return <h3 className="text-xl font-medium mt-2 mb-2">{children}</h3>;
    case 4:
      return <h4>{children}</h4>;
    case 5:
      return <h5>{children}</h5>;
    case 6:
      return <h6>{children}</h6>;
    default:
      return <h1>{children}</h1>
  }
}