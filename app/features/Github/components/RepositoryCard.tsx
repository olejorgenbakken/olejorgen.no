import type React from 'react';
import Link from 'next/link';
import type { Repository } from '../models/repo.model';
import { formatDateTime } from '../../utils/formatters';

import './RepositoryCard.css';

interface RepoProps {
  repository: Repository;
}

export const RepositoryCard: React.FC<RepoProps> = ({ repository }) => {
  const { name, description, html_url, created_at, updated_at, pushed_at } =
    repository;

  return (
    <div className="repository-card">
      <p className="h4 title">
        <Link href={html_url}>{name}</Link>
      </p>
      <p className="updated">Oppdatert: {formatDateTime(updated_at)}</p>
      <p className="description">{description}</p>
    </div>
  );
};
