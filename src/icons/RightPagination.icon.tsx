import React from "react";
import { IconPropsType } from "../types";

const RightPaginationIcon = ({ width = 32, height = 32 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="5.5"
        fill="transparent"
      />
      <path
        d="M14.0001 10L12.5901 11.41L17.1701 16L12.5901 20.59L14.0001 22L20.0001 16L14.0001 10Z"
        fill="rgb(203 213 225)"
      />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="5.5"
        stroke="rgb(203 213 225)"
      />
    </svg>
  );
};

export default RightPaginationIcon;
