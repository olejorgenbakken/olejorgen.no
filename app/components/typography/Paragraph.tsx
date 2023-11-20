interface ParagraphProps {
 children: React.ReactNode;
 muted?: boolean;
 bold?: boolean;
 size?: "sm" | "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}

export default function Paragraph({ children, muted = false, bold = false, size = "lg" }: ParagraphProps) {
 return (
  <p className={`text-${size} ${muted ? "text-gray-500" : ""} ${bold ? "font-bold" : ""}`}>
   {children}
  </p>
 )
}
