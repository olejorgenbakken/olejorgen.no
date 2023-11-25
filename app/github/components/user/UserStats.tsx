import Table from "@/app/components/Table/Table";
import Paragraph from "@/app/components/typography/Paragraph";
import { User } from "@/app/models/user.model";
import formatDate from "@/app/util/formatDate";

interface UserStatsProps {
 user: User;
}

export default function UserStats({ user }: UserStatsProps) {
 return (
  <Table rows={[["Opprettet", formatDate(user.created_at)], ["Følger", user.followers], ["Følger", user.following], ["Offentlige repos", user.public_repos.toString()]]} />
 )
}