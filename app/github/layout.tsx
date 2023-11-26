import React from "react"
import { User } from "@/app/models/user.model"
import UserHeader from "./components/user/UserHeader"
import { Octokit } from "octokit";
import Main from "../components/layout/Main";
import Breaker from "../components/layout/Breaker";
import Heading from "../components/typography/Heading";

export default async function Layout({ children }: { children: React.ReactNode }) {
 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 const userInfo: User = await octokit.request('GET /user', {
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 }).then(res => res.data);

 return (
  <Main>
   <Heading level={1}>Github</Heading>
   <Breaker className="flex flex-col gap-16">
    <UserHeader user={userInfo} />
   </Breaker>
   {children}
  </Main>
 )
}