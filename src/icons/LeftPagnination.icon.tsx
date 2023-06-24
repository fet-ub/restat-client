
import { IconPropsType } from '../types'

const LeftPaginationIcon = ({ width = 32, height = 32 }: IconPropsType) => {
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
        d="M19.41 11.41L18 10L12 16L18 22L19.41 20.59L14.83 16L19.41 11.41Z"
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
}

export default LeftPaginationIcon