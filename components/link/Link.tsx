import cl from 'clsx';

import styles from '../../styles/components/link.module.css';

interface LinkProps {
 /**
  * Link text
  * @type string
  * @default ''
  */
 children: React.ReactNode;
 /**
  * Link href
  * @type string
  * @default ''
  */
 href: string;
 /**
  * Link target
  * @type string
  * @default '_self'
  * @style '_self' | '_blank' | '_parent' | '_top'
  */
 target?: '_self' | '_blank' | '_parent' | '_top';
 /**
  * Aditonal class name
  * @type string
  * @default ''
  */
 className?: string;
}

export default function Link({ children, href, target = '_self', className }: LinkProps) {
 return (
  <a href={href} target={target} className={cl(styles.link, className)}>
   {children}
  </a>
 );
}