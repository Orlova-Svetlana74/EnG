import { SVGProps } from 'react'
export const CloseSVG = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 49 50"
        fill="none"
        {...props}
    >
        <path
            fill="#004577"
            d="M41.276.823 24.22 17.88 7.162.823.104 7.88 17.16 24.94.104 41.995l7.058 7.058 17.057-17.057 17.057 17.057 7.059-7.058-17.057-17.058L48.335 7.882 41.276.823Z"
            opacity={0.6}
        />
    </svg>
)
