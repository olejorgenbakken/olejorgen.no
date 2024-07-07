import { ThemePicker } from '.';

import './GlobalFooter.css';

export const GlobalFooter = () => {
  return (
    <footer className="global-footer">
      <div className="content">
        <ThemePicker />
      </div>
    </footer>
  );
};
