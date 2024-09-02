import type { HTMLAttributes, ReactNode } from 'react';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  muted?: boolean;
}

export const Body = ({ children, muted, ...rest }: Props) => {
  return (
    <p
      data-muted={muted}
      {...rest}>
      {children}
    </p>
  );
};
