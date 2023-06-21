import React from 'react'
import { IconPropsType } from '../types';

const UploadIcon = ({ width = 15, height = 18 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.5 7.5H4.5V13.5H10.5V7.5H14.5L7.5 0.5L0.5 7.5ZM0.5 15.5V17.5H14.5V15.5H0.5Z"
        fill="#42BFDD"
      />
    </svg>
  );
};

export default UploadIcon