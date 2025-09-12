import { SVGProps } from 'react'
const Plus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <path stroke="#004577" strokeWidth={4.421} d="M14 0v28M28 14H0" />
  </svg>
)
export default Plus
