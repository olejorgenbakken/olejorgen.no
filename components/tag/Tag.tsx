import cl from 'clsx';

import styles from '../../styles/components/tag.module.css';

interface TagProps {
 children: React.ReactNode;
 /**
  * Tag type
  * @default 'default'
  * @type 'default' | 'success' | 'warning' | 'danger'
  */
 type?: 'default' | 'success' | 'warning' | 'danger';
}

export default function Tag({ children, type = 'default' }: TagProps) {
 return (
  <span className={cl(styles.tag, styles[type])}>{children}</span>
 );
}
