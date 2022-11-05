import styles from '../../styles/components/tag.module.css';

interface TagProps {
 children: React.ReactNode;
}

function Tag({ children }: TagProps) {
 return (
  <span className={styles.tag}>{children}</span>
 );
}

export default Tag;