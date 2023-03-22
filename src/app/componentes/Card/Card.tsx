import Button from "../Button/Button";
import styles from "./Card.module.css";
import Image from "next/image";

interface CardProps {
 title: string;
 description?: string;
 color?: 'white' | 'black';
 image?: {
  src: string;
  alt: string;
  width: number;
  height: number;
  quality?: number;
  position?: "center" | "top" | "bottom";
 };
 url?: {
  href: string;
  title?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: "noopener" | "noreferrer";
  text: string;
 };
}

export default function Card({ title, description, color = 'white', image, url }: CardProps) {
 return (
  <div className={styles.card}>
   <header className={styles.header} style={{ color: color }}>
    <h2 className={styles.title}> {title} </h2>
    {description && <p className={styles.description}>{description}</p>}
   </header>
   {image && <Image
    className={styles.image}
    src={image.src}
    alt={image.alt}
    width={image.width}
    height={image.height}
    quality={image.quality}
    style={{ objectPosition: image.position }}
   />}
   {url && <Button href={url.href} target={url.target} rel={url.rel} title={url.title}>{url.text}</Button>}
  </div>
 );
}