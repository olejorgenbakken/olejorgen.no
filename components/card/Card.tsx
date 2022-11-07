import cl from 'clsx';
import Image from '../image/Image';

import styles from '../../styles/components/card.module.css'

interface CardProps {
 /**
  * The content of the card.
  * @default null
  * @type React.ReactNode
  */
 children?: React.ReactNode;
 /**
  * The direction of the card.
  * @default 'vertical'
  * @type 'vertical' | 'horizontal'
  */
 direction?: 'vertical' | 'horizontal';
 /**
  * Image src
  * @default ''
  * @type string
  */
 imageSrc?: string;
 /**
  * Image alt
  * @default ''
  * @type string
  */
 imageAlt?: string;
 /**
  * Aditonal class name
  * @default ''
  * @type string
  */
 className?: string;
}

export default function Card({ children, direction = 'vertical', imageSrc, imageAlt, className }: CardProps) {
 return (
  <div className={cl(styles.card, styles[direction], className)}>
   {imageSrc && imageAlt && <Image src={imageSrc} alt={imageAlt} />}
   <div className={styles.content}>
    {children}
   </div>
  </div>
 );
}