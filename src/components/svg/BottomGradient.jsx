import React from "react";

export const BottomGradient = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={175}
    height={104}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M175.011 108.611h101.246V256.79H175.011z"
      opacity={0.1}
      transform="rotate(137.136 175.011 108.611)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={225.634}
        x2={225.634}
        y1={108.611}
        y2={256.79}
        gradientUnits="userSpaceOnUse"
      >
        <stop />
        <stop offset={1} />
      </linearGradient>
    </defs>
  </svg>
);
