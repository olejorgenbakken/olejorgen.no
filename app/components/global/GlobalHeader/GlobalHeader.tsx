'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SlideIn } from '../../animations/SlideIn';

import './GlobalHeader.css';

export const GlobalHeader = () => {
  const path = usePathname();
  if (path === '/') {
    return (
      <header className="global-header">
        <SlideIn>
          <div className="content">
            <p className="h5">
              <Link
                href="/"
                className="name">
                Ole Jørgen Bakken
              </Link>
            </p>
          </div>
        </SlideIn>
      </header>
    );
  }
};
