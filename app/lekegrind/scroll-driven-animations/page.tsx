import ArticleHeader from '@/app/components/ArticleHeader/ArticleHeader';
import { Heading } from '@/app/components/typography/Heading';

import './page.css';

export default function Page() {
  return (
    <main id="scroll-based-animations">
      <article id="container">
        <ArticleHeader
          title="Scroll-baserte animasjoner"
          subtitle="noe"
          written={new Date()}
          updated={new Date()}
        />
        <div id="square">Content</div>
        <div id="stretcher"></div>
      </article>
    </main>
  );
}
