'use client';

import './Grid.css';

interface GridProps {
  children: React.ReactNode;
}
export const Grid: React.FC<GridProps> = ({ children }) => {
  return <div className="grid">{children}</div>;
};
