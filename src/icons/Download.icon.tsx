import React from 'react'
import { IconPropsType } from '../types';

const DownloadIcon = ({ width = 38, height = 34,color='#42BFDD' }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M28.5 21.25V25.5H9.50001V21.25H6.33334V25.5C6.33334 27.0583 7.75834 28.3333 9.50001 28.3333H28.5C30.2417 28.3333 31.6667 27.0583 31.6667 25.5V21.25H28.5ZM26.9167 15.5833L24.6842 13.5858L20.5833 17.2408V5.66667H17.4167V17.2408L13.3158 13.5858L11.0833 15.5833L19 22.6667L26.9167 15.5833Z"
        fill={color}
      />
    </svg>
  );
};

export default DownloadIcon