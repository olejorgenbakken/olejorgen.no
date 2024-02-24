interface TagProps {
    children: React.ReactNode;
    className?: string;
}

export default function Tag({ children, className }: TagProps) {
    return (
        <span>
            {children}
        </span>
    )
}