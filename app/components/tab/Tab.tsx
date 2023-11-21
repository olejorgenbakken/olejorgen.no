import TabItem from "./TabItem";
import TabPanel from "./TabPanel";

export interface TabProps {
 children: React.ReactNode;
}

export default function Tab({ children }: TabProps) {
 return (
  <nav className="flex flex-row gap-2">
   {children}
  </nav>
 )
}

Tab.Item = TabItem;
Tab.Panel = TabPanel;