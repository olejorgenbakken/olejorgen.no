import { GET } from "./api/route";

export default async function Home() {
 const user = await GET("olejorgenbakken");

 return (
  <section>
   <h2>{user.name}</h2>
   <p>{user.bio}</p>
  </section>
 )
}

