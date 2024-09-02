import ArticleHeader from '@/app/components/ArticleHeader/ArticleHeader';
import { Heading } from '@/app/components/typography/Heading';

import './page.css';

export default function Page() {
  return (
    <main>
      <article id="scroll-based-animations">
        <ArticleHeader
          title="Scroll-baserte animasjoner"
          subtitle="noe"
          written={new Date()}
          updated={new Date()}
        />
        <Heading level="2">hello</Heading>
        <div>Content</div>
      </article>
    </main>
  );
}
