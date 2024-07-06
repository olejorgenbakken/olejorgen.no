import type { MetaFunction } from '@remix-run/node';
import type React from 'react';

import './Main.css';

interface Props {
  title: string;
  hideTitle?: boolean;
  children?: React.ReactNode;
}

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export const Main: React.FC<Props> = ({
  title,
  hideTitle = false,
  children,
}) => {
  return (
    <main className="main">
      <h1 className={hideTitle ? 'sr-only' : ''}>{title}</h1>
      {children}
    </main>
  );
};
