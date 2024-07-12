import './GlobalHeader.css';
import { Logo } from '../Logo';
import Link from 'next/link';

type Color = {
  label: string;
  value: number;
};

export const GlobalHeader = () => {
  return (
    <header className="global-header">
      <div className="content">
        <Logo />
        <nav>
          <ul className="no-style">
            <li>
              <Link href="/forecast">Vær</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
