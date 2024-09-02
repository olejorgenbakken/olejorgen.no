import Link from 'next/link';
import { Heading } from '../components/typography/Heading';

function Posts() {
  return (
    <main>
      <Heading
        level="1"
        hideCopyButton>
        Hei, lekegrind
      </Heading>
      <ul>
        <li>
          <Link href={`/lekegrind/scroll-driven-animations`}>Hello world</Link>
        </li>
      </ul>
    </main>
  );
}

export default Posts;
