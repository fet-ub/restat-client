import React from 'react'
import { IconPropsType } from '../types';

const LogoIcon = ({ width = 48, height = 24 ,color='white',className }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 105 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M45.12 65L39.864 55.46H38.388V65H32.232V39.728H42.564C44.556 39.728 46.248 40.076 47.64 40.772C49.056 41.468 50.112 42.428 50.808 43.652C51.504 44.852 51.852 46.196 51.852 47.684C51.852 49.364 51.372 50.864 50.412 52.184C49.476 53.504 48.084 54.44 46.236 54.992L52.068 65H45.12ZM38.388 51.104H42.204C43.332 51.104 44.172 50.828 44.724 50.276C45.3 49.724 45.588 48.944 45.588 47.936C45.588 46.976 45.3 46.22 44.724 45.668C44.172 45.116 43.332 44.84 42.204 44.84H38.388V51.104ZM73.8964 39.728V44.66H67.2004V65H61.0444V44.66H54.3484V39.728H73.8964Z"
        fill={color}
      />
      <rect
        x="4.5"
        y="4.5"
        width="96"
        height="94"
        rx="47"
        stroke={color}
        stroke-width="9"
      />
    </svg>
  );
};

export default LogoIcon