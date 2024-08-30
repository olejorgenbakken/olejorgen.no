import Link from 'next/link';
import { Logo } from '../Logo';
import { ThemePicker } from '.';

import './GlobalFooter.css';

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="content">
        <Logo />
        <ul className="no-style">
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
        <ThemePicker />
      </div>
    </footer>
  );
};
