interface LanguageProps {
 language: string,
 fluency: string,
}

function Language(props: LanguageProps) {
 return (
  <div className="language">
   <h3>{props.language}</h3>
   <p>{props.fluency}</p>
  </div>
 );
}

export default Language;