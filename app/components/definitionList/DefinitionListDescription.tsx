export interface DefinitionListDescriptionProps {
 children: React.ReactNode;
}

export default function DefinitionListDescription({ children }: DefinitionListDescriptionProps) {
 return (
  <dd className="text-base mb-4">{children}</dd>
 )
}