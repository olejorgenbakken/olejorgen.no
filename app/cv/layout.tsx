import React from "react";
import Main from "../components/layout/Main";
import Tabs from "../components/layout/Tabs";
import Heading from "../components/typography/Heading";
import { experience, education } from "@/app/api/cv/cv";

export default function CVPage({ children }: { children: React.ReactNode }) {
 return (
  <Main>
   <Heading level={1}>CV</Heading>
   <Tabs linkList={[
    { name: 'Oversikt', href: '/cv' },
    { name: 'Erfaring', href: '/cv/erfaring' },
    { name: 'Utdanning', href: '/cv/utdanning' },
   ]} />
   {children}
  </Main>
 )
}