import { GET } from "../api/github/user/route";
import Heading from "../components/typography/Heading";
import Paragraph from "../components/typography/Paragraph";

export default async function Home() {
 const user = await GET("olejorgenbakken");

 return (
  <section>
   <Heading level={2}>{user.name}</Heading>
   <Paragraph>{user.bio}</Paragraph>
  </section>
 )
}

