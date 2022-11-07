import cl from 'clsx';

import styles from '../../styles/components/image.module.css'

interface ImageProps {
 /**
  * Image src
  * @default ''
  * @type string
  */
 src: string;
 /**
  * Image alt
  * @default ''
  * @type string
  */
 alt: string;
 /**
  * Aditonal class name
  * @default ''
  * @type string
  */
 className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
 return (
  <img src={src} alt={alt} className={cl(styles.image, className)} />
 );
}