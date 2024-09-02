'use client';

import { useState, type HTMLAttributes } from 'react';
import { LinkIcon } from '../icons/LinkIcon';
import { CopyIcon } from '../icons/CopyIcon';

import './CopyButton.css';
import { CheckIcon } from '../icons/CheckIcon';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  content: string;
  contentType?: 'link' | 'generic';
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
  contentType = 'link',
  ...rest
}: Props) => {
  let icon = undefined;
  if (contentType === 'link') {
    icon = <LinkIcon />;
  } else {
    icon = <CopyIcon />;
  }

  const [copied, setCopied] = useState(false);

  return (
    <button
      title={`Kopièr ${contentType}`}
      aria-label={copied ? 'Kopiert' : `Kopièr ${contentType}`}
      onClick={() => {
        copyText(content);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      }}
      className={`copy-button ${contentType}`}
      {...rest}>
      {copied ? <CheckIcon /> : icon}
    </button>
  );
};
