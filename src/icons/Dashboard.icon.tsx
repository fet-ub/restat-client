import React from 'react'
import { IconPropsType } from "../types";

const DashboardIcon = ({ width = 42, height = 41 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 42 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.75 15.375V5.125H36.75V15.375H22.75ZM5.25 22.2083V5.125H19.25V22.2083H5.25ZM22.75 35.875V18.7917H36.75V35.875H22.75ZM5.25 35.875V25.625H19.25V35.875H5.25Z"
        fill="white"
      />
    </svg>
  );
};

export default DashboardIcon