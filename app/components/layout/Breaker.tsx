interface BreakerProps {
 children: React.ReactNode;
 className?: string;
 size?: "full" | "half";
}

export default function Breaker({ size = "full", children, className }: BreakerProps) {
 return (
  <div className={`breaker-${size} py-16 ${className}`} >
   {children}
  </div >
 )
}