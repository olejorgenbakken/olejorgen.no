import type React from 'react';
import Link from 'next/link';
import { formatDateTime } from '@/app/features/utils';
import type { Repository } from '../../models/repository.model';

import './RepositoryCard.css';

interface RepoProps {
  repository: Repository;
}

export const RepositoryCard: React.FC<RepoProps> = ({ repository }) => {
  const { name, description, html_url, created_at, updated_at, pushed_at } =
    repository;

  return (
    <div className="repository-card">
      <header className="repository-header">
        <p className="h5 title">{name}</p>
        <p className="description">{description}</p>
      </header>
      <footer className="repository-footer">
        <Link href={html_url}>Gå til prosjektet</Link>
        <small>Oppdatert {formatDateTime(updated_at)}</small>
      </footer>
    </div>
  );
};
