import { SVGProps } from 'react'
const Checkmark = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 51 37"
        width={51}
        height={37}
        fill="none"
        {...props}
    >
        <path
            stroke="#004577"
            strokeLinecap="round"
            strokeWidth={5}
            d="M14.229 22.894 3 11.979M35.95 3 15.228 23.72"
        />
    </svg>
)
export default Checkmark
