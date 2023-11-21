interface ParagraphProps {
 children: React.ReactNode;
 muted?: boolean;
 bold?: boolean;
 size?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
 className?: string;
}

export default function Paragraph({ children, muted = false, bold = false, size = "lg", className }: ParagraphProps) {
 return (
  <p className={`${className ? className : ""} text-${size} ${muted ? "opacity-70" : ""} ${bold ? "font-medium" : ""}`}>
   {children}
  </p>
 )
}
