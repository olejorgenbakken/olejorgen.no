import type { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  muted?: boolean;
}

export const Small = ({ children, muted, ...rest }: Props) => {
  return (
    <small
      data-muted={muted}
      {...rest}>
      {children}
    </small>
  );
};
