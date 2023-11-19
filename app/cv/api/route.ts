export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return new Response("Hello World!", {
    status: 200,
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
