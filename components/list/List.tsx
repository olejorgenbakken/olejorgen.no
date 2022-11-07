import React from "react";
import cl from 'clsx';

import styles from '../../styles/components/list.module.css';
import ListItem from "./ListItem";

interface ListProps {
 children: React.ReactNode;
 /**
  * List type
  * @default 'ul'
  * @type 'ul' | 'ol'
  */
 as?: 'ul' | 'ol';
 /**
  * List style
  * @default 'disc'
  * @type 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha' | 'none' | 'inherit'
  */
 style?: 'disc' | 'circle' | 'square' | 'decimal' | 'decimal-leading-zero' | 'lower-roman' | 'upper-roman' | 'lower-greek' | 'lower-latin' | 'upper-latin' | 'armenian' | 'georgian' | 'lower-alpha' | 'upper-alpha' | 'none' | 'inherit';
 /** 
  * List spacing
  * @default 4
  * @type number
  */
 spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20;
 /**
  * Aditonal class name
  * @default ''
  * @type string
  */
 className?: string;
}

function List({ children, as = "ul", style = 'disc', spacing = 4, className }: ListProps) {
 return React.createElement(as, {
  className: cl(styles.list, className, {
   [styles[`style-${style}`]]: style,
  }),
 },
  React.Children.map(children, (child) => (
   <ListItem spacing={spacing}>{child}</ListItem>
  ))
 );
}

export default List;