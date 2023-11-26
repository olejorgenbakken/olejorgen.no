import Link from "next/link";
import { Repo } from "@/app/models/repo.model";
import Table from "@/app/components/Table/Table";
import formatDate from "@/app/util/formatDate";

export const dynamic = "force-dynamic";
interface RepoCardProps {
  repos: Repo[];
}

export default async function RepoList({ repos }: RepoCardProps) {

  return (
    <Table caption="Repoer">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={15} className=" hidden xl:table-cell">Sist oppdatert</Table.HeaderCell>
          <Table.HeaderCell width={20}>Navn</Table.HeaderCell>
          <Table.HeaderCell>Beskrivelse</Table.HeaderCell>
          <Table.HeaderCell className=" hidden md:table-cell">Språk</Table.HeaderCell>
          <Table.HeaderCell className=" hidden md:table-cell">Eier</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
      <Table.Body>
        {repos.sort((a, b) => new Date(b.updated_at!).getTime() - new Date(a.updated_at!).getTime()).map(repo =>
          <Table.Row key={repo.id}>
            <Table.Cell width={15} className=" hidden xl:table-cell">{formatDate(repo.updated_at!)}</Table.Cell>
            <Table.Cell width={20}>{repo.name}</Table.Cell>
            <Table.Cell>{repo.description}</Table.Cell>
            <Table.Cell className=" hidden md:table-cell">{repo.language}</Table.Cell>
            <Table.Cell className=" hidden md:table-cell">{repo.owner.login}</Table.Cell>

          </Table.Row>
        )}
      </Table.Body>
    </Table >
  )
}