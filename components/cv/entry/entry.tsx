import Tag from '../../tag/tag';

import styles from '../../../styles/components/cv/entry.module.css';

interface WorkProps {
 place: string,
 title: string,
 startDate: string,
 endDate: string,
 url?: string,
 summary?: string,
 highlights?: string[],
}

function Entry(props: WorkProps) {
 return (
  <div className={styles.job}>
   <h3>{props.place} - {props.title}</h3>
   <p>{props.startDate} - {props.endDate}</p>
   {props.summary && <p>{props.summary}</p>}
   {props.highlights && <ul>
    {props.highlights.map((highlight) => (
     <li><Tag text={highlight} /></li>
    ))}
   </ul>}
  </div>
 );
}

export default Entry;