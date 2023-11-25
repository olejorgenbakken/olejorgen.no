import Heading from "@/app/components/typography/Heading";
import Paragraph from "@/app/components/typography/Paragraph";
import { User } from "@/app/models/user.model";
import Image from "next/image";
import Link from "next/link";
import UserStats from "./UserStats";

interface UserProps {
 user: User;
}

export default function UserHeader({ user }: UserProps) {
 return (
  <header className="flex flex-col sm:flex-row sm:items-center w-full gap-8">
   <Image src={user.avatar_url} alt="" width={128} height={128} className="rounded-md w-28 h-full aspect-square object-cover" />
   <div className="flex flex-col">
    <Heading level={2}><Link href={user.html_url}>{user.name}</Link></Heading>
    <Paragraph className="mt-2 mb-2">{user.bio}</Paragraph>
    <Paragraph muted size="sm">{user.location}</Paragraph>
   </div>

  </header>
 )
}