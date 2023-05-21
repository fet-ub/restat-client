import React from 'react'
import { IconPropsType } from '../types';

const StudentIcon = ({ width = 53, height = 52 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 53 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.3333 17.3333C35.3333 22.1217 31.3804 26 26.5 26C21.6196 26 17.6666 22.1217 17.6666 17.3333L17.9096 15.2967L11.0416 11.9167L26.5 4.33334L41.9583 11.9167V22.75H39.75V13L35.0904 15.2967L35.3333 17.3333ZM26.5 30.3333C36.2608 30.3333 44.1666 34.2117 44.1666 39V43.3333H8.83331V39C8.83331 34.2117 16.7391 30.3333 26.5 30.3333Z"
        fill="white"
      />
    </svg>
  );
};

export default StudentIcon