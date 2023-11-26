'use client'

import { usePathname } from 'next/navigation'
import Main from "@/app/components/layout/Main";
import UserHeader from "../components/UserHeader";
import Link from 'next/link';
import Tabs from '@/app/components/layout/Tabs';


export default function GithubPage({ children, params }: { children: any, params: { user: string } }) {
 const pathname = usePathname()

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

