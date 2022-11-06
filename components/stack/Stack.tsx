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
  * @default 'horizontal'
  * @type 'vertical' | 'horizontal'
  */
 direction?: 'vertical' | 'horizontal',
 /**
  * The distribution of the stack items.
  * @default 'start'
  * @type 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch'
  */
 justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'stretch',
 /**
  * The alignment of the stack items.
  * @default 'start'
  * @type 'start' | 'center' | 'end' | 'stretch'
  */
 align?: 'start' | 'center' | 'end' | 'stretch',
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
 /**
 * The gap between the stack items.
 * @default 4
 * @type number
 */
 spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16,
 /**
  * Aditional class.
  * @default ''
  * @type string
  */
 className?: string,
}

export default function Stack({
 children, as = 'div',
 direction = 'horizontal',
 justify = 'start',
 align = 'start',
 wrap = 'nowrap',
 overflow = 'visible',
 spacing = 4,
 className
}: StackProps) {

 return React.createElement(as, {
  style: {
   gap: `var(--spacing-${spacing})`,
  },
  className: cl(styles.stack, className, {
   [styles[`direction-${direction}`]]: direction,
   [styles[`justify-${justify}`]]: justify,
   [styles[`align-${align}`]]: align,
   [styles[`wrap-${wrap}`]]: wrap,
   [styles[`overflow-${overflow}`]]: overflow,
  }),
  children,
 });
}