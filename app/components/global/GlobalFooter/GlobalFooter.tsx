import Link from 'next/link';
import { Logo } from '../Logo';

import './GlobalFooter.css';

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <nav className="navigation">
        <ul className="no-style external-links">
          <li>
            <Logo />
          </li>
          <li>
            <Link href="https://twitter.com/olejorgenbakken">Twitter</Link>
          </li>
          <li>
            <Link href="https://github.com/olejorgenbakken">GitHub</Link>
          </li>
          <li>
            <Link href="https://linkedin.com/in/olejorgenbakken">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
