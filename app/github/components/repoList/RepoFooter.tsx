import Paragraph from "@/app/components/typography/Paragraph";
import { User } from "@/app/models/user.model";
import Image from "next/image";
import Link from "next/link";

interface RepoFooterProps {
 avatar_url: User["avatar_url"];
 html_url: User["html_url"];
 login: User["login"];
}

export default function RepoFooter(user: RepoFooterProps) {
 return (
  <footer className="flex flex-wrap justify-between sm:mt-8 pt-6 gap-4 border-t border-zinc-100 dark:border-zinc-900">
   <div className="flex flex-row gap-3 items-center">
    <Image src={user.avatar_url} alt="" width={24} height={24} className="rounded-full h-5 w-5 aspect-square" />
    <Paragraph muted size="sm">Opprettet av <Link href={user.html_url}>{user.login}</Link></Paragraph>
   </div>
  </footer>
 )
}
