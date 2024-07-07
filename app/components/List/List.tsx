import type React from 'react';
import type { ReactNode } from 'react';

import './List.css';

interface ListProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  noStyle?: boolean;
}

export const List: React.FC<ListProps> = ({ children, noStyle, ...rest }) => {
  return (
    <ul
      className={`list ${noStyle ? 'no-style' : ''}`}
      {...rest}>
      {children}
    </ul>
  );
};
