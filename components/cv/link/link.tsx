interface LinkProps {
 href: string,
 children: React.ReactNode,
}

function Link(props: LinkProps) {
 return (
  <a href={props.href}>
   {props.children}
  </a>
 );
}

export default Link;