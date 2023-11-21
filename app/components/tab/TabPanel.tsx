interface TabPanelProps {
 children: React.ReactNode;
}

export default function TabPanel({ children }: TabPanelProps) {
 return (
  <section className="border-r-2 border-l-2 border-blue-500">
   {children}
  </section>
 )
}