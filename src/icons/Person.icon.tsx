import React from 'react'
import { IconPropsType } from '../types';

const PersonIcon = ({ width = 57, height = 57 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 57 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="57" height="54" rx="27" fill="#F0E4FB" />
      <path
        d="M28.5 6.75C33.7488 6.75 38 10.7775 38 15.75C38 20.7225 33.7488 24.75 28.5 24.75C23.2513 24.75 19 20.7225 19 15.75C19 10.7775 23.2513 6.75 28.5 6.75ZM38 30.465C38 32.85 37.335 38.4075 32.7988 44.6175L30.875 33.75L33.1075 29.52C31.635 29.3625 30.0912 29.25 28.5 29.25C26.9088 29.25 25.365 29.3625 23.8925 29.52L26.125 33.75L24.2012 44.6175C19.665 38.4075 19 32.85 19 30.465C13.3237 32.04 9.5 34.875 9.5 38.25V47.25H47.5V38.25C47.5 34.875 43.7 32.04 38 30.465Z"
        fill="#AC58F5"
      />
    </svg>
  );
};

export default PersonIcon