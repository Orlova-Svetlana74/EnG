import { SVGProps } from "react"
const StrelkaRightSVG = ({ className = "",  ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={21}
    fill="none"
    {...props}
  >
    <path
      fill="#004577"
      d="M.636 20.484a.635.635 0 0 1-.44-1.094l9.486-9.148L.196 1.094A.635.635 0 1 1 1.08.178l10.435 10.064L1.079 20.306a.635.635 0 0 1-.443.178Z"
    />
  </svg>
)
export default StrelkaRightSVG


