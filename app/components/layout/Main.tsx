interface MainProps {
 children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
 return (
  <main className="flex flex-col gap-24 mt-12 max-w-7xl m-auto p-8 pb-20">
   {children}
  </main>
 )
}