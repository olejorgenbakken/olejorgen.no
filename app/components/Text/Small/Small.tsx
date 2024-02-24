import styles from "./Small.module.css";

interface SmallProps {
    children: React.ReactNode;
    className?: string;
}

export default function Small({ children, className }: SmallProps) {
    return <small className={`${styles.small} ${className}`}>{children}</small>;
}