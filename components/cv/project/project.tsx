interface ProjectProps {
 name: string,
 description: string,
 startDate: string,
 endDate: string,
 url: string,
 highlights?: string[],
}

function Project(props: ProjectProps) {
 return (
  <div className="project">
   <h3>{props.name}</h3>
   <p>{props.startDate} - {props.endDate}</p>
   <p>{props.description}</p>
   <ul>
    {props.highlights && props.highlights.map((highlight) => (
     <li>{highlight}</li>
    ))}
   </ul>
  </div>
 );
}

export default Project;