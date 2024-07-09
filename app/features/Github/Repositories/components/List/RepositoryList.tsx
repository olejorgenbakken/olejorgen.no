import type { Repository } from '../../models/repository.model';
import { RepositoryCard } from '../Card/RepositoryCard';

import './RepositoryList.css';

interface RepositoryListProps {
  repositories: Repository[];
}

export const RepositoryList: React.FC<RepositoryListProps> = ({
  repositories,
}) => {
  return (
    <ul className="repository-list no-style">
      {repositories.map((repository) => (
        <li
          key={repository.name}
          className="slide-up">
          <RepositoryCard repository={repository} />
        </li>
      ))}
    </ul>
  );
};
