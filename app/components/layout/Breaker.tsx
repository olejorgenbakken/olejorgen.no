interface BreakerProps {
 children: React.ReactNode;
}

export default function Breaker({ children }: BreakerProps) {
 return (
  <div className="relative before:-z-10 before:absolute before:w-screen  before:h-full  before:bg-zinc-50 dark:before:bg-zinc-950">
   {children}
  </div>
 )
}