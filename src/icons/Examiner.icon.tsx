import React from 'react'
import { IconPropsType } from '../types'
const ExaminerIcon = ({ width = 42, height = 44 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_4_74"
        // style="mask-type:luminance"
        maskUnits="userSpaceOnUse"
        x="-1"
        y="1"
        width="44"
        height="42"
      >
        <path
          d="M21 20.1667C25.3492 20.1667 28.875 16.473 28.875 11.9167C28.875 7.36031 25.3492 3.66666 21 3.66666C16.6508 3.66666 13.125 7.36031 13.125 11.9167C13.125 16.473 16.6508 20.1667 21 20.1667Z"
          fill="white"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M4.375 40.3333C4.375 32.5985 9.77812 25.3797 14.35 23.8333C14.35 23.8333 18.5063 28.4744 21 31.5681L27.65 23.8333C31.3906 24.3494 37.625 32.5994 37.625 40.3333"
          stroke="white"
          stroke-width="4"
          stroke-linejoin="round"
        />
        <path
          d="M1.75 40.3333H40.25"
          stroke="white"
          stroke-width="4"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </mask>
      <g mask="url(#mask0_4_74)">
        <path d="M0 0H42V44H0V0Z" fill="white" />
      </g>
    </svg>
  );
};

export default ExaminerIcon