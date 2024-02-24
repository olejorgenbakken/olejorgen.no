import Link from "next/link";

interface LinkButtonProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    icon?: React.ReactNode;
}

export default function LinkButton({ children, href, className, icon }: LinkButtonProps) {

    return (
        <Link href={href} className={`link-button button ${className}`}>
            {icon && <span aria-hidden className=" text-xl">{icon}</span>}
            {children}
        </Link >
    )
}