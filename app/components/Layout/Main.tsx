interface MainProps {
 children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
 return <main className="flex flex-col gap-24 max-w-5xl m-auto p-6 py-12 sm:p-12">{children}</main>;
}