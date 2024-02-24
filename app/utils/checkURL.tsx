import Link from "next/link";

export function checkURl(text: string, url?: string) {
  return url ? <Link href={url}>{text}</Link> : text;
}
