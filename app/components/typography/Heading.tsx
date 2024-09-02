'use client';

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { CopyButton } from '../Buttons/CopyButton';

interface Props extends HTMLAttributes<HTMLHeadingElement> {
  level: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
  id?: string;
  hideCopyButton?: boolean;
}

export const Heading = ({
  level,
  id,
  children,
  hideCopyButton,
  ...rest
}: Props) => {
  const HeadingTag = `h${level}` as ElementType;
  const sanitizedId = children
    ?.toString()
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .replaceAll(' ', '-')
    .toLowerCase();

  const url = document.URL.split('#')[0];

  return (
    <HeadingTag
      id={id ?? sanitizedId}
      {...rest}>
      {children}
      {!hideCopyButton && (
        <CopyButton
          content={`${url}#${sanitizedId}`}
          contentType="link"
        />
      )}
    </HeadingTag>
  );
};
