import cl from 'clsx';
import React from 'react';

import styles from '../../styles/components/stack.module.css';

interface StackProps {
 children: React.ReactNode,
 /**
  * Element type
  * @default 'div'
  * @type 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav'
  */
 as?: 'div' | 'section' | 'article' | 'main' | 'aside' | 'header' | 'footer' | 'nav' | 'ul' | 'ol',
 /**
  * The direction of the stack.
  * @default 'row'
  * @type 'column' | 'row'
  */
 direction?: 'column' | 'row',
 /**
  * The gap between the stack items.
  * @default 4
  * @type number
  */
 spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
 /**
  * The distribution of the stack items.
  * @default 'start'
  * @type 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch'
  */
 distribution?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch',
 /**
  * The alignment of the stack items.
  * @default 'start'
  * @type 'start' | 'center' | 'end' | 'stretch'
  */
 alignment?: 'start' | 'center' | 'end' | 'stretch',
 /**
  * The wrapping of the stack items.
  * @default 'nowrap'
  * @type 'nowrap' | 'wrap' | 'wrap-reverse'
  */
 wrap?: 'nowrap' | 'wrap' | 'wrap-reverse',
 /**
  * Overflow of the stack.
  * @default 'visible'
  * @type 'visible' | 'hidden' | 'scroll' | 'auto'
  */
 overflow?: 'visible' | 'hidden' | 'scroll' | 'auto',
}

export default function Stack({ children, as = 'div', direction = 'row', spacing = 4, distribution = 'start', alignment = 'start', wrap = 'nowrap', overflow = 'visible' }: StackProps) {
 const style = {
  'gap': `var(--spacing-${spacing})`,
  'flex-direction': direction,
  'justify-content': distribution,
  'align-items': alignment,
  'flex-wrap': wrap,
  'overflow': overflow,
 } as React.CSSProperties;

 return React.createElement(as, {
  className: cl(styles.stack),
  style,
 }, children);
}