'use client';
import { usePathname } from 'next/navigation';

import './GlobalHeader.css';
import Link from 'next/link';

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
