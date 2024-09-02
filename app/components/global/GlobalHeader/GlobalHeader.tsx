import './GlobalHeader.css';
import { Logo } from '../Logo';
import Link from 'next/link';

export const GlobalHeader = () => {
  return (
    <header className="global-header">
      <div className="content">
        <nav className="navigation">
          <ul className="no-style links">
            <li>
              <Logo />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
