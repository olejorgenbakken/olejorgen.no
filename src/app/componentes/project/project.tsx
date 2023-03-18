import cl from 'clsx';
import styles from "./project.module.css";
import Link from 'next/link';

interface ProjectProps {
 title: string;
 description: string;
 url?: string;
 date: {
  start: string;
  end?: string;
 },
 assets?: {
  logo?: string;
  bg?: string;
 },
 colors?: {
  primary?: string;
  secondary?: string;
 }
}

function Project({ title, description, url, date, assets, colors }: ProjectProps) {
 return (
  <div
   className={cl(styles.project)}
   style={{
    background: `radial-gradient(circle, ${colors?.primary} 0%, ${colors?.secondary} 100%)`, border: `1px solid ${colors?.secondary}`,
   }}>


   <header className={cl(styles.header)}>
    <img src={assets?.logo} alt="" className={styles.logo} width={24} height={24} />
    <h3>{title}</h3>

   </header>
   <p>{date.start} - {date.end || 'Present'}</p>
   <p>{description}</p>
   {url && <p><Link href={url}>Website</Link></p>}
  </div>
 );
}

export default Project;
