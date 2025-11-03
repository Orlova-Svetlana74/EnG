import { SVGProps } from "react"
export const StrelkaRightSVG = ({ className = "",  ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 35"
    width={20}
    height={35}
    fill="none"
    {...props}
  >
    <path
      fill="#004577"
      d="M18.968 19.065a2.25 2.25 0 0 0-.005-3.182L4.625 1.583A2.25 2.25 0 0 0 1.447 4.77l12.745 12.71-12.71 12.746a2.25 2.25 0 1 0 3.186 3.178l14.3-14.339Zm-3.113-1.587.003 2.25 1.52-.002-.004-2.25-.003-2.25-1.52.002.004 2.25Z"
    />
  </svg>
)


