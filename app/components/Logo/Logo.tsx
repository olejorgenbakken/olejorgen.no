import Link from 'next/link';

import './Logo.css';

export const Logo = () => {
  return (
    <p className="h5 logo">
      <Link
        href="/"
        className="logo"
        aria-label="Hjem">
        Ole Jørgen Bakken
      </Link>
    </p>
  );
};
