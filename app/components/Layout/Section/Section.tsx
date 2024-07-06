import type React from 'react';

import './Section.css';

interface Props {
  heading: string;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  breaker?: boolean;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export const Section: React.FC<Props> = ({
  heading,
  headingLevel = 'h2',
  breaker = false,
  backgroundImage,
  children,
}) => {
  const HeadingLevel = headingLevel;

  return (
    <section
      className={`section ${breaker || backgroundImage ? 'breaker' : ''}`}>
      {breaker ||
        (backgroundImage && (
          <div
            className="breaker"
            style={
              backgroundImage
                ? { backgroundImage: `url(${backgroundImage})` }
                : {}
            }
          />
        ))}
      <div className="content">
        <HeadingLevel>{heading}</HeadingLevel>
        {children}
      </div>
    </section>
  );
};
