import { Heading } from '@/app/components/typography/Heading';

import './ArticleHeader.css';
import { Body } from '../typography/Body';
import { Small } from '../typography/Small';

interface Props {
  title: string;
  subtitle: string;
  written: Date;
  updated?: Date;
  image?: string;
}

export default function ArticleHeader({
  title,
  subtitle,
  written,
  updated,
  image,
}: Readonly<Props>) {
  const updatedDates = {
    meta: updated
      ?.toLocaleDateString('US-en', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      .replaceAll('/', '-'),
    printed: updated?.toLocaleDateString('nb-no', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };

  const writtenDates = {
    meta: written
      .toLocaleDateString('US-en', {
        month: '2-digit',
        year: 'numeric',
      })
      .replaceAll('/', '-'),
    printed: written.toLocaleDateString('nb-no', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }),
  };

  return (
    <header className="article-header">
      <div className="content">
        <hgroup>
          <Heading
            level="1"
            hideCopyButton>
            {title}
          </Heading>
          <Body>{subtitle}</Body>
        </hgroup>
        <Body muted>
          Skrevet{' '}
          <time dateTime={writtenDates.meta}>{writtenDates.printed}</time>
        </Body>
        {updated && updated !== written && (
          <Body muted>
            Oppdatert{' '}
            <time dateTime={updatedDates.meta}>{updatedDates.printed}</time>
          </Body>
        )}
      </div>
    </header>
  );
}
