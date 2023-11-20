export interface DefinitionListTermProps {
 children: React.ReactNode;
}

export default function DefinitionListTerm({ children }: DefinitionListTermProps) {
 return (
  <dt className="text-base font-bold">{children}</dt>
 )
}