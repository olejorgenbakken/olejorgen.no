interface SchoolProps {
 institution: string,
 area: string,
 summary: string,
 startDate: string,
 endDate: string,
 courses?: string[],
}

function School(props: SchoolProps) {
 return (
  <div className="work">
   <h3>{props.institution}</h3>
   <h4>{props.area}</h4>
   <p>{props.startDate} - {props.endDate}</p>
   <p>{props.summary}</p>
   <ul>
    {props.courses && props.courses.map((course) => (
     <li>{course}</li>
    ))}
   </ul>
  </div>
 );
}

export default School;