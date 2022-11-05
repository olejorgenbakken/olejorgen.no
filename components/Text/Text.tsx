import React from "react";
import cl from 'clsx';

import styles from "../..//styles/components/text.module.css";

interface TextProps {
 /**
  * The text to display.
  */
 children: React.ReactNode;
 /**
  * Muted text
  * @default false
  * @type boolean
  */
 muted?: boolean,
 /**
  * The tag to use for the text.
  * @default 'p'
  * @type 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  */
 as?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
 /**
  * Upper case text
  * @default false
  * @type boolean
  */
 uppercase?: boolean,
 /**
  * Line height.
  * @default 'md'
  * @type 'md' | 'sm' | 'lg'
  */
 lineHeight?: 'md' | 'sm' | 'lg',
}

function Text({ children, muted, uppercase, lineHeight = 'md', as = 'p' }: TextProps) {
 const style = {
  color: muted ? 'var(--color-text-muted)' : 'var(--color-text)',
  textTransform: uppercase ? 'uppercase' : 'none',
  lineHeight: lineHeight === 'md' ? 'var(--line-height-md)' : lineHeight === 'sm' ? 'var(--line-height-sm)' : 'var(--line-height-lg)',
 };

 return React.createElement(as, { className: cl(styles.text), style }, children);
}

export default Text;