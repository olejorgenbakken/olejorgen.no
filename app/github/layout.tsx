import Link from "next/link"
import React from "react"
import Heading from "../components/typography/Heading"
import Main from "../components/layout/Main"
import { GET as getUser } from "../api/github/user/route";
import Paragraph from "../components/typography/Paragraph";
import Tab from "../components/tab/Tab";
import TabPanel from "../components/tab/TabPanel";

export default async function GithubLayout({ children }: { children: React.ReactNode }) {

 const user = await getUser("olejorgenbakken");

 return (
  <Main>
   <Heading level={1}>GitHub</Heading>
   <Heading level={2}>{user.name}</Heading>
   <Paragraph>{user.bio}</Paragraph>
   <Tab>
    <Tab.Item href="/github">Hjem</Tab.Item>
    <Tab.Item href="/github/repos">Repos</Tab.Item>
   </Tab>
   <TabPanel>
    {children}
   </TabPanel>
  </Main>
 )
}

