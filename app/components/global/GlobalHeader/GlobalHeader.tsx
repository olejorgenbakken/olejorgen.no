'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './GlobalHeader.css';

type Color = {
  label: string;
  value: number;
};

export const GlobalHeader = () => {
  const path = usePathname();

  if (path === '/') {
    return (
      <header className="global-header">
        <div className="content">
          <p className="h5">
            <Link
              href="/"
              className="name">
              Ole Jørgen Bakken
            </Link>
          </p>
        </div>
      </header>
    );
  }
};
