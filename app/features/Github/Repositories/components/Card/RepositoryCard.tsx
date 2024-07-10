import type React from 'react';
import Link from 'next/link';
import { formatDateTime } from '@/app/features/utils';
import type { Repository } from '../../models/repository.model';

import './RepositoryCard.css';
import { Tag } from '@/app/components/Tag/Tag';
import { useCommitHistory } from '../../functions';

interface RepoProps {
  readonly repository: Repository;
}

export default async function RepositoryCard({ repository }: RepoProps) {
  const { name, description, html_url, topics, language, updated_at } =
    repository;

  const commits = await useCommitHistory(name);

  return (
    <div className="repository-card">
      <header className="repository-header">
        <p className="h5 title">
          <Link href={html_url}>{name}</Link>
        </p>
        <p className="topics">{topics?.map((topic) => topic).join(', ')}</p>
      </header>
      {description && <p className="description">{description}</p>}
      {commits.total > 0 && (
        <p className="commits">
          <small>Commits: {commits.total}</small>
        </p>
      )}
      <footer className="repository-footer">
        <Tag>{language}</Tag>
        <small>Oppdatert {formatDateTime(updated_at)}</small>
      </footer>
    </div>
  );
}
