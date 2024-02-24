import Link from "next/link";

import Paragraph from "../../Text/Paragraph/Paragraph";
import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Paragraph><Link href={"/"}>Ole Jørgen Bakken</Link></Paragraph>
        </header>
    )
}