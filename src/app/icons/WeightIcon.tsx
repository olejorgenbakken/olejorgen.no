interface WeightIconProps {
 fill?: string;
 width: string;
 height: string;
}

export default function WeightIcon({ fill = "currentColor", width, height }: WeightIconProps) {
 return (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false" role="img">
   <path fill-rule="evenodd" clip-rule="evenodd" d="M7 6.75a.75.75 0 0 1 .75.75v3.75h8.5V7.5a.75.75 0 0 1 1.5 0v9a.75.75 0 0 1-1.5 0v-3.75h-8.5v3.75a.75.75 0 0 1-1.5 0v-9A.75.75 0 0 1 7 6.75Zm-2 1.5a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0v-2.25H3a.75.75 0 0 1 0-1.5h1.25V9A.75.75 0 0 1 5 8.25ZM19.75 9a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-2.25H21a.75.75 0 0 0 0-1.5h-1.25V9Z" fill={fill}></path>
  </svg>
 );
}
