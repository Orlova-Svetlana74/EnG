import { SVGProps } from 'react'
const Plus = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 28 28"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeWidth={4.421}
            d="M14 2.2105v23.579M2.2105 14h23.579"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
)
export default Plus
