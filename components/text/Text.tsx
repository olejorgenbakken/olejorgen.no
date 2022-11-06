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
 /**
  * Font size.
  * @default 'pMd'
  * @type 'pSm' | 'pMd' | 'pLg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  */
 fontSize?: 'pSm' | 'pMd' | 'pLg' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
 /**
  * Font weight.
  * @default 'regular'
  * @type 'regular' | 'medium' | 'bold'
  */
 fontWeight?: 'regular' | 'medium' | 'bold',
 /**
  * Margin bottom of the text.
  * @default 0
  * @type number
  */
 marginBottom?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
 /**
  * Margin top of the text.
  * @default 0
  * @type number 
  */
 marginTop?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
 /**
  * Additional class name.
  * @type string
  * @default ''
  */
 className?: string,
}

function Text({ children, muted, uppercase, lineHeight = 'md', as = 'p', fontSize = 'pMd', fontWeight = 'regular', marginBottom = 0, marginTop = 0, className }: TextProps) {
 const style = {
  color: muted ? 'var(--color-text-muted)' : 'var(--color-text)',
  textTransform: uppercase ? 'uppercase' : 'none',
  lineHeight: `var(--line-height-${lineHeight})`,
  fontSize: `var(--font-size-${fontSize})`,
  fontWeight: `var(--font-weight-${fontWeight})`,
  marginBottom: `var(--spacing-${marginBottom})`,
  marginTop: `var(--spacing-${marginTop})`,
 };

 return React.createElement(as, { className: cl(styles.text, className), style }, children);
}

export default Text;