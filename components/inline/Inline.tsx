import styles from '../../styles/components/inline.module.css';

interface InlineProps {
 children: React.ReactNode;
}

export default function Inline({ children }: InlineProps) {
 return (
  <span className={styles.inline}>{children}</span>
 );
}