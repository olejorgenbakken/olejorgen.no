import type React from 'react';
import Link from 'next/link';
import { formatDateTime } from '@/app/features/utils';
import type { Repository } from '../../models/repository.model';

import './RepositoryCard.css';
import { Tag } from '@/app/components/Tag/Tag';

interface RepoProps {
  repository: Repository;
}

export const RepositoryCard: React.FC<RepoProps> = ({ repository }) => {
  const { name, description, html_url, topics, language, updated_at } =
    repository;

  return (
    <div className="repository-card">
      <header className="repository-header">
        <p className="h5 title">
          <Link href={html_url}>{name}</Link>
        </p>
        <p className="topics">{topics?.map((topic) => topic).join(', ')}</p>
      </header>
      {description && <p className="description">{description}</p>}
      <footer className="repository-footer">
        <Tag>{language}</Tag>
        <small>Oppdatert {formatDateTime(updated_at)}</small>
      </footer>
    </div>
  );
};
