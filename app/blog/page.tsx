import Link from 'next/link';

function Posts() {
  return (
    <main>
      <h1>Hei, bloggen</h1>
      <ul>
        <li>
          <Link href={`/blog/hello-world`}>Hello world</Link>
        </li>
      </ul>
    </main>
  );
}

export default Posts;
