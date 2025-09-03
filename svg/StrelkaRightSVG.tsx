import { SVGProps } from "react"
export const StrelkaRightSVG = ({ className = "", ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={30}
    fill="none"
    className={className}
    {...props}
  >
    <path
      fill="#004577"
      d="M16.588 16.564c.761-.763.76-2-.004-2.76L4.144 1.396A1.952 1.952 0 0 0 1.387 4.16L12.445 15.19 1.417 26.247a1.952 1.952 0 0 0 2.765 2.757l12.406-12.44Zm-2.7-1.377.002 1.953 1.319-.002-.003-1.952-.003-1.953-1.318.002.003 1.953Z"
    />
  </svg>
)

