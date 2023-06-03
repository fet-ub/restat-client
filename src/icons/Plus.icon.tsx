import React from 'react'
import { IconPropsType } from '../types';

const PlusIcon = ({ width = 20, height = 20 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.4 11.16V7.6H7.96V0.519999H11.64V7.6H19.2V11.16H11.64V18.28H7.96V11.16H0.4Z"
        fill="white"
      />
    </svg>
  );
};

export default PlusIcon