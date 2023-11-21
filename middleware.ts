import { NextResponse } from "next/server";
import { get, getAll } from "@vercel/edge-config";
import CV from "./app/api/cv/models/cv.model";

export const config = { matcher: "/api/cv" };

export async function middleware() {
  const cv = (await getAll()) as CV;
  return NextResponse.json(cv);
}
