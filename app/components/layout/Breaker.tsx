interface BreakerProps {
 children: React.ReactNode;
 className?: string;
}

export default function Breaker({ children, className }: BreakerProps) {
 return (
  <div className={`breaker py-16 ${className}`} >
   {children}
  </div >
 )
}