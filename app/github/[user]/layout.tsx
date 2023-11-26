import Main from "@/app/components/layout/Main";
import UserHeader from "../components/UserHeader";
import Tabs from '@/app/components/layout/Tabs';


export default function GithubPage({ children, params }: { children: any, params: { user: string } }) {
 return (
  <Main>
   <UserHeader />
   <Tabs linkList={[
    { name: 'Repos', href: `/github/${params.user}` },
   ]} />
   {children}
  </Main>
 )
}

