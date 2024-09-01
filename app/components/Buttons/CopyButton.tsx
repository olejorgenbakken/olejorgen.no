import type { HTMLAttributes, ReactNode } from 'react';
import { LinkIcon } from '../icons/LinkIcon';
import { CopyIcon } from '../icons/CopyIcon';

import './CopyButton.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  content: string;
  contentType: 'link';
  children?: ReactNode;
}

export default async function copyText(text: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    throw new Error('Kunne ikke kopiere');
  }
}

export const CopyButton = ({
  content,
  contentType,
  children,
  ...rest
}: Props) => {
  let icon = undefined;
  if (contentType === 'link') {
    icon = <LinkIcon />;
  } else {
    icon = <CopyIcon />;
  }

  return (
    <button
      title={`Kopièr ${contentType}`}
      aria-label={`Kopièr ${contentType}`}
      onClick={() => copyText(content)}
      className="copy-button"
      {...rest}>
      {children ?? icon}
    </button>
  );
};
