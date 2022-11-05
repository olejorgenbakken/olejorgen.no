import Text from "../../Text/Text";

interface LanguageProps {
 language: string,
 fluency: string,
}

function Language({ language, fluency }: LanguageProps) {
 return (
  <div className="language">
   <Text as="h3">{language}</Text>
   <Text>{fluency}</Text>
  </div>
 );
}

export default Language;