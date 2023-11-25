import React from "react"

export default async function Layout({ params }: { params: { github: string } }) {
 const followers = await fetch(`https://api.github.com/users/${params.github}/followers`).then(res => res.json())

 console.log(followers);

 return (
  <section className="w-full flex flex-col gap-16">

  </section>
 )
}