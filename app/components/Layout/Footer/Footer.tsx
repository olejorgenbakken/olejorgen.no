import Link from "next/link";

import Paragraph from "../../Text/Paragraph/Paragraph";
import styles from "./Footer.module.css";

export default function Footer() {
    return <footer className={styles.footer}>
        <ul>
            <li><Paragraph><Link href="/">Home</Link></Paragraph></li>
            <li><Paragraph><Link href="/pokemon">Pokemon API</Link></Paragraph></li>
        </ul>
    </footer>;
}