import Link from 'next/link';
import { ThemePicker } from '.';

import './GlobalFooter.css';
import { List, ListItem } from '../../List/';
import { Logo } from '../Logo';

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="content">
        <Logo />
        <div className="footer-links">
          <p className="h6">Lenker</p>
          <List noStyle>
            <ListItem>
              <Link href="https://twitter.com/olejorgenbakken">Twitter</Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/olejorgenbakken">GitHub</Link>
            </ListItem>
            <ListItem>
              <Link href="https://linkedin.com/in/olejorgenbakken">
                LinkedIn
              </Link>
            </ListItem>
          </List>
        </div>
        <ThemePicker />
      </div>
    </footer>
  );
};
