import Head from 'next/head';
import type React from 'react';

import './Main.css';

interface MainProps {
  title: string;
  description?: string;
  hideHeader?: boolean;
  children: React.ReactNode;
}

export const Main: React.FC<MainProps> = ({
  title,
  description,
  hideHeader = false,
  children,
}) => {
  return (
    <main className="main">
      <Head>
        <title>{title}</title>
        <meta
          property="og:title"
          content={title}
          key="title"
        />
        {description && (
          <meta
            name="description"
            content={description}
          />
        )}
      </Head>
      {!hideHeader && (
        <header className="header">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
        </header>
      )}
      {children}
    </main>
  );
};
