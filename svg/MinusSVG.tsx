// import { SVGProps } from 'react'
// export default function Minus(props: SVGProps<SVGSVGElement>) {
//     return (
//         <svg
//             width="28"
//             height="28"
//             viewBox="0 0 28 28"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             {...props}
//         >
//             <path
//                 d="M2.2105 2.2105l23.579 23.579M2.2105 25.7895l23.579-23.579"
//                 stroke="currentColor"
//                 strokeWidth={4.421}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//             />
//         </svg>
//     )
// }
import { SVGProps } from 'react'
const Minus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    {...props}
  >
    <path
      stroke="#004577"
      strokeWidth={4.421}
      d="M29.704 9.908 9.882 29.684M29.685 29.71 9.909 9.888"
    />
  </svg>
)
export default Minus