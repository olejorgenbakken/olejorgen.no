import styles from "./Main.module.css";

interface MainProps {
    children: React.ReactNode;
    maxWidth: "sm" | "md" | "lg" | "xl" | "none";
}

export default function Main({ children, maxWidth }: MainProps) {
    return <main className={`${styles.main} ${styles[maxWidth]}`}>{children}</main>;
}