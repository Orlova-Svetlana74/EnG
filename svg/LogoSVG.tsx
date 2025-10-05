import * as React from 'react'
import { SVGProps } from 'react'

const LogoSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"    
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M70.474 40.14a35.358 35.358 0 0 0-.834-13.173 35.127 35.127 0 1 0 0 17.564h-9.188a26.344 26.344 0 1 1 0-17.564c.5 1.427.868 2.897 1.098 4.391h-8.957a17.564 17.564 0 1 0-1.8 13.173H35.621a8.782 8.782 0 0 1-7.596-4.391h42.448ZM35.622 26.967a8.781 8.781 0 0 1 7.596 4.391H28.015a8.781 8.781 0 0 1 7.607-4.39Z"
    />
    <path
      fill="url(#b)"
      d="M35.622 62.094a26.094 26.094 0 0 1-12.393-3.106l-6.004 6.685A35.127 35.127 0 0 0 69.64 44.531h-9.188a26.345 26.345 0 0 1-24.83 17.563Zm15.215-17.563H36.225l-6.85 7.618a17.563 17.563 0 0 0 21.46-7.618Zm19.638-13.172a34.039 34.039 0 0 0-.835-4.391 34.73 34.73 0 0 0-6.213-12.679l-6.015 6.696a25.794 25.794 0 0 1 3.04 5.983 24.57 24.57 0 0 1 1.098 4.39h-8.957a17.446 17.446 0 0 0-1.35-3.567L40.178 40.14h30.297a35.255 35.255 0 0 0 0-8.782Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={18.059}
        x2={53.196}
        y1={5.331}
        y2={66.177}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0040E1" />
        <stop offset={1} stopColor="#B44EBC" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={18.959}
        x2={38.861}
        y1={2.642}
        y2={37.132}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0040E1" />
        <stop offset={1} stopColor="#8E4EBC" />
      </linearGradient>
    </defs>
  </svg>
)
export default LogoSVG
