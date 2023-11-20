import DefinitionTerm from './DefinitionListTerm';
import DefinitionDescription from './DefinitionListDescription';

export interface DefinitionListProps {
 children: React.ReactNode;
}

export default function DefinitionList({ children }: DefinitionListProps) {
 return (
  <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
   {children}
  </dl>
 )
}

DefinitionList.Term = DefinitionTerm;
DefinitionList.Description = DefinitionDescription;