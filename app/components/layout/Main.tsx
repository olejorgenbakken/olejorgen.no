interface MainProps {
 children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
 return (
  <main className="flex flex-col gap-4 pb-20">
   {children}
  </main>
 )
}