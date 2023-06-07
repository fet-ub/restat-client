import React from 'react'
import { IconPropsType } from '../types';

const EditIcon = ({ width = 34, height = 35 }: IconPropsType) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.4345 7.91682L26.6845 12.2918M16.7679 22.5002L28.6466 10.2283C29.2046 9.65392 29.518 8.87492 29.518 8.06266C29.518 7.25039 29.2046 6.47139 28.6466 5.89703C28.0887 5.32267 27.3319 5 26.5429 5C25.7538 5 24.9971 5.32267 24.4391 5.89703L12.5179 18.1252V22.5002H16.7679Z"
        stroke="#0EA5E9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5179 10.9356C10.0327 11.3001 7.77436 12.6212 6.19829 14.6324C4.62221 16.6437 3.84573 19.1954 4.02547 21.7728C4.20521 24.3502 5.3278 26.7616 7.16679 28.5204C9.00578 30.2793 11.4243 31.2548 13.9345 31.2502C16.3194 31.2504 18.6244 30.366 20.4272 28.759C22.2301 27.1519 23.4099 24.9299 23.7506 22.5002"
        stroke="#0EA5E9"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default EditIcon