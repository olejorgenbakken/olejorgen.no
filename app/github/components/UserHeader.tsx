import Breaker from "@/app/components/layout/Breaker";
import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import { User } from "@/app/models/user.model";
import Image from "next/image";
import Link from "next/link";
import { Octokit } from "octokit";

export default async function UserHeader() {
 const octokit = new Octokit({
  auth: process.env.githubPAT,
 });

 const data = await octokit.request('GET /user', {
  headers: {
   'X-GitHub-Api-Version': '2022-11-28'
  }
 });

 const user: User = data.data;
 const status = data.status;

 if (status !== 200) {
  return (
   <header className="flex flex-col gap-8 justify-center sm:flex-row sm:gap-12 sm:items-center sm:justify-start">
    <Heading level={1}>Bruker</Heading>
    <p>Det skjedde en feil</p>
   </header>
  )
 }

 return (
  <header className="flex flex-col gap-8 justify-center sm:flex-row sm:gap-12 sm:items-center sm:justify-start">
   <Image src={user.avatar_url} alt="" width={128} height={128} className="rounded-md w-20 sm:w-36 h-full aspect-square object-cover" />
   <div className="flex flex-col">
    <Paragraph size="2xl" bold><Link href={user.html_url}>{user.name}</Link></Paragraph>
    <Paragraph className="mt-4 mb-2">{user.bio}</Paragraph>
    <div className="flex flex-row gap-4">
     <Paragraph muted size="sm">Følgere: {user.followers}</Paragraph>
     <Paragraph muted size="sm">Følger: {user.following}</Paragraph>
    </div>
   </div>
  </header>
 )
}