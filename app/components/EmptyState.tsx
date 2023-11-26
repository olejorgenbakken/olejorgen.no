import Paragraph from "./typography/Paragraph";

interface EmptyStateProps {
 message: string;
 children?: React.ReactNode;
}

export default function EmptyState({ message, children }: EmptyStateProps) {
 return (
  <div className="flex flex-col gap-8 items-center justify-center bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded-lg py-12 px-8">
   <div className="text-center flex flex-col gap-2 items-center justify-center">
    <Paragraph size="2xl" className="font-bold">Oida 🧐</Paragraph>
    <Paragraph>{message}</Paragraph>
   </div>
   {children}
  </div>
 )
}