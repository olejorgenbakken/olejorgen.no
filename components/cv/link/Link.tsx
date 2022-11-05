interface LinkProps {
 href: string,
 children: React.ReactNode,
}

function Link({ href, children }: LinkProps) {
 return (
  <a href={href}>
   {children}
  </a>
 );
}

export default Link;