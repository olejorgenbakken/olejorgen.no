import styles from "./Table.module.css";

interface TableProps {
    title: string;
    children: React.ReactNode;
    className?: string;
}

export default function Table({ title, children, className }: TableProps) {
    return (
        <table className={`${styles.table} ${className}`}>
            <caption>{title}</caption>
            {children}
        </table>
    )
}