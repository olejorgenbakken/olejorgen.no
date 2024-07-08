import Link from 'next/link';
import { ThemePicker } from '.';
import { Logo } from '../Logo';

import './GlobalFooter.css';

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="content">
        <Logo />
        <div className="footer-links">
          <p className="h6">Lenker</p>
          <ul className="no-style">
            <li>
              <Link href="https://twitter.com/olejorgenbakken">Twitter</Link>
            </li>
            <li>
              <Link href="https://github.com/olejorgenbakken">GitHub</Link>
            </li>
            <li>
              <Link href="https://linkedin.com/in/olejorgenbakken">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
        <ThemePicker />
      </div>
    </footer>
  );
};
