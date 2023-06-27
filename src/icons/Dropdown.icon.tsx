import React from "react";
import { IconPropsType } from "../types";

const DropdownIcon = ({ width = 42, height = 41 }: IconPropsType) => {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#667085"
        strokeWidth="1.66667"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DropdownIcon;
