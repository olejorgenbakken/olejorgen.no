import ArticleHeader from '@/app/components/ArticleHeader/ArticleHeader';
import { Heading } from '@/app/components/typography/Heading';

export default function Page() {
  return (
    <main>
      <article>
        <ArticleHeader
          title="Scroll-baserte animasjoner"
          subtitle="noe"
          written={new Date()}
          updated={new Date()}
        />
        <Heading level="2">Lorem</Heading>
        <p>Lekegrind for scroll-baserte animasjoner.</p>
        <Heading level="2">Ipsum</Heading>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          consectetur tortor dui, tristique gravida orci pretium id. Quisque sit
          amet eros quis est hendrerit ullamcorper nec nec turpis. Praesent
          pretium arcu mi, ut eleifend nunc elementum in. Etiam ut orci id metus
          posuere iaculis. Curabitur lobortis imperdiet lacus. Nunc fringilla
          tincidunt nisl quis vulputate. Nunc vel mi erat. Nunc interdum sem
          magna, a maximus velit tincidunt vehicula. Aenean ut est eget elit
          finibus ornare eget at diam.
        </p>
        <Heading level="2">Anyway</Heading>
        <p>
          Curabitur consequat diam in arcu scelerisque, non sodales nulla
          laoreet. Duis posuere convallis ligula non posuere. In hac habitasse
          platea dictumst. Suspendisse facilisis condimentum pharetra.
          Pellentesque habitant morbi tristique senectus et netus et malesuada
          fames ac turpis egestas. In hac habitasse platea dictumst. Aliquam ut
          sagittis orci, sed scelerisque diam. Nulla tempor mattis metus, non
          rhoncus est. Vestibulum non nulla pellentesque, tempus est at, rutrum
          nisi. Vestibulum convallis quis velit et molestie. Donec vulputate
          tincidunt erat vel condimentum. Quisque quis diam elit. Donec
          ultricies nunc libero, quis lacinia mauris blandit sit amet. Ut eget
          maximus nunc. Curabitur vel pellentesque ex, quis accumsan odio. In
          ante metus, ornare eu gravida non, convallis sit amet nunc. Etiam
          vitae arcu accumsan, laoreet tellus eget, luctus ex. Vivamus tempus in
          velit id imperdiet. Nulla pellentesque sem mollis nisi venenatis
          pharetra. Aliquam lobortis semper dolor, ut gravida massa congue quis.
          Integer nisl dolor, lacinia non ex a, gravida semper urna. Vestibulum
          sollicitudin blandit lacus ac venenatis. Cras ex diam, condimentum a
          facilisis malesuada, tincidunt sed lorem. In quis libero vitae lorem
          tincidunt pulvinar. Nulla ante libero, imperdiet nec convallis at,
          gravida quis magna. Quisque magna dui, bibendum quis volutpat eget,
          consectetur nec nisi. Donec porta magna in elit egestas faucibus.
        </p>
        <Heading level="2">Test #6</Heading>
        <p>
          Praesent maximus tincidunt ligula eu fringilla. Aliquam pretium ac
          ante eu consectetur. Morbi condimentum neque eros, vitae tincidunt
          magna mattis vitae. Nunc ac aliquam nunc, non ultricies nulla. Cras
          luctus egestas ante et pellentesque. Ut ut congue dui. Suspendisse
          libero libero, sollicitudin sed venenatis in, pellentesque in lectus.
          Suspendisse sed odio finibus, suscipit eros quis, dictum neque. Nunc
          euismod nulla vel dictum pellentesque. Phasellus ut efficitur sem.
          Morbi ullamcorper consectetur magna id finibus. In a interdum justo,
          id condimentum justo. Donec suscipit, risus at suscipit pharetra, ante
          dolor gravida nisi, in rhoncus sem sapien in nibh. Ut mi erat, iaculis
          eleifend dapibus nec, maximus nec libero. Donec sit amet tempus lorem.
          Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
          libero metus, consectetur rutrum libero nec, auctor pellentesque nisi.
          Donec aliquam erat non pharetra pulvinar. Sed interdum magna maximus
          dui gravida, consectetur luctus justo sodales. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Nunc aliquam velit non libero
          maximus molestie. Maecenas eu ipsum aliquam orci vestibulum rutrum ut
          at justo. In arcu dui, ultricies a venenatis id, volutpat sed mi.
          Fusce feugiat mi diam, non iaculis purus mollis ac. Vestibulum
          ultricies venenatis odio, eget rutrum augue eleifend nec. Nam
          consectetur id purus vitae egestas. Duis tristique interdum risus
          vitae venenatis. Donec faucibus at erat non commodo. Donec sodales
          malesuada elementum. Pellentesque cursus vehicula neque, in iaculis
          sem sagittis et. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Nunc venenatis suscipit
          nulla, et luctus sapien luctus at. Etiam ut est congue, tristique
          justo vitae, bibendum mauris. Phasellus maximus, justo nec efficitur
          ultricies, lectus magna ullamcorper magna, nec dignissim justo orci ac
          lectus.
        </p>
      </article>
    </main>
  );
}
