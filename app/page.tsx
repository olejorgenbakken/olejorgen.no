import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h1>Ole Jørgen Bakken</h1>
      <Image
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fb2%2Fe6%2Fb8%2Fb2e6b847b97a43adabc468253dcc191e.jpg&f=1&nofb=1&ipt=9f7281f488cce49047f51858b09fa512b255ce328fce5d32686c8259b81c1b4f&ipo=images"
        alt="brainrot cat"
        width={500}
        height={500}
      />
    </main>
  );
}
