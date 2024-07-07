import type React from 'react';

import './List.css';

interface ListItemProps extends React.HtmlHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children, ...rest }) => {
  return (
    <li
      className="list-item"
      {...rest}>
      {children}
    </li>
  );
};
