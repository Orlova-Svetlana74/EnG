import { SVGProps } from "react";
export const CheckSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#004577"
      strokeWidth={0.314}
      d="M21.11 2.21 7.343 15.78.224 8.76l2.033-1.99 4.977 4.907.11.108.11-.108L19.075.22l2.034 1.99Z"
    />
  </svg>
);
