import styles from '../../styles/components/tag.module.css';

interface TagProps {
 text: string,
}

function Tag(props: TagProps) {
 return (
  <span className={styles.tag}>{props.text}</span>
 );
}

export default Tag;