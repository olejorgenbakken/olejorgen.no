interface WorkProps {
 business: string,
 position: string,
 startDate: string,
 endDate: string,
 summary?: string,
 highlights?: string[],
}

function Job(props: WorkProps) {
 return (
  <div className="work">
   <h3>{props.business}</h3>
   <h4>{props.position}</h4>
   <p>{props.startDate} - {props.endDate}</p>
   <p>{props.summary}</p>
   <ul>
    {props.highlights && props.highlights.map((highlight) => (
     <li>{highlight}</li>
    ))}
   </ul>
  </div>
 );
}

export default Job;