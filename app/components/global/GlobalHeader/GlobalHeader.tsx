'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import './GlobalHeader.css';
import { Logo } from '../Logo';

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
          <Logo />
        </div>
      </header>
    );
  }
};
