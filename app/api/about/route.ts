import About from "./about";

export const dynamic = "force-dynamic";

export async function GET() {
  return new Response(JSON.stringify(About), {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
